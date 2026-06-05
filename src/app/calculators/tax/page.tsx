import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { IncomeTaxCalculator } from "@/components/calculators/tax-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ShieldCheck, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Tax Calculator FY 2024-25 | New vs Old Regime Planner",
  description: "Calculate your annual income tax liability for FY 2024-25. Compare New and Old regimes to find the best tax-saving strategy.",
  alternates: {
    canonical: "/calculators/tax",
  },
};

export default function TaxCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Income Tax Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate income tax liability for the current financial year."
  };

  return (
    <CalculatorContainer
      title="Income Tax Calculator"
      description="Estimate your annual tax liability for the financial year 2024-25 with deductions and exemptions."
      sidebar={
        <div className="space-y-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                New Tax Regime
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              The New Tax Regime (FY 24-25) is now the default. It offers lower slab rates but limits most exemptions like 80C, 80D, etc. Standard deduction of ₹50,000 applies to both.
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Tax Saving Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Maximize your take-home salary with our expert tax-saving guide.
              </p>
              <Link href="/blog/tax-saving-tips-2024">
                <Button variant="outline" size="sm" className="w-full text-xs font-bold mt-2">
                  View Tax Tips
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <AIInsights 
            context="Income tax calculation for ₹12L annual salary"
            goals="Find the best tax regime to minimize tax outflow."
          />
        </div>
      }
    >
      <IncomeTaxCalculator />
    </CalculatorContainer>
  );
}

import { Button } from "@/components/ui/button";
