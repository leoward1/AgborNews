"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AIFeedWidget() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this would poll an AI service or backend endpoint periodically
    const mockAINewsFetch = () => {
      setTimeout(() => {
        setNews([
          {
            id: 'ai-1',
            title: 'AI Summary: Local City Council Approves New Budget',
            summary: 'The city council voted 7-2 last night to approve the 2026 fiscal budget, allocating increased funds for public parks and community centers.',
            source: 'Agbor Times + AI Analysis',
            time: '10 mins ago'
          },
          {
            id: 'ai-2',
            title: 'Traffic Alert: Major Delays on Highway 50',
            summary: 'Real-time AI traffic analysis reports a 45-minute delay on Highway 50 eastbound due to emergency roadworks.',
            source: 'Traffic Sensors + AI',
            time: '1 hour ago'
          },
          {
            id: 'ai-3',
            title: 'Weather Update: Expect Heavy Rain This Weekend',
            summary: 'Meteorological AI models predict an 80% chance of heavy thunderstorms starting Friday evening, urging residents to prepare.',
            source: 'Weather API + AI',
            time: '3 hours ago'
          }
        ]);
        setLoading(false);
      }, 1500); // Simulate network delay
    };

    mockAINewsFetch();
  }, []);

  return (
    <div className="bg-card border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="bg-secondary/20 p-4 border-b flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
        <h3 className="font-bold text-lg">AI News Feed</h3>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col gap-2 border-b pb-4 last:border-0 last:pb-0">
                <div className="h-5 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {news.map(item => (
              <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0 group">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary px-2 py-0.5 bg-primary/10 rounded-full">{item.source}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors cursor-pointer">{item.title}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">{item.summary}</p>
                <div className="flex gap-2">
                   <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">Read full article</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-3 border-t bg-muted/30 text-center">
        <Link href="/news" className="text-xs font-medium text-primary hover:underline flex items-center justify-center gap-1">
          View all recent news <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  );
}
