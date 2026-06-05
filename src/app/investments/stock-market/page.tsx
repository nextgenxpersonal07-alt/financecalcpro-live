
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart4, TrendingUp, Activity, BookOpen, Search, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function StockMarketPage() {
  const learningModules = [
    { title: "Market Basics", desc: "Understanding IPOs, exchanges, and how stocks work.", level: "Beginner" },
    { title: "Fundamental Analysis", desc: "Analyzing balance sheets and P/E ratios.", level: "Intermediate" },
    { title: "Technical Analysis", desc: "Chart patterns, trends, and volume indicators.", level: "Advanced" },
  ];

  return (
    <CalculatorContainer
      title="Stock Market Portal"
      description="Your educational hub for equity investing, market trends, and trading basics."
      sidebar={
        <div className="space-y-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Market Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>NIFTY 50</span>
                <span className="font-bold flex items-center gap-1">22,120.45 <TrendingUp className="w-3 h-3" /></span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>SENSEX</span>
                <span className="font-bold flex items-center gap-1">72,845.10 <TrendingUp className="w-3 h-3" /></span>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Stock Market Learning
            </h2>
            <div className="space-y-4">
              {learningModules.map((mod, i) => (
                <Card key={i} className="hover:border-primary/50 transition-all cursor-pointer group">
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-base">{mod.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{mod.desc}</p>
                      </div>
                      <Badge variant="secondary">{mod.level}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              Investment Basics
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-muted/20 border-none">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">Power of Compounding</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stock market returns are not linear. By staying invested for long periods, you benefit from the compounding of both capital appreciation and dividends.
                  </p>
                  <Link href="/calculators/compound-interest" className="text-xs font-bold flex items-center gap-1 hover:underline">
                    Use Compound Interest Tool <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 border-none">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-primary">Risk Management</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Never invest more than you can afford to lose. Use diversification across sectors and market caps to mitigate localized downturns in the market.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <section className="bg-muted/10 border-t border-b py-12 px-8 rounded-[2rem] space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-headline">Ready to start?</h2>
            <p className="text-muted-foreground">Check out our recommended tools for stock analysis.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "ROI Calculator", href: "/calculators/roi", icon: TrendingUp },
              { title: "Inflation Impact", href: "/calculators/inflation", icon: Activity },
              { title: "SIP Growth", href: "/calculators/sip", icon: BarChart4 },
            ].map((tool, i) => (
              <Link key={i} href={tool.href}>
                <div className="p-6 bg-background border rounded-2xl flex flex-col items-center gap-3 hover:border-primary transition-all group">
                  <tool.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-bold text-sm">{tool.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </CalculatorContainer>
  );
}
