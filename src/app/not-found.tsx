import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8">
      <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary animate-pulse">
        <Search className="w-12 h-12" />
      </div>
      
      <div className="space-y-4 max-w-md">
        <h1 className="text-6xl font-headline font-bold text-primary">404</h1>
        <h2 className="text-3xl font-headline font-bold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, the financial tool or article you are looking for has moved or doesn't exist. Let's get you back on track.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="rounded-full px-8" asChild>
          <Link href="/calculators">
            <Calculator className="w-4 h-4 mr-2" /> Explore All Tools
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>
      </div>

      <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
        {[
          { label: "EMI Calculator", href: "/calculators/emi" },
          { label: "SIP Calculator", href: "/calculators/sip" },
          { label: "Tax Planner", href: "/calculators/tax" },
          { label: "Blog", href: "/blog" },
        ].map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className="p-4 rounded-xl border bg-muted/30 hover:bg-primary/5 hover:border-primary/30 transition-all text-sm font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
