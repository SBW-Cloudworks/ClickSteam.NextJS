import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  // discount là % giảm giá, ví dụ 10 nghĩa là giảm 10%
  discount?: number | null;
  className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  if (!price) return null;

  const discountValue = discount ?? 0;
  const hasDiscount = discountValue > 0;

  // price = giá đã giảm
  // giá gốc ≈ price / (1 - discount/100)
  const originalPrice = hasDiscount
    ? Math.round(price / (1 - discountValue / 100))
    : null;

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        {/* Giá hiện tại (đã giảm nếu có) */}
        <PriceFormatter
          amount={price}
          className={cn("text-shop_dark_green", className)}
        />

        {/* Chỉ hiển thị khi discount > 0 */}
        {hasDiscount && originalPrice && (
          <PriceFormatter
            amount={originalPrice}
            className={twMerge(
              "line-through text-xs font-normal text-zinc-500",
              className
            )}
          />
        )}
      </div>
    </div>
  );
};

export default PriceView;
