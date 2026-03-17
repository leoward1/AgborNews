"use client";

import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Target, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function AdvertisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black text-xs uppercase tracking-widest mb-4">
               <Megaphone className="h-4 w-4" /> Grow with AgborNews
             </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              Reach the Heart of <span className="text-primary italic">Agbor.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect your brand with a highly engaged local and diaspora community through our multi-channel advertising platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border-2 border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-xl hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black mb-2">Local Reach</h3>
              <p className="text-muted-foreground">Target thousands of active residents in Agbor and surrounding areas daily.</p>
            </div>
            <div className="bg-card border-2 border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-xl hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black mb-2">Global Diaspora</h3>
              <p className="text-muted-foreground">Connect with Agbor sons and daughters living in Europe, Americas, and Asia.</p>
            </div>
            <div className="bg-card border-2 border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-xl hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black mb-2">High Engagement</h3>
              <p className="text-muted-foreground">Our readers spend average 5+ minutes exploring our articles and live TV content.</p>
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to start?</h2>
                 <p className="text-zinc-400 text-lg leading-relaxed">
                   We offer custom packages for banner ads, sponsored articles, and live stream mentions during our news broadcasts. Let our marketing desk create a strategy that works for your budget.
                 </p>
                 <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-2xl h-14 px-8 font-black text-md" asChild>
                    <Link href="/contact"><Mail className="mr-3 h-5 w-5" /> Request Rate Card</Link>
                 </Button>
               </div>
               <div className="hidden lg:block">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm space-y-6 transform rotate-3">
                     <div className="space-y-2">
                        <div className="h-4 w-1/2 bg-white/20 rounded-full"></div>
                        <div className="h-10 w-full bg-white/10 rounded-xl"></div>
                     </div>
                     <div className="space-y-2">
                        <div className="h-4 w-1/3 bg-white/20 rounded-full"></div>
                        <div className="h-10 w-full bg-white/10 rounded-xl"></div>
                     </div>
                     <div className="pt-4 h-14 w-full bg-primary rounded-xl"></div>
                  </div>
               </div>
             </div>
             <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
