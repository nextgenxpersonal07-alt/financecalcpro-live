
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SIPCalculator } from "@/components/calculators/sip-calculator";

export default function MutualFundPage() {
  return (
    <CalculatorContainer
      title="Mutual Fund Returns Calculator"
      description="Project the growth of your mutual fund portfolio."
    >
      <SIPCalculator />
    </CalculatorContainer>
  );
}
