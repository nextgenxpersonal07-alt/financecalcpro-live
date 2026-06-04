
"use client"

import Link from "next/link";
import { Search, Menu, Moon, Sun, Calculator, TrendingUp, Landmark, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Calculator className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:inline-block">FinanceCalc <span className="text-primary">Pro</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link>
          <Link href="/investments" className="hover:text-primary transition-colors">Investments</Link>
          <Link href="/loans" className="hover:text-primary transition-colors">Loans</Link>
          <Link href="/tax" className="hover:text-primary transition-colors">Tax</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-2 flex-1 max-w-sm ml-auto">
          <div className="relative w-full hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search calculators..."
              className="pl-8 bg-muted/50 border-none focus-visible:ring-1"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="hidden md:flex rounded-full px-6 font-semibold">
            Join Pro
          </Button>
        </div>
      </div>
    </header>
  );
}
