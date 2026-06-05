
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";

export default function PersonalLoanPage() {
  return (
    <CalculatorContainer
      title="Personal Loan Calculator"
      description="Calculate EMI for personal needs and urgent funding."
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
