"use client";

import { useEffect } from "react";
import { trackHomeView } from "@/lib/clickstreamEvents";
import { useAuth } from "@/contexts/AuthContext";

const HomeTracker = () => {
  const { isSignedIn, userId, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackHomeView({
      userId,
      userLoginState: isSignedIn ? "logged_in" : "anonymous",
    });
  }, [isLoaded, isSignedIn, userId]);
  return null;
};

export default HomeTracker;
