
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const results = useMemo(() => {
    const p = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = tenure * 12;

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    // Generate monthly data for first year preview
    const yearlyBreakdown = [];
    let balance = p;
    for (let i = 1; i <= tenure; i++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      for (let j = 0; j < 12; j++) {
        const interest = balance * r;
        const principal = emi - interest;
        yearlyInterest += interest;
        yearlyPrincipal += principal;
        balance -= principal;
      }
      yearlyBreakdown.push({
        year: `Year ${i}`,
        Principal: Math.round(yearlyPrincipal),
        Interest: Math.round(yearlyInterest),
      });
    }

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      yearlyBreakdown,
    };
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: "Principal", value: loanAmount, color: "hsl(var(--primary))" },
    { name: "Interest", value: results.totalInterest, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Loan Amount (₹)</Label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[loanAmount]}
              min={100000}
              max={10000000}
              step={50000}
              onValueChange={(val) => setLoanAmount(val[0])}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold">Interest Rate (% P.A)</Label>
              <Input
                type="number"
                value={interestRate}
                step={0.1}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-32 h-8 text-right font-bold"
              />
            </div>
            <Slider
              value={[interestRate]}
              min={1}
              max={20}
              step={0.1}
              onValueChange={(val) => setInterestRate(val[0])}
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
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Monthly EMI</p>
                <h3 className="text-3xl font-bold text-primary">₹{results.monthlyEmi.toLocaleString()}</h3>
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

          <div className="p-4 bg-muted/50 rounded-2xl border text-center">
            <p className="text-sm text-muted-foreground">Total Amount Payable</p>
            <p className="text-2xl font-bold">₹{results.totalPayment.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <Card className="border-none bg-muted/10 p-6">
        <h3 className="text-lg font-bold mb-6">Yearly Repayment Schedule</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results.yearlyBreakdown.slice(0, 10)}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
              <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value: number) => `₹${value.toLocaleString()}`}
              />
              <Legend verticalAlign="top" align="right" />
              <Bar dataKey="Principal" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Interest" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
