"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminStreamPage() {
  const { user } = useAuth();
  
  const [title, setTitle] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [status, setStatus] = useState("upcoming");
  const [scheduledTime, setScheduledTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting stream event:", { title, streamUrl, status, scheduledTime });
    // Implementation to call API goes here
    alert("Live Stream Event created successfully! (Mock)");
  };

  if (!user || !user.isAdmin) {
    return <div className="p-8">Unauthorized Access</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Live Stream Setup</h1>
        <Button variant="outline">Back to Dashboard</Button>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b">Schedule / Configure Stream</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="title">Event Title</label>
            <Input 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="e.g. Monthly Townhall Meeting" 
              required 
            />
          </div>

          <div>
             <label className="block text-sm font-medium mb-2" htmlFor="streamUrl">YouTube / StreamYard Embed URL</label>
            <Input 
              id="streamUrl" 
              value={streamUrl} 
              onChange={(e) => setStreamUrl(e.target.value)} 
              placeholder="https://www.youtube.com/embed/..." 
            />
            <p className="text-xs text-muted-foreground mt-1">Leave blank if the URL is not yet known.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="status">Event Status</label>
              <select 
                id="status"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="upcoming">Upcoming</option>
                <option value="live">Currently Live</option>
                <option value="past">Past / VOD</option>
              </select>
            </div>

            <div>
             <label className="block text-sm font-medium mb-2" htmlFor="scheduledTime">Scheduled Start Time</label>
              <Input 
              id="scheduledTime" 
              type="datetime-local"
              value={scheduledTime} 
              onChange={(e) => setScheduledTime(e.target.value)} 
              required 
            />
            </div>
          </div>

          <div className="pt-4 border-t flex justify-end">
            <Button type="submit">Save Stream Event</Button>
          </div>
        </form>
      </div>

      {/* Quick live control area for admins */}
      {status === 'live' && (
      <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 relative">
          <div className="absolute top-4 right-4">
             <span className="relative flex h-4 w-4 justify-center items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive"></span>
             </span>
          </div>
          <h2 className="text-xl font-bold text-destructive mb-2">Live Broadcast Active</h2>
          <p className="text-muted-foreground text-sm mb-4">Viewers are currently watching this stream. Use the controls below to manage the state.</p>
          <div className="flex gap-4">
             <Button variant="destructive">End Broadcast</Button>
             <Button variant="outline">Send Push Notification</Button>
          </div>
      </div>
      )}

    </div>
  );
}
