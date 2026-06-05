
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { ROICalculator } from "@/components/calculators/roi-calculator";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";

export const metadata = {
  title: "ROI Calculator | Calculate Return on Investment | FinanceCalc Pro",
  description: "Calculate your absolute and annualized return on investment (ROI) for stocks, property, or business projects.",
};

export default function ROIPage() {
  return (
    <CalculatorContainer
      title="ROI Calculator"
      description="Evaluate the efficiency of an investment or compare the efficiencies of several different investments."
      sidebar={<AdPlaceholder />}
    >
      <ROICalculator />
    </CalculatorContainer>
  );
}
