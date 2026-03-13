import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HopeForTodayPage() {
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
            <div className="bg-card rounded-2xl overflow-hidden border shadow-sm h-full flex flex-col">
              <div className="aspect-[2/1] bg-muted relative">
                {/* Image Placeholder */}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3">Daily Devotional</div>
                <h2 className="text-3xl font-bold mb-4">Finding Strength in Times of Uncertainty</h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed flex-1">
                  In our rapidly changing world, it is easy to feel overwhelmed. However, history and faith teach us that human resilience shines brightest in the dark. Today's reflection draws upon community resilience...
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t">
                  <span className="text-sm text-muted-foreground">By Rev. Michael Thomas • 5 min read</span>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            </div>
        </div>

        {/* Sidebar - Quick Reads & Quotes */}
         <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-6 text-center shadow-sm">
              <svg className="w-8 h-8 mx-auto text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-lg italic font-medium text-foreground mb-4">
                "Hope is being able to see that there is light despite all of the darkness."
              </p>
              <footer className="text-sm text-muted-foreground">— Desmond Tutu</footer>
            </div>

            <div className="bg-card rounded-xl border shadow-sm p-6 line-clamp-2">
                <h3 className="font-bold mb-4 border-b pb-2">Recent Reflections</h3>
                <div className="space-y-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <h4 className="text-sm font-semibold group-hover:text-blue-600 transition-colors">The Power of Forgiveness in Community Building</h4>
                            <p className="text-xs text-muted-foreground mt-1">March {12-i}, 2026</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
