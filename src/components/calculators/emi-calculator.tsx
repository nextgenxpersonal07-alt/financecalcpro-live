
"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

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

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: "Principal", value: loanAmount, color: "hsl(var(--primary))" },
    { name: "Interest", value: results.totalInterest, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Loan Amount (₹)</Label>
            <span className="font-bold text-primary">₹{loanAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[loanAmount]}
            min={100000}
            max={10000000}
            step={50000}
            onValueChange={(val) => setLoanAmount(val[0])}
          />
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="bg-background"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Interest Rate (% P.A)</Label>
            <span className="font-bold text-primary">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            min={1}
            max={20}
            step={0.1}
            onValueChange={(val) => setInterestRate(val[0])}
          />
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="bg-background"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Tenure (Years)</Label>
            <span className="font-bold text-primary">{tenure} Yrs</span>
          </div>
          <Slider
            value={[tenure]}
            min={1}
            max={30}
            step={1}
            onValueChange={(val) => setTenure(val[0])}
          />
          <Input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-primary/5 border-none shadow-none">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
              <h3 className="text-2xl font-bold text-primary">₹{results.monthlyEmi.toLocaleString()}</h3>
            </CardContent>
          </Card>
          <Card className="bg-chart-2/5 border-none shadow-none">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
              <h3 className="text-2xl font-bold text-chart-2">₹{results.totalInterest.toLocaleString()}</h3>
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

        <div className="p-4 bg-muted/50 rounded-2xl border text-center">
          <p className="text-sm text-muted-foreground">Total Amount Payable</p>
          <p className="text-xl font-bold">₹{results.totalPayment.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
