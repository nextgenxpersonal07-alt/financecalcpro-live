
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";

export default function SavingsGoalPage() {
  return (
    <CalculatorContainer
      title="Savings Goal Calculator"
      description="Find out how much you need to save to reach your target."
    >
      <SIPCalculator />
    </CalculatorContainer>
  );
}
