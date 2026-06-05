
export interface Calculator {
  title: string;
  href: string;
  description: string;
  category: string;
  keywords: string[];
}

export const ALL_CALCULATORS: Calculator[] = [
  // Loans
  { title: "EMI Calculator", href: "/calculators/emi", description: "Equated Monthly Installment calculator", category: "Loans", keywords: ["loan", "emi", "mortgage", "repayment"] },
  { title: "Home Loan", href: "/calculators/home-loan", description: "Housing finance and amortization", category: "Loans", keywords: ["loan", "house", "mortgage", "property"] },
  { title: "Personal Loan", href: "/calculators/personal-loan", description: "Calculate interest for personal needs", category: "Loans", keywords: ["loan", "personal", "cash", "credit"] },
  { title: "Car Loan", href: "/calculators/car-loan", description: "Vehicle finance calculator", category: "Loans", keywords: ["loan", "car", "vehicle", "auto"] },
  { title: "Education Loan", href: "/calculators/education-loan", description: "Student loan repayment planner", category: "Loans", keywords: ["loan", "student", "education", "college"] },
  { title: "Business Loan", href: "/calculators/business-loan", description: "Scale your business with easy credit", category: "Loans", keywords: ["loan", "business", "commercial", "expansion"] },
  
  // Investments
  { title: "SIP Calculator", href: "/calculators/sip", description: "Systematic Investment Plan returns", category: "Investments", keywords: ["sip", "mutual fund", "investment", "wealth"] },
  { title: "Lumpsum", href: "/calculators/lumpsum", description: "One-time investment growth", category: "Investments", keywords: ["lumpsum", "investment", "one-time", "mutual fund"] },
  { title: "FD Calculator", href: "/calculators/fd", description: "Fixed Deposit maturity value", category: "Investments", keywords: ["fd", "fixed deposit", "savings", "safe"] },
  { title: "RD Calculator", href: "/calculators/rd", description: "Recurring Deposit interest", category: "Investments", keywords: ["rd", "recurring deposit", "monthly savings", "bank"] },
  { title: "Mutual Fund", href: "/calculators/mutual-fund", description: "MF growth projections", category: "Investments", keywords: ["mf", "mutual fund", "equity", "returns"] },
  
  // Planning & Taxes
  { title: "Income Tax", href: "/calculators/tax", description: "FY 2024-25 Tax Liability", category: "Planning", keywords: ["tax", "income tax", "salary", "regime"] },
  { title: "Retirement", href: "/calculators/retirement", description: "Retirement corpus calculator", category: "Planning", keywords: ["retirement", "pension", "old age", "corpus"] },
  { title: "Inflation", href: "/calculators/inflation", description: "Impact of inflation on wealth", category: "Planning", keywords: ["inflation", "purchasing power", "price rise", "cost"] },
  { title: "GST Calculator", href: "/calculators/gst", description: "Goods and Service Tax calculator", category: "Planning", keywords: ["gst", "tax", "invoice", "indirect tax"] },
  
  // Savings
  { title: "Simple Interest", href: "/calculators/simple-interest", description: "Standard interest calculator", category: "Savings", keywords: ["interest", "simple", "principal", "returns"] },
  { title: "Compound Interest", href: "/calculators/compound-interest", description: "Power of compounding tool", category: "Savings", keywords: ["compound", "interest", "wealth", "growth"] },
  { title: "Savings Goal", href: "/calculators/savings-goal", description: "Save for a specific target", category: "Savings", keywords: ["goal", "target", "save", "plan"] },
];
