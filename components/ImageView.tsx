"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { getMediaUrl } from "@/lib/getMediaUrl";

interface Props {
  // Giờ chỉ còn là mảng URL ảnh (string[])
  images?: string[];
  isStock?: number;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasImages = images.length > 0;

  // 1. Lấy src “thô”
  const rawMainSrc = hasImages
    ? images[activeIndex]               // VD: "/images/products/product_1.png"
    : "/images/products/product_1.png"; // fallback

  // 2. Chuẩn hoá sang URL cuối cùng (S3 hoặc local tuỳ ENV)
  const mainSrc = getMediaUrl(rawMainSrc);

  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={mainSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden"
        >
          <Image
            src={mainSrc}
            alt="productImage"
            width={700}
            height={700}
            priority
            className={`w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md ${
              isStock === 0 ? "opacity-50" : ""
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* thumbnail list */}
      {hasImages && images.length > 1 && (
        <div className="grid grid-cols-6 gap-2 h-20 md:h-24">
          {images.map((img, index) => {
            const thumbSrc = getMediaUrl(img);

            return (
              <button
                key={`${img}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`border rounded-md overflow-hidden ${
                  activeIndex === index
                    ? "border-darkColor opacity-100"
                    : "opacity-80"
                }`}
              >
                <Image
                  src={thumbSrc}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageView;
