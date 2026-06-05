
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [tenure, setTenure] = useState(5);

  const results = useMemo(() => {
    const interest = (principal * rate * tenure) / 100;
    const totalAmount = principal + interest;

    return {
      interest: Math.round(interest),
      totalAmount: Math.round(totalAmount)
    };
  }, [principal, rate, tenure]);

  const pieData = [
    { name: "Principal", value: principal, color: "hsl(var(--primary))" },
    { name: "Interest", value: results.interest, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <Label className="text-sm font-semibold">Principal Amount (₹)</Label>
            <Input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="h-10 font-bold"
            />
            <Slider
              value={[principal]}
              min={1000}
              max={10000000}
              step={5000}
              onValueChange={(val) => setPrincipal(val[0])}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Rate of Interest (% P.A)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="h-10 font-bold"
            />
            <Slider
              value={[rate]}
              min={1}
              max={30}
              step={0.5}
              onValueChange={(val) => setRate(val[0])}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Tenure (Years)</Label>
            <Input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="h-10 font-bold"
            />
            <Slider
              value={[tenure]}
              min={1}
              max={50}
              step={1}
              onValueChange={(val) => setTenure(val[0])}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Total Interest</p>
                <h3 className="text-3xl font-bold text-primary">₹{results.interest.toLocaleString()}</h3>
              </CardContent>
            </Card>
            <Card className="bg-chart-2/5 border-none shadow-none">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Total Amount</p>
                <h3 className="text-3xl font-bold text-chart-2">₹{results.totalAmount.toLocaleString()}</h3>
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
        </div>
      </div>
    </div>
  );
}
