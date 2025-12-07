"use client";

import { useEffect, ReactNode, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackClick, trackPageView } from "@/lib/clickstreamClient";
import { useAuth } from "./AuthContext";

type ClickstreamProviderProps = {
  children: ReactNode;
};

const getLoginState = (isSignedIn: boolean): "logged_in" | "anonymous" | "guest" =>
  isSignedIn ? "logged_in" : "anonymous";

export function ClickstreamProvider({ children }: ClickstreamProviderProps) {
  const { isSignedIn, userId } = useAuth();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const userLoginState = useMemo(
    () => getLoginState(isSignedIn),
    [isSignedIn]
  );

  // Page views on initial load and route change
  useEffect(() => {
    if (!pathname) return;
    // If a page-level tracker already emitted a view event, skip the auto page_view once.
    const skip =
      typeof window !== "undefined" &&
      (window as any).__global_clickstream_ignore_pageview === true;
    if (skip && typeof window !== "undefined") {
      delete (window as any).__global_clickstream_ignore_pageview;
      return;
    }
    trackPageView({ userId, userLoginState });
  }, [pathname, searchParams, userId, userLoginState]);

  // Global click listener
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      trackClick({ event, userId, userLoginState });
    };
    document.addEventListener("click", handler, { passive: true });
    return () => document.removeEventListener("click", handler);
  }, [userId, userLoginState]);

  return <>{children}</>;
}
