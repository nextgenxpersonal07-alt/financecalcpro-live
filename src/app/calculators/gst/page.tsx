import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { GSTCalculator } from "@/components/calculators/gst-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export const metadata = {
  title: "GST Calculator - Quick Tax Estimation | FinanceCalc Pro",
  description: "Fast and accurate GST calculator for inclusive and exclusive tax amounts. Supports 5%, 12%, 18%, and 28% rates.",
};

export default function GSTPage() {
  return (
    <CalculatorContainer
      title="GST Calculator"
      description="Calculate Goods and Service Tax (GST) for any amount. Quickly find inclusive and exclusive tax components."
      sidebar={
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Tax Components
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>CGST:</strong> Central GST collected by the Central Government on an intra-state sale.</p>
            <p><strong>SGST:</strong> State GST collected by the State Government on an intra-state sale.</p>
          </CardContent>
        </Card>
      }
    >
      <GSTCalculator />
    </CalculatorContainer>
  );
}
