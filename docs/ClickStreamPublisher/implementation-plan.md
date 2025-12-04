# Frontend Clickstream Publisher — Implementation Plan

Source: README.md §12 “Frontend Clickstream Tracking — Requirements for Agent”.
Goal: ship a lightweight client-side tracker in the Next.js app (Amplify hosted) that posts clickstream events to API Gateway (`NEXT_PUBLIC_CLICKSTREAM_ENDPOINT`).

## 1) Event payload baseline
- Base fields: `eventName`, `userId?`, `sessionId?`, `clientId?`, `pageUrl?`, `referrer?`, `userLoginState? ("guest" | "logged_in")`.
- Product fields (when applicable): `product: { id?, name?, category?, brand?, price?, discountPrice?, urlPath? }`.
- Click fields (when applicable): `element: { tag?, id?, role?, text?, dataset? }` (trim innerText, avoid sensitive inputs).
- One POST per event (v1). Lambda adds ingest metadata server-side.

## 2) IDs & lifecycle
- `clientId`: generate UUID on first load; persist in `localStorage` (or cookie fallback) under `sbw_clickstream_client_id`.
- `sessionId`: generate per tab/session; store in `sessionStorage` (key `sbw_clickstream_session_id`); optional reset after inactivity threshold (future).
- `userId` + `userLoginState`: read from auth context (Cognito/Clerk); treat missing as guest.

## 3) Tracking surfaces
- Page views: fire on initial mount + every client-side route change; payload includes `pageUrl`, `referrer`, IDs, login state.
- Clicks: global `document` click listener (client-only). Collect tag/id/role/text/dataset; ignore password fields and empty text; include pageUrl.
- Custom: expose `trackCustom(eventName, payload)` for future funnels (e.g., add_to_cart, checkout_start).

## 4) Network publisher
- Endpoint: `process.env.NEXT_PUBLIC_CLICKSTREAM_ENDPOINT` (required).
- Send via `fetch` POST JSON with `keepalive: true`; non-blocking, swallow errors (console.debug).
- Optional future toggles: batch (`NEXT_PUBLIC_CLICKSTREAM_BATCH_SIZE`, `NEXT_PUBLIC_CLICKSTREAM_FLUSH_INTERVAL_MS`), debounce for high-volume clicks.

## 5) Code structure to add
- `lib/clickstreamClient.ts`: pure client helpers (`getClientId`, `getSessionId`, `publishEvent`, `trackPageView`, `trackClick`, `trackCustom`).
- `contexts/ClickstreamProvider.tsx` (or `components/ClickstreamProvider.tsx`): React provider that initializes IDs, subscribes to router events for page views, attaches/removes global click listener. Guard against SSR via `useEffect`.
- Wiring:
  - App Router: wrap `app/layout.tsx` body (client component) with provider.
  - Pages Router (if used anywhere): wrap `_app.tsx`.
- Utilities: small helper to safely read dataset/text, and to trim text length (e.g., 120 chars).

## 6) Config & env
- Require `NEXT_PUBLIC_CLICKSTREAM_ENDPOINT` in `.env.local` / Amplify env vars.
- Keep future-ready vars: `NEXT_PUBLIC_CLICKSTREAM_BATCH_SIZE`, `NEXT_PUBLIC_CLICKSTREAM_FLUSH_INTERVAL_MS` (optional, default to single-event sends).

## 7) Testing / validation (manual for now)
- With endpoint set to a mock or dev API:
  - Load homepage → see one `page_view` POST with IDs present.
  - Navigate client-side → each route change posts `page_view` with updated `pageUrl` and `referrer`.
  - Click buttons/links → `click` POST includes element metadata.
  - Logged-in vs guest → `userLoginState` reflects state; `userId` populates when available.
- If no endpoint configured, tracker should no-op without breaking UI.

## 8) Out of scope (for now)
- No PII capture, no input value logging.
- No batching/retry queue (not until requested).
- No storage of sensitive auth tokens.
