
"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Calculators</Badge>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><Download className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><History className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
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
