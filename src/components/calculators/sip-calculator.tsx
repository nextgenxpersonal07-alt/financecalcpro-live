
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

export function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [period, setPeriod] = useState(10);

  const results = useMemo(() => {
    const p = monthlyInvestment;
    const i = (expectedReturn / 12) / 100;
    const n = period * 12;

    const futureValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = p * n;
    const totalWealth = futureValue;
    const estimatedReturns = totalWealth - totalInvested;

    // Generate growth data for Area Chart
    const growthData = [];
    for (let year = 1; year <= period; year++) {
      const months = year * 12;
      const val = p * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      const invested = p * months;
      growthData.push({
        year: `Yr ${year}`,
        Invested: Math.round(invested),
        Wealth: Math.round(val),
      });
    }

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalWealth: Math.round(totalWealth),
      growthData,
    };
  }, [monthlyInvestment, expectedReturn, period]);

  const pieData = [
    { name: "Invested Amount", value: results.totalInvested, color: "hsl(var(--primary))" },
    { name: "Estimated Returns", value: results.estimatedReturns, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Monthly Investment (₹)</Label>
              <Input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[monthlyInvestment]}
              min={500}
              max={100000}
              step={500}
              onValueChange={(val) => setMonthlyInvestment(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Expected Return (% P.A)</Label>
              <Input
                type="number"
                value={expectedReturn}
                step={0.5}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[expectedReturn]}
              min={1}
              max={30}
              step={0.5}
              onValueChange={(val) => setExpectedReturn(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Time Period (Years)</Label>
              <Input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[period]}
              min={1}
              max={40}
              step={1}
              onValueChange={(val) => setPeriod(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Total Invested</p>
                <h3 className="text-3xl font-bold text-primary">₹{results.totalInvested.toLocaleString()}</h3>
              </CardContent>
            </Card>
            <Card className="bg-chart-2/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Estimated Returns</p>
                <h3 className="text-3xl font-bold text-chart-2">₹{results.estimatedReturns.toLocaleString()}</h3>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none bg-muted/20 overflow-hidden">
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

          <div className="p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg text-center">
            <p className="text-sm opacity-90 mb-1 font-medium">Total Value at Maturity</p>
            <p className="text-4xl font-bold">₹{results.totalWealth.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <Card className="border-none bg-muted/10 p-6 overflow-hidden">
        <h3 className="text-lg font-bold mb-6">Wealth Growth Projection</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={results.growthData}>
              <defs>
                <linearGradient id="colorWealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
              <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value: number) => `₹${value.toLocaleString()}`}
              />
              <Legend verticalAlign="top" align="right" />
              <Area 
                type="monotone" 
                dataKey="Wealth" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1} 
                fill="url(#colorWealth)" 
                strokeWidth={3}
              />
              <Area 
                type="monotone" 
                dataKey="Invested" 
                stroke="hsl(var(--chart-2))" 
                fill="transparent" 
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
