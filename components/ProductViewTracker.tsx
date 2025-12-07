"use client";

import { useEffect } from "react";
import { trackProductView } from "@/lib/clickstreamEvents";
import { Product } from "@/sanity.types";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
  product: Product;
};

const ProductViewTracker = ({ product }: Props) => {
  const { isSignedIn, userId, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;
    if (typeof window !== "undefined") {
      (window as any).__global_clickstream_ignore_pageview = true;
    }
    trackProductView(product, {
      userId,
      userLoginState: isSignedIn ? "logged_in" : "anonymous",
    });
  }, [product, isLoaded, isSignedIn, userId]);
  return null;
};

export default ProductViewTracker;
