"use client";

type LoginState = "logged_in" | "anonymous" | "guest";

export type ClickstreamProduct = {
  id?: string;
  name?: string;
  category?: string;
  brand?: string;
  price?: number;
  discountPrice?: number | null;
  urlPath?: string;
};

export type ClickstreamElement = {
  tag?: string;
  id?: string;
  role?: string | null;
  text?: string;
  dataset?: Record<string, string>;
};

export type ClickstreamEvent = {
  eventName: string;
  pageUrl?: string;
  referrer?: string | null;
  userId?: string | null;
  userLoginState?: LoginState;
  clientId?: string;
  sessionId?: string;
  isFirstVisit?: boolean;
  product?: ClickstreamProduct;
  element?: ClickstreamElement;
};

const STORAGE_KEYS = {
  clientId: "sbw_clickstream_client_id",
  sessionId: "sbw_clickstream_session_id",
  lastActivity: "sbw_clickstream_last_activity",
} as const;

const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
let missingEndpointWarned = false;

const isBrowser = typeof window !== "undefined";

const getEndpoint = () => process.env.NEXT_PUBLIC_CLICKSTREAM_ENDPOINT;

const makeId = () => {
  if (!isBrowser) return undefined;
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
};

const safeStorageGet = (
  storage: Storage | undefined,
  key: string
): string | null => {
  if (!storage) return null;
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const safeStorageSet = (
  storage: Storage | undefined,
  key: string,
  value: string
): void => {
  if (!storage) return;
  try {
    storage.setItem(key, value);
  } catch {
    // ignore
  }
};

const ensureIdentity = () => {
  if (!isBrowser) {
    return { clientId: undefined, sessionId: undefined, isFirstVisit: undefined };
  }

  const now = Date.now();
  let clientId = safeStorageGet(window.localStorage, STORAGE_KEYS.clientId);
  let isFirstVisit = false;
  if (!clientId) {
    clientId = makeId();
    if (clientId) {
      safeStorageSet(window.localStorage, STORAGE_KEYS.clientId, clientId);
      isFirstVisit = true;
    }
  }

  const lastActivityRaw = safeStorageGet(
    window.sessionStorage,
    STORAGE_KEYS.lastActivity
  );
  const lastActivity = lastActivityRaw ? Number(lastActivityRaw) : 0;
  let sessionId = safeStorageGet(window.sessionStorage, STORAGE_KEYS.sessionId);
  if (!sessionId || (lastActivity && now - lastActivity > SESSION_TIMEOUT_MS)) {
    sessionId = makeId();
  }

  if (sessionId) {
    safeStorageSet(window.sessionStorage, STORAGE_KEYS.sessionId, sessionId);
    safeStorageSet(window.sessionStorage, STORAGE_KEYS.lastActivity, `${now}`);
  }

  return { clientId, sessionId, isFirstVisit };
};

const extractElement = (target: EventTarget | null): ClickstreamElement => {
  if (!target || !(target instanceof HTMLElement)) return {};

  const tag = target.tagName?.toLowerCase();
  const id = target.id || undefined;
  const role = target.getAttribute("role");
  const dataset: Record<string, string> = {};

  Object.entries(target.dataset || {}).forEach(([k, v]) => {
    if (v) dataset[k] = v;
  });

  let text: string | undefined;
  const isSensitiveInput =
    tag === "input" &&
    ["password", "email", "tel", "number"].includes(
      target.getAttribute("type")?.toLowerCase() || ""
    );
  if (!isSensitiveInput) {
    const content = target.innerText || target.textContent || "";
    const trimmed = content.trim().replace(/\s+/g, " ");
    text =
      trimmed.length > 160
        ? `${trimmed.slice(0, 160)}...`
        : trimmed || undefined;
  }

  return { tag, id, role, text, dataset };
};

const buildBaseEvent = (eventName: string, user?: { userId?: string | null; userLoginState?: LoginState }) => {
  const { clientId, sessionId, isFirstVisit } = ensureIdentity();
  if (!isBrowser) return undefined;

  return {
    eventName,
    pageUrl: window.location.href,
    referrer: document.referrer || null,
    userId: user?.userId ?? null,
    userLoginState: user?.userLoginState ?? (user?.userId ? "logged_in" : "anonymous"),
    clientId,
    sessionId,
    isFirstVisit,
  };
};

export const trackPageView = (user?: { userId?: string | null; userLoginState?: LoginState }) => {
  const base = buildBaseEvent("page_view", user);
  if (!base) return;
  publishEvent(base);
};

export const trackClick = (params: {
  event?: MouseEvent;
  userId?: string | null;
  userLoginState?: LoginState;
}) => {
  if (typeof window !== "undefined" && (window as any).__global_clickstream_ignore_click_once) {
    delete (window as any).__global_clickstream_ignore_click_once;
    return;
  }
  const target = params.event?.target as HTMLElement | null;
  if (target && target.closest("[global-clickstream-ignore-click='true']")) {
    return;
  }
  const base = buildBaseEvent("click", {
    userId: params.userId,
    userLoginState: params.userLoginState,
  });
  if (!base) return;
  const element = extractElement(target ?? null);
  publishEvent({ ...base, element });
};

export const trackCustom = (eventName: string, payload: Partial<ClickstreamEvent> = {}) => {
  const base = buildBaseEvent(eventName, {
    userId: payload.userId,
    userLoginState: payload.userLoginState,
  });
  if (!base) return;
  publishEvent({ ...base, ...payload });
};

const publishEvent = async (event: ClickstreamEvent) => {
  if (!isBrowser) return;
  const endpoint = getEndpoint();
  if (!endpoint) {
    console.log("SBW Clickstream Publisher (dry-run: missing endpoint)", event);
    if (!missingEndpointWarned) {
      console.warn("Clickstream: NEXT_PUBLIC_CLICKSTREAM_ENDPOINT is not set; event not sent.");
      missingEndpointWarned = true;
    }
    return;
  }

  try {
    console.log("Clickstream ->", endpoint, event);
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      keepalive: true,
    });
  } catch (err) {
    console.error("Clickstream: failed to send event", err);
  }
};
