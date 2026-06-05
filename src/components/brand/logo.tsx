
"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(154, 68%, 50%)" />
              <stop offset="100%" stopColor="hsl(154, 68%, 35%)" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Calculator Body */}
          <rect
            x="15"
            y="20"
            width="70"
            height="70"
            rx="12"
            fill="currentColor"
            className="text-foreground/10"
          />
          <rect
            x="15"
            y="20"
            width="70"
            height="70"
            rx="12"
            stroke="url(#logoGradient)"
            strokeWidth="4"
          />
          
          {/* Calculator Screen */}
          <rect x="28" y="35" width="44" height="12" rx="3" fill="url(#logoGradient)" fillOpacity="0.2" />
          
          {/* Buttons */}
          <circle cx="34" cy="62" r="5" fill="currentColor" className="text-foreground/20" />
          <circle cx="50" cy="62" r="5" fill="currentColor" className="text-foreground/20" />
          <circle cx="66" cy="62" r="5" fill="currentColor" className="text-foreground/20" />
          <circle cx="34" cy="76" r="5" fill="currentColor" className="text-foreground/20" />
          <circle cx="50" cy="76" r="5" fill="currentColor" className="text-foreground/20" />
          
          {/* Growth Arrow */}
          <path
            d="M55 80 L85 50 M85 50 L85 70 M85 50 L65 50"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
          />
        </svg>
      </div>
      
      {!iconOnly && (
        <span className={cn(
          "font-headline font-bold tracking-tight text-foreground",
          size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl"
        )}>
          FinanceCalc <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/70">Pro</span>
        </span>
      )}
    </div>
  );
}
