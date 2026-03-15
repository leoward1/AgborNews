"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Play } from "lucide-react";

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

export default function CitizenMonthPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/articles?section=Citizen of the Month`);
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
  const pastRecipients = articles.slice(1);

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
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Citizen of the Month
        </h1>
        <p className="text-xl text-muted-foreground">
          Celebrating outstanding individuals who make our community a better place to live, work, and thrive.
        </p>
      </div>

      {/* Featured/Current Citizen */}
      {featured ? (
        <div className="bg-primary/5 border border-primary/20 rounded-3xl overflow-hidden mb-16 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-muted aspect-square md:aspect-auto w-full h-full min-h-[400px] relative">
              <img 
                src={featured.coverImage || "/images/citizen.png"} 
                alt={featured.title} 
                className="w-full h-full object-cover"
              />
              {featured.isLive && (
                <div className="absolute top-4 left-4 z-20 flex items-center bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                  </span>
                  <span className="text-white font-bold text-xs uppercase tracking-wider">Live Now</span>
                </div>
              )}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6 w-max">
                {new Date(featured.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <h2 className="text-3xl font-bold mb-4">{featured.title}</h2>
              <div 
                className="text-muted-foreground mb-6 text-lg leading-relaxed line-clamp-4"
                dangerouslySetInnerHTML={{ __html: featured.content }}
              />
              
              <div className="flex gap-4">
                {featured.isLive ? (
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white font-bold px-8 shadow-lg shadow-destructive/20" asChild>
                    <Link href={featured.liveLink || "/live"}>
                      <Play className="mr-2 h-5 w-5 fill-current" /> Watch Live
                    </Link>
                  </Button>
                ) : (
                  <Button size="lg" className="font-bold px-8" asChild>
                    <Link href={`/news/${featured.slug}`}>Read Full Story</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
          <p className="text-muted-foreground">No recent Citizen of the Month features found.</p>
        </div>
      )}

      {/* Past Recipients Grid */}
      {pastRecipients.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-8 pb-2 border-b">Past Honorees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastRecipients.map((article) => (
                <div key={article._id} className="bg-card rounded-2xl overflow-hidden border shadow-sm group hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={article.coverImage || "/images/citizen.png"} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-bold text-primary mb-2">
                      {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                    <h4 className="text-xl font-bold mb-2 line-clamp-1">{article.title}</h4>
                    <div 
                      className="text-muted-foreground text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    <Link href={`/news/${article.slug}`} className="text-sm font-semibold text-primary hover:underline">
                      View Story →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
