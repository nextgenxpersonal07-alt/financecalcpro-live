
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);

  const calculateNewRegime = (totalIncome: number) => {
    // FY 2024-25 New Regime Slabs
    const taxable = Math.max(0, totalIncome - 50000); // Standard deduction
    let tax = 0;

    if (taxable <= 300000) tax = 0;
    else if (taxable <= 700000) tax = taxable * 0.05; // Full rebate below 7L usually, simplified here
    else {
      if (taxable > 300000) tax += Math.min( taxable - 300000, 300000) * 0.05;
      if (taxable > 600000) tax += Math.min( taxable - 600000, 300000) * 0.10;
      if (taxable > 900000) tax += Math.min( taxable - 900000, 300000) * 0.15;
      if (taxable > 1200000) tax += Math.min( taxable - 1200000, 300000) * 0.20;
      if (taxable > 1500000) tax += (taxable - 1500000) * 0.30;
    }
    
    // Simplification for brevity: Tax rebate u/s 87A for income up to 7L
    if (taxable <= 700000) tax = 0;

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  const calculateOldRegime = (totalIncome: number, totalDeductions: number) => {
    // FY 2024-25 Old Regime Slabs
    const taxable = Math.max(0, totalIncome - totalDeductions - 50000); // Ded + Std Ded
    let tax = 0;

    if (taxable <= 250000) tax = 0;
    else {
      if (taxable > 250000) tax += Math.min(taxable - 250000, 250000) * 0.05;
      if (taxable > 500000) tax += Math.min(taxable - 500000, 500000) * 0.20;
      if (taxable > 1000000) tax += (taxable - 1000000) * 0.30;
    }

    if (taxable <= 500000) tax = 0; // Rebate Section 87A

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  const results = useMemo(() => ({
    newTax: calculateNewRegime(income),
    oldTax: calculateOldRegime(income, deductions)
  }), [income, deductions]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Annual Income (₹)</Label>
              <Input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[income]}
              min={300000}
              max={5000000}
              step={50000}
              onValueChange={(val) => setIncome(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Total Deductions (₹)</Label>
              <Input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Ex: 80C, 80D, HRA etc (Only for Old Regime)</p>
            <Slider
              value={[deductions]}
              min={0}
              max={500000}
              step={5000}
              onValueChange={(val) => setDeductions(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Card className={`border-2 transition-all ${results.newTax <= results.oldTax ? 'border-primary bg-primary/5' : 'border-transparent bg-muted/20'}`}>
              <CardContent className="pt-6 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold uppercase opacity-70">New Regime Tax</p>
                  <h3 className="text-3xl font-bold">₹{results.newTax.toLocaleString()}</h3>
                </div>
                {results.newTax <= results.oldTax && (
                  <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                )}
              </CardContent>
            </Card>

            <Card className={`border-2 transition-all ${results.oldTax < results.newTax ? 'border-primary bg-primary/5' : 'border-transparent bg-muted/20'}`}>
              <CardContent className="pt-6 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold uppercase opacity-70">Old Regime Tax</p>
                  <h3 className="text-3xl font-bold">₹{results.oldTax.toLocaleString()}</h3>
                </div>
                {results.oldTax < results.newTax && (
                  <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="p-4 bg-muted/50 rounded-2xl border text-center">
            <p className="text-sm text-muted-foreground">Regime Savings</p>
            <p className="text-2xl font-bold text-primary">
              ₹{Math.abs(results.newTax - results.oldTax).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
