
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";

export default function HomeLoanPage() {
  return (
    <CalculatorContainer
      title="Home Loan EMI Calculator"
      description="Plan your home purchase with detailed amortization schedules."
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
