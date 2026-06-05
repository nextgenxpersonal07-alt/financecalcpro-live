
"use client"

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  FileUp, 
  Copy, 
  Loader2, 
  Check, 
  Trash2, 
  ScanText, 
  FileText, 
  Image as ImageIcon,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createWorker } from "tesseract.js";
import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
}

export function OCRTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [extractedText, setExtractedText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!['application/pdf', 'image/jpeg', 'image/png'].includes(selectedFile.type)) {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload a PDF or an image (JPG, PNG)."
        });
        return;
      }
      setFile(selectedFile);
      setExtractedText("");
      setError(null);
    }
  };

  const preprocessImage = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Apply auto-contrast and grayscale
    let min = 255;
    let max = 0;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (avg < min) min = avg;
      if (avg > max) max = avg;
    }

    const range = max - min;
    for (let i = 0; i < data.length; i += 4) {
      let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      // Auto-contrast scaling
      avg = ((avg - min) / range) * 255;
      
      // Sharpen-like thresholding for better OCR
      const val = avg > 128 ? 255 : avg * 0.8;
      
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const processFile = async () => {
    if (!file) return;
    setLoading(true);
    setProgress(0);
    setError(null);
    setExtractedText("");

    try {
      const worker = await createWorker('eng', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      let fullText = "";

      if (file.type === 'application/pdf') {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          if (context) {
            await page.render({ canvasContext: context, viewport }).promise;
            preprocessImage(canvas);
            const { data: { text } } = await worker.recognize(canvas);
            fullText += `--- Page ${i} ---\n${text}\n\n`;
          }
          setProgress(Math.round((i / pdf.numPages) * 100));
        }
      } else {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await new Promise((resolve) => (image.onload = resolve));

        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(image, 0, 0);
          preprocessImage(canvas);
          const { data: { text } } = await worker.recognize(canvas);
          fullText = text;
        }
      }

      await worker.terminate();
      setExtractedText(fullText.trim());
      setProgress(100);
      
      toast({
        title: "Scan Complete",
        description: "Text extracted successfully."
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to extract text. Please try a clearer image.");
      toast({
        variant: "destructive",
        title: "OCR Error",
        description: "Something went wrong during processing."
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-dashed border-2 border-primary/20 bg-muted/30 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
              {file ? (
                file.type === 'application/pdf' ? <FileText className="w-8 h-8 text-primary" /> : <ImageIcon className="w-8 h-8 text-primary" />
              ) : (
                <FileUp className="w-8 h-8 text-primary" />
              )}
            </div>
            <div>
              <p className="font-bold text-lg">{file ? file.name : "Upload Document"}</p>
              <p className="text-sm text-muted-foreground">PDF, PNG or JPG up to 10MB</p>
            </div>
            {file && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setExtractedText("");
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Remove File
              </Button>
            )}
          </div>
        </Card>

        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ScanText className="w-5 h-5 text-primary" />
              OCR Engine
            </h3>
            <p className="text-sm text-muted-foreground">
              Extract readable text from screenshots, scanned invoices, or multi-page PDF reports instantly.
            </p>
          </div>

          <Button 
            className="w-full h-14 text-lg rounded-full font-bold shadow-lg shadow-primary/20 group" 
            disabled={!file || loading}
            onClick={processFile}
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
            ) : (
              <><ScanText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> Extract Text</>
            )}
          </Button>

          {loading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Analyzing Document</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex gap-3 text-destructive text-sm italic">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}
        </div>
      </div>

      {extractedText && (
        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden border-primary/20">
          <div className="bg-primary/5 px-6 py-4 border-b flex items-center justify-between">
            <Label className="font-bold flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Extracted Content
            </Label>
            <Button variant="outline" size="sm" onClick={copyToClipboard} className="rounded-full bg-background">
              {isCopied ? <><Check className="w-3.5 h-3.5 mr-1.5" /> Copied</> : <><Copy className="w-3.5 h-3.5 mr-1.5" /> Copy Text</>}
            </Button>
          </div>
          <CardContent className="p-0">
            <Textarea
              readOnly
              value={extractedText}
              className="min-h-[300px] border-none focus-visible:ring-0 rounded-none bg-background font-mono text-sm leading-relaxed p-6"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
