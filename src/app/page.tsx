import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  TrendingUp,
  Landmark,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Receipt,
  Briefcase,
  Target,
  Users,
  Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const popularCalculators = [
    { title: "EMI Calculator", icon: Landmark, href: "/calculators/emi", desc: "Calculate your monthly loan installments instantly with the FinanceCalc Pro EMI Calculator." },
    { title: "SIP Calculator", icon: TrendingUp, href: "/calculators/sip", desc: "Estimate mutual fund returns and calculate SIP growth online using FinanceCalc Pro tools." },
    { title: "FD Calculator", icon: Briefcase, href: "/calculators/fd", desc: "Accurate online finance calculator for Fixed Deposits and safe savings growth." },
    { title: "RD Calculator", icon: Calculator, href: "/calculators/rd", desc: "Plan your recurring savings with our professional-grade financial planning tool." },
    { title: "GST Calculator", icon: Receipt, href: "/calculators/gst", desc: "Fast Goods and Service Tax estimation for business owners and freelancers." },
    { title: "Income Tax Calculator", icon: ShieldCheck, href: "/calculators/tax", desc: "Plan your annual tax savings and calculate liability under new and old regimes." },
  ];

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 lg:pt-24 lg:pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm">
                Best Free Online Finance Calculator
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-headline font-bold leading-[1.1]">
                Smart Financial Planning with <span className="text-primary">FinanceCalc Pro</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                FinanceCalc Pro offers the ultimate suite of free online investment calculators and wealth management tools to help you master your money with precision.
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <Button size="lg" className="rounded-full px-10 text-lg font-semibold w-full sm:w-auto h-14 shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95" asChild>
                  <Link href="/calculators">Explore All Tools <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-muted-foreground">
                <p className="font-medium">Trusted by 50,000+ users for accurate EMI calculation and financial planning.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
              <div className="relative z-10 bg-card border rounded-3xl p-3 sm:p-4 shadow-2xl glass mx-auto max-w-lg lg:max-w-none">
                <Image
                  src="https://picsum.photos/seed/finance-dashboard/800/600"
                  alt="FinanceCalc Pro Financial Dashboard"
                  width={800}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                  data-ai-hint="finance dashboard"
                  priority
                />
              </div>
              <div className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 blur-3xl rounded-full -z-0" />
              <div className="absolute -bottom-6 -left-6 sm:-bottom-12 sm:-left-12 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 blur-3xl rounded-full -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators Grid */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 sm:mb-12 gap-4 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground">Pro-Grade Investment Calculators</h2>
            <p className="text-sm sm:text-base text-muted-foreground">The most accurate financial planning tools, including SIP and loan EMI calculators.</p>
          </div>
          <Button variant="ghost" asChild className="group hidden sm:flex">
            <Link href="/calculators">
              View all tools <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {popularCalculators.map((calc, i) => {
            const Icon = calc.icon;
            return (
              <Link key={i} href={calc.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden cursor-pointer h-full active:scale-[0.98]">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold font-headline">{calc.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{calc.desc}</p>
                      </div>
                      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About FinanceCalc Pro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-muted/30 border rounded-[3rem] p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/30 text-primary">About FinanceCalc Pro</Badge>
              <h2 className="text-3xl lg:text-5xl font-headline font-bold">Why Use FinanceCalc Pro?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FinanceCalc Pro is a leading online finance calculator platform designed to simplify complex wealth management. Whether you need to calculate SIP returns online or find the right loan EMI, our tools provide bank-grade accuracy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Accurate Results</h4>
                    <p className="text-sm text-muted-foreground">The best free financial calculator with professional algorithms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Goal Oriented</h4>
                    <p className="text-sm text-muted-foreground">Personal finance planning tools tailored for your success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/about-brand/800/600" 
                alt="Wealth Growth with FinanceCalc Pro" 
                fill 
                className="object-cover"
                data-ai-hint="finance growth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent AI Feature */}
      <section className="bg-card py-16 sm:py-24 relative overflow-hidden border-y">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              AI Powered Strategy
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold leading-tight">Professional Wealth Management Tools</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              Our FinanceCalc Pro AI goes beyond standard calculations. It acts as your online investment calculator assistant, generating personalized wealth strategies based on current market trends.
            </p>
            <Button size="lg" className="rounded-full px-8 sm:px-12 h-14 text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
              Get Your Free AI Strategy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
