
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { GSTCalculator } from "@/components/calculators/gst-calculator";

export default function InflationPage() {
  return (
    <CalculatorContainer
      title="Inflation Calculator"
      description="Understand how inflation impacts your purchasing power."
    >
      <GSTCalculator />
    </CalculatorContainer>
  );
}
