"use client";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container px-4 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Disclaimer</h1>
             <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided by AgborNews on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not researched, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The site cannot and does not contain legal/medical/fitness/health advice. The informational content is provided for general informational and educational purposes only and is not a substitute for professional advice.
              </p>
            </section>

            <p className="italic text-muted-foreground pt-8 border-t">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
