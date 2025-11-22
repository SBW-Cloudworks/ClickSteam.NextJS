// components/PriceFormatter.tsx
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined | null;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  if (amount == null) {
    return (
      <span
        className={twMerge("text-sm font-semibold text-darkColor", className)}
      >
        Đang cập nhật
      </span>
    );
  }

  const value = Number(amount);

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0, // không hiện .00
  }).format(value);

  return (
    <span
      className={twMerge("text-sm font-semibold text-darkColor", className)}
    >
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
