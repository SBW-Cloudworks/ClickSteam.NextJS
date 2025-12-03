// components/ProductCard.tsx
"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { StarIcon } from "@sanity/icons";
import { Flame } from "lucide-react";
import PriceView from "./PriceView";
import Title from "./Title";
import ProductSideMenu from "./ProductSideMenu";
import AddToCartButton from "./AddToCartButton";
import { urlFor } from "@/sanity/lib/image"; // cho case Sanity cũ
import { getMediaUrl } from "@/lib/getMediaUrl"; // ✅ thêm dòng này

// Dùng any cho mềm vì đang chuyển dần từ Sanity -> Prisma
const ProductCard = ({ product }: { product: any }) => {
  // 1. Lấy slug: Prisma (string) hoặc Sanity ({ current })
  const slug =
    typeof product?.slug === "string"
      ? product.slug
      : product?.slug?.current ?? "";

  // 2. Lấy ảnh: Prisma: string[] | Sanity: image[]
  let imageSrc = "/images/products/product_1.png"; // fallback

  if (Array.isArray(product?.images) && product.images.length > 0) {
    const first = product.images[0];

    if (typeof first === "string") {
      // ✅ Prisma: mảng string URL hoặc path
      imageSrc = first;
    } else if (first?.asset?._ref) {
      // ✅ Sanity: object image
      imageSrc = urlFor(first).url();
    }
  }

  // ✅ Chuẩn hoá sang URL S3 (hoặc giữ nguyên nếu là URL http)
  const finalImageSrc = getMediaUrl(imageSrc);

  // 3. Categories: Prisma: string[] , Sanity: array object / string
  const categoryText = (() => {
    if (!product?.categories) return "";

    // Prisma: ["Gadget", "Others"]
    if (
      Array.isArray(product.categories) &&
      typeof product.categories[0] === "string"
    ) {
      return product.categories.join(", ");
    }

    // Sanity: categories[]->title
    return product.categories
      .map((cat: any) => cat?.title ?? cat)
      .join(", ");
  })();

  const inStock = (product?.stock as number) ?? 0;

  // Map status -> text hiển thị
  const statusLabel =
    product?.status === "hot"
      ? "HOT"
      : product?.status === "new"
      ? "NEW"
      : product?.status
      ? "BEST DEAL"
      : "";

  return (
    <div className="text-sm border-[1px] rounded-md border-darkBlue/20 group bg-white">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {finalImageSrc && slug && (
          <Link href={`/product/${slug}`}>
            <Image
              src={finalImageSrc}
              alt={product?.name || "productImage"}
              width={500}
              height={500}
              priority
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
              ${inStock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}

        {/* Nút yêu thích, side menu */}
        <ProductSideMenu product={product} />

        {/* Badge status chung – KHÔNG còn chữ "Sale!" nữa */}
        {statusLabel && (
          <div className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow-sm">
            {product?.status === "hot" && (
              <Flame
                size={16}
                fill="#fb6c08"
                className="text-shop_orange/80"
              />
            )}
            <span className="uppercase tracking-wide text-gray-800">
              {statusLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col gap-2">
        {categoryText && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
            {categoryText}
          </p>
        )}

        <Title className="text-sm line-clamp-1">
          {product?.name ?? product?.title}
        </Title>

        {/* Rating giả để giữ UI */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={index < 4 ? "text-shop_light_green" : " text-lightText"}
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-lightText text-xs tracking-wide">5 Reviews</p>
        </div>

        {/* Giá: chỉ 1 giá, không kèm discount nữa */}
        <PriceView price={product?.price} className="text-sm" />

        <AddToCartButton product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
