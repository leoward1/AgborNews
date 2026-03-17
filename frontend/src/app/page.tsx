import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#fafafa] dark:bg-zinc-950 overflow-hidden">
        {/* Advanced Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[150px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-destructive/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Official Community Hub</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-[-0.04em] leading-[0.9] lg:leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              <span className="block text-zinc-900 dark:text-white mb-2">Your</span>
              <span className="block text-primary">Community.</span>
              <span className="block italic text-destructive drop-shadow-sm mt-2">Your Voice.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-xl md:text-2xl tracking-tight text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              The heart of local storytelling. Experience live broadcasts, breaking news, and community voices in one <span className="text-zinc-900 dark:text-white font-bold underline decoration-primary/30 decoration-4">premium digital magazine.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
              <Button size="lg" className="h-16 px-10 rounded-2xl text-xl font-black shadow-2xl shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all bg-primary hover:bg-primary/90" asChild>
                <Link href="/news">Read Latest</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl font-black border-4 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 shadow-xl transition-all hover:scale-[1.02] active:scale-95 group" asChild>
                <Link href="/live" className="flex items-center">
                  <span className="relative flex h-4 w-4 mr-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                  </span>
                  Watch TV
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full group perspective-[2000px] animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white dark:border-zinc-900 transform rotate-[-2deg] group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
              <img 
                src="/images/mockup.png" 
                alt="AgborNews Digital Magazine Mockup" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating Stats Badges */}
            <div className="absolute top-[10%] -left-12 z-20 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-white/10 hidden md:block animate-bounce-slow">
               <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Active Readers</p>
               <p className="text-3xl font-black text-primary">12.5k+</p>
            </div>

            <div className="absolute bottom-[20%] -right-8 z-20 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-white/10 hidden md:block animate-bounce-slow delay-700">
               <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Live Now</p>
               <p className="text-3xl font-black text-destructive italic">Agbor AM</p>
            </div>

            {/* Decorative background depth */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-destructive/5 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Quick Sections Grid */}
      <section className="py-24 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Citizen of the Month", href: "/citizen-of-the-month", color: "bg-blue-600", desc: "Honoring local heroes." },
              { title: "Hope for Today", href: "/hope-for-today", color: "bg-red-600", desc: "Daily inspiration." },
              { title: "Career Corner", href: "/career-corner", color: "bg-emerald-600", desc: "Local job opportunities." },
              { title: "Agbor in Pictures", href: "/agbor-in-pictures", color: "bg-orange-500", desc: "A visual city journey." },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group relative overflow-hidden rounded-2xl border p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background">
                <div className={`w-12 h-1.5 ${item.color} rounded-full mb-6`}></div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                <div className="mt-6 text-sm font-bold text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Headlines</h2>
              <p className="text-muted-foreground">Stories that matter to you, updated hourly.</p>
            </div>
            <Button variant="link" className="text-primary font-bold" asChild>
              <Link href="/news">View All Stories</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Featured */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="aspect-[16/9] rounded-3xl bg-muted overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-xs font-bold text-destructive uppercase tracking-widest mb-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-max">Breaking News</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 line-clamp-2">New Community Center Project Breaks Ground in Downtown</h3>
                  <p className="text-white/80 text-lg mb-4 line-clamp-2">The $12M project is expected to bring over 200 jobs and a state-of-the-art youth facility to the heart of our city by 2027.</p>
                  <div className="flex items-center text-white/60 text-sm font-medium">
                    <span>By News Desk</span>
                    <span className="mx-2">•</span>
                    <span>March 12, 2026</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side list */}
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-24 rounded-2xl bg-muted flex-shrink-0 overflow-hidden"></div>
                  <div>
                    <span className="text-xs font-bold text-primary">Category</span>
                    <h4 className="font-bold text-lg leading-snug mt-1 group-hover:text-primary transition-colors line-clamp-2">Local Students Win National Science Competition with New Solar Design</h4>
                    <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
