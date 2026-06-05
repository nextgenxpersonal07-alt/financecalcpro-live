import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Info, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIP Calculator | Mutual Fund Returns & Wealth Growth Planner",
  description: "Calculate future wealth for your Systematic Investment Plan (SIP) in mutual funds. Plan your goals with the best SIP growth projection tool.",
  alternates: {
    canonical: "/calculators/sip",
  },
};

export default function SIPPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SIP Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate Systematic Investment Plan returns for mutual funds."
  };

  return (
    <CalculatorContainer
      title="SIP Calculator"
      description="Calculate future wealth for your Systematic Investment Plan (SIP) in mutual funds. Plan your goals with precision."
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
                Power of SIP
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A Systematic Investment Plan allows you to invest small amounts periodically. The primary benefit is the power of compounding and rupee cost averaging.
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Investment Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                New to investing? Learn how SIPs can help you achieve financial independence.
              </p>
              <Link href="/blog/what-is-sip-and-how-it-works-india">
                <Button variant="outline" size="sm" className="w-full text-xs font-bold mt-2">
                  Read SIP Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <AIInsights 
            context="SIP of ₹10,000 monthly for 10 years at 12% returns"
            goals="Retire early and achieve financial independence."
          />
        </div>
      }
    >
      <SIPCalculator />
    </CalculatorContainer>
  );
}

import { Button } from "@/components/ui/button";
