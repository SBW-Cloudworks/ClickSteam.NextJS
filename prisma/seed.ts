// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. BRANDS – các hãng máy tính / linh kiện
  const brandData = [
    { name: "Apple", slug: "apple", imageUrl: null },
    { name: "Dell", slug: "dell", imageUrl: null },
    { name: "ASUS", slug: "asus", imageUrl: null },
    { name: "MSI", slug: "msi", imageUrl: null },
    { name: "Samsung", slug: "samsung", imageUrl: null },
    { name: "LG", slug: "lg", imageUrl: null },
    { name: "Logitech", slug: "logitech", imageUrl: null },
    { name: "Keychron", slug: "keychron", imageUrl: null },
  ];

  const brandsBySlug: Record<string, { id: string }> = {};

  for (const b of brandData) {
    const brand = await prisma.brand.upsert({
      where: { slug: b.slug },
      update: b,
      create: b,
    });
    brandsBySlug[b.slug] = { id: brand.id };
  }

  // 2. CATEGORIES – nhóm sản phẩm máy tính & linh kiện
  const categoryData = [
    { title: "Laptop", slug: "laptop", imageUrl: null },
    { title: "Laptop Gaming", slug: "laptop-gaming", imageUrl: null },
    { title: "PC GVN", slug: "pc-gvn", imageUrl: null },
    { title: "Main, CPU, VGA", slug: "main-cpu-vga", imageUrl: null },
    { title: "Case, Nguồn, Tản", slug: "case-nguon-tan", imageUrl: null },
    {
      title: "Ổ cứng, RAM, Thẻ nhớ",
      slug: "o-cung-ram-the-nho",
      imageUrl: null,
    },
    { title: "Loa, Micro, Webcam", slug: "loa-micro-webcam", imageUrl: null },
    { title: "Màn hình", slug: "man-hinh", imageUrl: null }, // 25-34
    { title: "Bàn phím", slug: "ban-phim", imageUrl: null }, // 15-24
    { title: "Chuột + Lót chuột", slug: "chuot-lot-chuot", imageUrl: null },
    { title: "Tai nghe", slug: "tai-nghe", imageUrl: null },
    { title: "Ghế - Bàn", slug: "ghe-ban", imageUrl: null },
    { title: "Phần mềm, Mạng", slug: "phan-mem-mang", imageUrl: null },
    { title: "Phụ kiện", slug: "phu-kien", imageUrl: null },
  ];

  const categoriesBySlug: Record<string, { id: string }> = {};

  for (const c of categoryData) {
    const category = await prisma.category.upsert({
      where: { slug: c.slug },
      update: c,
      create: c,
    });
    categoriesBySlug[c.slug] = { id: category.id };
  }

  // 3. PRODUCTS – 14 laptop Dell (giá VNĐ)
  const productData = [
    {
      name: "Laptop Dell Vostro 3530 2H1TPI5 - Nhập khẩu chính hãng",
      slug: "laptop-dell-vostro-3530-2h1tpi5",
      description:
        'Laptop Dell Vostro 3530 15.6" cho nhu cầu học tập và văn phòng.',
      price: 13_890_000,
      discount: 0,
      stock: 20,
      status: "hot",
      variant: "laptop",
      isFeatured: true,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_1.jpg"],
    },
    {
      name: "Laptop Dell Vostro 3530 2H1TPI7",
      slug: "laptop-dell-vostro-3530-2h1tpi7",
      description:
        "Dell Vostro 3530 cấu hình Core i7, phù hợp làm việc đa nhiệm.",
      price: 16_690_000,
      discount: 0,
      stock: 15,
      status: "new",
      variant: "laptop",
      isFeatured: true,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_2.jpg"],
    },
    {
      name: "Laptop Dell Latitude 3450 L3450-1335U-16512W-UMC",
      slug: "laptop-dell-latitude-3450-l3450-1335u-16512w-umc",
      description:
        "Dòng Latitude bền bỉ, tối ưu cho doanh nghiệp và dân văn phòng.",
      price: 18_490_000,
      discount: 0,
      stock: 12,
      status: "hot",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_3.jpg"],
    },
    {
      name: "Laptop Dell Vostro 3520 F0V0VI3 - Nhập khẩu chính hãng",
      slug: "laptop-dell-vostro-3520-f0v0vi3",
      description:
        "Dell Vostro 3520 giá tốt, đáp ứng nhu cầu học online và văn phòng.",
      price: 9_290_000,
      discount: 0,
      stock: 25,
      status: "sale",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_4.jpg"],
    },
    {
      name: "Laptop Dell Vostro 3530 2H1TPI3 - Nhập khẩu chính hãng",
      slug: "laptop-dell-vostro-3530-2h1tpi3",
      description:
        "Phiên bản Vostro 3530 cấu hình cân bằng, phù hợp sinh viên.",
      price: 9_690_000,
      discount: 0,
      stock: 30,
      status: "sale",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_5.jpg"],
    },
    {
      name: "Laptop Dell XPS 13 9350 71058714",
      slug: "laptop-dell-xps-13-9350-71058714",
      description:
        "Ultrabook Dell XPS 13 cao cấp, thiết kế viền mỏng, màn hình 13 inch.",
      price: 57_990_000,
      discount: 0,
      stock: 5,
      status: "hot",
      variant: "laptop",
      isFeatured: true,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_6.jpg"],
    },
    {
      name: "Laptop Dell Inspiron 14 5441 N4O10441W1",
      slug: "laptop-dell-inspiron-14-5441-n4o10441w1",
      description:
        "Dell Inspiron 14 mỏng nhẹ, phù hợp mang theo đi học, đi làm.",
      price: 28_990_000,
      discount: 0,
      stock: 10,
      status: "new",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_7.jpg"],
    },
    {
      name: "Laptop Dell Inspiron 15 3530 J9XFD - Nhập khẩu chính hãng",
      slug: "laptop-dell-inspiron-15-3530-j9xfd",
      description:
        'Inspiron 15 3530 màn hình 15.6", phù hợp giải trí và làm việc.',
      price: 14_990_000,
      discount: 0,
      stock: 18,
      status: "hot",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_8.jpg"],
    },
    {
      name: "Laptop Dell Inspiron 14 5440 D0F3W - Nhập khẩu chính hãng",
      slug: "laptop-dell-inspiron-14-5440-d0f3w",
      description:
        "Inspiron 14 5440 thiết kế hiện đại, hiệu năng tốt cho văn phòng.",
      price: 15_990_000,
      discount: 0,
      stock: 16,
      status: "new",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_9.jpg"],
    },
    {
      name: "Laptop Dell Inspiron 15 3530 P16WD2",
      slug: "laptop-dell-inspiron-15-3530-p16wd2",
      description:
        "Dell Inspiron 15 3530 P16WD2, cân bằng giữa hiệu năng và giá thành.",
      price: 17_490_000,
      discount: 0,
      stock: 14,
      status: "hot",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_10.jpg"],
    },
    {
      name: "Laptop Dell 15 DC15250 79N4M - Nhập khẩu chính hãng",
      slug: "laptop-dell-15-dc15250-79n4m",
      description:
        "Laptop Dell 15 DC15250 79N4M chính hãng, phù hợp nhu cầu văn phòng cơ bản.",
      price: 10_990_000,
      discount: 0,
      stock: 22,
      status: "new",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_11.jpg"],
    },
    {
      name: "Laptop Dell 15 DC15250 71073959",
      slug: "laptop-dell-15-dc15250-71073959",
      description:
        "Phiên bản Dell 15 DC15250 71073959 với hiệu năng ổn định cho làm việc.",
      price: 20_990_000,
      discount: 0,
      stock: 12,
      status: "hot",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_12.jpg"],
    },
    {
      name: "Laptop Dell 15 DC15255 DC5R5802W1",
      slug: "laptop-dell-15-dc15255-dc5r5802w1",
      description:
        "Dell 15 DC15255 DC5R5802W1 cho trải nghiệm học tập và văn phòng mượt mà.",
      price: 15_990_000,
      discount: 0,
      stock: 18,
      status: "new",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_13.jpg"],
    },
    {
      name: "Laptop Dell 15 DC15250 H02DF - Nhập khẩu chính hãng",
      slug: "laptop-dell-15-dc15250-h02df",
      description:
        "Laptop Dell 15 DC15250 H02DF chính hãng, thiết kế bền bỉ, dễ sử dụng.",
      price: 14_990_000,
      discount: 0,
      stock: 16,
      status: "sale",
      variant: "laptop",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["laptop"],
      images: ["/images/products/product_14.jpg"],
    }, {
      name: "Bàn phím cơ không dây Logitech K380 - Hàng chính hãng",
      slug: "ban-phim-logitech-k380",
      description:
        "Bàn phím Logitech K380 nhỏ gọn, kết nối không dây, phù hợp làm việc và học tập.",
      price: 699_000,
      discount: 0,
      stock: 25,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "logitech",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_15.jpg"],
    },
    {
      name: "Bàn phím cơ DareU EK87 Led Rainbow - Chính hãng",
      slug: "ban-phim-dareu-ek87",
      description:
        "Bàn phím cơ DareU EK87 với switch bền bỉ, led rainbow nổi bật, phù hợp game thủ.",
      price: 690_000,
      discount: 0,
      stock: 40,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "dareu",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_16.jpg"],
    },
    {
      name: "Bàn phím cơ Akko 3087 – PBT Double-shot",
      slug: "ban-phim-akko-3087",
      description:
        "Bàn phím cơ Akko 3087 layout tenkeyless, keycap PBT bền màu, cảm giác gõ chắc tay.",
      price: 1_290_000,
      discount: 0,
      stock: 18,
      status: "sale",
      variant: "keyboard",
      isFeatured: true,
      brandSlug: "akko",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_17.jpg"],
    },
    {
      name: "Bàn phím cơ không dây Keychron K2 V2",
      slug: "ban-phim-keychron-k2-v2",
      description:
        "Keychron K2 V2 hỗ trợ kết nối đa thiết bị, tương thích Windows và macOS, pin dung lượng lớn. (Blue Switch)",
      price: 2_190_000,
      discount: 0,
      stock: 12,
      status: "sale",
      variant: "keyboard",
      isFeatured: true,
      brandSlug: "keychron",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_18.jpg"],
    },
    {
      name: "Bàn phím gaming ASUS TUF K1 - Chống nước",
      slug: "ban-phim-asus-tuf-k1",
      description:
        "Bàn phím ASUS TUF K1 với thiết kế chống nước, led RGB, phù hợp chơi game cường độ cao.",
      price: 990_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "asus",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_19.jpg"],
    },
    {
      name: "Bàn phím cơ Razer BlackWidow V3",
      slug: "ban-phim-razer-blackwidow-v3",
      description:
        "Razer BlackWidow V3 với switch Razer độc quyền, led RGB Razer Chroma, tối ưu cho game thủ.",
      price: 2_990_000,
      discount: 0,
      stock: 10,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "razer",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_20.jpg"],
    },
    {
      name: "Bàn phím cơ E-Dra EK387 Pro - Hot swap",
      slug: "ban-phim-edra-ek387-pro",
      description:
        "Bàn phím cơ E-Dra EK387 Pro hỗ trợ hot swap switch, dễ dàng thay thế và nâng cấp.",
      price: 890_000,
      discount: 0,
      stock: 28,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "e-dra",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_21.jpg"],
    },
    {
      name: "Bàn phím cơ SteelSeries Apex 3 - Chống nước IP32",
      slug: "ban-phim-steelseries-apex-3",
      description:
        "SteelSeries Apex 3 với khả năng chống nước IP32, đèn RGB 10 vùng, yên tĩnh khi gõ.",
      price: 1_490_000,
      discount: 0,
      stock: 22,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "steelseries",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_22.jpg"],
    },
    {
      name: "Bàn phím cơ Corsair K60 RGB Pro",
      slug: "ban-phim-corsair-k60-rgb-pro",
      description:
        "Corsair K60 RGB Pro khung nhôm chắc chắn, RGB rực rỡ, switch mượt mà, độ bền cao.",
      price: 2_490_000,
      discount: 0,
      stock: 14,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "corsair",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_23.jpg"],
    },
    {
      name: "Bàn phím AULA M75 TM",
      slug: "ban-phim-aula-m75-tm",
      description:
        "Bàn phím AULA M75 TM không dây, gõ êm, độ bền cao.",
      price: 1_990_000,
      discount: 0,
      stock: 35,
      status: "sale",
      variant: "keyboard",
      isFeatured: false,
      brandSlug: "aula",
      categorySlugs: ["ban-phim"],
      images: ["/images/products/product_24.jpg"],
    },
    {
      name: "Màn hình LG 24 inch 24MP400 Full HD 75Hz",
      slug: "man-hinh-lg-24mp400",
      description:
        "Màn hình LG 24MP400 24 inch, độ phân giải Full HD, tần số quét 75Hz, phù hợp làm việc và giải trí.",
      price: 2_690_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "lg",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_25.jpg"],
    },
    {
      name: "Màn hình Dell 24 inch P2422H IPS",
      slug: "man-hinh-dell-p2422h",
      description:
        "Màn hình Dell P2422H 24 inch, tấm nền IPS, thiết kế công thái học, xoay dọc tiện lợi.",
      price: 4_290_000,
      discount: 0,
      stock: 15,
      status: "sale",
      variant: "monitor",
      isFeatured: true,
      brandSlug: "dell",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_26.jpg"],
    },
    {
      name: "Màn hình Samsung 27 inch LF27T350 FHD 75Hz",
      slug: "man-hinh-samsung-lf27t350",
      description:
        "Màn hình Samsung LF27T350 27 inch, viền mỏng, tần số quét 75Hz, hỗ trợ AMD FreeSync.",
      price: 3_990_000,
      discount: 0,
      stock: 18,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "samsung",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_27.jpg"],
    },
    {
      name: "Màn hình gaming ASUS TUF VG249Q1R 23.8\" 165Hz",
      slug: "man-hinh-asus-tuf-vg249q1r",
      description:
        "ASUS TUF VG249Q1R 23.8 inch, tần số quét 165Hz, 1ms MPRT, công nghệ ELMB, tối ưu cho game thủ.",
      price: 4_990_000,
      discount: 0,
      stock: 12,
      status: "sale",
      variant: "monitor",
      isFeatured: true,
      brandSlug: "asus",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_28.jpg"],
    },
    {
      name: "Màn hình Acer 27 inch Nitro VG270 75Hz",
      slug: "man-hinh-acer-nitro-vg270",
      description:
        "Acer Nitro VG270 27 inch, tấm nền IPS, màu sắc sống động, phù hợp làm việc và chơi game cơ bản.",
      price: 3_590_000,
      discount: 0,
      stock: 22,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "acer",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_29.jpg"],
    },
    {
      name: "Màn hình AOC 24G2 24\" 144Hz Gaming",
      slug: "man-hinh-aoc-24g2",
      description:
        "AOC 24G2 24 inch, tần số quét 144Hz, FreeSync, viền mỏng 3 cạnh, rất được ưa chuộng trong tầm giá.",
      price: 4_490_000,
      discount: 0,
      stock: 16,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "aoc",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_30.jpg"],
    },
    {
      name: "Màn hình ViewSonic VA2432-H 24\" IPS",
      slug: "man-hinh-viewsonic-va2432h",
      description:
        "ViewSonic VA2432-H 24 inch, tấm nền IPS, chống nháy, lọc ánh sáng xanh, phù hợp văn phòng.",
      price: 2_890_000,
      discount: 0,
      stock: 30,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "viewsonic",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_31.jpg"],
    },
    {
      name: "Màn hình MSI Optix G241 24\" 144Hz",
      slug: "man-hinh-msi-optix-g241",
      description:
        "MSI Optix G241 24 inch, 144Hz, 1ms, hỗ trợ FreeSync, thiết kế viền mỏng hiện đại.",
      price: 4_690_000,
      discount: 0,
      stock: 14,
      status: "sale",
      variant: "monitor",
      isFeatured: true,
      brandSlug: "msi",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_32.jpg"],
    },
    {
      name: "Màn hình Gigabyte G24F 2 23.8\" 165Hz",
      slug: "man-hinh-gigabyte-g24f-2",
      description:
        "Gigabyte G24F 2 23.8 inch, tần số quét 165Hz (OC), hỗ trợ HDR, thích hợp chơi game eSports.",
      price: 4_790_000,
      discount: 0,
      stock: 11,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "gigabyte",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_33.jpg"],
    },
    {
      name: "Màn hình Xiaomi 27 inch Desktop Monitor 2K",
      slug: "man-hinh-xiaomi-27-2k",
      description:
        "Màn hình Xiaomi 27 inch độ phân giải 2K, thiết kế tối giản, phù hợp làm việc sáng tạo nội dung.",
      price: 5_490_000,
      discount: 0,
      stock: 9,
      status: "sale",
      variant: "monitor",
      isFeatured: false,
      brandSlug: "xiaomi",
      categorySlugs: ["man-hinh"],
      images: ["/images/products/product_34.jpg"],
    },


  ];


  for (const p of productData) {
    const brand = brandsBySlug[p.brandSlug];

    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        description: p.description,
        price: p.price,
        discount: p.discount,
        stock: p.stock,
        status: p.status,
        variant: p.variant,
        isFeatured: p.isFeatured,
        brandId: brand?.id ?? null,
        images: p.images,
      },
      create: {
        name: p.name,
        slug: p.slug,
        description: p.description,
        price: p.price,
        discount: p.discount,
        stock: p.stock,
        status: p.status,
        variant: p.variant,
        isFeatured: p.isFeatured,
        brandId: brand?.id ?? null,
        images: p.images,
      },
    });

    // Gán Category qua bảng trung gian ProductCategory
    for (const catSlug of p.categorySlugs) {
      const category = categoriesBySlug[catSlug];
      if (!category) continue;

      await prisma.productCategory.upsert({
        where: {
          productId_categoryId: {
            productId: product.id,
            categoryId: category.id,
          },
        },
        update: {},
        create: {
          productId: product.id,
          categoryId: category.id,
        },
      });
    }
  }

  // 4. AUTHOR
  const author = await prisma.author.upsert({
    where: { id: "seed-admin-author" },
    update: {},
    create: {
      id: "seed-admin-author",
      name: "Admin",
      bio: "Default blog author",
      imageUrl: null,
    },
  });

  // 5. BLOG CATEGORY
  const blogCat = await prisma.blogCategory.upsert({
    where: { slug: "news" },
    update: {},
    create: {
      name: "News",
      slug: "news",
    },
  });

  // 6. BLOG
  await prisma.blog.upsert({
    where: { slug: "welcome-to-shopcart" },
    update: {},
    create: {
      title: "Welcome to Shopcart",
      slug: "welcome-to-shopcart",
      content:
        "This is your first blog post powered by Supabase + Prisma instead of Sanity.",
      imageUrl: null,
      authorId: author.id,
      categoryId: blogCat.id,
    },
  });

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

