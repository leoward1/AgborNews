"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlayCircle, ArrowRight, Share2, Users, Rss, Globe } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[90vh] bg-background">
      <main className="flex-1 container px-4 py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          
          {/* Visual Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/not-found-road.png" 
                alt="Route Blocked - Under Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-destructive text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm shadow-lg">
                Traffic Update
              </div>
              <div className="absolute bottom-10 right-10 bg-primary text-white p-8 rounded-2xl shadow-2xl max-w-[240px] transform hover:scale-105 transition-transform">
                <h2 className="text-4xl font-black mb-2">404</h2>
                <p className="text-xs font-medium opacity-90 italic">"Ah-ah! Where you dey go?"</p>
              </div>
            </div>
          </div>

          {/* Text/Actions Side */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-destructive font-bold text-xs uppercase tracking-widest mb-4 block">Route Blocked</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
                Looks like this street is <span className="italic text-primary">under construction...</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                The report you're looking for might have been moved or archived. Let's get you back on the main road before the evening rush.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-md font-bold rounded-full shadow-lg shadow-primary/20" asChild>
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" /> Return Home
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="h-14 px-8 text-md font-bold rounded-full bg-muted/50 hover:bg-muted" asChild>
                <Link href="/live">
                  <PlayCircle className="mr-2 h-5 w-5 text-destructive" /> Watch Live TV
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t flex flex-wrap gap-x-8 gap-y-4 text-muted-foreground font-bold text-[10px] uppercase tracking-widest">
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" /> Share
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <Globe className="h-4 w-4" /> Follow
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <Users className="h-4 w-4" /> Community
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <Rss className="h-4 w-4" /> RSS
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Tertiary Section: Trending Now */}
      <section className="bg-muted/30 py-12 border-t">
        <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
             <span className="text-[10px] uppercase tracking-widest font-black text-destructive mb-2 block">Trending Now</span>
             <h3 className="text-2xl font-bold flex items-center group cursor-pointer">
               Agbor Central Market expansion project begins next week.
               <ArrowRight className="ml-3 h-6 w-6 text-muted-foreground group-hover:translate-x-2 transition-transform" />
             </h3>
          </div>
          <div className="w-full md:w-auto bg-primary text-white p-8 rounded-2xl flex items-center gap-6 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
               <Rss className="h-24 w-24" />
            </div>
            <div className="relative z-10">
               <h4 className="font-black text-lg mb-1">Live Radio</h4>
               <p className="text-xs opacity-80 mb-4 max-w-[150px]">Tune into the voice of the community, anywhere in the world.</p>
               <Button size="sm" variant="outline" className="text-[10px] font-black border-white/40 bg-white/10 hover:bg-white/20 text-white">LISTEN NOW →</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
