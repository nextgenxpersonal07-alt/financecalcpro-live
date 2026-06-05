
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { InflationCalculator } from "@/components/calculators/inflation-calculator";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";

export const metadata = {
  title: "Inflation Calculator | Purchasing Power Tool | FinanceCalc Pro",
  description: "Understand how inflation erodes your purchasing power over time and how much you will need in the future.",
};

export default function InflationPage() {
  return (
    <CalculatorContainer
      title="Inflation Calculator"
      description="Plan your future by understanding the impact of rising costs on your wealth."
      sidebar={<AdPlaceholder />}
    >
      <InflationCalculator />
    </CalculatorContainer>
  );
}
