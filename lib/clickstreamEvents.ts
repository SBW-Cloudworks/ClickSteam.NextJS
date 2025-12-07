"use client";

import { trackCustom } from "@/lib/clickstreamClient";
import { Product } from "@/sanity.types";

type ProductLike = Partial<Product> & {
  _id?: string;
  slug?: { current?: string } | string;
};

type UserContext = {
  userId?: string | null;
  userLoginState?: "logged_in" | "anonymous" | "guest";
};

const withUser = <T extends Record<string, any>>(payload: T, user?: UserContext) => {
  if (!user) return payload;
  return {
    ...payload,
    userId: user.userId ?? payload.userId,
    userLoginState: user.userLoginState ?? payload.userLoginState,
  };
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
  const brand =
    (product as any).brandName ||
    (product as any).brand?.name ||
    (product as any).brand?.title ||
    (product as any).brandId?.name ||
    (product as any).brand ||
    (product as any).producer ||
    undefined;

  return {
    id: (product as any)._id || (product as any).id,
    name: product.name,
    category: (product as any).variant || (product as any).category,
    brand,
    price,
    discountPrice: discountPrice ?? discount,
    urlPath: slug,
  };
};

export const trackHomeView = (user?: UserContext) =>
  trackCustom("home_view", withUser({}, user));

export const trackCategoryView = (
  opts: { categoryId?: string; categoryName?: string },
  user?: UserContext
) =>
  trackCustom(
    "category_view",
    withUser(
      {
        product: {
          category: opts.categoryName,
          id: opts.categoryId,
        },
      },
      user
    )
  );

export const trackProductView = (product?: ProductLike, user?: UserContext) =>
  trackCustom("product_view", withUser({ product: toProductContext(product) }, user));

export const trackAddToCart = (product?: ProductLike, user?: UserContext) =>
  trackCustom(
    "add_to_cart_click",
    withUser({ product: toProductContext(product) }, user)
  );

export const trackRemoveFromCart = (product?: ProductLike, user?: UserContext) =>
  trackCustom(
    "remove_from_cart_click",
    withUser({ product: toProductContext(product) }, user)
  );

export const trackWishlistToggle = (
  product?: ProductLike,
  toggledOn?: boolean,
  user?: UserContext
) =>
  trackCustom(
    "wishlist_toggle",
    withUser(
      {
        product: toProductContext(product),
        element: { dataset: { toggledOn: String(Boolean(toggledOn)) } },
      },
      user
    )
  );

export const trackShareClick = (product?: ProductLike, channel?: string, user?: UserContext) =>
  trackCustom(
    "share_click",
    withUser(
      {
        product: toProductContext(product),
        element: channel ? { dataset: { channel } } : undefined,
      },
      user
    )
  );

export const trackLoginOpen = (user?: UserContext) =>
  trackCustom("login_open", withUser({}, user));
export const trackLoginSuccess = (user?: UserContext) =>
  trackCustom("login_success", withUser({}, user));
export const trackLogout = (user?: UserContext) =>
  trackCustom("logout", withUser({}, user));

export const trackCheckoutStart = (
  opts: { cartId?: string; total?: number; itemCount?: number },
  user?: UserContext
) =>
  trackCustom(
    "checkout_start",
    withUser(
      {
        element: {
          dataset: {
            cartId: opts.cartId ?? "",
            total: opts.total !== undefined ? String(opts.total) : "",
            itemCount: opts.itemCount !== undefined ? String(opts.itemCount) : "",
          },
        },
      },
      user
    )
  );

export const trackCheckoutComplete = (
  opts: { orderId?: string; orderNumber?: string; total?: number },
  user?: UserContext
) =>
  trackCustom(
    "checkout_complete",
    withUser(
      {
        element: {
          dataset: {
            orderId: opts.orderId ?? "",
            orderNumber: opts.orderNumber ?? "",
            total: opts.total !== undefined ? String(opts.total) : "",
          },
        },
      },
      user
    )
  );
