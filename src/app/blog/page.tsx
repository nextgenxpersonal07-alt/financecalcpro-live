
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata = {
  title: "Financial Journal & Blog | FinanceCalc Pro",
  description: "Expert insights, market trends, and personal finance strategies to help you grow your wealth.",
};

export default function BlogPage() {
  const categories = ["All", "Investing", "Mutual Funds", "Tax Saving", "Retirement", "Loans", "Personal Finance"];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-headline font-bold">Finance <span className="text-primary">Journal</span></h1>
        <p className="text-muted-foreground text-lg">Master your money with professional insights and wealth strategies.</p>
        <div className="relative max-w-md mx-auto pt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full border-primary/20 bg-muted/20" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat, i) => (
          <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="rounded-full px-6">
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group overflow-hidden border-none shadow-none bg-transparent hover:translate-y-[-4px] transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="aspect-[16/10] relative rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={`https://picsum.photos/seed/${post.image}/800/600`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="finance blog"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-none font-bold">{post.category}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-headline leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center text-primary text-xs font-bold pt-2">
                    Read Article <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg" className="rounded-full px-12">View More Insights</Button>
      </div>
    </div>
  );
}
