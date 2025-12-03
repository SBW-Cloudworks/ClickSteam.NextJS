// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. BRANDS – các hãng máy tính / linh kiện
  const brandData = [
  // 1–8: giống nhóm chính laptop/màn hình/phím chuột
  { name: "Dell",       slug: "dell",       imageUrl: "/images/brands/brand_1.png" },
  { name: "ASUS",       slug: "asus",       imageUrl: "/images/brands/brand_2.png" },
  { name: "MSI",        slug: "msi",        imageUrl: "/images/brands/brand_3.png" },
  { name: "Samsung",    slug: "samsung",    imageUrl: "/images/brands/brand_4.png" },
  { name: "LG",         slug: "lg",         imageUrl: "/images/brands/brand_5.png" },
  { name: "Logitech",   slug: "logitech",   imageUrl: "/images/brands/brand_6.png" },
  { name: "Keychron",   slug: "keychron",   imageUrl: "/images/brands/brand_7.png" },
  { name: "Acer",       slug: "acer",       imageUrl: "/images/brands/brand_8.png" },

  // 9–19: các brand còn lại trong productData
  { name: "DareU",      slug: "dareu",      imageUrl: "/images/brands/brand_9.png" },
  { name: "Akko",       slug: "akko",       imageUrl: "/images/brands/brand_10.jpg" },
  { name: "Razer",      slug: "razer",      imageUrl: "/images/brands/brand_11.png" },
  { name: "E-Dra",      slug: "e-dra",      imageUrl: "/images/brands/brand_12.png" },
  { name: "SteelSeries",slug: "steelseries",imageUrl: "/images/brands/brand_13.png" },
  { name: "Corsair",    slug: "corsair",    imageUrl: "/images/brands/brand_14.png" },
  { name: "AULA",       slug: "aula",       imageUrl: "/images/brands/brand_15.png" },
  { name: "AOC",        slug: "aoc",        imageUrl: "/images/brands/brand_16.png" },
  { name: "ViewSonic",  slug: "viewsonic",  imageUrl: "/images/brands/brand_17.png" },
  { name: "Gigabyte",   slug: "gigabyte",   imageUrl: "/images/brands/brand_18.png" },
  { name: "Xiaomi",     slug: "xiaomi",     imageUrl: "/images/brands/brand_19.png" },
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
    // Nhóm chính
    { title: "Laptop", slug: "laptop", imageUrl: null }, // 1-14

    // Màn hình + ngoại vi
    { title: "Bàn phím", slug: "ban-phim", imageUrl: null }, // 15-24
    { title: "Màn hình", slug: "man-hinh", imageUrl: null }, // 25-34
    { title: "Chuột + Lót chuột", slug: "chuot-lot-chuot", imageUrl: null }, // 35-44
    { title: "Tai nghe", slug: "tai-nghe", imageUrl: null }, // 45-54

    // Nhóm gom tất cả linh kiện/phụ kiện khác
    { title: "Phụ kiện", slug: "phu-kien", imageUrl: null }, // 55-64
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
    // ===== Chuột + Lót chuột =====
    {
      name: "Chuột gaming Logitech G102 Lightsync RGB",
      slug: "chuot-logitech-g102-lightsync-rgb",
      description:
        "Chuột gaming Logitech G102 Lightsync cảm biến chính xác, led RGB 16.8 triệu màu, phù hợp game thủ và học sinh – sinh viên.",
      price: 399_000,
      discount: 0,
      stock: 40,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "logitech",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_35.jpg"],
    },
    {
      name: "Chuột không dây Logitech G304 Lightspeed",
      slug: "chuot-logitech-g304-lightspeed",
      description:
        "Chuột không dây Logitech G304 Lightspeed, độ trễ thấp, pin lâu, thích hợp cho cả chơi game và làm việc.",
      price: 899_000,
      discount: 0,
      stock: 30,
      status: "hot",
      variant: "mouse",
      isFeatured: true,
      brandSlug: "logitech",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_36.jpg"],
    },
    {
      name: "Chuột Razer DeathAdder Essential",
      slug: "chuot-razer-deathadder-essential",
      description:
        "Razer DeathAdder Essential với thiết kế công thái học, cảm biến chuẩn xác, phù hợp chơi game FPS.",
      price: 590_000,
      discount: 0,
      stock: 25,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "razer",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_37.jpg"],
    },
    {
      name: "Chuột Razer Viper Mini Ultra-light",
      slug: "chuot-razer-viper-mini",
      description:
        "Chuột Razer Viper Mini siêu nhẹ, switch quang học tốc độ cao, led RGB Razer Chroma.",
      price: 990_000,
      discount: 0,
      stock: 18,
      status: "hot",
      variant: "mouse",
      isFeatured: true,
      brandSlug: "razer",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_38.jpg"],
    },
    {
      name: "Chuột gaming ASUS TUF M3 Gen II",
      slug: "chuot-asus-tuf-m3-gen2",
      description:
        "Chuột ASUS TUF M3 Gen II với thiết kế bền bỉ, switch bền, phù hợp chiến game cường độ cao.",
      price: 520_000,
      discount: 0,
      stock: 22,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "asus",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_39.jpg"],
    },
    {
      name: "Chuột MSI Clutch GM11 RGB",
      slug: "chuot-msi-clutch-gm11",
      description:
        "Chuột MSI Clutch GM11, cảm biến quang học, led RGB Mystic Light, phù hợp game thủ phổ thông.",
      price: 490_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "msi",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_40.jpg"],
    },
    {
      name: "Chuột SteelSeries Rival 3",
      slug: "chuot-steelseries-rival-3",
      description:
        "Chuột SteelSeries Rival 3 cảm biến TrueMove, led RGB 3 vùng, độ bền cao.",
      price: 790_000,
      discount: 0,
      stock: 16,
      status: "hot",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "steelseries",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_41.jpg"],
    },
    {
      name: "Chuột gaming E-Dra EM640",
      slug: "chuot-edra-em640",
      description:
        "Chuột gaming E-Dra EM640 giá tốt, nhiều mức DPI, phù hợp game net và học sinh.",
      price: 290_000,
      discount: 0,
      stock: 50,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "e-dra",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_42.jpg"],
    },
    {
      name: "Lót chuột Logitech G240 Cloth Gaming Mousepad",
      slug: "lot-chuot-logitech-g240",
      description:
        "Lót chuột Logitech G240 bề mặt vải, tối ưu cho cảm biến quang học, kích thước vừa phải.",
      price: 290_000,
      discount: 0,
      stock: 35,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "logitech",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_43.jpg"],
    },
    {
      name: "Lót chuột Razer Goliathus Medium",
      slug: "lot-chuot-razer-goliathus-medium",
      description:
        "Lót chuột Razer Goliathus Medium, bề mặt vải mịn, phù hợp-game FPS, dễ cuộn mang theo.",
      price: 390_000,
      discount: 0,
      stock: 28,
      status: "sale",
      variant: "mouse",
      isFeatured: false,
      brandSlug: "razer",
      categorySlugs: ["chuot-lot-chuot"],
      images: ["/images/products/product_44.jpg"],
    },

    // ===== Tai nghe =====
    {
      name: "Tai nghe gaming Logitech G331",
      slug: "tai-nghe-logitech-g331",
      description:
        "Tai nghe Logitech G331 âm thanh sống động, micro xoay, phù hợp chơi game và học online.",
      price: 890_000,
      discount: 0,
      stock: 25,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "logitech",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_45.jpg"],
    },
    {
      name: "Tai nghe không dây Logitech G435 Lightspeed",
      slug: "tai-nghe-logitech-g435-lightspeed",
      description:
        "Logitech G435 Lightspeed kết nối không dây, trọng lượng nhẹ, pin lâu, phù hợp giới trẻ.",
      price: 1_690_000,
      discount: 0,
      stock: 18,
      status: "hot",
      variant: "headphone",
      isFeatured: true,
      brandSlug: "logitech",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_46.jpg"],
    },
    {
      name: "Tai nghe Razer Kraken X Lite",
      slug: "tai-nghe-razer-kraken-x-lite",
      description:
        "Razer Kraken X Lite thiết kế nhẹ, đệm tai êm, âm thanh chân thực khi chơi game.",
      price: 1_090_000,
      discount: 0,
      stock: 22,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "razer",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_47.jpg"],
    },
    {
      name: "Tai nghe Razer BlackShark V2 X",
      slug: "tai-nghe-razer-blackshark-v2-x",
      description:
        "Razer BlackShark V2 X với màng loa TriForce, micro khử ồn, phù hợp game thủ esports.",
      price: 1_690_000,
      discount: 0,
      stock: 15,
      status: "hot",
      variant: "headphone",
      isFeatured: true,
      brandSlug: "razer",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_48.jpg"],
    },
    {
      name: "Tai nghe SteelSeries Arctis 1",
      slug: "tai-nghe-steelseries-arctis-1",
      description:
        "SteelSeries Arctis 1 thiết kế gọn, headband thép, âm thanh cân bằng cho nhiều nhu cầu.",
      price: 1_590_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "steelseries",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_49.jpg"],
    },
    {
      name: "Tai nghe Corsair HS50 Pro Stereo",
      slug: "tai-nghe-corsair-hs50-pro",
      description:
        "Corsair HS50 Pro với khung kim loại chắc chắn, micro rời, âm bass dày.",
      price: 1_390_000,
      discount: 0,
      stock: 18,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "corsair",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_50.jpg"],
    },
    {
      name: "Tai nghe ASUS TUF Gaming H3",
      slug: "tai-nghe-asus-tuf-gaming-h3",
      description:
        "ASUS TUF Gaming H3 với khung thép, đệm tai dày, âm thanh 7.1 giả lập cho game thủ.",
      price: 1_290_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "asus",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_51.jpg"],
    },
    {
      name: "Tai nghe MSI DS502 Gaming Headset",
      slug: "tai-nghe-msi-ds502",
      description:
        "Tai nghe MSI DS502 với driver 40mm, rung giả lập, phù hợp game thủ thích cảm giác mạnh.",
      price: 1_190_000,
      discount: 0,
      stock: 16,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "msi",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_52.jpg"],
    },
    {
      name: "Tai nghe Dell Pro Stereo Headset WH3022",
      slug: "tai-nghe-dell-wh3022",
      description:
        "Tai nghe Dell WH3022 tối ưu cho họp online và văn phòng, micro khử ồn, đeo thoải mái.",
      price: 990_000,
      discount: 0,
      stock: 24,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_53.jpg"],
    },
    {
      name: "Tai nghe in-ear Samsung AKG Type-C",
      slug: "tai-nghe-samsung-akg-typec",
      description:
        "Tai nghe in-ear Samsung AKG sử dụng cổng Type-C, âm thanh cân bằng, phù hợp nghe nhạc và gọi điện.",
      price: 390_000,
      discount: 0,
      stock: 35,
      status: "sale",
      variant: "headphone",
      isFeatured: false,
      brandSlug: "samsung",
      categorySlugs: ["tai-nghe"],
      images: ["/images/products/product_54.jpg"],
    },

    // ===== Phụ kiện =====
    {
      name: "Ổ cứng di động Samsung T7 500GB USB-C",
      slug: "o-cung-di-dong-samsung-t7-500gb",
      description:
        "Ổ cứng SSD di động Samsung T7 500GB, tốc độ cao, thiết kế nhỏ gọn, phù hợp mang đi làm và sao lưu dữ liệu.",
      price: 2_490_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "accessory",
      isFeatured: true,
      brandSlug: "samsung",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_55.jpg"],
    },
    {
      name: "USB 3.1 Samsung Bar Plus 64GB",
      slug: "usb-samsung-bar-plus-64gb",
      description:
        "USB Samsung Bar Plus 64GB vỏ kim loại, tốc độ đọc cao, nhỏ gọn dễ mang theo.",
      price: 290_000,
      discount: 0,
      stock: 40,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "samsung",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_56.jpg"],
    },
    {
      name: "Đầu thu Bluetooth ASUS USB-BT500",
      slug: "dau-thu-bluetooth-asus-usb-bt500",
      description:
        "Đầu thu Bluetooth ASUS USB-BT500 chuẩn 5.0, giúp kết nối tai nghe, loa, tay cầm dễ dàng.",
      price: 290_000,
      discount: 0,
      stock: 30,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "asus",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_57.jpg"],
    },
    {
      name: "Balo Dell Essential Backpack 15",
      slug: "balo-dell-essential-backpack-15",
      description:
        "Balo Dell Essential 15 inch chống sốc nhẹ, nhiều ngăn, phù hợp mang laptop đi học và đi làm.",
      price: 690_000,
      discount: 0,
      stock: 25,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "dell",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_58.jpg"],
    },
    {
      name: "Giá đỡ laptop nhôm ",
      slug: "gia-do-",
      description:
        "Giá đỡ laptop bằng nhôm, nâng cao laptop giúp tản nhiệt tốt hơn và cải thiện tư thế ngồi.",
      price: 890_000,
      discount: 0,
      stock: 18,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "asus",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_59.jpg"],
    },
    {
      name: "Hub chuyển đổi Gigabyte USB-C 6-in-1",
      slug: "hub-gigabyte-usbc-6in1",
      description:
        "Hub Gigabyte USB-C 6-in-1 hỗ trợ HDMI, USB, thẻ nhớ, phù hợp cho laptop mỏng nhẹ ít cổng.",
      price: 1_290_000,
      discount: 0,
      stock: 20,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "gigabyte",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_60.jpg"],
    },
    {
      name: "Webcam ViewSonic Full HD cho học online",
      slug: "webcam-viewsonic-fullhd",
      description:
        "Webcam ViewSonic độ phân giải Full HD, micro tích hợp, phù hợp học online và họp từ xa.",
      price: 890_000,
      discount: 0,
      stock: 22,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "viewsonic",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_61.jpg"],
    },
    {
      name: "Loa Bluetooth Xiaomi Mi Portable 16W",
      slug: "loa-bluetooth-xiaomi-mi-16w",
      description:
        "Loa Bluetooth Xiaomi Mi Portable 16W, chống nước IPX7, âm lượng lớn, tiện mang đi picnic.",
      price: 1_090_000,
      discount: 0,
      stock: 26,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "xiaomi",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_62.jpg"],
    },
    {
      name: "Đèn LED treo màn hình Yeelight",
      slug: "den-led-yeelight",
      description:
        "Đèn LED treo màn hình Yeelight, giúp giảm mỏi mắt khi làm việc buổi tối.",
      price: 790_000,
      discount: 0,
      stock: 14,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "lg",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_63.jpg"],
    },
    {
      name: "Dây HDMI 2.0 Acer 1.8m",
      slug: "day-hdmi-acer-1m8",
      description:
        "Dây HDMI 2.0 Acer chiều dài 1.8m, hỗ trợ độ phân giải 4K, dùng nối laptop với màn hình hoặc TV.",
      price: 190_000,
      discount: 0,
      stock: 45,
      status: "sale",
      variant: "accessory",
      isFeatured: false,
      brandSlug: "acer",
      categorySlugs: ["phu-kien"],
      images: ["/images/products/product_64.jpg"],
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

