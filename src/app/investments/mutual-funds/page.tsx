
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SIPCalculator } from "@/components/calculators/sip-calculator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, Layers } from "lucide-react";

export default function MutualFundsPage() {
  const fundCategories = [
    { name: "Equity Funds", desc: "Invest primarily in stocks for high growth.", risk: "High Risk", icon: TrendingUp },
    { name: "Debt Funds", desc: "Invest in fixed-income securities for stability.", risk: "Low-Mod Risk", icon: Shield },
    { name: "Hybrid Funds", desc: "Balance of equity and debt for varied needs.", risk: "Moderate Risk", icon: Layers },
  ];

  return (
    <CalculatorContainer
      title="Mutual Fund Center"
      description="Professional insights and tools for Systematic Investment Planning (SIP) and wealth creation."
      sidebar={
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Top Rated Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Bluechip Large Cap", return: "14.5%" },
                { name: "Midcap Growth Fund", return: "18.2%" },
                { name: "Value Discovery Fund", return: "15.8%" }
              ].map((fund, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-primary/5 pb-2">
                  <span className="font-medium">{fund.name}</span>
                  <span className="text-primary font-bold">{fund.return}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      }
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fundCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Card key={i} className="border-none shadow-sm bg-muted/20">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base">{cat.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{cat.risk}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{cat.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-headline">SIP Returns Calculator</h2>
          <SIPCalculator />
        </div>

        <section className="bg-card border rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold">Why Mutual Funds?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Professional Fund Management",
              "Diversification of Assets",
              "Low Minimum Investment (SIP)",
              "Highly Regulated and Transparent",
              "Tax Benefits (ELSS Schemes)",
              "Liquid and Accessible Wealth"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </section>
      </div>
    </CalculatorContainer>
  );
}
