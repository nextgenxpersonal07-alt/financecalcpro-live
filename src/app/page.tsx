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
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const popularCalculators = [
    { title: "EMI Calculator", icon: Landmark, href: "/calculators/emi", desc: "Calculate your monthly loan installments instantly" },
    { title: "SIP Calculator", icon: TrendingUp, href: "/calculators/sip", desc: "Estimate mutual fund returns for your goals" },
    { title: "FD Calculator", icon: Briefcase, href: "/calculators/fd", desc: "Calculate returns for Fixed Deposits maturity" },
    { title: "RD Calculator", icon: Calculator, href: "/calculators/rd", desc: "Plan your Recurring Deposit savings" },
    { title: "GST Calculator", icon: Receipt, href: "/calculators/gst", desc: "Quick Goods and Service Tax estimation" },
    { title: "Income Tax Calculator", icon: ShieldCheck, href: "/calculators/tax", desc: "Plan your annual tax savings and liability" },
  ];

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 lg:pt-24 lg:pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm">
                #1 Financial Portal
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-headline font-bold leading-[1.1]">
                Master Your Money with <span className="text-primary">Precision</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Advanced calculators, AI-powered insights, and professional planning tools to help you achieve your financial freedom.
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <Button size="lg" className="rounded-full px-10 text-lg font-semibold w-full sm:w-auto h-14 shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95" asChild>
                  <Link href="/calculators">Start Calculating <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-muted-foreground">
                <p className="font-medium">Trusted by 50,000+ users monthly</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
              <div className="relative z-10 bg-card border rounded-3xl p-3 sm:p-4 shadow-2xl glass mx-auto max-w-lg lg:max-w-none">
                <Image
                  src="https://picsum.photos/seed/finance-dashboard/800/600"
                  alt="Finance Dashboard"
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
            <h2 className="text-2xl sm:text-3xl font-headline font-bold">Popular Calculators</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Simple, fast and accurate tools for every financial need.</p>
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
        <div className="mt-8 sm:hidden">
          <Button variant="outline" asChild className="w-full h-12 rounded-full font-bold">
            <Link href="/calculators">View All 20+ Tools</Link>
          </Button>
        </div>
      </section>

      {/* Intelligent AI Feature */}
      <section className="bg-card py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Powered Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold leading-tight">Intelligent Financial Planning</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              Our FinanceCalc Pro AI doesn't just calculate numbers. It analyzes your goals, income, and liabilities to generate a personalized wealth strategy.
            </p>
            <Button size="lg" className="rounded-full px-8 sm:px-12 h-14 text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
              Get Your AI Strategy
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 sm:mb-12 gap-4 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold">Latest Insights</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Master personal finance with our expert articles.</p>
          </div>
          <Button variant="ghost" asChild className="group hidden sm:flex">
            <Link href="/blog">
              Read Blog <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: "Investing", title: "SIP vs Lump Sum: Which is better for high returns?", img: "blog-investing" },
            { tag: "Tax", title: "Tax Planning 101: How to maximize your savings this year", img: "blog-tax" },
            { tag: "Retirement", title: "The 4% Rule: How much do you really need to retire?", img: "blog-retirement" },
          ].map((post, i) => (
            <Card key={i} className="group border-none shadow-none bg-transparent hover:translate-y-[-4px] transition-transform duration-300 active:scale-[0.98]">
              <CardContent className="p-0 space-y-4">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden relative shadow-sm">
                  <Image
                    src={`https://picsum.photos/seed/${post.img}/800/600`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-none">
                      {post.tag}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">5 min read • Feb 24, 2024</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
