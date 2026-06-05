
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, ShieldCheck, FileText, Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TaxPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <div className="max-w-2xl space-y-4 text-center mx-auto">
        <Badge className="bg-primary/10 text-primary border-primary/20">FY 2024-25</Badge>
        <h1 className="text-4xl lg:text-6xl font-headline font-bold">Tax Planning <span className="text-primary">Hub</span></h1>
        <p className="text-xl text-muted-foreground">Maximize your savings with our comprehensive tax calculators and optimization strategies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Link href="/calculators/tax">
          <Card className="h-full hover:border-primary/50 transition-all cursor-pointer group bg-muted/10 overflow-hidden relative">
            <CardHeader className="relative z-10">
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Income Tax Calculator</CardTitle>
              <CardDescription>Calculate your tax liability under New vs Old regime for the current financial year.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <div className="flex items-center text-primary font-bold">
                Calculate Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
            <div className="absolute bottom-[-20px] right-[-20px] opacity-5">
              <ShieldCheck className="w-48 h-48" />
            </div>
          </Card>
        </Link>

        <Link href="/calculators/gst">
          <Card className="h-full hover:border-primary/50 transition-all cursor-pointer group bg-muted/10 overflow-hidden relative">
            <CardHeader className="relative z-10">
              <Receipt className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">GST Calculator</CardTitle>
              <CardDescription>Calculate GST inclusive and exclusive amounts for 5%, 12%, 18%, and 28% slabs.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <div className="flex items-center text-primary font-bold">
                Calculate Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
            <div className="absolute bottom-[-20px] right-[-20px] opacity-5">
              <Receipt className="w-48 h-48" />
            </div>
          </Card>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold border-b pb-4">Tax Saving Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Section 80C: Life Insurance, PPF, ELSS",
            "Section 80D: Health Insurance Premiums",
            "Section 24: Home Loan Interest Deduction",
            "Section 80E: Education Loan Interest",
            "NPS (National Pension System) contributions",
            "Standard Deduction for Salaried Employees"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
