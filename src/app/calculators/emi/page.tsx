
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Info } from "lucide-react";

export default function EMIPage() {
  return (
    <CalculatorContainer
      title="EMI Calculator"
      description="Calculate your monthly home, car or personal loan installments with instant amortization schedules and visual breakdown."
      sidebar={
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                What is EMI?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
            </CardContent>
          </Card>
          
          <AIInsights 
            context="EMI Calculation for ₹10L Loan at 8.5%"
            goals="Minimize interest outflow and plan for pre-payment."
          />
        </div>
      }
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
