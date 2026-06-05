import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [`https://picsum.photos/seed/${post.image}/1200/630`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `https://picsum.photos/seed/${post.image}/1200/630`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "FinanceCalc Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://financecalcpro-live.vercel.app/logo.png"
      }
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <article className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-6">
          <Badge className="rounded-full px-4 py-1">{post.category}</Badge>
          <h1 className="text-3xl lg:text-5xl font-bold font-headline leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-t py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>6 min read</span>
            </div>
          </div>
        </header>

        <div className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl border">
          <Image
            src={`https://picsum.photos/seed/${post.image}/1200/675`}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 h-fit">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary">In this article</h4>
            <nav className="flex flex-col gap-4 text-sm">
              {post.content.sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="text-muted-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-3"
                >
                  {section.title}
                </a>
              ))}
              <a href="#faqs" className="text-muted-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-3">FAQs</a>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-12">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post.content.sections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-2xl font-bold font-headline">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </section>
              ))}
            </div>

            <section id="faqs" className="bg-muted/30 rounded-3xl p-8 space-y-6 scroll-mt-24">
              <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {post.content.faqs.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-bold flex gap-2">
                      <span className="text-primary italic">Q.</span> {faq.question}
                    </p>
                    <p className="text-sm text-muted-foreground pl-6 border-l-2 border-primary/20 italic">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative group">
              <CardContent className="p-8 space-y-4 relative z-10">
                <h3 className="text-2xl font-bold">Plan your goals with precision</h3>
                <p className="opacity-90 max-w-lg">Ready to see how these insights apply to your finances? Try our pro-grade calculators now.</p>
                <Link href="/calculators">
                  <Button variant="secondary" className="rounded-full mt-2 font-bold group-hover:px-8 transition-all">
                    Start Calculating <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Share2 className="w-32 h-32" />
              </div>
            </Card>
          </div>
        </div>

        <section className="pt-16 border-t space-y-8">
          <h3 className="text-2xl font-bold">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                <div className="space-y-3">
                  <div className="aspect-video relative rounded-2xl overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/seed/${rel.image}/600/400`} 
                      alt={rel.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
