
"use client"

import Link from "next/link";
import { Home, Calculator, TrendingUp, BookOpen, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calculator, label: "Calcs", href: "/calculators" },
    { icon: TrendingUp, label: "Invest", href: "/investments" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
    { icon: User, label: "Profile", href: "/dashboard" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t px-4 h-16 flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
