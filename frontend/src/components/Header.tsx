"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className="inline-block font-extrabold text-xl tracking-tighter text-foreground">AgborNews</span>
          </Link>
          <nav className="hidden gap-6 lg:flex">
            <Link
              href="/"
              className="flex items-center text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/news"
              className="flex items-center text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
               href="/citizen-of-the-month"
               className="flex items-center text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
               Citizen of the Month
            </Link>
            <Link
               href="/hope-for-today"
               className="flex items-center text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
               Hope for Today
            </Link>
             <Link
               href="/career-corner"
               className="flex items-center text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
               Jobs
            </Link>
            <Link
              href="/live"
              className="flex items-center text-sm font-bold text-destructive hover:text-destructive/80 transition-colors uppercase tracking-widest gap-2"
            >
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
              </span>
              Live TV
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
               {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Hi, {user.name.split(' ')[0]}</span>
                  {user.isAdmin && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin">Dashboard</Link>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6" asChild>
                    <Link href="/register">Subscribe</Link>
                  </Button>
                </div>
              )}
            </div>
            
            {/* Mobile Nav Toggle Icon - placeholder for now */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Toggle Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
        </div>
      </div>
    </header>
  );
}
