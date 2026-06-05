import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";
import { AIInsights } from "@/components/ai/ai-insights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | Home, Car & Personal Loan Installment Calculator",
  description: "Calculate your monthly home, car or personal loan installments (EMI) with our free tool. Includes detailed amortization schedules and interest breakdown.",
  alternates: {
    canonical: "/calculators/emi",
  },
};

export default function EMIPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EMI Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate loan EMIs with instant results and amortization schedules."
  };

  return (
    <CalculatorContainer
      title="EMI Calculator"
      description="Calculate your monthly home, car or personal loan installments with instant amortization schedules and visual breakdown."
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
                What is EMI?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Learning Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Understand the math behind loan repayments and how to save on interest.
              </p>
              <Link href="/blog/emi-calculation-guide">
                <Button variant="outline" size="sm" className="w-full text-xs font-bold mt-2">
                  Read EMI Guide
                </Button>
              </Link>
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

import { Button } from "@/components/ui/button";
