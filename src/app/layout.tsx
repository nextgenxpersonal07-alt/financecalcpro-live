import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { Footer } from '@/components/navigation/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { PageHeader } from '@/components/navigation/page-header';

export const metadata: Metadata = {
  metadataBase: new URL('https://financecalcpro-live.vercel.app'),
  title: {
    default: 'FinanceCalc Pro | Premium Financial Calculators & AI Insights',
    template: '%s | FinanceCalc Pro',
  },
  description: 'The ultimate portal for loan calculations, investment planning, tax estimations, and personalized financial strategies. Accurate, fast, and free.',
  keywords: ['financial calculator', 'emi calculator', 'sip calculator', 'tax calculator', 'investment planning', 'finance portal', 'loan calculator'],
  authors: [{ name: 'FinanceCalc Pro Team' }],
  creator: 'FinanceCalc Pro',
  publisher: 'FinanceCalc Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://financecalcpro-live.vercel.app',
    siteName: 'FinanceCalc Pro',
    title: 'FinanceCalc Pro | Professional Financial Tools',
    description: 'Master your money with professional-grade calculators and AI-powered wealth strategies.',
    images: [
      {
        url: 'https://picsum.photos/seed/finance-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'FinanceCalc Pro Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinanceCalc Pro | Financial Tools',
    description: 'Plan your financial future with our suite of accurate calculators.',
    images: ['https://picsum.photos/seed/finance-og/1200/630'],
  },
  verification: {
    google: 'i-JprjrYos97SYakX0mU38D7foE9izCn0ODnPLLUtK8',
  },
  other: {
    monetag: '89b0ed9e4035f9159b5d59d58f135088',
  },
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
    "url": "https://financecalcpro-live.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://financecalcpro-live.vercel.app/calculators?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FinanceCalc Pro",
    "url": "https://financecalcpro-live.vercel.app",
    "logo": "https://financecalcpro-live.vercel.app/logo.png",
    "sameAs": [
      "https://twitter.com/financecalcpro",
      "https://linkedin.com/company/financecalcpro"
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script 
          src="https://quge5.com/88/tag.min.js" 
          data-zone="246495" 
          strategy="afterInteractive"
          data-cfasync="false"
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
