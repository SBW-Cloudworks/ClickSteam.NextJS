// sanity/lib/live.ts

export const sanityFetch = async (_opts: any) => {
  console.warn("[Sanity live] sanityFetch() được gọi nhưng Sanity đã bị vô hiệu hoá.");
  return { data: null };
};

// Nếu layout vẫn render <SanityLive />, component này chỉ trả null, không làm gì
export const SanityLive = () => null;
