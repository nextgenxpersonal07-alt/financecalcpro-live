"use client"

import Link from "next/link";
import { Home, Calculator, TrendingUp, BookOpen, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calculator, label: "Tools", href: "/calculators" },
    { icon: TrendingUp, label: "Invest", href: "/investments" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
    { icon: User, label: "Profile", href: "/dashboard" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t px-2 h-[4.5rem] flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.1)] pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 w-full active:scale-95 ${
              isActive ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-primary/10' : ''}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : ''}`} />
            </div>
            <span className="text-[10px] uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
