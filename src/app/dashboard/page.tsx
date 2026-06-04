
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Landmark, ShieldCheck, Wallet, ArrowUpRight, ArrowDownRight, User } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
            <Image src="https://picsum.photos/seed/user-p/200/200" alt="Profile" width={64} height={64} />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">Welcome back, John!</h1>
            <p className="text-sm text-muted-foreground">Here is your financial overview for February 2024.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="rounded-full">Add Calculation</Button>
          <Button variant="outline" size="icon" className="rounded-full"><User className="w-4 h-4" /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Net Worth", value: "₹45.20L", trend: "+12.5%", positive: true, icon: Wallet },
          { label: "Investments", value: "₹28.50L", trend: "+8.2%", positive: true, icon: TrendingUp },
          { label: "Liabilities", value: "₹12.30L", trend: "-2.1%", positive: true, icon: Landmark },
          { label: "Tax Liability", value: "₹1.45L", trend: "+0.5%", positive: false, icon: ShieldCheck },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="border-none shadow-sm bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="p-2 bg-background rounded-xl shadow-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className={`mt-4 flex items-center gap-1 text-xs font-medium ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.trend}
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 shadow-sm border-none bg-muted/10 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Calculations</CardTitle>
            <Button variant="ghost" size="sm">View History</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                { name: "Home Loan EMI", date: "2 hours ago", amount: "₹1.2Cr Loan", icon: Landmark },
                { name: "SIP Growth Plan", date: "Yesterday", amount: "₹25k Monthly", icon: TrendingUp },
                { name: "Income Tax FY24", date: "3 days ago", amount: "₹18L Income", icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary border">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-none bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Pro Advantage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm opacity-90 leading-relaxed">
              Unlock advanced portfolio tracking, unlimited saved calculations, and priority AI insights.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Multi-device Sync
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Ad-free Experience
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Download PDF Reports
              </li>
            </ul>
            <Button variant="secondary" className="w-full font-bold">Upgrade to Pro</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
