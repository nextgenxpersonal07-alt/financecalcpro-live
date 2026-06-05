
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Globe, 
  CheckCircle2,
  Send,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We've received your inquiry and will get back to you within 24 hours.",
    });
  };

  const contactMethods = [
    { 
      icon: Mail, 
      title: "Email Support", 
      detail: "support@financecalc.pro", 
      sub: "General inquiries and technical help",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      icon: MessageSquare, 
      title: "Business Inquiries", 
      detail: "partners@financecalc.pro", 
      sub: "Advertising and collaboration",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      detail: "+1 (555) 123-4567", 
      sub: "Mon-Fri from 9am to 6pm EST",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    }
  ];

  const faqs = [
    {
      q: "How accurate are the calculators?",
      a: "Our calculators use professional-grade financial algorithms. However, results are estimates. For legal or banking purposes, always verify with your financial institution."
    },
    {
      q: "Is my data shared with third parties?",
      a: "No. We value your privacy. Most calculations are performed locally in your browser. We never sell your financial data."
    },
    {
      q: "Do you offer professional financial advice?",
      a: "FinanceCalc Pro provides tools and AI-driven insights for educational purposes only. We are not certified financial advisors."
    },
    {
      q: "How can I suggest a new calculator tool?",
      a: "We love feedback! Use the contact form to suggest features. Most of our popular tools come directly from user suggestions."
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-headline font-bold">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our financial tools or interested in a partnership? Our team is ready to help you navigate your journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Info & Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactMethods.map((item, i) => (
                <Card key={i} className="border-none bg-muted/30 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="pt-6 flex gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="font-medium text-primary">{item.detail}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/10 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• <strong>General Support:</strong> Within 24 hours</p>
                <p>• <strong>Partnership Requests:</strong> 2-3 business days</p>
                <p>• <strong>Bug Reports:</strong> Investigated within 48 hours</p>
              </CardContent>
            </Card>

            <div className="p-6 bg-card border rounded-3xl space-y-4">
              <h4 className="font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Global Presence
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                While we are a remote-first team of financial enthusiasts, our main administrative hub is located in:
              </p>
              <p className="text-sm font-medium">
                123 Fintech Plaza, Suite 500<br />
                Innovation District, San Francisco, CA 94103
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="shadow-2xl border-primary/10 h-full overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Globe className="w-64 h-64" />
              </div>
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll route your request to the right department.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Received!</h3>
                    <p className="text-muted-foreground max-w-xs">
                      Thank you for reaching out. We've sent a confirmation to your email.
                    </p>
                    <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required className="bg-muted/50 border-none focus-visible:ring-1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="bg-muted/50 border-none focus-visible:ring-1" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required className="bg-muted/50 border-none focus-visible:ring-1" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..." 
                        className="min-h-[160px] bg-muted/50 border-none focus-visible:ring-1" 
                        required 
                      />
                    </div>

                    <Button className="w-full rounded-full h-14 text-lg font-bold shadow-lg shadow-primary/20 group" disabled={loading}>
                      {loading ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground italic">
                      By submitting this form, you agree to our Privacy Policy and terms of service.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold font-headline">Common Questions</h2>
            <p className="text-muted-foreground">Find quick answers to our most frequently asked questions.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border rounded-2xl px-6">
                <AccordionTrigger className="hover:no-underline font-bold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-primary-foreground space-y-8 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl lg:text-5xl font-bold font-headline">Join our community</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Follow us for weekly financial tips, market updates, and new calculator releases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((platform) => (
              <Button key={platform} variant="secondary" className="rounded-full px-8 font-bold">
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
