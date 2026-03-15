"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AIFeedWidget } from "@/components/ai/AIFeedWidget";
import { NotificationManager } from "@/components/notifications/NotificationManager";
import { Loader2 } from "lucide-react";

const categories = ["All", "General", "Citizen of the Month", "Hope for Today", "Career Corner", "Agbor in Pictures"];

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

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const queryParams = activeCategory !== "All" ? `?section=${encodeURIComponent(activeCategory)}` : "";
        const res = await fetch(`http://localhost:5000/api/articles${queryParams}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        // If API returns empty and we are testing, use mock data
        if (data.length === 0) {
          setArticles(getMockArticles(activeCategory));
        } else {
          setArticles(data);
        }
      } catch (error) {
        console.warn("API unavailable, using mock data for demonstration.");
        setArticles(getMockArticles(activeCategory));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [activeCategory]);

  const getMockArticles = (category: string): Article[] => {
    const allMock: Article[] = [
      {
        _id: "1",
        title: "Community Center Project Breaks Ground",
        slug: "news-1",
        content: "City council members gathered today to overview the upcoming expansions to the local transit grid...",
        section: "General",
        createdAt: new Date().toISOString(),
        coverImage: "/images/general.png",
      },
      {
        _id: "2",
        title: "Citizen of the Month: Local Hero Honored",
        slug: "news-2",
        content: "A local elementary school teacher was honored for her 30 years of dedication to student success...",
        section: "Citizen of the Month",
        createdAt: new Date().toISOString(),
        coverImage: "/images/citizen.png",
      },
      {
        _id: "3",
        title: "A Message of Hope for the Community",
        slug: "news-3",
        content: "Finding strength in unity during challenging times. Our city remains strong and hopeful...",
        section: "Hope for Today",
        createdAt: new Date().toISOString(),
        coverImage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop",
      },
      {
        _id: "4",
        title: "New Job Openings at the Tech Hub",
        slug: "news-4",
        content: "Several positions are now open for software developers and project managers...",
        section: "Career Corner",
        createdAt: new Date().toISOString(),
        coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      },
      {
        _id: "5",
        title: "Spring Festival Captured in High Resolution",
        slug: "news-5",
        content: "Take a look at the most beautiful moments from this year's Agbor Spring Festival...",
        section: "Agbor in Pictures",
        createdAt: new Date().toISOString(),
        coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
      }
    ];

    if (category === "All") return allMock;
    return allMock.filter(a => a.section === category);
  };

  const getPlaceholderImage = (section: string) => {
    switch (section) {
      case "General": return "/images/general.png";
      case "Citizen of the Month": return "/images/citizen.png";
      case "Hope for Today": return "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop";
      case "Career Corner": return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop";
      case "Agbor in Pictures": return "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop";
      default: return "/images/general.png";
    }
  };

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Latest News
          </h1>
          <p className="mt-2 text-lg text-muted-foreground mr-1">
            Stay informed with our comprehensive community coverage.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full whitespace-nowrap"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main News Area */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link key={article._id} href={`/news/${article.slug}`} className="group block h-full">
                  <article className="flex flex-col h-full bg-card rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/50 relative">
                    <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
                      <img 
                        src={article.coverImage || getPlaceholderImage(article.section)} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                          {article.section || "General"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                        <time dateTime={article.createdAt}>{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                        <span>•</span>
                        <span>{article.content ? Math.ceil(article.content.split(' ').length / 200) : 5} min read</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <div 
                        className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1"
                        dangerouslySetInnerHTML={{ __html: article.content?.substring(0, 150) + '...' }}
                      />
                      <div className="flex items-center gap-2 mt-auto">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs uppercase">
                          {article.author?.name ? article.author.name.substring(0, 2) : "ED"}
                        </div>
                        <span className="text-sm font-medium">{article.author?.name || "Editorial Desk"}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-muted/20 rounded-2xl border-2 border-dashed border-muted">
              <h3 className="text-xl font-bold mb-2 text-foreground">No articles found</h3>
              <p className="text-muted-foreground">Try selecting a different category or check back later.</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="w-full h-full lg:col-span-1 space-y-8">
            <div className="sticky top-20 h-max space-y-8">
               <div className="h-[450px]">
                  <AIFeedWidget />
               </div>
               <div>
                  <NotificationManager />
               </div>
            </div>
        </div>
      </div>
      
      {articles.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
}
