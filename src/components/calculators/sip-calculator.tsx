
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

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

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalWealth: Math.round(totalWealth),
    };
  }, [monthlyInvestment, expectedReturn, period]);

  const pieData = [
    { name: "Invested Amount", value: results.totalInvested, color: "hsl(var(--primary))" },
    { name: "Estimated Returns", value: results.estimatedReturns, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Monthly Investment (₹)</Label>
            <span className="font-bold text-primary">₹{monthlyInvestment.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyInvestment]}
            min={500}
            max={100000}
            step={500}
            onValueChange={(val) => setMonthlyInvestment(val[0])}
          />
          <Input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="bg-background"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Expected Return (% P.A)</Label>
            <span className="font-bold text-primary">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            min={1}
            max={30}
            step={0.5}
            onValueChange={(val) => setExpectedReturn(val[0])}
          />
          <Input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="bg-background"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Time Period (Years)</Label>
            <span className="font-bold text-primary">{period} Yrs</span>
          </div>
          <Slider
            value={[period]}
            min={1}
            max={40}
            step={1}
            onValueChange={(val) => setPeriod(val[0])}
          />
          <Input
            type="number"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-primary/5 border-none shadow-none">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
              <h3 className="text-2xl font-bold text-primary">₹{results.totalInvested.toLocaleString()}</h3>
            </CardContent>
          </Card>
          <Card className="bg-chart-2/5 border-none shadow-none">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Estimated Returns</p>
              <h3 className="text-2xl font-bold text-chart-2">₹{results.estimatedReturns.toLocaleString()}</h3>
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
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg text-center">
          <p className="text-sm opacity-90 mb-1">Total Value at Maturity</p>
          <p className="text-3xl font-bold">₹{results.totalWealth.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
