"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                Get in <span className="text-primary italic underline underline-offset-8 decoration-destructive/30">Touch.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Have a tip? Want to report a story? Or just want to say hello? Use the form or our contact details below.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                  <p className="text-xl font-bold">info@agbornews.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-destructive rounded-2xl flex items-center justify-center text-white shadow-lg shadow-destructive/20 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                  <p className="text-xl font-bold">+234 (0) 800 AGBOR NEWS</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Visit Us</p>
                  <p className="text-xl font-bold">Old Lagos-Asaba Road, Agbor, Delta State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border-4 border-zinc-100 dark:border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20 space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl shadow-green-500/20">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-black">Message Sent!</h3>
                <p className="text-muted-foreground text-lg">Thank you for reaching out. Our editorial desk will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-xl px-8 h-12 font-bold">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-xl border-zinc-200 focus:ring-primary font-medium px-4" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-14 rounded-xl border-zinc-200 focus:ring-primary font-medium px-4" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest ml-1">Subject</label>
                  <Input placeholder="Story Tip / Advertising / Feedback" className="h-14 rounded-xl border-zinc-200 focus:ring-primary font-medium px-4" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest ml-1">Your Message</label>
                  <Textarea placeholder="Tell us more..." className="min-h-[160px] rounded-2xl border-zinc-200 focus:ring-primary font-medium p-4" required />
                </div>
                <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                  Send Message <Send className="ml-3 h-5 w-5" />
                </Button>
              </form>
            )}
            
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Mail className="h-64 w-64 rotate-12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
