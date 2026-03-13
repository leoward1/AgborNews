import { Button } from "@/components/ui/button";

export default function CareerCornerPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4 text-emerald-600 dark:text-emerald-500">
          Career Corner
        </h1>
        <p className="text-xl text-muted-foreground">
          Your portal for local job opportunities, career advice, and professional networking in our community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filters/Search Sidebar */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-card p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold mb-4">Search Jobs</h3>
                <input 
                  type="text" 
                  placeholder="Keywords (e.g. Manager)..." 
                  className="w-full mb-4 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                
                <h4 className="font-semibold text-sm mb-2 mt-4 text-muted-foreground">Job Type</h4>
                <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Internship'].map(type => (
                        <div key={type} className="flex items-center gap-2">
                            <input type="checkbox" id={type} className="rounded text-emerald-600 focus:ring-emerald-500"/>
                            <label htmlFor={type} className="text-sm">{type}</label>
                        </div>
                    ))}
                </div>

                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Find Jobs</Button>
            </div>
            
             <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900 shadow-sm text-center">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">Employers</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-4">Looking to hire local talent? Post your job opening here.</p>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-100 dark:hover:bg-emerald-900">Post a Job</Button>
            </div>
        </div>

        {/* Job Listings Main Area */}
        <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Latest Openings</h2>
                <span className="text-sm text-muted-foreground">Showing 1-10 of 42 jobs</span>
            </div>

            {[1, 2, 3, 4, 5].map((job) => (
                <div key={job} className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                                {job % 2 === 0 ? 'Full-time' : 'Part-time'}
                            </span>
                            <span className="text-xs text-muted-foreground">Posted 2 days ago</span>
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-emerald-600 transition-colors">
                            {job % 2 === 0 ? 'Senior Department Manager' : 'Customer Support Representative'}
                        </h3>
                        <div className="text-muted-foreground text-sm mt-1">
                            City Administration Office • Downtown Location
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto">
                        <Button className="w-full sm:w-auto">Apply Now</Button>
                    </div>
                </div>
            ))}
            
            <div className="pt-6 flex justify-center">
                <Button variant="outline">Load More Jobs</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
