"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Play, Quote } from "lucide-react";

interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  section: string;
  createdAt: string;
  coverImage: string;
  isLive?: boolean;
  liveLink?: string;
  author?: {
    name: string;
  };
}

export default function HopeForTodayPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/articles?section=Hope for Today`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const featured = articles[0];
  const recentReflections = articles.slice(1);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4 text-blue-600 dark:text-blue-400">
          Hope for Today
        </h1>
        <p className="text-xl text-muted-foreground">
          Inspiring stories, devotionals, and uplifting messages to encourage your spirit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Featured Inspirational Post */}
        <div className="lg:col-span-2">
            {featured ? (
              <div className="bg-card rounded-2xl overflow-hidden border shadow-sm h-full flex flex-col">
                <div className="aspect-[2/1] bg-muted relative">
                  <img 
                    src={featured.coverImage || "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop"} 
                    alt={featured.title} 
                    className="w-full h-full object-cover"
                  />
                  {featured.isLive && (
                    <div className="absolute top-4 left-4 z-20 flex items-center bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                      </span>
                      <span className="text-white font-bold text-xs uppercase tracking-wider">Live Stream</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">Daily Devotional</div>
                  <h2 className="text-3xl font-bold mb-4">{featured.title}</h2>
                  <div 
                    className="text-muted-foreground mb-6 text-lg leading-relaxed flex-1 line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: featured.content }}
                  />
                  <div className="flex justify-between items-center mt-auto pt-6 border-t gap-4">
                    <span className="text-sm text-muted-foreground">By {featured.author?.name || "Editorial Desk"} • {Math.ceil(featured.content.split(' ').length / 200)} min read</span>
                    
                    {featured.isLive ? (
                      <Button className="bg-destructive hover:bg-destructive/90 text-white font-bold px-6 shadow-lg shadow-destructive/20" asChild>
                        <Link href={featured.liveLink || "/live"}>
                          <Play className="mr-2 h-4 w-4 fill-current" /> Watch Live
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" asChild>
                        <Link href={`/news/${featured.slug}`}>Read More</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-20 bg-muted/20 border-2 border-dashed rounded-3xl">
                <p className="text-muted-foreground">No inspirational posts found for today.</p>
              </div>
            )}
        </div>

        {/* Sidebar - Quick Reads & Quotes */}
         <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-6 text-center shadow-sm">
              <Quote className="w-8 h-8 mx-auto text-blue-400 mb-4" />
              <p className="text-lg italic font-medium text-foreground mb-4">
                "Hope is being able to see that there is light despite all of the darkness."
              </p>
              <footer className="text-sm text-muted-foreground">— Desmond Tutu</footer>
            </div>

            <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="font-bold mb-4 border-b pb-2">Recent Reflections</h3>
                <div className="space-y-4">
                    {recentReflections.length > 0 ? recentReflections.map(article => (
                        <Link key={article._id} href={`/news/${article.slug}`} className="group block">
                            <h4 className="text-sm font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">{article.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                                {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                            </p>
                        </Link>
                    )) : (
                      <p className="text-xs text-muted-foreground italic">No past reflections found.</p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
