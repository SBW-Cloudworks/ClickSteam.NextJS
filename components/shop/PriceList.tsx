import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

// GIẢ ĐỊNH: giá trong DB là VND (1 = 1₫)
// Bạn có thể chỉnh lại dải giá tuỳ ý
const priceArray = [
  { title: "Dưới 10 triệu", value: "0-10000000" },
  { title: "10 - 20 triệu", value: "10000000-20000000" },
  { title: "20 - 30 triệu", value: "20000000-30000000" },
  { title: "30 - 40 triệu", value: "30000000-40000000" },
  { title: "Trên 40 triệu", value: "40000000-100000000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Khoảng giá (VNĐ)</Title>
      <RadioGroup
        className="mt-2 space-y-1"
        value={selectedPrice || ""}
        onValueChange={(val) => setSelectedPrice(val || null)}
      >
        {priceArray.map((price) => (
          <div
            key={price.value}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={price.value}
              id={price.value}
              className="rounded-sm"
            />
            <Label
              htmlFor={price.value}
              className={
                selectedPrice === price.value
                  ? "font-semibold text-shop_dark_green"
                  : "font-normal"
              }
            >
              {price.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
        >
          Xóa lọc giá
        </button>
      )}
    </div>
  );
};

export default PriceList;
