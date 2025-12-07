"use client";

import { useEffect } from "react";
import { trackCategoryView } from "@/lib/clickstreamEvents";

type Props = {
  categoryId?: string;
  categoryName?: string;
  slug?: string;
};

const CategoryTracker = ({ categoryId, categoryName, slug }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackCategoryView({ categoryId: categoryId ?? slug, categoryName });
  }, [categoryId, categoryName, slug]);
  return null;
};

export default CategoryTracker;
