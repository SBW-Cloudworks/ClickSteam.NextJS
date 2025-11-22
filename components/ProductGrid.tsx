"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import NoProductAvailable from "./NoProductAvailable";
import { Loader2 } from "lucide-react";
import Container from "./Container";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants/data";

// Kiểu product trả về từ /api/products
type ProductFromApi = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  discount: number;
  stock: number | null;
  status: string | null;
  variant: string | null;
  isFeatured: boolean;
  categories: string[];
  brandName: string | null;
  imageUrl: string | null;
};

const ProductGrid = () => {
  const [products, setProducts] = useState<ProductFromApi[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(
    productType[0]?.title || ""
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (selectedTab) {
          // gadget / appliances / refrigerators / others ...
          params.set("variant", selectedTab.toLowerCase());
        }

        const res = await fetch(`/api/products?${params.toString()}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch products:", await res.text());
          setProducts([]);
          return;
        }

        const data: ProductFromApi[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Product fetching error", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <AnimatePresence>
            {products.map((product) => (
              <motion.div
                key={product.id} // ✅ fix warning "unique key"
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Nếu ProductCard đang dùng kiểu cũ, truyền thêm field cần thiết */}
                <ProductCard
                  // @ts-ignore tạm thời nếu ProductCard dùng type khác
                  product={product}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;
