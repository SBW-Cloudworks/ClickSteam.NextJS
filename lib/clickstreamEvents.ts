"use client";

import { trackCustom } from "@/lib/clickstreamClient";
import { Product } from "@/sanity.types";

type ProductLike = Partial<Product> & {
  _id?: string;
  slug?: { current?: string } | string;
};

const toProductContext = (product?: ProductLike) => {
  if (!product) return undefined;
  const slug =
    typeof product.slug === "string"
      ? product.slug
      : product.slug?.current
      ? `/product/${product.slug.current}`
      : undefined;
  const price =
    typeof product.price === "number"
      ? product.price
      : Number(product.price) || undefined;
  const discount =
    typeof (product as any).discount === "number"
      ? (product as any).discount
      : Number((product as any).discount) || undefined;
  const discountPrice =
    typeof (product as any).discountPrice === "number"
      ? (product as any).discountPrice
      : Number((product as any).discountPrice) || undefined;

  return {
    id: (product as any)._id || (product as any).id,
    name: product.name,
    category: (product as any).variant || (product as any).category,
    brand: (product as any).brand || (product as any).producer,
    price,
    discountPrice: discountPrice ?? discount,
    urlPath: slug,
  };
};

export const trackHomeView = () => trackCustom("home_view");

export const trackCategoryView = (opts: { categoryId?: string; categoryName?: string }) =>
  trackCustom("category_view", {
    product: {
      category: opts.categoryName,
      id: opts.categoryId,
    },
  });

export const trackProductView = (product?: ProductLike) =>
  trackCustom("product_view", { product: toProductContext(product) });

export const trackAddToCart = (product?: ProductLike) =>
  trackCustom("add_to_cart_click", { product: toProductContext(product) });

export const trackRemoveFromCart = (product?: ProductLike) =>
  trackCustom("remove_from_cart_click", { product: toProductContext(product) });

export const trackWishlistToggle = (product?: ProductLike, toggledOn?: boolean) =>
  trackCustom("wishlist_toggle", {
    product: toProductContext(product),
    element: { dataset: { toggledOn: String(Boolean(toggledOn)) } },
  });

export const trackShareClick = (product?: ProductLike, channel?: string) =>
  trackCustom("share_click", {
    product: toProductContext(product),
    element: channel ? { dataset: { channel } } : undefined,
  });

export const trackLoginOpen = () => trackCustom("login_open");
export const trackLoginSuccess = () => trackCustom("login_success");
export const trackLogout = () => trackCustom("logout");

export const trackCheckoutStart = (opts: { cartId?: string; total?: number; itemCount?: number }) =>
  trackCustom("checkout_start", {
    element: {
      dataset: {
        cartId: opts.cartId ?? "",
        total: opts.total !== undefined ? String(opts.total) : "",
        itemCount: opts.itemCount !== undefined ? String(opts.itemCount) : "",
      },
    },
  });

export const trackCheckoutComplete = (opts: { orderId?: string; orderNumber?: string; total?: number }) =>
  trackCustom("checkout_complete", {
    element: {
      dataset: {
        orderId: opts.orderId ?? "",
        orderNumber: opts.orderNumber ?? "",
        total: opts.total !== undefined ? String(opts.total) : "",
      },
    },
  });
