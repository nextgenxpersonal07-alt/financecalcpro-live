export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-4xl font-headline font-bold">Terms & <span className="text-primary">Conditions</span></h1>
        <p className="text-muted-foreground">Last updated: February 24, 2024</p>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FinanceCalc Pro, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Use of Calculators</h2>
            <p>
              Our calculators are designed for informational and educational purposes only. While we strive for absolute accuracy, the results provided are estimates and should not be considered definitive financial advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. AI Insights</h2>
            <p>
              AI-generated strategies and insights are based on user-provided data and general financial principles. These are not professional advisory services. Always consult with a certified financial planner before making significant financial decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Intellectual Property</h2>
            <p>
              All content, algorithms, and designs on FinanceCalc Pro are the intellectual property of our company. You may not reproduce or distribute any part of the website without written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
            <p>
              FinanceCalc Pro shall not be liable for any financial losses or damages resulting from the use of our tools or the information provided on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
