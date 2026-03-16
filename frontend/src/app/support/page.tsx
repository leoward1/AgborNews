"use client";

import { Footer } from "@/components/Footer";
import { HelpCircle, MessageSquare, BookOpen, UserCheck, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const helpCategories = [
    {
      title: "Reading & Content",
      icon: <BookOpen className="h-6 w-6" />,
      description: "How to access full stories, troubleshoot live stream issues, or browse archives."
    },
    {
      title: "Account Support",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Issues with logging in, registering, or managing your personal profile."
    },
    {
      title: "Technical Help",
      icon: <HelpCircle className="h-6 w-6" />,
      description: "Website bugs, loading errors, or display issues on your mobile device."
    },
    {
      title: "Feedback & Tips",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Share your thoughts on site features or provide an anonymous news tip."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              We're here to <span className="text-primary italic">help.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about AgborNews? Search our resources or get in touch with our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {helpCategories.map((cat, i) => (
              <div key={i} className="bg-card border-4 border-zinc-100 dark:border-zinc-800 p-10 rounded-[2.5rem] flex items-start gap-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer">
                <div className="w-16 min-w-[64px] h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">{cat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl shadow-primary/30">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Can't find what you're looking for?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Drop us an email directly and we'll get back to you within 24 hours.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-2xl h-16 px-12 font-black text-xl" asChild>
               <Link href="/contact"><Mail className="mr-3 h-6 w-6" /> Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
