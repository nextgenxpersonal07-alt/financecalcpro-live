
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";

export default function RetirementPage() {
  return (
    <CalculatorContainer
      title="Retirement Calculator"
      description="Calculate the corpus needed for your retirement."
    >
      <SIPCalculator />
    </CalculatorContainer>
  );
}
