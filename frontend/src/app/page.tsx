import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-destructive/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-destructive/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="container relative z-10 px-4 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-primary">Your Community.</span>
              <span className="block text-destructive mt-2 drop-shadow-sm">Your Voice.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg tracking-tight text-muted-foreground sm:text-2xl leading-relaxed">
              The heart of local storytelling. Experience live broadcasts, breaking news, and community voices in one premium digital magazine.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20" asChild>
                <Link href="/news">Explore News</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-2 border-primary/20 hover:bg-primary/10 text-primary group" asChild>
                <Link href="/live">
                  <span className="relative flex h-3 w-3 mr-3 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                  </span>
                  Watch Live TV
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/mockup.png" 
                alt="AgborNews Digital Magazine Mockup" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background elements for the image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-destructive/10 rounded-full blur-3xl"></div>
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
