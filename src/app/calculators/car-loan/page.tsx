
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";

export default function CarLoanPage() {
  return (
    <CalculatorContainer
      title="Car Loan Calculator"
      description="Calculate monthly installments for your new vehicle."
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
