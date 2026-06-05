import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SIP Calculator | FinanceCalc Pro Investment & Wealth Planner",
  description: "Calculate SIP returns online and project future wealth with the FinanceCalc Pro SIP Calculator. The best free online investment calculator for mutual funds.",
  keywords: [
    'sip calculator',
    'calculate sip returns online',
    'FinanceCalc Pro SIP Calculator',
    'investment calculator',
    'wealth management calculator'
  ],
  alternates: {
    canonical: "/calculators/sip",
  },
};

export default function SIPPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FinanceCalc Pro SIP Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate Systematic Investment Plan returns and wealth growth projections for long-term financial independence."
  };

  return (
    <CalculatorContainer
      title="SIP Calculator"
      description="The FinanceCalc Pro SIP Calculator helps you calculate SIP returns online. Plan your long-term goals with the best free online investment calculator."
      sidebar={
        <div className="space-y-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Smart SIP Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A Systematic Investment Plan is the most effective personal finance planning tool for compounding wealth over 10 to 20 years.
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Wealth Creation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Unlock the power of our FinanceCalc Pro SIP Calculator and reach your goals faster.
              </p>
              <Link href="/blog/what-is-sip-and-how-it-works-india">
                <Button variant="outline" size="sm" className="w-full text-xs font-bold mt-2">
                  Read SIP Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <AIInsights 
            context="SIP growth projection for long-term wealth"
            goals="Achieve financial independence through disciplined monthly investing."
          />
        </div>
      }
    >
      <SIPCalculator />
    </CalculatorContainer>
  );
}
