import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CitizenMonthPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Citizen of the Month
        </h1>
        <p className="text-xl text-muted-foreground">
          Celebrating outstanding individuals who make our community a better place to live, work, and thrive.
        </p>
      </div>

      {/* Featured/Current Citizen */}
      <div className="bg-primary/5 border border-primary/20 rounded-3xl overflow-hidden mb-16 shadow-lg">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-muted aspect-square md:aspect-auto w-full h-full min-h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
               [Hero Image Placeholder]
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6 w-max">
              March 2026
            </div>
            <h2 className="text-3xl font-bold mb-4">Dr. Sarah Jenkins</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Dr. Jenkins has dedicated over 20 years to providing free weekend clinics for underprivileged families in our community. Her tireless efforts have ensured that hundreds of children receive basic healthcare...
            </p>
            <Button size="lg" className="w-max">Read Full Story</Button>
          </div>
        </div>
      </div>

      {/* Past Recipients Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-8 pb-2 border-b">Past Honorees</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card rounded-2xl overflow-hidden border shadow-sm group hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted relative">
                  {/* Image Placeholder */}
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-primary mb-2">February 2026</div>
                  <h4 className="text-xl font-bold mb-2">Marcus Chen</h4>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    Recognized for organizing the city-wide urban garden initiative that transformed 12 abandoned lots into thriving community food sources.
                  </p>
                  <Link href={`/citizen-of-the-month/past-${item}`} className="text-sm font-semibold text-primary hover:underline">
                    View Story →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
