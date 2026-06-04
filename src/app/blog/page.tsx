
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const categories = ["All", "Investing", "Mutual Funds", "Tax Saving", "Retirement", "Loans", "Stock Market"];
  
  const posts = [
    { id: 1, title: "How to save your first $100k", category: "Investing", author: "Sarah Jenkins", date: "Feb 20, 2024", img: "investing" },
    { id: 2, title: "The hidden costs of a mortgage", category: "Loans", author: "Mike Ross", date: "Feb 18, 2024", img: "tax-planning" },
    { id: 3, title: "Mutual funds vs ETFs: Which is right for you?", category: "Mutual Funds", author: "Emily Chen", date: "Feb 15, 2024", img: "retirement" },
    { id: 4, title: "Planning for retirement in your 20s", category: "Retirement", author: "Alex Brown", date: "Feb 12, 2024", img: "finance-hero" },
    { id: 5, title: "Tax hacks for freelancers in 2024", category: "Tax Saving", author: "Jessica White", date: "Feb 10, 2024", img: "tax-planning" },
    { id: 6, title: "Psychology of money: Why we overspend", category: "Investing", author: "Sarah Jenkins", date: "Feb 05, 2024", img: "investing" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-headline font-bold">Finance <span className="text-primary">Journal</span></h1>
        <p className="text-muted-foreground text-lg">Expert insights, market trends, and personal finance strategies to help you grow your wealth.</p>
        <div className="relative max-w-md mx-auto pt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full border-primary/20" />
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
        {posts.map((post) => (
          <Card key={post.id} className="group overflow-hidden border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-4">
              <div className="aspect-[16/10] relative rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={`https://picsum.photos/seed/${post.img}/800/600`}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-black border-none backdrop-blur-sm">{post.category}</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline leading-snug hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg" className="rounded-full px-12">Load More Articles</Button>
      </div>
    </div>
  );
}
