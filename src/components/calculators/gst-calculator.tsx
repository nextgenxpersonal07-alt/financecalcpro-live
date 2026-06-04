"use client"

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

export function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [type, setType] = useState<"inclusive" | "exclusive">("exclusive");

  const results = useMemo(() => {
    let gstAmount = 0;
    let totalAmount = 0;
    let baseAmount = 0;

    if (type === "exclusive") {
      gstAmount = (amount * gstRate) / 100;
      totalAmount = amount + gstAmount;
      baseAmount = amount;
    } else {
      gstAmount = amount - (amount * (100 / (100 + gstRate)));
      totalAmount = amount;
      baseAmount = amount - gstAmount;
    }

    return {
      gstAmount: Math.round(gstAmount),
      totalAmount: Math.round(totalAmount),
      baseAmount: Math.round(baseAmount),
      cgst: Math.round(gstAmount / 2),
      sgst: Math.round(gstAmount / 2),
    };
  }, [amount, gstRate, type]);

  const pieData = [
    { name: "Base Amount", value: results.baseAmount, color: "hsl(var(--primary))" },
    { name: "GST Amount", value: results.gstAmount, color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 p-6 bg-muted/30 rounded-3xl border border-primary/5">
          <div className="space-y-4">
            <Label className="text-sm font-semibold">GST Type</Label>
            <RadioGroup 
              defaultValue="exclusive" 
              onValueChange={(val) => setType(val as any)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exclusive" id="exclusive" />
                <Label htmlFor="exclusive">GST Exclusive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inclusive" id="inclusive" />
                <Label htmlFor="inclusive">GST Inclusive</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Amount (₹)</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="h-12 font-bold text-lg"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold">Tax Rate (%)</Label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 12, 18, 28].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  className={`py-2 rounded-xl border font-bold transition-all ${
                    gstRate === rate 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background hover:border-primary/50"
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Card className="bg-primary/5 border-none shadow-none">
              <CardContent className="pt-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Total GST Amount</p>
                    <h3 className="text-4xl font-bold text-primary">₹{results.gstAmount.toLocaleString()}</h3>
                  </div>
                  <div className="text-right text-sm text-muted-foreground pb-1">
                    <p>CGST: ₹{results.cgst.toLocaleString()}</p>
                    <p>SGST: ₹{results.sgst.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-6 bg-muted/20 rounded-3xl border border-primary/5 space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Base Amount</span>
                <span className="font-bold">₹{results.baseAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-medium">Total Amount</span>
                <span className="font-extrabold text-primary">₹{results.totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="h-[200px]">
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
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
