// sanity/lib/client.ts


type AnyQuery = string | unknown;

export const client = {
  // Nếu còn chỗ nào lỡ gọi client.fetch(...) thì nó trả null, không crash
  fetch: async (_query: AnyQuery, _params?: Record<string, unknown>) => {
    console.warn("[Sanity client] fetch() được gọi nhưng Sanity đã bị vô hiệu hoá.");
    return null;
  },
} as const;
