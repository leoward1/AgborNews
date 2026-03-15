"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Rss, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t">
      {/* Newsletter Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-black mb-4">Subscribe to our Newsletter</h2>
          <p className="text-muted-foreground mb-8 text-lg">Stay updated with the latest community news and live broadcasts.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto bg-white dark:bg-zinc-900 p-2 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="border-none bg-transparent focus-visible:ring-0 text-lg h-12"
              required
            />
            <Button size="lg" className="h-12 px-8 rounded-xl font-bold text-md shadow-lg shadow-primary/20">Sign Up</Button>
          </form>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">A</div>
              <span className="text-2xl font-black tracking-tighter">AgborNews</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              The heartbeat of our community, delivering verified news and live updates from the heart of Agbor to the world.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest mb-6 border-b pb-2 w-max border-primary/30">Explore</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/live" className="hover:text-primary transition-colors">Live TV</Link></li>
              <li><Link href="/agbor-in-pictures" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/career-corner" className="hover:text-primary transition-colors">Jobs</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest mb-6 border-b pb-2 w-max border-primary/30">Company</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/advertise" className="hover:text-primary transition-colors">Advertise</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest mb-6 border-b pb-2 w-max border-primary/30">Legal</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © 2026 AgborNews. All rights reserved. Built with pride for Agbor.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-[#1877F2] transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-[#E4405F] transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-[#FF0000] transition-colors"><Youtube className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500 transition-colors"><Rss className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
