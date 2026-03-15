"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminNewsPage() {
  const { user } = useAuth();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [section, setSection] = useState("General");
  const [isPublished, setIsPublished] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [liveLink, setLiveLink] = useState("");

  // In a real implementation this would fetch from backend API
  const mockCategories = [
    { _id: "1", name: "Local News" },
    { _id: "2", name: "Government" },
    { _id: "3", name: "Community Events" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting article:", { title, content, category, section, isPublished });
    // Implementation to call API goes here
    alert("Article created successfully! (Mock)");
  };

  if (!user || !user.isAdmin) {
    return <div className="p-8">Unauthorized Access</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage News & Articles</h1>
        <Button variant="outline">Back to Dashboard</Button>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6 pb-2 border-b">Create New Article</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="title">Article Title</label>
            <Input 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter headline..." 
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="category">Category</label>
              <select 
                id="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>Select Category</option>
                {mockCategories.map(cat => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
             <label className="block text-sm font-medium mb-2" htmlFor="section">Page Section Layout</label>
              <select 
                id="section"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="General">General News</option>
                <option value="Citizen of the Month">Citizen of the Month</option>
                <option value="Hope for Today">Hope for Today</option>
                <option value="Career Corner">Career Corner</option>
                <option value="Agbor in Pictures">Agbor in Pictures</option>
              </select>
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium mb-2" htmlFor="content">Article Content (Markdown/HTML supported in final version)</label>
             <textarea 
                id="content"
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px]"
                placeholder="Write the article content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
             ></textarea>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-muted/30 rounded-lg border border-dashed">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="isPublished"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
              />
              <label htmlFor="isPublished" className="text-sm font-medium">
                Publish immediately
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="isLive"
                checked={isLive}
                onChange={(e) => setIsLive(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-destructive focus:ring-destructive" 
              />
              <label htmlFor="isLive" className="text-sm font-medium text-destructive">
                Feature as LIVE (Streaming)
              </label>
            </div>

            {isLive && (
              <div className="animate-in slide-in-from-top-1">
                <label className="block text-sm font-medium mb-2" htmlFor="liveLink">Live Stream URL (StreamYard/YouTube)</label>
                <Input 
                  id="liveLink" 
                  value={liveLink} 
                  onChange={(e) => setLiveLink(e.target.value)} 
                  placeholder="https://youtube.com/live/..." 
                />
              </div>
            )}
          </div>

          <div className="pt-4 border-t flex justify-end">
            <Button type="submit">Save Article</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
