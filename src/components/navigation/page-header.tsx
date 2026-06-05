"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_CALCULATORS } from "@/lib/calculators";

const PATH_MAP: Record<string, string> = {
  "calculators": "Calculators",
  "investments": "Investments",
  "blog": "Blog",
  "about": "About Us",
  "contact": "Contact Us",
  "privacy": "Privacy Policy",
  "terms": "Terms & Conditions",
  "disclaimer": "Disclaimer",
  "loans": "Loan Center",
  "tax": "Tax Hub",
  "mutual-funds": "Mutual Funds",
  "fixed-deposits": "Fixed Deposits",
  "stock-market": "Stock Market",
  "retirement-planning": "Retirement Planning",
  "tools": "Tools",
  "ocr": "Document OCR"
};

export function PageHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const getLabel = (segment: string) => {
    const calculator = ALL_CALCULATORS.find(c => c.href.endsWith(segment));
    if (calculator) return calculator.title;
    return PATH_MAP[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length <= 1) {
      router.push('/');
    } else {
      router.back();
    }
  };

  return (
    <div className="container mx-auto pt-6 pb-2 animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBack}
            className="group p-0 h-auto hover:bg-transparent text-muted-foreground hover:text-primary transition-all flex items-center"
          >
            <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center mr-3 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-sm transition-all">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </div>
            <span className="font-bold text-sm tracking-tight">Back</span>
          </Button>
        </div>

        <nav className="flex items-center space-x-1 text-xs font-medium text-muted-foreground overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link href="/" className="flex items-center hover:text-primary transition-colors shrink-0">
            <Home className="w-3 h-3 mr-1" />
            Home
          </Link>
          
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const label = getLabel(segment);

            return (
              <React.Fragment key={href}>
                <ChevronRight className="lucide lucide-chevron-right w-3 h-3 opacity-50 shrink-0" />
                {isLast ? (
                  <span className="text-primary font-bold truncate max-w-[150px]">{label}</span>
                ) : (
                  <Link href={href} className="flex items-center hover:text-primary transition-colors shrink-0">
                    {label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
