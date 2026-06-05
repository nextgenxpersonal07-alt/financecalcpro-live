
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { IncomeTaxCalculator } from "@/components/calculators/tax-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Income Tax Calculator FY 2024-25 | FinanceCalc Pro",
  description: "Calculate your annual income tax liability under New and Old regimes.",
};

export default function TaxCalculatorPage() {
  return (
    <CalculatorContainer
      title="Income Tax Calculator"
      description="Estimate your annual tax liability for the financial year 2024-25 with deductions and exemptions."
      sidebar={
        <div className="space-y-6">
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
