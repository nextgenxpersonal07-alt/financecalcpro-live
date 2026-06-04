
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, TrendingUp, ShieldCheck, PieChart, BarChart4, Briefcase, Calculator, Wallet, Receipt, DollarSign } from "lucide-react";
import Link from "next/link";

export default function CalculatorsPage() {
  const categories = [
    {
      name: "Loans",
      icon: Landmark,
      items: [
        { title: "EMI Calculator", href: "/calculators/emi", desc: "Equated Monthly Installment calculator" },
        { title: "Home Loan", href: "/calculators/home-loan", desc: "Housing finance and amortization" },
        { title: "Personal Loan", href: "/calculators/personal-loan", desc: "Calculate interest for personal needs" },
        { title: "Car Loan", href: "/calculators/car-loan", desc: "Vehicle finance calculator" },
        { title: "Education Loan", href: "/calculators/education-loan", desc: "Student loan repayment planner" },
      ]
    },
    {
      name: "Investments",
      icon: TrendingUp,
      items: [
        { title: "SIP Calculator", href: "/calculators/sip", desc: "Systematic Investment Plan returns" },
        { title: "Lumpsum", href: "/calculators/lumpsum", desc: "One-time investment growth" },
        { title: "FD Calculator", href: "/calculators/fd", desc: "Fixed Deposit maturity value" },
        { title: "RD Calculator", href: "/calculators/rd", desc: "Recurring Deposit interest" },
        { title: "Mutual Fund", href: "/calculators/mutual-fund", desc: "MF growth projections" },
      ]
    },
    {
      name: "Planning & Taxes",
      icon: ShieldCheck,
      items: [
        { title: "Income Tax", href: "/calculators/tax", desc: "FY 2024-25 Tax Liability" },
        { title: "Retirement", href: "/calculators/retirement", desc: "Retirement corpus calculator" },
        { title: "Inflation", href: "/calculators/inflation", desc: "Impact of inflation on wealth" },
        { title: "GST Calculator", href: "/calculators/gst", desc: "Goods and Service Tax calculator" },
      ]
    },
    {
      name: "Savings",
      icon: Wallet,
      items: [
        { title: "Simple Interest", href: "/calculators/simple-interest", desc: "Standard interest calculator" },
        { title: "Compound Interest", href: "/calculators/compound-interest", desc: "Power of compounding tool" },
        { title: "Savings Goal", href: "/calculators/savings-goal", desc: "Save for a specific target" },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">Financial <span className="text-primary">Tools</span></h1>
        <p className="text-lg text-muted-foreground">Comprehensive suite of professional-grade calculators for all your financial planning needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {categories.map((cat, idx) => {
          const CatIcon = cat.icon;
          return (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 border-b pb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CatIcon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-headline">{cat.name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <Link key={i} href={item.href}>
                    <Card className="hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
