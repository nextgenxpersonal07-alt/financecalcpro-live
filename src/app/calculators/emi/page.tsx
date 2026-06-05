import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "EMI Calculator | FinanceCalc Pro Loan Installment Calculator",
  description: "Calculate your monthly loan installments with the FinanceCalc Pro EMI Calculator. The best free online loan EMI calculator online for home, car, and personal loans.",
  keywords: [
    'emi calculator',
    'loan emi calculator online',
    'emi calculation tool',
    'FinanceCalc Pro EMI Calculator',
    'monthly installment calculator'
  ],
  alternates: {
    canonical: "/calculators/emi",
  },
};

export default function EMIPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FinanceCalc Pro EMI Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate loan EMIs with instant results and detailed amortization schedules using our professional tool."
  };

  return (
    <CalculatorContainer
      title="EMI Calculator"
      description="The FinanceCalc Pro EMI Calculator is your go-to tool for loan planning. Use our loan emi calculator online to estimate monthly payments and interest costs."
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
                EMI Calculation Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Understanding your EMI helps in effective debt management. Use this tool as a comprehensive financial planning calculator for all your loan needs.
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                EMI Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Learn the math behind our FinanceCalc Pro EMI Calculator and discover how to save on total interest.
              </p>
              <Link href="/blog/emi-calculation-guide">
                <Button variant="outline" size="sm" className="w-full text-xs font-bold mt-2">
                  Read Full Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <AIInsights 
            context="EMI Calculation for Loan planning"
            goals="Minimize interest outflow and plan for faster loan repayment."
          />
        </div>
      }
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
