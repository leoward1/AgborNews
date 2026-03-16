"use client";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Terms of Service</h1>
             <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the AgborNews website, you agree to be bound by these terms. If you do not agree, you may not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this site, including text, graphics, logos, and images, is the property of AgborNews and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the site for any unlawful purpose or any purpose prohibited under these Terms. You agree not to use the site in any way that could damage the site or general business of AgborNews.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                AgborNews will not be liable for any damages that may occur to you as a result of your use of our website. We are also not responsible for any information or content posted by users.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
