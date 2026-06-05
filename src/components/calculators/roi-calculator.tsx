
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function ROICalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(150000);
  const [duration, setTenure] = useState(3);

  const results = useMemo(() => {
    const totalProfit = finalValue - initialValue;
    const roi = (totalProfit / initialValue) * 100;
    
    // Annualized ROI (CAGR)
    const annualizedRoi = (Math.pow(finalValue / initialValue, 1 / duration) - 1) * 100;

    return {
      totalProfit: Math.round(totalProfit),
      roi: roi.toFixed(2),
      annualizedRoi: annualizedRoi.toFixed(2)
    };
  }, [initialValue, finalValue, duration]);

  const pieData = [
    { name: "Principal", value: initialValue, color: "hsl(var(--primary))" },
    { name: "Profit", value: Math.max(0, results.totalProfit), color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <Label className="text-sm font-semibold">Initial Investment (₹)</Label>
            <Input
              type="number"
              value={initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
              className="h-10 font-bold"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Final Value (₹)</Label>
            <Input
              type="number"
              value={finalValue}
              onChange={(e) => setFinalValue(Number(e.target.value))}
              className="h-10 font-bold"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Duration (Years)</Label>
              <span className="font-bold text-primary">{duration} Years</span>
            </div>
            <Slider
              value={[duration]}
              min={1}
              max={30}
              step={1}
              onValueChange={(val) => setTenure(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Total ROI</p>
                <h3 className="text-3xl font-bold text-primary">{results.roi}%</h3>
              </CardContent>
            </Card>
            <Card className="bg-chart-2/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Annualized ROI</p>
                <h3 className="text-3xl font-bold text-chart-2">{results.annualizedRoi}%</h3>
              </CardContent>
            </Card>
          </div>

          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 bg-muted/50 rounded-2xl border text-center">
            <p className="text-sm text-muted-foreground">Absolute Profit</p>
            <p className="text-2xl font-bold">₹{results.totalProfit.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
