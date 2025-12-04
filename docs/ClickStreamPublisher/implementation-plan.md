# ClickStream Publisher - Frontend Implementation Plan

## Scope
- Build a client-side clickstream tracker for the Next.js frontend that posts events to API Gateway -> Lambda Ingest.
- Cover auto page views, global click capture, and a small API for custom events.
- Align payload fields with `docs/clickstream_dataframe.md`; enum constraints will be finalized later.

## Deliverables
- `lib/clickstreamClient.ts` (or similar) with `trackPageView`, `trackClick`, `trackCustom`.
- React provider/hook to init IDs, wire routing events, and attach global listeners.
- Config/readme notes for required env vars and usage.

## Assumptions / Dependencies
- Env: `NEXT_PUBLIC_CLICKSTREAM_ENDPOINT` available at runtime. Optional: batching vars for future use.
- Next.js router type must be detected: App Router (`usePathname` + `useSearchParams` + `useEffect` on changes) or Pages Router (`router.events`).
- Auth context exposes `userId` and login state; values may be null/undefined when not logged in.

## Work Plan
1) IDs & session management
   - Generate/persist `clientId` (UUID) in localStorage/cookie.
   - Generate `sessionId` per tab/session; reset after inactivity threshold (configurable).
   - Track `isFirstVisit` based on `clientId` presence.

2) Event builder
   - Normalize payload fields to match dataframe columns (pageUrl, referrer, userId, userLoginState, clientId, sessionId, product, element).
   - Ensure client-only execution; guard against SSR (`typeof window === "undefined"`).
   - Trim/limit `element.text` length; skip sensitive inputs (password fields, etc.).

3) Transport
   - `fetch` POST to `NEXT_PUBLIC_CLICKSTREAM_ENDPOINT` with JSON body, `keepalive: true`.
   - Fire-and-forget; log errors to console only. Prepare hook points for optional batching (size/interval envs).

4) Page view tracking
   - On initial client mount and on route change, emit `page_view` with pageUrl/referrer/user info/client/session.
   - Implement router-agnostic detection (App vs Pages) behind a small helper.

5) Click tracking
   - Add global `document` click listener; collect element metadata (`tag`, `id`, `role`, trimmed `innerText`, `dataset`).
   - Emit `click` event with pageUrl/user/client/session and element info.

6) Custom/product events integration
   - Expose `trackCustom(eventName, payload)` for future flows (e.g., product interactions).
   - Provide helper to enrich product context (id/name/category/brand/price/discountPrice/urlPath) when available from page data.

7) Testing & verification
   - Manual flows: page load, route change, click on elements, logged-in vs guest.
   - Verify network requests hit the endpoint with expected JSON shape; ensure no crashes on missing env or offline.

## Open Questions / To Finalize
- Exact enum set for `eventName`, `user_login_state`, `identity_source` (can ship flexible and tighten later).
- Discount semantics (absolute vs percent) to compute `product_discount_price` consistently.
