"use client";

import { useEffect } from "react";
import { trackCategoryView } from "@/lib/clickstreamEvents";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
  categoryId?: string;
  categoryName?: string;
  slug?: string;
};

const CategoryTracker = ({ categoryId, categoryName, slug }: Props) => {
  const { isSignedIn, userId, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackCategoryView(
      { categoryId: categoryId ?? slug, categoryName },
      { userId, userLoginState: isSignedIn ? "logged_in" : "anonymous" }
    );
  }, [categoryId, categoryName, slug, isLoaded, isSignedIn, userId]);
  return null;
};

export default CategoryTracker;
