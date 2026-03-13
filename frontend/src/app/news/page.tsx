import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AIFeedWidget } from "@/components/ai/AIFeedWidget";
import { NotificationManager } from "@/components/notifications/NotificationManager";

const categories = ["All", "General", "Citizen of the Month", "Hope for Today", "Career Corner", "Agbor in Pictures"];

export default function NewsPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Latest News
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Stay informed with our comprehensive community coverage.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
        {categories.map((category, idx) => (
          <Button 
            key={category} 
            variant={idx === 0 ? "default" : "outline"}
            className="rounded-full whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main News Area */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder News Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link key={item} href={`/news/placeholder-${item}`} className="group block h-full">
            <article className="flex flex-col h-full bg-card rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/50 relative">
              <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    Categories
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                  <time dateTime="2026-03-12">March 12, 2026</time>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Breaking: Major developments in local infrastructure projects announced today
                </h2>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                  City council members gathered today to overview the upcoming expansions to the local transit grid which is expected to reduce commute times by up to 30%.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs uppercase">
                    ED
                  </div>
                  <span className="text-sm font-medium">Editorial Desk</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
        </div>
        
        {/* Sidebar */}
        <div className="w-full h-full lg:col-span-1 space-y-8">
            <div className="sticky top-20 h-max space-y-8">
               {/* Fixed height for ai widget */}
               <div className="h-[450px]">
                  <AIFeedWidget />
               </div>
               
               {/* Notification Subscription */}
               <div>
                  <NotificationManager />
               </div>
            </div>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}
