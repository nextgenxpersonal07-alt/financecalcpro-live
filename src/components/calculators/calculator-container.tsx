
"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Download, History, Star, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface CalculatorContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function CalculatorContainer({ title, description, children, sidebar }: CalculatorContainerProps) {
  const router = useRouter();

  const handleBack = () => {
    // If there's no history (e.g. landed directly via link), go to home
    if (typeof window !== 'undefined' && window.history.length <= 1) {
      router.push('/');
    } else {
      router.back();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Back Navigation Button */}
      <div className="mb-8 flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBack}
          className="group p-0 h-auto hover:bg-transparent text-muted-foreground hover:text-primary transition-all flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mr-3 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-sm transition-all">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="font-bold text-sm tracking-tight">Back to Portal</span>
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-3 duration-700 ease-out">
        <div className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-3">Calculators</Badge>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
              </div>
              <h1 className="text-3xl lg:text-5xl font-headline font-bold tracking-tight">{title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><Share2 className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><Download className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><History className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>

        {sidebar && (
          <aside className="lg:w-80 space-y-6">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
