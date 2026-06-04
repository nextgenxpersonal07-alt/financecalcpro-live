"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

export function FDCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(7.0);
  const [tenure, setTenure] = useState(5);

  const results = useMemo(() => {
    const p = investment;
    const r = rate / 100;
    const n = 4; // Quarterly compounding
    const t = tenure;

    const maturityValue = p * Math.pow(1 + r / n, n * t);
    const totalInterest = maturityValue - p;

    // Growth breakdown
    const growthData = [];
    for (let i = 1; i <= tenure; i++) {
      const val = p * Math.pow(1 + r / n, n * i);
      growthData.push({
        year: `Year ${i}`,
        Invested: Math.round(p),
        Interest: Math.round(val - p),
      });
    }

    return {
      maturityValue: Math.round(maturityValue),
      totalInterest: Math.round(totalInterest),
      growthData,
    };
  }, [investment, rate, tenure]);

  const pieData = [
    { name: "Invested", value: investment, color: "hsl(var(--primary))" },
    { name: "Interest", value: results.totalInterest, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Investment Amount (₹)</Label>
              <Input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[investment]}
              min={1000}
              max={10000000}
              step={5000}
              onValueChange={(val) => setInvestment(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Interest Rate (% P.A)</Label>
              <Input
                type="number"
                value={rate}
                step={0.1}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[rate]}
              min={1}
              max={15}
              step={0.1}
              onValueChange={(val) => setRate(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Tenure (Years)</Label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[tenure]}
              min={1}
              max={25}
              step={1}
              onValueChange={(val) => setTenure(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Maturity Value</p>
                <h3 className="text-3xl font-bold text-primary">₹{results.maturityValue.toLocaleString()}</h3>
              </CardContent>
            </Card>
            <Card className="bg-chart-2/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Total Interest</p>
                <h3 className="text-3xl font-bold text-chart-2">₹{results.totalInterest.toLocaleString()}</h3>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none bg-muted/20">
            <CardContent className="pt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36}/>
                  <Tooltip 
                    formatter={(value: number) => `₹${value.toLocaleString()}`}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
