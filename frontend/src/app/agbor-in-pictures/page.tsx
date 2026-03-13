import { Button } from "@/components/ui/button";

export default function AgborInPicturesPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4 text-orange-600 dark:text-orange-500">
          Agbor in Pictures
        </h1>
        <p className="text-xl text-muted-foreground">
          A visual journey through the heart of our vibrant city. Explore the people, places, and events that define us.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {/* Placeholder Masonry Images */}
        {[
          { id: 1, aspect: 'aspect-[4/3]', title: 'Local Market Vibrance' },
          { id: 2, aspect: 'aspect-[3/4]', title: 'Sunset over Main Street' },
          { id: 3, aspect: 'aspect-square', title: 'Community Parade' },
          { id: 4, aspect: 'aspect-[3/4]', title: 'Historic Downtown Architecture' },
          { id: 5, aspect: 'aspect-[4/3]', title: 'City Park Summer Festival' },
          { id: 6, aspect: 'aspect-square', title: 'High School Championship Game' },
          { id: 7, aspect: 'aspect-[4/3]', title: 'New Library Grand Opening' },
          { id: 8, aspect: 'aspect-[3/5]', title: 'Cultural Performance Art' },
        ].map((img) => (
          <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
            <div className={`w-full bg-muted ${img.aspect} relative`}>
                {/* Real images would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                    <p className="text-white/80 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Photo by Local Contributor</p>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900 rounded-3xl p-8 lg:p-12">
         <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Have a great photo of our city?</h2>
         <p className="text-orange-700 dark:text-orange-400 mb-6 max-w-2xl mx-auto">
             We are always looking for stunning captures from around the community. Submit your photography to be featured in our gallery.
         </p>
         <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">Submit a Photo</Button>
      </div>
    </div>
  );
}
