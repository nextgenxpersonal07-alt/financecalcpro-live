import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { FDCalculator } from "@/components/calculators/fd-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export const metadata = {
  title: "Fixed Deposit (FD) Calculator | FinanceCalc Pro",
  description: "Calculate maturity value and interest earned on your Fixed Deposits with our advanced FD calculator.",
};

export default function FDPage() {
  return (
    <CalculatorContainer
      title="FD Calculator"
      description="Estimate the returns on your Fixed Deposit investment with quarterly compounding and growth visualization."
      sidebar={
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Why Fixed Deposit?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              FDs are one of the safest investment options offering guaranteed returns. They are ideal for goal-based savings where capital preservation is key.
            </CardContent>
          </Card>
          
          <AIInsights 
            context="FD calculation of ₹1 Lakh for 5 years at 7%"
            goals="Low risk savings for a child's education fund."
          />
        </div>
      }
    >
      <FDCalculator />
    </CalculatorContainer>
  );
}
