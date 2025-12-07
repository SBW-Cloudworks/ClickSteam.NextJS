"use client";

import { useEffect } from "react";
import { trackHomeView } from "@/lib/clickstreamEvents";

const HomeTracker = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackHomeView();
  }, []);
  return null;
};

export default HomeTracker;
