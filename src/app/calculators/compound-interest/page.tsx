
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { FDCalculator } from "@/components/calculators/fd-calculator";

export default function CompoundInterestPage() {
  return (
    <CalculatorContainer
      title="Compound Interest Calculator"
      description="The power of compounding at your fingertips."
    >
      <FDCalculator />
    </CalculatorContainer>
  );
}
