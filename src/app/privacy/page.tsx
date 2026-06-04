export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-4xl font-headline font-bold">Privacy <span className="text-primary">Policy</span></h1>
        <p className="text-muted-foreground">Last updated: February 24, 2024</p>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Welcome to FinanceCalc Pro. We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our financial calculators and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Data We Collect</h2>
            <p>
              We collect information that you voluntarily provide when using our calculators, such as loan amounts, interest rates, and investment goals. We also collect basic technical data like your IP address and browser type for security and analytics purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. How We Use Your Data</h2>
            <p>
              Your data is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Perform accurate financial calculations.</li>
              <li>Provide personalized AI-driven financial insights.</li>
              <li>Improve our tools and user experience.</li>
              <li>Send newsletters if you have subscribed.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. Your calculation inputs are processed securely, and we do not sell your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Cookies</h2>
            <p>
              We use cookies to remember your preferences (such as dark mode) and for analytics. You can disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at support@financecalc.pro.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
