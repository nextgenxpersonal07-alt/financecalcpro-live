
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { RDCalculator } from "@/components/calculators/rd-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export const metadata = {
  title: "Recurring Deposit (RD) Calculator | FinanceCalc Pro",
  description: "Calculate maturity value and interest earned on your monthly Recurring Deposits.",
};

export default function RDPage() {
  return (
    <CalculatorContainer
      title="RD Calculator"
      description="Estimate the future value of your monthly savings with quarterly compounding interest."
      sidebar={
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                What is RD?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A Recurring Deposit (RD) is a disciplined way to save a fixed amount every month. It offers a safe return and helps build a corpus over time.
            </CardContent>
          </Card>
          
          <AIInsights 
            context="RD calculation of ₹5,000 monthly for 3 years at 6.5%"
            goals="Save for a vacation or emergency fund."
          />
        </div>
      }
    >
      <RDCalculator />
    </CalculatorContainer>
  );
}
