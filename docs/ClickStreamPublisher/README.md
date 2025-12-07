# ClickStream Publisher (Functional Spec)

## Purpose
Client-side tracker for the Next.js frontend to emit clickstream events to API Gateway -> Lambda Ingest. Focus: auto page views, global click capture, custom events, and payload alignment to `docs/clickstream_dataframe.md`.

## Environment
- `NEXT_PUBLIC_CLICKSTREAM_ENDPOINT` (required): HTTP POST target for events.
- Optional (future batching): `NEXT_PUBLIC_CLICKSTREAM_BATCH_SIZE`, `NEXT_PUBLIC_CLICKSTREAM_FLUSH_INTERVAL_MS`.

## Components
- `lib/clickstreamClient.ts`
  - Identity: generates/persists `clientId` (localStorage), `sessionId` (sessionStorage), resets session after inactivity.
  - Builders: `trackPageView`, `trackClick`, `trackCustom` to normalize payload shape (eventId for idempotency, pageUrl, referrer, userId, userLoginState, client/session IDs, product/element info).
  - Element capture: tag/id/role/dataset, trimmed text (<=160 chars), skips sensitive inputs (password/email/tel/number).
  - Transport: fire-and-forget `fetch` with `keepalive`; logs every event to console. Warns if endpoint missing (dry-run).
- `lib/clickstreamEvents.ts`
  - Domain helpers that wrap `trackCustom` for dataframe events: `home_view`, `category_view`, `product_view`, `add_to_cart_click`, `remove_from_cart_click`, `wishlist_toggle`, `share_click`, `login_open`, `login_success`, `logout`, `checkout_start`, `checkout_complete`.
  - Builds product context (id, name, category, brand, price, discountPrice, urlPath) and lightweight cart/order context when applicable.
- `contexts/ClickstreamProvider.tsx`
  - Reads auth state (`useAuth`).
  - Emits `page_view` on initial mount and route changes (App Router via `usePathname`/`useSearchParams`).
  - Adds global `document` click listener to emit `click` events with element metadata.
- `app/layout.tsx`
  - Wraps app with `AuthProvider` + `ClickstreamProvider` so tracking is global.
- Tracker components:
  - `components/HomeTracker.tsx`: fires `home_view` and skips the global `page_view` once.
  - `components/CategoryTracker.tsx`: fires `category_view` and skips the global `page_view` once.
  - `components/ProductViewTracker.tsx`: fires `product_view` and skips the global `page_view` once.
- Instrumented UI:
  - `components/AddToCartButton.tsx`: fires `add_to_cart_click` (button marked `global-clickstream-ignore-click` to avoid duplicate `click`).
  - `components/FavoriteButton.tsx`: fires `wishlist_toggle` (button marked `global-clickstream-ignore-click`; sets one-time skip for global click).
  - `app/(client)/cart/page.tsx`: fires `checkout_start` and `checkout_complete`; remove item fires `remove_from_cart_click`; checkout/remove buttons marked `global-clickstream-ignore-click`.

## Event Payload (current)
- Base: `{ eventName, pageUrl, referrer, userId, userLoginState, clientId, sessionId, isFirstVisit }`
- Clicks: `{ element: { tag, id, role, text, dataset } }`
- Product/custom: `product` block when supplied by caller; `trackCustom(eventName, payload)` merges custom data.
- Domain helpers: use `trackCustom` via `clickstreamEvents.ts` for named events above to match dataframe expectations.

## Runtime Behavior
- Runs client-side only; no effect during SSR.
- Logs all events to console before sending; if endpoint missing, logs dry-run and skips network.
- Error handling: network errors only log to console; UI is non-blocking.

## Open Points
- Enum finalization for `eventName`, `user_login_state`, `identity_source`.
- Discount semantics (absolute vs percent) to compute `product_discount_price`.
- Batching/offline queue not implemented yet; hooks exist for future env-driven batching.
