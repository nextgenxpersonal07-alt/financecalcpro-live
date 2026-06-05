
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SIPCalculator } from "@/components/calculators/sip-calculator";
import { Target, ShieldCheck, Heart, Wallet, CheckCircle2 } from "lucide-react";

export default function RetirementPlanningPage() {
  return (
    <CalculatorContainer
      title="Retirement Planning"
      description="Build a stress-free future by calculating your retirement corpus and inflation-adjusted needs."
      sidebar={
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Retirement Tip
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              Start as early as possible. Every year you delay your retirement savings, you might need to save significantly more to reach the same end goal due to the loss of compounding years.
            </CardContent>
          </Card>
        </div>
      }
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-headline">Retirement Corpus Estimator</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Use this tool to estimate how much your periodic savings will grow by the time you retire. For a 60-year retirement age, enter your remaining years as the time period.
          </p>
          <SIPCalculator />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none bg-muted/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Goal-Based Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A successful retirement requires estimating your future monthly expenses, adjusted for an annual inflation rate (typically 5-6%). Your corpus should ideally be 20-30 times your annual expenses.
              </p>
              <div className="space-y-2">
                {[
                  "Estimate post-retirement expenses",
                  "Include medical and emergency funds",
                  "Diversify between NPS, Equity, and Debt",
                  "Review and rebalance every 1-2 years"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                The 4% Withdrawal Rule
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              A common rule of thumb is that if you withdraw 4% of your total corpus in the first year of retirement and adjust for inflation thereafter, your money has a high probability of lasting 30 years or more.
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorContainer>
  );
}
