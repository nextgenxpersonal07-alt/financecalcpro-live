
import Link from "next/link";
import { Calculator, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t pt-16 pb-24 lg:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calculator className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="font-headline font-bold text-xl">FinanceCalc Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for professional-grade financial planning and calculations. Empowering your financial future with data-driven insights.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Popular Calculators</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/calculators/emi" className="hover:text-primary transition-colors">EMI Calculator</Link></li>
              <li><Link href="/calculators/sip" className="hover:text-primary transition-colors">SIP Calculator</Link></li>
              <li><Link href="/calculators/fd" className="hover:text-primary transition-colors">Fixed Deposit (FD)</Link></li>
              <li><Link href="/calculators/tax" className="hover:text-primary transition-colors">Income Tax</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe for the latest finance tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-muted px-4 py-2 rounded-lg text-sm flex-1 outline-none border focus:border-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FinanceCalc Pro. All rights reserved. Professional financial calculations at your fingertips.
        </div>
      </div>
    </footer>
  );
}
