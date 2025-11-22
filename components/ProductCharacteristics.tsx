import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Dạng product tối thiểu mà component này cần
type ProductForCharacteristics = {
  name?: string | null;
  variant?: string | null;
  stock?: number | null;
  brandName?: string | null;
};

interface Props {
  product: ProductForCharacteristics | null | undefined;
}

const ProductCharacteristics = ({ product }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {product?.name ?? "Product"}: Characteristics
        </AccordionTrigger>
        <AccordionContent>
          <p className="flex items-center justify-between">
            Brand:{" "}
            <span className="font-semibold tracking-wide">
              {product?.brandName ?? "Unknown"}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Collection:{" "}
            <span className="font-semibold tracking-wide">2025</span>
          </p>
          <p className="flex items-center justify-between">
            Type:{" "}
            <span className="font-semibold tracking-wide">
              {product?.variant ?? "N/A"}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product?.stock && product.stock > 0 ? "Available" : "Out of Stock"}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
