// sanity/queries/index.ts
import prisma from "@/lib/prisma";

// 🟢 CATEGORIES
export const getCategories = async (quantity?: number) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { title: "asc" },
      take: quantity,
      include: {
        products: true, // ProductCategory[]
      },
    });

    // Bên Sanity từng trả thêm "productCount"
    return categories.map((c) => ({
      ...c,
      productCount: c.products.length,
    }));
  } catch (error) {
    console.error("Error fetching categories", error);
    return [];
  }
};

// 🟢 BRANDS
export const getAllBrands = async () => {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { name: "asc" },
    });
    return brands ?? [];
  } catch (error) {
    console.error("Error fetching all brands:", error);
    return [];
  }
};

// 🟢 DEAL PRODUCTS (status = 'hot' – thay cho DEAL_PRODUCTS GROQ)
export const getDealProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: { status: "hot" },
      orderBy: { name: "asc" },
      include: {
        categories: {
          include: { category: true }, // ProductCategory -> Category
        },
        brand: true,
      },
    });

    // Bên GROQ cũ: "categories": categories[]->title
    return products.map((p) => ({
      ...p,
      categories: p.categories.map((pc) => pc.category.title),
    }));
  } catch (error) {
    console.error("Error fetching deal products:", error);
    return [];
  }
};

// PRODUCT BY SLUG
export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        categories: {
          include: { category: true },
        },
        brand: true,
      },
    });

    if (!product) return null;

    // Trả ra shape gần giống Product cũ của Sanity
    return {
      id: product.id,
      _id: product.id, // dùng cho cart (AddToCartButton / store)
      name: product.name,
      slug: { current: product.slug }, // để /product/[slug] vẫn hoạt động
      description: product.description,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      status: product.status,
      variant: product.variant,
      isFeatured: product.isFeatured,
      images: product.images, // string[] path local
      categories: product.categories.map((pc) => pc.category.title),
      brandName: product.brand?.name ?? null,
    };
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};


// 🟢 BRAND NAME TỪ PRODUCT SLUG (thay cho BRAND_QUERY)
export const getBrand = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { brand: true },
    });

    if (!product || !product.brand) return null;

    return {
      brandName: product.brand.name,
    };
  } catch (error) {
    console.error("Error fetching brand by product slug:", error);
    return null;
  }
};

// 🟢 ORDERS THEO USER (thay cho MY_ORDERS_QUERY)
export const getMyOrders = async (userId: string) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" }, // dùng createdAt chứ không phải orderDate
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

// 🟢 BLOG: TẤT CẢ BLOG (thay cho GET_ALL_BLOG)
export const getAllBlogs = async (quantity: number) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: quantity,
      include: {
        author: true,
        // nếu sau này bạn có relation category cho Blog thì thêm ở đây
        // category: true,
      },
    });
    return blogs ?? [];
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
};

// 🟢 BLOG: LATEST (3 bài mới – thay cho LATEST_BLOG_QUERY)
export const getLatestBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
      include: {
        author: true,
        // category: true,
      },
    });
    return blogs ?? [];
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return [];
  }
};

// 🟢 BLOG: SINGLE (thay cho SINGLE_BLOG_QUERY)
export const getSingleBlog = async (slug: string) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: {
        author: true,
        // category: true,
      },
    });
    return blog;
  } catch (error) {
    console.error("Error fetching single blog:", error);
    return null;
  }
};

// 🟢 BLOG: CATEGORIES (thay cho BLOG_CATEGORIES)
export const getBlogCategories = async () => {
  try {
    const categories = await prisma.blogCategory.findMany({
      orderBy: { name: "asc" },
    });
    return categories ?? [];
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [];
  }
};

// 🟢 BLOG: OTHERS (thay cho OTHERS_BLOG_QUERY)
export const getOthersBlog = async (slug: string, quantity: number) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { slug: { not: slug } },
      orderBy: { createdAt: "desc" },
      take: quantity,
      include: {
        author: true,
        // category: true,
      },
    });
    return blogs ?? [];
  } catch (error) {
    console.error("Error fetching other blogs:", error);
    return [];
  }
};
