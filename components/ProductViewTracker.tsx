"use client";

import { useEffect } from "react";
import { trackProductView } from "@/lib/clickstreamEvents";
import { Product } from "@/sanity.types";

type Props = {
  product: Product;
};

const ProductViewTracker = ({ product }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackProductView(product);
  }, [product]);
  return null;
};

export default ProductViewTracker;
