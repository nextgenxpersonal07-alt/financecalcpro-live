
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { Footer } from '@/components/navigation/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { PageHeader } from '@/components/navigation/page-header';

export const metadata: Metadata = {
  title: 'FinanceCalc Pro | Premium Financial Calculators',
  description: 'The ultimate portal for loan calculations, investment planning, tax estimations, and personalized financial strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FinanceCalc Pro",
    "url": "https://financecalc.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://financecalc.pro/calculators?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <PageHeader />
          <main className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <MobileNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
