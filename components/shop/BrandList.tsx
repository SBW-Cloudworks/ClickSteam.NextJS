import { BRANDS_QUERYResult } from "@/sanity.types";
import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  brands: BRANDS_QUERYResult;
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Brands</Title>
      <RadioGroup
        value={selectedBrand || ""}
        className="mt-2 space-y-1"
        onValueChange={(val) => setSelectedBrand(val || null)}
      >
        {brands?.map((brand) => {
          const slug = brand?.slug?.current as string;
          return (
            <div
              key={brand?._id}
              className="flex items-center space-x-2 hover:cursor-pointer"
            >
              <RadioGroupItem value={slug} id={slug} className="rounded-sm" />
              <Label
                htmlFor={slug}
                className={
                  selectedBrand === slug
                    ? "font-semibold text-shop_dark_green"
                    : "font-normal"
                }
              >
                {/* Sanity brand dùng title; nếu sau này map từ Prisma thì đổi thành brand.name */}
                {brand?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {selectedBrand && (
        <button
          onClick={() => setSelectedBrand(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left"
        >
          Reset selection
        </button>
      )}
    </div>
  );
};

export default BrandList;
