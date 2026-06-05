"use client"

import Link from "next/link";
import { Search, Moon, Sun, Calculator as CalcIcon, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { ALL_CALCULATORS, type Calculator } from "@/lib/calculators";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Calculator[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = ALL_CALCULATORS.filter(calc => {
        const query = searchQuery.toLowerCase();
        return (
          calc.title.toLowerCase().includes(query) ||
          calc.keywords.some(kw => kw.toLowerCase().includes(query)) ||
          calc.description.toLowerCase().includes(query)
        );
      });
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSelect = (href: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    setMobileSearchOpen(false);
    router.push(href);
  };

  if (!mounted) return null;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || mobileSearchOpen ? 'bg-background/95 backdrop-blur-md border-b shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto h-16 flex items-center justify-between gap-4">
        {!mobileSearchOpen && (
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <CalcIcon className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="font-headline font-bold text-lg sm:text-xl tracking-tight">FinanceCalc <span className="text-primary">Pro</span></span>
          </Link>
        )}

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link>
          <Link href="/investments" className="hover:text-primary transition-colors">Investments</Link>
          <Link href="/loans" className="hover:text-primary transition-colors">Loans</Link>
          <Link href="/tax" className="hover:text-primary transition-colors">Tax</Link>
          <Link href="/tools/ocr" className="hover:text-primary transition-colors">Tools</Link>
        </nav>

        <div className={`flex items-center gap-2 ${mobileSearchOpen ? 'flex-1' : 'ml-auto relative'}`} ref={searchRef}>
          {/* Desktop & Mobile Search Input */}
          <div className={`${mobileSearchOpen ? 'flex' : 'hidden'} md:flex relative w-full items-center gap-2`}>
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length > 0 && setShowDropdown(true)}
                className="pl-9 pr-8 bg-muted/50 border-none focus-visible:ring-1 h-10 rounded-full w-full"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {mobileSearchOpen && (
              <Button variant="ghost" size="sm" onClick={() => setMobileSearchOpen(false)} className="md:hidden">
                Cancel
              </Button>
            )}
          </div>

          {/* Search Suggestions Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
              <div className="max-h-[60vh] md:max-h-[300px] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((calc) => (
                      <button
                        key={calc.href}
                        onClick={() => handleSelect(calc.href)}
                        className="w-full text-left p-3 hover:bg-muted rounded-xl transition-colors flex items-center justify-between group"
                      >
                        <div className="min-w-0">
                          <p className="font-bold text-sm truncate">{calc.title}</p>
                          <p className="text-xs text-muted-foreground">{calc.category}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground text-sm">
                    No calculators found
                  </div>
                )}
              </div>
            </div>
          )}

          {!mobileSearchOpen && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileSearchOpen(true)}
                className="rounded-full md:hidden"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full shrink-0"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Link href="/calculators">
                <Button className="hidden md:flex rounded-full px-6 font-semibold shrink-0">
                  View Tools
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
