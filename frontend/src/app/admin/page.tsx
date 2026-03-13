"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Protect route: Ensure only admins can view
    if (user && !user.isAdmin) {
      router.push("/");
    } else if (!user && isClient) {
       router.push("/login"); // This assumes the app context is fully loaded - better to have a loading state
    }
  }, [user, router, isClient]);

  if (!isClient) return null; // Avoid hydration mismatch
  if (!user || !user.isAdmin) return null;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-100 dark:bg-zinc-900 border-r p-6 shrink-0">
        <h2 className="text-xl font-bold mb-8 text-primary">Admin Control</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="block px-3 py-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-foreground font-medium">
            Dashboard
          </Link>
          <Link href="/admin/news" className="block px-3 py-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-muted-foreground hover:text-foreground transition-colors">
            Manage News & Ads
          </Link>
          <Link href="/admin/stream" className="block px-3 py-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-muted-foreground hover:text-foreground transition-colors">
            Live Stream Setup
          </Link>
          <Link href="/admin/users" className="block px-3 py-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-muted-foreground hover:text-foreground transition-colors">
            User Accounts
          </Link>
        </nav>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <Button variant="outline">Generate Report</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          {[{title: "Total Subscribers", value: "2,405"}, {title: "Published Articles", value: "142"}, {title: "Live Viewers", value: "0"}, {title: "Active Ads", value: "12"}].map(stat => (
            <div key={stat.title} className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Content Activity</h2>
          </div>
          <div className="p-0">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">Title / Subject</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium">Mayor's Annual Speech</td>
                  <td className="px-6 py-4">Article</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">Published</span>
                  </td>
                  <td className="px-6 py-4">Today, 2:00 PM</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
                <tr className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium">Town Hall Stream</td>
                  <td className="px-6 py-4">Live Event</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-medium">Scheduled</span>
                  </td>
                  <td className="px-6 py-4">Tomorrow, 10:00 AM</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
