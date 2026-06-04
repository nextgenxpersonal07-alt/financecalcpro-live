
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, CheckCircle2, Lightbulb } from "lucide-react";
import { provideFinancialInsights, ProvideFinancialInsightsOutput } from "@/ai/flows/provide-financial-insights";

interface AIInsightsProps {
  context: string;
  goals: string;
}

export function AIInsights({ context, goals }: AIInsightsProps) {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<ProvideFinancialInsightsOutput | null>(null);

  const getInsights = async () => {
    setLoading(true);
    try {
      const res = await provideFinancialInsights({
        calculationResults: context,
        userFinancialGoals: goals
      });
      setInsights(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-primary/5 overflow-hidden">
      <CardHeader className="relative pb-4">
        <div className="absolute top-4 right-4 text-primary opacity-20">
          <Sparkles className="w-8 h-8" />
        </div>
        <CardTitle className="text-lg flex items-center gap-2">
          AI Wealth Advisor
        </CardTitle>
        <CardDescription>Get personalized insights for your current calculation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!insights ? (
          <Button 
            className="w-full rounded-full font-semibold group" 
            disabled={loading}
            onClick={getInsights}
          >
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
            ) : (
              <><Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> Generate AI Strategy</>
            )}
          </Button>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="space-y-2">
              <h4 className="text-sm font-bold flex items-center gap-2 text-primary">
                <Lightbulb className="w-4 h-4" /> Summary
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{insights.insightsSummary}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold">Key Takeaways</h4>
              <ul className="space-y-2">
                {insights.keyTakeaways.map((point, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" size="sm" className="w-full rounded-full text-xs" onClick={() => setInsights(null)}>
              Recalculate with AI
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
