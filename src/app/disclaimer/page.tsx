import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-4xl font-headline font-bold">Legal <span className="text-primary">Disclaimer</span></h1>
        
        <Alert className="bg-primary/5 border-primary/20 p-6">
          <Info className="h-6 w-6 text-primary" />
          <AlertTitle className="text-xl font-bold ml-2">Important Information</AlertTitle>
          <AlertDescription className="mt-2 text-base leading-relaxed">
            Please read this disclaimer carefully before using the FinanceCalc Pro website.
          </AlertDescription>
        </Alert>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The information provided by FinanceCalc Pro ("we," "us," or "our") on this website is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Not Professional Advice</h2>
          <p>
            The financial calculators and AI insights provided on this platform are tools to assist you in your financial journey. They do not constitute professional financial, legal, or tax advice. The results of calculations are estimates based on user input and market assumptions which may vary over time.
          </p>
          <p>
            Before making any financial decisions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice. The use or reliance of any information contained on this site is solely at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-foreground">External Links</h2>
          <p>
            The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us.
          </p>

          <h2 className="text-2xl font-bold text-foreground">No Guarantee of Results</h2>
          <p>
            Financial markets and products (like loans and investments) are subject to risks and fluctuations. Past performance (such as interest rates or investment returns) is not indicative of future results.
          </p>
        </div>
      </div>
    </div>
  );
}
