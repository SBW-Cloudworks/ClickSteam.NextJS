"use client";

import { BRANDS_QUERYResult, Category } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import BrandList from "./shop/BrandList";
import PriceList from "./shop/PriceList";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

// Kiểu product trả về từ /api/products
type ApiProduct = {
  id: string;
  _id: string;
  name: string;
  slug: { current: string } | string;
  description?: string | null;
  price: number;
  discount?: number | null;
  stock: number;
  status: string;
  variant: string;
  isFeatured?: boolean;
  images?: string[];          // đường dẫn ảnh trong /public
  categories?: string[];      // danh sách tên category (title)
  brandName?: string | null;  // tên brand (Apple, Samsung, ...)
};

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");

  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // 1. Gọi API Prisma
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: ApiProduct[] = await res.json();

      let filtered = [...data];

      // 2. Map slug -> title cho category
      let categoryTitle: string | null = null;
      if (selectedCategory) {
        const matchedCategory = categories.find(
          (c: any) =>
            c.slug?.current === selectedCategory || c.slug === selectedCategory
        );
        categoryTitle = matchedCategory?.title ?? selectedCategory;
      }

      // 3. Map slug -> brandName cho brand
      let brandName: string | null = null;
      if (selectedBrand) {
        const matchedBrand = (brands as any[]).find(
          (b: any) =>
            b.slug?.current === selectedBrand || b.slug === selectedBrand
        );
        // tuỳ schema Sanity brand của bạn: có thể là b.brandName hoặc b.name
        brandName = matchedBrand?.brandName ?? matchedBrand?.name ?? selectedBrand;
      }

      // 4. Lọc theo category (title)
      if (categoryTitle) {
        const lowerCat = categoryTitle.toLowerCase();
        filtered = filtered.filter((p) =>
          p.categories?.some((cat) => cat.toLowerCase() === lowerCat)
        );
      }

      // 5. Lọc theo brand (tên brand)
      if (brandName) {
        const lowerBrand = brandName.toLowerCase();
        filtered = filtered.filter(
          (p) => p.brandName?.toLowerCase() === lowerBrand
        );
      }

      // 6. Lọc theo khoảng giá
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        filtered = filtered.filter(
          (p) => p.price >= (min || 0) && p.price <= (max || Number.MAX_SAFE_INTEGER)
        );
      }

      setProducts(filtered);
    } catch (error) {
      console.log("Shop product fetching Error", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">
              Get the products as your needs
            </Title>
            {(selectedCategory !== null ||
              selectedBrand !== null ||
              selectedPrice !== null) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setSelectedPrice(null);
                }}
                className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          {/* Sidebar filter */}
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            {/* <BrandList
              brands={brands}
              setSelectedBrand={setSelectedBrand}
              selectedBrand={selectedBrand}
            /> */}
            <PriceList
              setSelectedPrice={setSelectedPrice}
              selectedPrice={selectedPrice}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1 pt-5">
            <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
              {loading ? (
                <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                  <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
                  <p className="font-semibold tracking-wide text-base">
                    Product is loading . . .
                  </p>
                </div>
              ) : products?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product as any} />
                  ))}
                </div>
              ) : (
                <NoProductAvailable className="bg-white mt-0" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
