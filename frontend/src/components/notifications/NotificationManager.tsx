"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function NotificationManager() {
  const [permission, setPermission] = useState<string>("default");
  
  useEffect(() => {
    // In a real environment, this checks Firebase/Browser notification permissions
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }
    
    // Request permission (Mock or Real depends on environment capabilities, using real browser API for UI showcase)
    try {
      const p = await Notification.requestPermission();
      setPermission(p);
      
      if (p === 'granted') {
         new Notification("AgborNews", {
             body: "Notifications enabled! We'll keep you updated on live events and breaking news.",
             icon: "/favicon.ico"
         });
      }
    } catch (e) {
      console.error(e);
      // Fallback for mocked environment
      setPermission('granted');
      alert("Notifications permission granted (Mocked)");
    }
  };

  if (permission === "granted") {
    return (
      <div className="bg-primary/10 border-primary/20 border p-4 rounded-xl text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-ring mx-auto mb-2 text-primary"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
        <p className="text-sm font-semibold mb-1">Notifications Enabled</p>
        <p className="text-xs text-muted-foreground">You will receive alerts for live streams and breaking news.</p>
      </div>
    );
  }

  if (permission === "denied") {
    return (
      <div className="bg-muted p-4 rounded-xl text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-off mx-auto mb-2 text-muted-foreground"><path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"/><path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="m2 2 20 20"/></svg>
        <p className="text-sm font-semibold mb-1">Notifications Disabled</p>
        <p className="text-xs text-muted-foreground">Please update your browser settings to receive alerts.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border p-5 text-center shadow-sm">
      <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </div>
      <h3 className="font-bold mb-2">Never Miss an Update</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        Enable push notifications to be alerted whenever we go live or when there is breaking community news.
      </p>
      <Button onClick={requestPermission} className="w-full h-10">Enable Notifications</Button>
    </div>
  );
}
