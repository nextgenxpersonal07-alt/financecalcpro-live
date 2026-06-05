
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { EMICalculator } from "@/components/calculators/emi-calculator";

export default function EducationLoanPage() {
  return (
    <CalculatorContainer
      title="Education Loan Calculator"
      description="Plan your studies with student friendly loan calculators."
    >
      <EMICalculator />
    </CalculatorContainer>
  );
}
