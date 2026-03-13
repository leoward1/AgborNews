import { Button } from "@/components/ui/button";

export default function LiveTVPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Live TV
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Watch community broadcasts and live events in real-time.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          Currently Live
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Player Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border relative">
            {/* YouTube Live / StreamYard Iframe Integration */}
            <iframe 
                src={`https://www.youtube.com/embed/${process.env.NEXT_PUBLIC_LIVE_STREAM_ID || 'jfKfPfyJRdk'}?autoplay=1&mute=1`} 
                title="Live Stream Broadcast"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-card p-6 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Community Town Hall Meeting</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>Hosted by: NewsMag Plus</span>
              <span>•</span>
              <span>1,204 watching</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Join us for the monthly community town hall meeting where we discuss local development, upcoming events, and address citizen concerns.
            </p>
          </div>
        </div>

        {/* Sidebar / Chat / Up Next Area */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl border shadow-sm h-[400px] flex flex-col">
            <div className="p-4 border-b font-semibold bg-muted/50 rounded-t-xl">
              Live Chat
            </div>
            <div className="flex-1 p-4 flex flex-col items-center justify-center text-muted-foreground text-center">
              <p className="mb-4">Chat is available for subscribers only.</p>
              <Button variant="outline" className="w-full">Sign in to chat</Button>
            </div>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-4">
            <h3 className="font-semibold mb-4 pb-2 border-b">Upcoming Schedule</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="text-sm font-bold w-16 text-primary flex-shrink-0">
                    {i + 4}:00 PM
                  </div>
                  <div>
                    <h4 className="text-sm font-medium line-clamp-1">Evening News Digest</h4>
                    <p className="text-xs text-muted-foreground">General News</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
