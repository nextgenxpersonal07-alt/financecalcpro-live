
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Info } from "lucide-react";

export default function SIPPage() {
  return (
    <CalculatorContainer
      title="SIP Calculator"
      description="Calculate future wealth for your Systematic Investment Plan (SIP) in mutual funds. Plan your goals with precision."
      sidebar={
        <div className="space-y-6">
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
