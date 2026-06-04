import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Target, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">Our Story</Badge>
        <h1 className="text-4xl lg:text-6xl font-headline font-bold">Empowering Your <span className="text-primary">Financial Freedom</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          FinanceCalc Pro was founded with a simple mission: to make complex financial planning accessible, accurate, and actionable for everyone through the power of technology and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", desc: "To provide the most accurate and easy-to-use financial tools for every stage of your life." },
          { icon: Users, title: "User Centric", desc: "Every feature we build is designed with the user's financial goals and privacy at the forefront." },
          { icon: ShieldCheck, title: "Trust & Accuracy", desc: "We use professional-grade algorithms to ensure every calculation is precise and reliable." }
        ].map((item, i) => (
          <Card key={i} className="border-none bg-muted/30 shadow-sm">
            <CardContent className="pt-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 bg-card border rounded-[2.5rem] p-8 lg:p-16">
        <div className="lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="https://picsum.photos/seed/team/800/600" 
            alt="Our Team" 
            fill 
            className="object-cover"
            data-ai-hint="team workspace"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold font-headline">Built by Experts, For You</h2>
          <p className="text-muted-foreground">
            Our team consists of financial analysts, software engineers, and AI researchers who are passionate about personal finance. We believe that with the right tools, anyone can master their money.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <p className="text-3xl font-bold text-primary">50k+</p>
              <p className="text-sm text-muted-foreground">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Financial Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
