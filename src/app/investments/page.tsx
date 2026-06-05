
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, BarChart4, ArrowUpRight, Wallet, Target, Landmark, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InvestmentsPage() {
  const categories = [
    { title: "Mutual Funds", icon: TrendingUp, count: "5,000+ Funds", desc: "Compare and analyze top performing mutual funds.", href: "/investments/mutual-funds" },
    { title: "Fixed Deposits", icon: Landmark, count: "All Major Banks", desc: "Safe and guaranteed returns for your savings.", href: "/investments/fixed-deposits" },
    { title: "Stock Market", icon: BarChart4, count: "Learning Center", desc: "Insights into equity and derivative markets.", href: "/investments/stock-market" },
    { title: "Retirement", icon: Target, count: "Goal Based", desc: "Plan your golden years with early precision.", href: "/investments/retirement-planning" }
  ];

  const tools = [
    { name: "SIP Calculator", href: "/calculators/sip", tag: "Most Popular" },
    { name: "FD Calculator", href: "/calculators/fd", tag: "Safe Returns" },
    { name: "RD Calculator", href: "/calculators/rd", tag: "Monthly Savings" },
    { name: "Lumpsum Calculator", href: "/calculators/lumpsum", tag: "One-time" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">Wealth Management</Badge>
        <h1 className="text-4xl lg:text-6xl font-headline font-bold">Smart <span className="text-primary">Investment</span> Portal</h1>
        <p className="text-xl text-muted-foreground">Grow your wealth with data-driven insights, professional planning tools, and expert financial guides.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link key={i} href={cat.href}>
            <Card className="hover:border-primary/40 transition-all cursor-pointer group h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{cat.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mt-2">{cat.count}</Badge>
                <CardDescription className="pt-2">{cat.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 overflow-hidden border-none bg-muted/20">
          <CardHeader>
            <CardTitle>Investment Planning Tools</CardTitle>
            <CardDescription>Quick access to our high-precision calculators.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <Link key={i} href={tool.href}>
                  <div className="p-4 rounded-2xl bg-background border hover:border-primary/50 transition-all flex items-center justify-between group">
                    <div>
                      <p className="font-bold">{tool.name}</p>
                      <p className="text-xs text-muted-foreground">{tool.tag}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Goal-Based Investing</CardTitle>
            <CardDescription className="text-primary-foreground/80">Set a target and we'll help you reach it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs opacity-80 uppercase font-bold">Target Corpus</p>
                <p className="text-2xl font-bold">₹1.5 Crores</p>
              </div>
            </div>
            <Link href="/calculators/savings-goal">
              <Button variant="secondary" className="w-full font-bold">Start Planning</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-headline">Investment Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Investing for Beginners", img: "investing", time: "10 min read" },
            { title: "Top 5 Mutual Funds for 2024", img: "retirement", time: "8 min read" },
            { title: "Tax Saving Investments", img: "tax-planning", time: "12 min read" }
          ].map((guide, i) => (
            <div key={i} className="space-y-4 cursor-pointer group">
              <div className="aspect-video relative rounded-3xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${guide.img}/600/400`} fill alt={guide.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{guide.title}</h3>
              <p className="text-sm text-muted-foreground">{guide.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
