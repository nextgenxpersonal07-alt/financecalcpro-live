
"use client"

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/brand/logo";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t pt-16 pb-24 lg:pb-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="md" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              FinanceCalc Pro is your trusted partner for professional-grade financial planning and calculations. Empowering your financial future with data-driven AI insights and best-in-class investment tools.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">FinanceCalc Pro Tools</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/calculators/emi" className="hover:text-primary transition-colors">EMI Calculator</Link></li>
              <li><Link href="/calculators/sip" className="hover:text-primary transition-colors">SIP Calculator</Link></li>
              <li><Link href="/calculators/fd" className="hover:text-primary transition-colors">Fixed Deposit (FD)</Link></li>
              <li><Link href="/calculators/tax" className="hover:text-primary transition-colors">Income Tax</Link></li>
              <li><Link href="/calculators" className="hover:text-primary transition-colors">View All FinanceCalc Pro Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company & Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About FinanceCalc Pro</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Weekly Finance Insights</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to get the latest financial strategies from FinanceCalc Pro experts.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="bg-muted px-4 py-2 rounded-lg text-sm flex-1 outline-none border border-transparent focus:border-primary transition-all"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {year || '...'} FinanceCalc Pro. All rights reserved. Professional financial calculations by FinanceCalc Pro.
        </div>
      </div>
    </footer>
  );
}
