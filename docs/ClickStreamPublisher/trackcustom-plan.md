# Plan: Implement domain-specific trackCustom events

Target event names (per dataframe): home_view / category_view / product_view / add_to_cart_click / remove_from_cart_click / wishlist_toggle / share_click / login_open / login_success / logout / checkout_start / checkout_complete.

## Approach
- Keep auto `page_view` and `click` at root (no change).
- Add a helper module (e.g., `lib/clickstreamEvents.ts`) exporting typed wrappers that call `trackCustom` with normalized eventName and required context.
- Wire helpers into the relevant components/pages.

## Helpers to add
- `trackHomeView()`
- `trackCategoryView({ categoryId, categoryName })`
- `trackProductView(productContext)`
- `trackAddToCart(productContext)`
- `trackRemoveFromCart(productContext)`
- `trackWishlistToggle(productContext, { toggledOn?: boolean })` (optional flag)
- `trackShareClick(productContext, { channel?: string })` (optional)
- `trackLoginOpen()`
- `trackLoginSuccess()`
- `trackLogout()`
- `trackCheckoutStart(cartContext)`
- `trackCheckoutComplete(orderContext)`

ProductContext shape: `{ id, name, category, brand, price, discountPrice, urlPath }`.
CartContext/OrderContext: minimal fields available in frontend (e.g., cartId/orderId, total, item count); keep lightweight.

## Where to wire
- home_view: home page load (app/(client)/page.tsx or layout effect).
- category_view: category listing page render (use route params/category slug).
- product_view: product detail page render (has product data).
- add_to_cart_click: cart add handler/button.
- remove_from_cart_click: cart remove handler/button.
- wishlist_toggle: wishlist button handler.
- share_click: share button handler (product/other share actions).
- login_open: when login modal/page opens.
- login_success: after successful auth.
- logout: after sign-out.
- checkout_start: when user enters checkout flow (e.g., navigate to checkout page).
- checkout_complete: after order success (e.g., success page render).

## Implementation steps
1) Create `lib/clickstreamEvents.ts` exporting helpers that call `trackCustom`.
2) Import and invoke in relevant components/pages:
   - Home page, category page, product page (views).
   - Cart/wishlist/share buttons.
   - Auth flows (login open/success/logout).
   - Checkout flow (start/complete).
3) Ensure product context is passed where available; use route/product data.
4) Keep helpers tolerant (no-ops on missing context).
5) Test manually: verify console logs show correct eventName and payload.
