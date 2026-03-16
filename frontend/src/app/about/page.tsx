"use client";

import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              Giving Agbor a <span className="text-primary italic underline decoration-destructive/30 underline-offset-8">Global Voice.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AgborNews is dedicated to delivering verified news, celebrating local excellence, and keeping our community connected, wherever you are.
            </p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-4 border-b-4 border-primary/20 pb-2 w-max">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in the heart of Agbor, our mission is simple yet powerful: to provides a reliable, high-quality, and accessible information hub for every citizen. We believe that a well-informed community is a thriving community. Through investigative journalism, community spotlights, and real-time updates, we strive to be the most trusted source of news in the region.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12 py-8">
              <div className="bg-muted p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-bold text-primary">Verified Journalism</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In an age of misinformation, we prioritize accuracy above all else. Every story we publish goes through a rigorous fact-checking process.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 space-y-4">
                <h3 className="text-2xl font-bold text-destructive">Community First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From "Citizen of the Month" to local sporting events, our focus remains on the people who make Agbor unique.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-4 border-b-4 border-primary/20 pb-2 w-max">Our Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We envision AgborNews as the primary bridge connecting Agbor natives at home and in the diaspora. By leveraging modern technology like Live TV streaming and interactive digital galleries, we are redefining how local news is consumed and shared in the 21st century.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
