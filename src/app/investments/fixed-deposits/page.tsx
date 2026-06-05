
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FDCalculator } from "@/components/calculators/fd-calculator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from "lucide-react";

export default function FixedDepositsPage() {
  const bankRates = [
    { bank: "State Bank", rate: "7.00%", senior: "7.50%" },
    { bank: "HDFC Bank", rate: "7.25%", senior: "7.75%" },
    { bank: "ICICI Bank", rate: "7.10%", senior: "7.60%" },
    { bank: "Kotak Bank", rate: "7.20%", senior: "7.70%" },
    { bank: "Axis Bank", rate: "7.20%", senior: "7.70%" },
  ];

  return (
    <CalculatorContainer
      title="Fixed Deposits (FD)"
      description="Secure your savings with guaranteed returns from India's leading banks."
      sidebar={
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                FD Fact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              Did you know? FD interest is compounded quarterly by most banks. Tax is deducted at source (TDS) if interest exceeds ₹40,000 per year.
            </CardContent>
          </Card>
        </div>
      }
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-headline">Calculate FD Returns</h2>
          <FDCalculator />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-headline">Latest Interest Rates (2024)</h2>
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Bank Name</TableHead>
                  <TableHead>Regular Rate</TableHead>
                  <TableHead>Senior Citizen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bankRates.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{row.bank}</TableCell>
                    <TableCell className="text-primary font-bold">{row.rate}</TableCell>
                    <TableCell>{row.senior}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-[10px] text-muted-foreground text-center italic">* Rates are indicative and subject to change by respective banks.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Compounding Advantage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Fixed Deposits often use quarterly compounding. This means the interest earned every 3 months is added back to your principal, and you earn interest on your interest, significantly increasing your final wealth over long tenures.
            </CardContent>
          </Card>
          <Card className="border-none bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Taxability of FD</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Interest income from FDs is taxable according to your income tax slab. Investors can opt for 5-Year Tax Saving FDs to claim deductions under Section 80C, though these usually have a lock-in period.
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorContainer>
  );
}
