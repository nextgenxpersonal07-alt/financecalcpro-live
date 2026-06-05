
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { OCRTool } from "@/components/tools/ocr-tool";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanText, Info, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Document OCR Scanner | Extract Text from Documents | FinanceCalc Pro",
  description: "Free online OCR tool to extract text from images and PDFs. Perfect for scanning financial receipts, bills, and tax documents with high accuracy.",
};

export default function OCRPage() {
  return (
    <CalculatorContainer
      title="Document OCR Scanner"
      description="Scan and extract text from receipts, bills, and financial documents instantly using AI-powered OCR."
      sidebar={
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Privacy First
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              Your documents are processed entirely in your browser. No files are uploaded to our servers, ensuring your sensitive financial data stays private.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>• Ensure good lighting for photos.</p>
              <p>• Keep the document flat and centered.</p>
              <p>• Supported formats: JPG, PNG, PDF.</p>
              <p>• High-contrast images scan faster.</p>
            </CardContent>
          </Card>
        </div>
      }
    >
      <OCRTool />
    </CalculatorContainer>
  );
}
