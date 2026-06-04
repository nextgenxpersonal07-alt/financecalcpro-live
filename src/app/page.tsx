
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  TrendingUp,
  Landmark,
  ShieldCheck,
  ChevronRight,
  PieChart,
  BarChart4,
  Briefcase,
  Search,
  ArrowRight,
  Play
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const popularCalculators = [
    { title: "EMI Calculator", icon: Landmark, href: "/calculators/emi", desc: "Calculate your loan installments instantly" },
    { title: "SIP Calculator", icon: TrendingUp, href: "/calculators/sip", desc: "Estimate mutual fund returns for your goals" },
    { title: "Income Tax", icon: ShieldCheck, href: "/calculators/tax", desc: "Plan your tax savings and liabilities" },
    { title: "FD Calculator", icon: Briefcase, href: "/calculators/fd", desc: "Returns for Fixed Deposits & RD" },
    { title: "Home Loan", icon: Landmark, href: "/calculators/home-loan", desc: "Plan your dream home budget" },
    { title: "Retirement", icon: PieChart, href: "/calculators/retirement", desc: "Build a corpus for your sunset years" },
  ];

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-24 lg:pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5 rounded-full font-medium">
                #1 Financial Portal
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-headline font-bold leading-tight">
                Master Your Money with <span className="text-primary">Precision</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Advanced calculators, AI-powered insights, and professional planning tools to help you achieve your financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 text-lg font-semibold" asChild>
                  <Link href="/calculators">Start Calculating <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold">
                  <Play className="mr-2 w-5 h-5 fill-current" /> Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt="User"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>Trusted by 50,000+ users monthly</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-card border rounded-3xl p-4 shadow-2xl glass">
                <Image
                  src="https://picsum.photos/seed/finance-dashboard/800/600"
                  alt="Finance Dashboard"
                  width={800}
                  height={600}
                  className="rounded-2xl"
                  data-ai-hint="finance dashboard"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-3xl rounded-full -z-0" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators Grid */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold">Popular Calculators</h2>
            <p className="text-muted-foreground">Simple, fast and accurate tools for every financial need.</p>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/calculators">
              View all 20+ tools <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCalculators.map((calc, i) => {
            const Icon = calc.icon;
            return (
              <Link key={i} href={calc.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold font-headline">{calc.title}</h3>
                        <p className="text-sm text-muted-foreground">{calc.desc}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* Intelligent AI Feature */}
      <section className="bg-card py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Powered Insights
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Intelligent Financial Planning</h2>
            <p className="text-lg text-muted-foreground">
              Our FinanceCalc Pro AI doesn't just calculate numbers. It analyzes your goals, income, and liabilities to generate a personalized wealth strategy.
            </p>
            <Button size="lg" className="rounded-full px-12 h-14 text-lg">
              Get Your AI Strategy
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold">Latest Insights</h2>
            <p className="text-muted-foreground">Master personal finance with our expert articles.</p>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/blog">
              Read Blog <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: "Investing", title: "SIP vs Lump Sum: Which is better for high returns?", img: "blog-investing" },
            { tag: "Tax", title: "Tax Planning 101: How to maximize your savings this year", img: "blog-tax" },
            { tag: "Retirement", title: "The 4% Rule: How much do you really need to retire?", img: "blog-retirement" },
          ].map((post, i) => (
            <Card key={i} className="group border-none shadow-none bg-transparent hover:translate-y-[-4px] transition-transform duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
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
                <h3 className="text-xl font-bold font-headline leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">5 min read • Feb 24, 2024</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
