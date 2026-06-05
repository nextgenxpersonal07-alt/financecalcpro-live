
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { SimpleInterestCalculator } from "@/components/calculators/simple-interest-calculator";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";

export const metadata = {
  title: "Simple Interest Calculator | Fast & Accurate | FinanceCalc Pro",
  description: "Quickly calculate simple interest on loans or savings using principal, rate, and time.",
};

export default function SimpleInterestPage() {
  return (
    <CalculatorContainer
      title="Simple Interest Calculator"
      description="Standard calculator to find interest earned or payable without compounding."
      sidebar={<AdPlaceholder />}
    >
      <SimpleInterestCalculator />
    </CalculatorContainer>
  );
}
