"use client"

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Download, History, Star } from "lucide-react";

interface CalculatorContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function CalculatorContainer({ title, description, children, sidebar }: CalculatorContainerProps) {
  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-3 duration-700 ease-out">
        <div className="flex-1 space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-4 border-b pb-6 sm:pb-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-3">Calculators</Badge>
                  <div className="hidden sm:flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:hidden">
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9"><Share2 className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9"><Download className="w-4 h-4" /></Button>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-headline font-bold tracking-tight">{title}</h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><Share2 className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><Download className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-11 h-11 border-primary/10 hover:border-primary/40"><History className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="w-full">
            {children}
          </div>
        </div>

        {sidebar && (
          <aside className="lg:w-80 space-y-6 order-last lg:order-none pb-12 lg:pb-0">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
