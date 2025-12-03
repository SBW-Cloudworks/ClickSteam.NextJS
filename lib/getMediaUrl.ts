// lib/getMediaUrl.ts

const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "";

/**
 * Chuẩn hoá đường dẫn ảnh:
 * - Nếu đã là URL đầy đủ (http...) → giữ nguyên
 * - Nếu là /images/... → chuyển thành S3: BASE_URL + (bỏ /images)
 * - Nếu chưa có BASE_URL (chưa cấu hình S3) → trả lại path cũ để vẫn dùng ảnh local
 */
export function getMediaUrl(rawSrc: string | null | undefined): string {
  if (!rawSrc) {
    return "/images/products/product_1.png"; // fallback local
  }

  // Nếu đã là URL đầy đủ (Sanity, S3, CDN khác)
  if (rawSrc.startsWith("http://") || rawSrc.startsWith("https://")) {
    return rawSrc;
  }

  // Nếu chưa cấu hình S3, cho load từ /public như cũ
  if (!MEDIA_BASE_URL) {
    return rawSrc;
  }

  // Trường hợp common: "/images/products/product_1.png"
  if (rawSrc.startsWith("/images")) {
    const s3Path = rawSrc.replace(/^\/images/, ""); // "/products/product_1.png"
    return `${MEDIA_BASE_URL}${s3Path}`; // "https://bucket.../products/product_1.png"
  }

  // Nếu là "products/product_1.png" hay "/products/product_1.png"
  if (rawSrc.startsWith("/")) {
    return `${MEDIA_BASE_URL}${rawSrc}`;
  }

  return `${MEDIA_BASE_URL}/${rawSrc}`;
}
