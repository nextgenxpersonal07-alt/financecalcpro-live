
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { FDCalculator } from "@/components/calculators/fd-calculator";

export default function SimpleInterestPage() {
  return (
    <CalculatorContainer
      title="Simple Interest Calculator"
      description="Calculate basic interest on your principal amount."
    >
      <FDCalculator />
    </CalculatorContainer>
  );
}
