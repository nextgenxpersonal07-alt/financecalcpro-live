
import { CalculatorContainer } from "@/components/calculators/calculator-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Landmark, Home, Car, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoansPage() {
  const loanTypes = [
    { title: "Home Loan", icon: Home, href: "/calculators/home-loan", desc: "Lowest interest rates for your dream home." },
    { title: "Personal Loan", icon: Landmark, href: "/calculators/personal-loan", desc: "Instant funding for your personal needs." },
    { title: "Car Loan", icon: Car, href: "/calculators/car-loan", desc: "Flexible EMI options for your new vehicle." },
    { title: "Education Loan", icon: GraduationCap, href: "/calculators/education-loan", desc: "Student friendly repayment structures." },
    { title: "Business Loan", icon: Briefcase, href: "/calculators/business-loan", desc: "Scale your business with easy credit." },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">Loan <span className="text-primary">Center</span></h1>
        <p className="text-lg text-muted-foreground">Everything you need to plan, calculate, and manage your debt effectively.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loanTypes.map((loan, i) => (
          <Link key={i} href={loan.href}>
            <Card className="h-full hover:shadow-xl hover:border-primary/40 transition-all group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <loan.icon className="w-6 h-6" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {loan.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </CardTitle>
                <CardDescription>{loan.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-muted/30 border-none">
        <CardContent className="p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="lg:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold font-headline">Not sure which loan is right?</h2>
            <p className="text-muted-foreground text-lg">Use our unified EMI calculator to compare different interest rates and tenures across all loan categories instantly.</p>
          </div>
          <Link href="/calculators/emi" className="lg:w-1/3">
            <Button size="lg" className="w-full rounded-full h-14 text-lg">Open EMI Calculator</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
