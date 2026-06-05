
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { FDCalculator } from "@/components/calculators/fd-calculator";

export default function LumpsumPage() {
  return (
    <CalculatorContainer
      title="Lumpsum Growth Calculator"
      description="Estimate returns on one-time mutual fund or equity investments."
    >
      <FDCalculator />
    </CalculatorContainer>
  );
}
