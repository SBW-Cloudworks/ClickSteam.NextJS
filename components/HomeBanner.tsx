import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { getMediaUrl } from "@/lib/getMediaUrl";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Thiết Bị Công Nghệ Chính Hãng <br />
          Chất Lượng – Uy Tín – Giá Tốt
        </Title>

        <Link
          href={"/shop"}
          className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
        >
          Mua Ngay
        </Link>
      </div>
      <div>
        <Image
          src={getMediaUrl("/images/banner/banner_1.png")}   
          alt="Main banner"
          width={400}
          height={400}
          className="hidden md:inline-flex w-96 h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default HomeBanner;
