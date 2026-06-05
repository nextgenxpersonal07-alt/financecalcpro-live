
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export function InflationCalculator() {
  const [currentAmount, setCurrentAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  const results = useMemo(() => {
    const futureValue = currentAmount * Math.pow(1 + inflationRate / 100, years);
    const purchasingPower = currentAmount / Math.pow(1 + inflationRate / 100, years);

    const chartData = [];
    for (let i = 0; i <= years; i += Math.max(1, Math.floor(years / 10))) {
      chartData.push({
        year: `Yr ${i}`,
        FutureValue: Math.round(currentAmount * Math.pow(1 + inflationRate / 100, i)),
        PurchasingPower: Math.round(currentAmount / Math.pow(1 + inflationRate / 100, i))
      });
    }

    return {
      futureValue: Math.round(futureValue),
      purchasingPower: Math.round(purchasingPower),
      chartData
    };
  }, [currentAmount, inflationRate, years]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <Label className="text-sm font-semibold">Current Amount (₹)</Label>
            <Input
              type="number"
              value={currentAmount}
              onChange={(e) => setCurrentAmount(Number(e.target.value))}
              className="h-10 font-bold"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Expected Inflation (% P.A)</Label>
            <Input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="h-10 font-bold"
            />
            <Slider
              value={[inflationRate]}
              min={1}
              max={25}
              step={0.1}
              onValueChange={(val) => setInflationRate(val[0])}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Years in Future</Label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="h-10 font-bold"
            />
            <Slider
              value={[years]}
              min={1}
              max={50}
              step={1}
              onValueChange={(val) => setYears(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Required in Future</p>
                <h3 className="text-3xl font-bold text-primary">₹{results.futureValue.toLocaleString()}</h3>
                <p className="text-[10px] text-muted-foreground mt-2 italic">To have the same value as today</p>
              </CardContent>
            </Card>
            <Card className="bg-chart-2/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Today's Purchasing Power</p>
                <h3 className="text-3xl font-bold text-chart-2">₹{results.purchasingPower.toLocaleString()}</h3>
                <p className="text-[10px] text-muted-foreground mt-2 italic">What ₹{currentAmount.toLocaleString()} will buy then</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Card className="border-none bg-muted/10 p-6">
        <h3 className="text-lg font-bold mb-6">Inflation Impact Projection</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(val) => `₹${val/1000}k`} />
              <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="FutureValue" name="Required Amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="PurchasingPower" name="Value of Today's ₹" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
