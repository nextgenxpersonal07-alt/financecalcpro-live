
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";

export default function BusinessLoanPage() {
  return (
    <CalculatorContainer
      title="Business Loan Calculator"
      description="Calculate installments for your business expansion."
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
