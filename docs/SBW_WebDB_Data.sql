-- ===========================================================================
-- SBW Web DB - seed snapshot (context-only)
-- Purpose: use as reference/context for code/LLM. Do NOT execute against a DB.
-- Source: Supabase/Prisma export captured 2025-12-03 (timestamps UTC).
-- Notes: IDs are text; relationships implied by naming (userId, authorId, brandId, etc.).
--        Seed values kept verbatim; strings may include encoding artifacts.
-- ===========================================================================

-- ======================= SEED SNAPSHOT (context-only) =======================

-- Data for Name: Brand; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."Brand" (id, name, slug, "imageUrl", "createdAt") FROM stdin;
cmiplef4v0000xzk0ec9edm6x	Dell	dell	/images/brands/brand_1.png	2025-12-03 05:54:51.287
cmiplefe10001xzk0bhuhp19h	ASUS	asus	/images/brands/brand_2.png	2025-12-03 05:54:51.626
cmiplefm00002xzk082ct8lw3	MSI	msi	/images/brands/brand_3.png	2025-12-03 05:54:51.913
cmiplefte0003xzk01xfuz7qm	Samsung	samsung	/images/brands/brand_4.png	2025-12-03 05:54:52.179
cmipleg110004xzk09h81bfbf	LG	lg	/images/brands/brand_5.png	2025-12-03 05:54:52.453
cmipleg8j0005xzk0le24uam3	Logitech	logitech	/images/brands/brand_6.png	2025-12-03 05:54:52.723
cmiplegg50006xzk0xz060tjw	Keychron	keychron	/images/brands/brand_7.png	2025-12-03 05:54:52.998
cmiplegnr0007xzk0786we7bv	Acer	acer	/images/brands/brand_8.png	2025-12-03 05:54:53.271
cmiplegvb0008xzk03vivcl4u	DareU	dareu	/images/brands/brand_9.png	2025-12-03 05:54:53.543
cmipleh2z0009xzk0i77mp625	Akko	akko	/images/brands/brand_10.jpg	2025-12-03 05:54:53.82
cmipleham000axzk0dnscne6e	Razer	razer	/images/brands/brand_11.png	2025-12-03 05:54:54.095
cmiplehhz000bxzk0lmlm35y7	E-Dra	e-dra	/images/brands/brand_12.png	2025-12-03 05:54:54.36
cmiplehpl000cxzk0j88gln53	SteelSeries	steelseries	/images/brands/brand_13.png	2025-12-03 05:54:54.633
cmiplehx4000dxzk0e4sw2tw1	Corsair	corsair	/images/brands/brand_14.png	2025-12-03 05:54:54.904
cmiplei4j000exzk0s4adgo69	AULA	aula	/images/brands/brand_15.png	2025-12-03 05:54:55.171
cmipleic3000fxzk05b5lxonp	AOC	aoc	/images/brands/brand_16.png	2025-12-03 05:54:55.444
cmipleik3000gxzk0316p20ka	ViewSonic	viewsonic	/images/brands/brand_17.png	2025-12-03 05:54:55.731
cmipleirl000hxzk0yj6kzfch	Gigabyte	gigabyte	/images/brands/brand_18.png	2025-12-03 05:54:56.001
cmipleiyz000ixzk08mgxb5i6	Xiaomi	xiaomi	/images/brands/brand_19.png	2025-12-03 05:54:56.267
\.

-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."Category" (id, title, slug, "imageUrl", "createdAt") FROM stdin;
cmiplej6i000jxzk03wk1qfrf	Laptop	laptop	\N	2025-12-03 05:54:56.538
cmiplejed000kxzk0du54t4hv	Bàn phím	ban-phim	\N	2025-12-03 05:54:56.821
cmiplejlw000lxzk0x9zp7qpn	Màn hình	man-hinh	\N	2025-12-03 05:54:57.092
cmipleju2000mxzk021v9kvrb	Chuột + Lót chuột	chuot-lot-chuot	\N	2025-12-03 05:54:57.386
cmiplek1j000nxzk0kds9n1nu	Tai nghe	tai-nghe	\N	2025-12-03 05:54:57.655
cmiplek94000oxzk06s9yi4bn	Phụ kiện	phu-kien	\N	2025-12-03 05:54:57.929
\.

-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."Order" (id, "userId", "orderNumber", status, "totalPrice", "paymentStatus", "createdAt", "updatedAt") FROM stdin;
\.

-- Data for Name: OrderItem; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."OrderItem" (id, "orderId", "productId", quantity, price) FROM stdin;
\.

-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."Product" (id, "brandId", "createdAt", description, discount, images, "isFeatured", name, price, slug, status, stock, "updatedAt", variant) FROM stdin;
cmiplel24000uxzk04dxmtt1t	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:54:58.972	Dell Vostro 3530 cấu hình Core i7, phù hợp làm việc đa nhiệm.	0	{/images/products/product_2.jpg}	t	Laptop Dell Vostro 3530 2H1TPI7	16690000	laptop-dell-vostro-3530-2h1tpi7	new	15	2025-12-03 05:56:11.096	laptop
cmiplelnj000yxzk0mor2nwpj	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:54:59.743	Dòng Latitude bền bỉ, tối ưu cho doanh nghiệp và dân văn phòng.	0	{/images/products/product_3.jpg}	f	Laptop Dell Latitude 3450 L3450-1335U-16512W-UMC	18490000	laptop-dell-latitude-3450-l3450-1335u-16512w-umc	hot	12	2025-12-03 05:56:11.931	laptop
cmiplem920012xzk0udzq56iv	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:00.518	Dell Vostro 3520 giá tốt, đáp ứng nhu cầu học online và văn phòng.	0	{/images/products/product_4.jpg}	f	Laptop Dell Vostro 3520 F0V0VI3 - Nhập khẩu chính hãng	9290000	laptop-dell-vostro-3520-f0v0vi3	sale	25	2025-12-03 05:56:12.724	laptop
cmiplemu30016xzk0itdac5ga	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:01.275	Phiên bản Vostro 3530 cấu hình cân bằng, phù hợp sinh viên.	0	{/images/products/product_5.jpg}	f	Laptop Dell Vostro 3530 2H1TPI3 - Nhập khẩu chính hãng	9690000	laptop-dell-vostro-3530-2h1tpi3	sale	30	2025-12-03 05:56:13.54	laptop
cmiplenga001axzk0ub36wml3	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:02.074	Ultrabook Dell XPS 13 cao cấp, thiết kế viền mỏng, màn hình 13 inch.	0	{/images/products/product_6.jpg}	t	Laptop Dell XPS 13 9350 71058714	57990000	laptop-dell-xps-13-9350-71058714	hot	5	2025-12-03 05:56:14.332	laptop
cmipleo1j001exzk08d2qomwn	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:02.839	Dell Inspiron 14 mỏng nhẹ, phù hợp mang theo đi học, đi làm.	0	{/images/products/product_7.jpg}	f	Laptop Dell Inspiron 14 5441 N4O10441W1	28990000	laptop-dell-inspiron-14-5441-n4o10441w1	new	10	2025-12-03 05:56:15.189	laptop
cmipleomk001ixzk0bfrpul39	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:03.596	Inspiron 15 3530 màn hình 15.6", phù hợp giải trí và làm việc.	0	{/images/products/product_8.jpg}	f	Laptop Dell Inspiron 15 3530 J9XFD - Nhập khẩu chính hãng	14990000	laptop-dell-inspiron-15-3530-j9xfd	hot	18	2025-12-03 05:56:15.98	laptop
cmiplep7p001mxzk08kc8z0yn	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:04.357	Inspiron 14 5440 thiết kế hiện đại, hiệu năng tốt cho văn phòng.	0	{/images/products/product_9.jpg}	f	Laptop Dell Inspiron 14 5440 D0F3W - Nhập khẩu chính hãng	15990000	laptop-dell-inspiron-14-5440-d0f3w	new	16	2025-12-03 05:56:16.78	laptop
cmipleptb001qxzk05u1fqgjs	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:05.135	Dell Inspiron 15 3530 P16WD2, cân bằng giữa hiệu năng và giá thành.	0	{/images/products/product_10.jpg}	f	Laptop Dell Inspiron 15 3530 P16WD2	17490000	laptop-dell-inspiron-15-3530-p16wd2	hot	14	2025-12-03 05:56:17.93	laptop
cmipleqfe001uxzk0eijeqtse	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:05.931	Laptop Dell 15 DC15250 79N4M chính hãng, phù hợp nhu cầu văn phòng cơ bản.	0	{/images/products/product_11.jpg}	f	Laptop Dell 15 DC15250 79N4M - Nhập khẩu chính hãng	10990000	laptop-dell-15-dc15250-79n4m	new	22	2025-12-03 05:56:18.794	laptop
cmipler27001yxzk09sj6gwz1	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:06.695	Phiên bản Dell 15 DC15250 71073959 với hiệu năng ổn định cho làm việc.	0	{/images/products/product_12.jpg}	f	Laptop Dell 15 DC15250 71073959	20990000	laptop-dell-15-dc15250-71073959	hot	12	2025-12-03 05:56:19.594	laptop
cmiplernl0022xzk0fobtpz2e	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:07.521	Dell 15 DC15255 DC5R5802W1 cho trải nghiệm học tập và văn phòng mượt mà.	0	{/images/products/product_13.jpg}	f	Laptop Dell 15 DC15255 DC5R5802W1	15990000	laptop-dell-15-dc15255-dc5r5802w1	new	18	2025-12-03 05:56:20.366	laptop
cmiples970026xzk0i7tzgy6q	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:08.299	Laptop Dell 15 DC15250 H02DF chính hãng, thiết kế bền bỉ, dễ sử dụng.	0	{/images/products/product_14.jpg}	f	Laptop Dell 15 DC15250 H02DF - Nhập khẩu chính hãng	14990000	laptop-dell-15-dc15250-h02df	sale	16	2025-12-03 05:56:21.15	laptop
cmipletge002exzk0lyqpfklx	cmiplegvb0008xzk03vivcl4u	2025-12-03 05:55:09.855	Bàn phím cơ DareU EK87 với switch bền bỉ, led rainbow nổi bật, phù hợp game thủ.	0	{/images/products/product_16.jpg}	f	Bàn phím cơ DareU EK87 Led Rainbow - Chính hãng	690000	ban-phim-dareu-ek87	sale	40	2025-12-03 05:56:22.727	keyboard
cmipleu1p002ixzk0qvlb1nl5	cmipleh2z0009xzk0i77mp625	2025-12-03 05:55:10.621	Bàn phím cơ Akko 3087 layout tenkeyless, keycap PBT bền màu, cảm giác gõ chắc tay.	0	{/images/products/product_17.jpg}	t	Bàn phím cơ Akko 3087 – PBT Double-shot	1290000	ban-phim-akko-3087	sale	18	2025-12-03 05:56:23.553	keyboard
cmipleumt002mxzk0bunnfu8p	cmiplegg50006xzk0xz060tjw	2025-12-03 05:55:11.381	Keychron K2 V2 hỗ trợ kết nối đa thiết bị, tương thích Windows và macOS, pin dung lượng lớn. (Blue Switch)	0	{/images/products/product_18.jpg}	t	Bàn phím cơ không dây Keychron K2 V2	2190000	ban-phim-keychron-k2-v2	sale	12	2025-12-03 05:56:24.614	keyboard
cmiplev8c002qxzk0i36uiw1z	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:12.156	Bàn phím ASUS TUF K1 với thiết kế chống nước, led RGB, phù hợp chơi game cường độ cao.	0	{/images/products/product_19.jpg}	f	Bàn phím gaming ASUS TUF K1 - Chống nước	990000	ban-phim-asus-tuf-k1	sale	20	2025-12-03 05:56:25.385	keyboard
cmiplevtl002uxzk0apeoay76	cmipleham000axzk0dnscne6e	2025-12-03 05:55:12.921	Razer BlackWidow V3 với switch Razer độc quyền, led RGB Razer Chroma, tối ưu cho game thủ.	0	{/images/products/product_20.jpg}	f	Bàn phím cơ Razer BlackWidow V3	2990000	ban-phim-razer-blackwidow-v3	sale	10	2025-12-03 05:56:26.174	keyboard
cmipleweh002yxzk0bth6a2tj	cmiplehhz000bxzk0lmlm35y7	2025-12-03 05:55:13.673	Bàn phím cơ E-Dra EK387 Pro hỗ trợ hot swap switch, dễ dàng thay thế và nâng cấp.	0	{/images/products/product_21.jpg}	f	Bàn phím cơ E-Dra EK387 Pro - Hot swap	890000	ban-phim-edra-ek387-pro	sale	28	2025-12-03 05:56:26.944	keyboard
cmiplewzc0032xzk0blw43qlb	cmiplehpl000cxzk0j88gln53	2025-12-03 05:55:14.425	SteelSeries Apex 3 với khả năng chống nước IP32, đèn RGB 10 vùng, yên tĩnh khi gõ.	0	{/images/products/product_22.jpg}	f	Bàn phím cơ SteelSeries Apex 3 - Chống nước IP32	1490000	ban-phim-steelseries-apex-3	sale	22	2025-12-03 05:56:27.73	keyboard
cmipley87003axzk0lcv664ch	cmiplei4j000exzk0s4adgo69	2025-12-03 05:55:16.039	Bàn phím AULA M75 TM không dây, gõ êm, độ bền cao.	0	{/images/products/product_24.jpg}	f	Bàn phím AULA M75 TM	1990000	ban-phim-aula-m75-tm	sale	35	2025-12-03 05:56:29.317	keyboard
cmipleyt3003exzk0ft3eq7or	cmipleg110004xzk09h81bfbf	2025-12-03 05:55:16.791	Màn hình LG 24MP400 24 inch, độ phân giải Full HD, tần số quét 75Hz, phù hợp làm việc và giải trí.	0	{/images/products/product_25.jpg}	f	Màn hình LG 24 inch 24MP400 Full HD 75Hz	2690000	man-hinh-lg-24mp400	sale	20	2025-12-03 05:56:30.089	monitor
cmipleze5003ixzk05qidaaen	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:17.549	Màn hình Dell P2422H 24 inch, tấm nền IPS, thiết kế công thái học, xoay dọc tiện lợi.	0	{/images/products/product_26.jpg}	t	Màn hình Dell 24 inch P2422H IPS	4290000	man-hinh-dell-p2422h	sale	15	2025-12-03 05:56:30.865	monitor
cmiplezz8003mxzk08f88o4x2	cmiplefte0003xzk01xfuz7qm	2025-12-03 05:55:18.308	Màn hình Samsung LF27T350 27 inch, viền mỏng, tần số quét 75Hz, hỗ trợ AMD FreeSync.	0	{/images/products/product_27.jpg}	f	Màn hình Samsung 27 inch LF27T350 FHD 75Hz	3990000	man-hinh-samsung-lf27t350	sale	18	2025-12-03 05:56:31.628	monitor
cmiplf0ki003qxzk07i6po8zs	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:19.074	ASUS TUF VG249Q1R 23.8 inch, tần số quét 165Hz, 1ms MPRT, công nghệ ELMB, tối ưu cho game thủ.	0	{/images/products/product_28.jpg}	t	Màn hình gaming ASUS TUF VG249Q1R 23.8" 165Hz	4990000	man-hinh-asus-tuf-vg249q1r	sale	12	2025-12-03 05:56:32.407	monitor
cmiplf167003uxzk08jopry4p	cmiplegnr0007xzk0786we7bv	2025-12-03 05:55:19.855	Acer Nitro VG270 27 inch, tấm nền IPS, màu sắc sống động, phù hợp làm việc và chơi game cơ bản.	0	{/images/products/product_29.jpg}	f	Màn hình Acer 27 inch Nitro VG270 75Hz	3590000	man-hinh-acer-nitro-vg270	sale	22	2025-12-03 05:56:33.183	monitor
cmiplf1s6003yxzk0w5kojegu	cmipleic3000fxzk05b5lxonp	2025-12-03 05:55:20.646	AOC 24G2 24 inch, tần số quét 144Hz, FreeSync, viền mỏng 3 cạnh, rất được ưa chuộng trong tầm giá.	0	{/images/products/product_30.jpg}	f	Màn hình AOC 24G2 24" 144Hz Gaming	4490000	man-hinh-aoc-24g2	sale	16	2025-12-03 05:56:34.013	monitor
cmiplf2de0042xzk0jhzrxygs	cmipleik3000gxzk0316p20ka	2025-12-03 05:55:21.41	ViewSonic VA2432-H 24 inch, tấm nền IPS, chống nháy, lọc ánh sáng xanh, phù hợp văn phòng.	0	{/images/products/product_31.jpg}	f	Màn hình ViewSonic VA2432-H 24" IPS	2890000	man-hinh-viewsonic-va2432h	sale	30	2025-12-03 05:56:34.786	monitor
cmiplf2zx0046xzk0phg2cw39	cmiplefm00002xzk082ct8lw3	2025-12-03 05:55:22.169	MSI Optix G241 24 inch, 144Hz, 1ms, hỗ trợ FreeSync, thiết kế viền mỏng hiện đại.	0	{/images/products/product_32.jpg}	t	Màn hình MSI Optix G241 24" 144Hz	4690000	man-hinh-msi-optix-g241	sale	14	2025-12-03 05:56:35.564	monitor
cmiplf3kv004axzk0c8dxot93	cmipleirl000hxzk0yj6kzfch	2025-12-03 05:55:22.975	Gigabyte G24F 2 23.8 inch, tần số quét 165Hz (OC), hỗ trợ HDR, thích hợp chơi game eSports.	0	{/images/products/product_33.jpg}	f	Màn hình Gigabyte G24F 2 23.8" 165Hz	4790000	man-hinh-gigabyte-g24f-2	sale	11	2025-12-03 05:56:36.34	monitor
cmiplf4rm004ixzk020mqsxob	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:24.514	Chuột gaming Logitech G102 Lightsync cảm biến chính xác, led RGB 16.8 triệu màu, phù hợp game thủ và học sinh – sinh viên.	0	{/images/products/product_35.jpg}	f	Chuột gaming Logitech G102 Lightsync RGB	399000	chuot-logitech-g102-lightsync-rgb	sale	40	2025-12-03 05:56:37.885	mouse
cmiplf5cv004mxzk08cu3dj9m	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:25.279	Chuột không dây Logitech G304 Lightspeed, độ trễ thấp, pin lâu, thích hợp cho cả chơi game và làm việc.	0	{/images/products/product_36.jpg}	t	Chuột không dây Logitech G304 Lightspeed	899000	chuot-logitech-g304-lightspeed	hot	30	2025-12-03 05:56:38.661	mouse
cmiplf5zc004qxzk0ocbfwlxc	cmipleham000axzk0dnscne6e	2025-12-03 05:55:26.088	Razer DeathAdder Essential với thiết kế công thái học, cảm biến chuẩn xác, phù hợp chơi game FPS.	0	{/images/products/product_37.jpg}	f	Chuột Razer DeathAdder Essential	590000	chuot-razer-deathadder-essential	sale	25	2025-12-03 05:56:39.426	mouse
cmiplf6l8004uxzk0gznbin0q	cmipleham000axzk0dnscne6e	2025-12-03 05:55:26.876	Chuột Razer Viper Mini siêu nhẹ, switch quang học tốc độ cao, led RGB Razer Chroma.	0	{/images/products/product_38.jpg}	t	Chuột Razer Viper Mini Ultra-light	990000	chuot-razer-viper-mini	hot	18	2025-12-03 05:56:40.195	mouse
cmiplf76g004yxzk0kmhji5lo	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:27.64	Chuột ASUS TUF M3 Gen II với thiết kế bền bỉ, switch bền, phù hợp chiến game cường độ cao.	0	{/images/products/product_39.jpg}	f	Chuột gaming ASUS TUF M3 Gen II	520000	chuot-asus-tuf-m3-gen2	sale	22	2025-12-03 05:56:41.006	mouse
cmiplf7rk0052xzk0vpmj538j	cmiplefm00002xzk082ct8lw3	2025-12-03 05:55:28.4	Chuột MSI Clutch GM11, cảm biến quang học, led RGB Mystic Light, phù hợp game thủ phổ thông.	0	{/images/products/product_40.jpg}	f	Chuột MSI Clutch GM11 RGB	490000	chuot-msi-clutch-gm11	sale	20	2025-12-03 05:56:41.779	mouse
cmiplf8cj0056xzk0qsau5br8	cmiplehpl000cxzk0j88gln53	2025-12-03 05:55:29.156	Chuột SteelSeries Rival 3 cảm biến TrueMove, led RGB 3 vùng, độ bền cao.	0	{/images/products/product_41.jpg}	f	Chuột SteelSeries Rival 3	790000	chuot-steelseries-rival-3	hot	16	2025-12-03 05:56:42.638	mouse
cmiplf8yb005axzk0cbmw99d9	cmiplehhz000bxzk0lmlm35y7	2025-12-03 05:55:29.939	Chuột gaming E-Dra EM640 giá tốt, nhiều mức DPI, phù hợp game net và học sinh.	0	{/images/products/product_42.jpg}	f	Chuột gaming E-Dra EM640	290000	chuot-edra-em640	sale	50	2025-12-03 05:56:43.418	mouse
cmiplf9ju005exzk0hnu3mxoy	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:30.714	Lót chuột Logitech G240 bề mặt vải, tối ưu cho cảm biến quang học, kích thước vừa phải.	0	{/images/products/product_43.jpg}	f	Lót chuột Logitech G240 Cloth Gaming Mousepad	290000	lot-chuot-logitech-g240	sale	35	2025-12-03 05:56:44.176	mouse
cmiplfa5a005ixzk0dhjpsqo3	cmipleham000axzk0dnscne6e	2025-12-03 05:55:31.487	Lót chuột Razer Goliathus Medium, bề mặt vải mịn, phù hợp-game FPS, dễ cuộn mang theo.	0	{/images/products/product_44.jpg}	f	Lót chuột Razer Goliathus Medium	390000	lot-chuot-razer-goliathus-medium	sale	28	2025-12-03 05:56:44.995	mouse
cmiplekgs000qxzk0sqpi47b8	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:54:58.204	Laptop Dell Vostro 3530 15.6" cho nhu cầu học tập và văn phòng.	0	{/images/products/product_1.jpg}	t	Laptop Dell Vostro 3530 2H1TPI5 - Nhập khẩu chính hãng	13890000	laptop-dell-vostro-3530-2h1tpi5	hot	20	2025-12-03 05:56:10.248	laptop
cmiplesuh002axzk0wqpueudf	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:09.064	Bàn phím Logitech K380 nhỏ gọn, kết nối không dây, phù hợp làm việc và học tập.	0	{/images/products/product_15.jpg}	f	Bàn phím cơ không dây Logitech K380 - Hàng chính hãng	699000	ban-phim-logitech-k380	sale	25	2025-12-03 05:56:21.926	keyboard
cmiplfc0m005uxzk0820y2jqm	cmipleham000axzk0dnscne6e	2025-12-03 05:55:33.91	Razer Kraken X Lite thiết kế nhẹ, đệm tai êm, âm thanh chân thực khi chơi game.	0	{/images/products/product_47.jpg}	f	Tai nghe Razer Kraken X Lite	1090000	tai-nghe-razer-kraken-x-lite	sale	22	2025-12-03 05:56:47.368	headphone
cmiplfclu005yxzk0y7siy594	cmipleham000axzk0dnscne6e	2025-12-03 05:55:34.674	Razer BlackShark V2 X với màng loa TriForce, micro khử ồn, phù hợp game thủ esports.	0	{/images/products/product_48.jpg}	t	Tai nghe Razer BlackShark V2 X	1690000	tai-nghe-razer-blackshark-v2-x	hot	15	2025-12-03 05:56:48.181	headphone
cmiplfd6z0062xzk0q7zsc5ye	cmiplehpl000cxzk0j88gln53	2025-12-03 05:55:35.435	SteelSeries Arctis 1 thiết kế gọn, headband thép, âm thanh cân bằng cho nhiều nhu cầu.	0	{/images/products/product_49.jpg}	f	Tai nghe SteelSeries Arctis 1	1590000	tai-nghe-steelseries-arctis-1	sale	20	2025-12-03 05:56:48.973	headphone
cmiplfe0b0066xzk0kfgr5jr5	cmiplehx4000dxzk0e4sw2tw1	2025-12-03 05:55:36.491	Corsair HS50 Pro với khung kim loại chắc chắn, micro rời, âm bass dày.	0	{/images/products/product_50.jpg}	f	Tai nghe Corsair HS50 Pro Stereo	1390000	tai-nghe-corsair-hs50-pro	sale	18	2025-12-03 05:56:49.843	headphone
cmiplfen3006axzk0gteh0z51	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:37.258	ASUS TUF Gaming H3 với khung thép, đệm tai dày, âm thanh 7.1 giả lập cho game thủ.	0	{/images/products/product_51.jpg}	f	Tai nghe ASUS TUF Gaming H3	1290000	tai-nghe-asus-tuf-gaming-h3	sale	20	2025-12-03 05:56:50.667	headphone
cmiplff80006exzk0bqm9vkbq	cmiplefm00002xzk082ct8lw3	2025-12-03 05:55:38.064	Tai nghe MSI DS502 với driver 40mm, rung giả lập, phù hợp game thủ thích cảm giác mạnh.	0	{/images/products/product_52.jpg}	f	Tai nghe MSI DS502 Gaming Headset	1190000	tai-nghe-msi-ds502	sale	16	2025-12-03 05:56:51.447	headphone
cmiplffst006ixzk0lwkx5rih	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:38.814	Tai nghe Dell WH3022 tối ưu cho họp online và văn phòng, micro khử ồn, đeo thoải mái.	0	{/images/products/product_53.jpg}	f	Tai nghe Dell Pro Stereo Headset WH3022	990000	tai-nghe-dell-wh3022	sale	24	2025-12-03 05:56:52.247	headphone
cmiplfgdx006mxzk02c3i77xv	cmiplefte0003xzk01xfuz7qm	2025-12-03 05:55:39.573	Tai nghe in-ear Samsung AKG sử dụng cổng Type-C, âm thanh cân bằng, phù hợp nghe nhạc và gọi điện.	0	{/images/products/product_54.jpg}	f	Tai nghe in-ear Samsung AKG Type-C	390000	tai-nghe-samsung-akg-typec	sale	35	2025-12-03 05:56:53.073	headphone
cmiplfgyt006qxzk0k2gj6loq	cmiplefte0003xzk01xfuz7qm	2025-12-03 05:55:40.326	Ổ cứng SSD di động Samsung T7 500GB, tốc độ cao, thiết kế nhỏ gọn, phù hợp mang đi làm và sao lưu dữ liệu.	0	{/images/products/product_55.jpg}	t	Ổ cứng di động Samsung T7 500GB USB-C	2490000	o-cung-di-dong-samsung-t7-500gb	sale	20	2025-12-03 05:56:53.852	accessory
cmiplfhkd006uxzk0njp79pwc	cmiplefte0003xzk01xfuz7qm	2025-12-03 05:55:41.101	USB Samsung Bar Plus 64GB vỏ kim loại, tốc độ đọc cao, nhỏ gọn dễ mang theo.	0	{/images/products/product_56.jpg}	f	USB 3.1 Samsung Bar Plus 64GB	290000	usb-samsung-bar-plus-64gb	sale	40	2025-12-03 05:56:54.638	accessory
cmiplfi5y006yxzk0jk2uj2mu	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:41.878	Đầu thu Bluetooth ASUS USB-BT500 chuẩn 5.0, giúp kết nối tai nghe, loa, tay cầm dễ dàng.	0	{/images/products/product_57.jpg}	f	Đầu thu Bluetooth ASUS USB-BT500	290000	dau-thu-bluetooth-asus-usb-bt500	sale	30	2025-12-03 05:56:55.439	accessory
cmiplfiqx0072xzk0rimfxnt4	cmiplef4v0000xzk0ec9edm6x	2025-12-03 05:55:42.633	Balo Dell Essential 15 inch chống sốc nhẹ, nhiều ngăn, phù hợp mang laptop đi học và đi làm.	0	{/images/products/product_58.jpg}	f	Balo Dell Essential Backpack 15	690000	balo-dell-essential-backpack-15	sale	25	2025-12-03 05:56:56.228	accessory
cmiplfjc50076xzk065zuqvoo	cmiplefe10001xzk0bhuhp19h	2025-12-03 05:55:43.398	Giá đỡ laptop bằng nhôm, nâng cao laptop giúp tản nhiệt tốt hơn và cải thiện tư thế ngồi.	0	{/images/products/product_59.jpg}	f	Giá đỡ laptop nhôm 	890000	gia-do-	sale	18	2025-12-03 05:56:57.034	accessory
cmiplfjxt007axzk07bqlsdkz	cmipleirl000hxzk0yj6kzfch	2025-12-03 05:55:44.177	Hub Gigabyte USB-C 6-in-1 hỗ trợ HDMI, USB, thẻ nhớ, phù hợp cho laptop mỏng nhẹ ít cổng.	0	{/images/products/product_60.jpg}	f	Hub chuyển đổi Gigabyte USB-C 6-in-1	1290000	hub-gigabyte-usbc-6in1	sale	20	2025-12-03 05:56:57.845	accessory
cmiplfkja007exzk0gqj1git7	cmipleik3000gxzk0316p20ka	2025-12-03 05:55:44.95	Webcam ViewSonic độ phân giải Full HD, micro tích hợp, phù hợp học online và họp từ xa.	0	{/images/products/product_61.jpg}	f	Webcam ViewSonic Full HD cho học online	890000	webcam-viewsonic-fullhd	sale	22	2025-12-03 05:56:58.625	accessory
cmiplfl4v007ixzk0wztpv0jg	cmipleiyz000ixzk08mgxb5i6	2025-12-03 05:55:45.727	Loa Bluetooth Xiaomi Mi Portable 16W, chống nước IPX7, âm lượng lớn, tiện mang đi picnic.	0	{/images/products/product_62.jpg}	f	Loa Bluetooth Xiaomi Mi Portable 16W	1090000	loa-bluetooth-xiaomi-mi-16w	sale	26	2025-12-03 05:56:59.424	accessory
cmiplflql007mxzk0re9gxu0q	cmipleg110004xzk09h81bfbf	2025-12-03 05:55:46.509	Đèn LED treo màn hình Yeelight, giúp giảm mỏi mắt khi làm việc buổi tối.	0	{/images/products/product_63.jpg}	f	Đèn LED treo màn hình Yeelight	790000	den-led-yeelight	sale	14	2025-12-03 05:57:00.228	accessory
cmiplfmcn007qxzk0bh07q66t	cmiplegnr0007xzk0786we7bv	2025-12-03 05:55:47.303	Dây HDMI 2.0 Acer chiều dài 1.8m, hỗ trợ độ phân giải 4K, dùng nối laptop với màn hình hoặc TV.	0	{/images/products/product_64.jpg}	f	Dây HDMI 2.0 Acer 1.8m	190000	day-hdmi-acer-1m8	sale	45	2025-12-03 05:57:01.012	accessory
cmiplexk90036xzk0s2x3pyzy	cmiplehx4000dxzk0e4sw2tw1	2025-12-03 05:55:15.177	Corsair K60 RGB Pro khung nhôm chắc chắn, RGB rực rỡ, switch mượt mà, độ bền cao.	0	{/images/products/product_23.jpg}	f	Bàn phím cơ Corsair K60 RGB Pro	2490000	ban-phim-corsair-k60-rgb-pro	sale	14	2025-12-03 05:56:28.539	keyboard
cmiplf463004exzk0f1wawgau	cmipleiyz000ixzk08mgxb5i6	2025-12-03 05:55:23.739	Màn hình Xiaomi 27 inch độ phân giải 2K, thiết kế tối giản, phù hợp làm việc sáng tạo nội dung.	0	{/images/products/product_34.jpg}	f	Màn hình Xiaomi 27 inch Desktop Monitor 2K	5490000	man-hinh-xiaomi-27-2k	sale	9	2025-12-03 05:56:37.11	monitor
cmiplfat5005mxzk0hvpfbebm	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:32.345	Tai nghe Logitech G331 âm thanh sống động, micro xoay, phù hợp chơi game và học online.	0	{/images/products/product_45.jpg}	f	Tai nghe gaming Logitech G331	890000	tai-nghe-logitech-g331	sale	25	2025-12-03 05:56:45.806	headphone
cmiplfben005qxzk0b5e947o6	cmipleg8j0005xzk0le24uam3	2025-12-03 05:55:33.119	Logitech G435 Lightspeed kết nối không dây, trọng lượng nhẹ, pin lâu, phù hợp giới trẻ.	0	{/images/products/product_46.jpg}	t	Tai nghe không dây Logitech G435 Lightspeed	1690000	tai-nghe-logitech-g435-lightspeed	hot	18	2025-12-03 05:56:46.588	headphone
\.

-- Data for Name: ProductCategory; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."ProductCategory" (id, "productId", "categoryId") FROM stdin;
cmiplekoh000sxzk0wxkc6gny	cmiplekgs000qxzk0sqpi47b8	cmiplej6i000jxzk03wk1qfrf
cmiplel9o000wxzk0jwtqgiwe	cmiplel24000uxzk04dxmtt1t	cmiplej6i000jxzk03wk1qfrf
cmiplelv40010xzk0575bcy8y	cmiplelnj000yxzk0mor2nwpj	cmiplej6i000jxzk03wk1qfrf
cmiplemgr0014xzk0e35qlfwu	cmiplem920012xzk0udzq56iv	cmiplej6i000jxzk03wk1qfrf
cmiplen1q0018xzk0velr4tyo	cmiplemu30016xzk0itdac5ga	cmiplej6i000jxzk03wk1qfrf
cmipleno4001cxzk0j48q2hsj	cmiplenga001axzk0ub36wml3	cmiplej6i000jxzk03wk1qfrf
cmipleo92001gxzk0pk2giea3	cmipleo1j001exzk08d2qomwn	cmiplej6i000jxzk03wk1qfrf
cmipleou5001kxzk09992uy0r	cmipleomk001ixzk0bfrpul39	cmiplej6i000jxzk03wk1qfrf
cmiplepfa001oxzk0iy4dyprz	cmiplep7p001mxzk08kc8z0yn	cmiplej6i000jxzk03wk1qfrf
cmipleq0x001sxzk0fyi73iiu	cmipleptb001qxzk05u1fqgjs	cmiplej6i000jxzk03wk1qfrf
cmipleqmw001wxzk05dfthnya	cmipleqfe001uxzk0eijeqtse	cmiplej6i000jxzk03wk1qfrf
cmipler9r0020xzk01g2cybv7	cmipler27001yxzk09sj6gwz1	cmiplej6i000jxzk03wk1qfrf
cmiplervc0024xzk0tzwv3phi	cmiplernl0022xzk0fobtpz2e	cmiplej6i000jxzk03wk1qfrf
cmiplesgo0028xzk0q1vflj28	cmiples970026xzk0i7tzgy6q	cmiplej6i000jxzk03wk1qfrf
cmiplet2r002cxzk0qlzcm9fd	cmiplesuh002axzk0wqpueudf	cmiplejed000kxzk0du54t4hv
cmipletnu002gxzk0ux35xve2	cmipletge002exzk0lyqpfklx	cmiplejed000kxzk0du54t4hv
cmipleu9f002kxzk048g0qvzu	cmipleu1p002ixzk0qvlb1nl5	cmiplejed000kxzk0du54t4hv
cmipleuun002oxzk01gilh5rn	cmipleumt002mxzk0bunnfu8p	cmiplejed000kxzk0du54t4hv
cmiplevg1002sxzk0ycy81isb	cmiplev8c002qxzk0i36uiw1z	cmiplejed000kxzk0du54t4hv
cmiplew12002wxzk0jh1qp7w5	cmiplevtl002uxzk0apeoay76	cmiplejed000kxzk0du54t4hv
cmiplewlu0030xzk0uv908eex	cmipleweh002yxzk0bth6a2tj	cmiplejed000kxzk0du54t4hv
cmiplex6q0034xzk0fto1ue42	cmiplewzc0032xzk0blw43qlb	cmiplejed000kxzk0du54t4hv
cmiplexrp0038xzk0b5emzz96	cmiplexk90036xzk0s2x3pyzy	cmiplejed000kxzk0du54t4hv
cmipleyfs003cxzk06vmlk5a4	cmipley87003axzk0lcv664ch	cmiplejed000kxzk0du54t4hv
cmiplez0i003gxzk01jfpd4ga	cmipleyt3003exzk0ft3eq7or	cmiplejlw000lxzk0x9zp7qpn
cmiplezlu003kxzk0p99diqyx	cmipleze5003ixzk05qidaaen	cmiplejlw000lxzk0x9zp7qpn
cmiplf06n003oxzk0ou95ol8x	cmiplezz8003mxzk08f88o4x2	cmiplejlw000lxzk0x9zp7qpn
cmiplf0sl003sxzk0gidq1hcg	cmiplf0ki003qxzk07i6po8zs	cmiplejlw000lxzk0x9zp7qpn
cmiplf1e1003wxzk0liruko9w	cmiplf167003uxzk08jopry4p	cmiplejlw000lxzk0x9zp7qpn
cmiplf1zr0040xzk0suhf08xt	cmiplf1s6003yxzk0w5kojegu	cmiplejlw000lxzk0x9zp7qpn
cmiplf2ks0044xzk0r6qmtxxw	cmiplf2de0042xzk0jhzrxygs	cmiplejlw000lxzk0x9zp7qpn
cmiplf37e0048xzk076zf7h5s	cmiplf2zx0046xzk0phg2cw39	cmiplejlw000lxzk0x9zp7qpn
cmiplf3sl004cxzk0c5nh52c9	cmiplf3kv004axzk0c8dxot93	cmiplejlw000lxzk0x9zp7qpn
cmiplf4dt004gxzk05l5uaxfl	cmiplf463004exzk0f1wawgau	cmiplejlw000lxzk0x9zp7qpn
cmiplf4z2004kxzk0nbiaekzb	cmiplf4rm004ixzk020mqsxob	cmipleju2000mxzk021v9kvrb
cmiplf5lh004oxzk0nw9e1s77	cmiplf5cv004mxzk08cu3dj9m	cmipleju2000mxzk021v9kvrb
cmiplf66w004sxzk0f2hotuki	cmiplf5zc004qxzk0ocbfwlxc	cmipleju2000mxzk021v9kvrb
cmiplf6ss004wxzk01zq1sz9q	cmiplf6l8004uxzk0gznbin0q	cmipleju2000mxzk021v9kvrb
cmiplf7e10050xzk03go3rayc	cmiplf76g004yxzk0kmhji5lo	cmipleju2000mxzk021v9kvrb
cmiplf7z30054xzk0o9bcnbdt	cmiplf7rk0052xzk0vpmj538j	cmipleju2000mxzk021v9kvrb
cmiplf8ka0058xzk0vidfhhoh	cmiplf8cj0056xzk0qsau5br8	cmipleju2000mxzk021v9kvrb
cmiplf95v005cxzk0vghx40sw	cmiplf8yb005axzk0cbmw99d9	cmipleju2000mxzk021v9kvrb
cmiplf9rl005gxzk0fd0jkr5n	cmiplf9ju005exzk0hnu3mxoy	cmipleju2000mxzk021v9kvrb
cmiplfadb005kxzk0bry5wn6g	cmiplfa5a005ixzk0dhjpsqo3	cmipleju2000mxzk021v9kvrb
cmiplfb0u005oxzk05zwd6zf2	cmiplfat5005mxzk0hvpfbebm	cmiplek1j000nxzk0kds9n1nu
cmiplfbmg005sxzk02l93c6f0	cmiplfben005qxzk0b5e947o6	cmiplek1j000nxzk0kds9n1nu
cmiplfc85005wxzk04abzit28	cmiplfc0m005uxzk0820y2jqm	cmiplek1j000nxzk0kds9n1nu
cmiplfcth0060xzk0gu121gxf	cmiplfclu005yxzk0y7siy594	cmiplek1j000nxzk0kds9n1nu
cmiplfdmn0064xzk06hxpg7c4	cmiplfd6z0062xzk0q7zsc5ye	cmiplek1j000nxzk0kds9n1nu
cmiplfe7t0068xzk0g8o8k81r	cmiplfe0b0066xzk0kfgr5jr5	cmiplek1j000nxzk0kds9n1nu
cmiplfeuk006cxzk0f2vjiqea	cmiplfen3006axzk0gteh0z51	cmiplek1j000nxzk0kds9n1nu
cmiplfffg006gxzk0xakicybo	cmiplff80006exzk0bqm9vkbq	cmiplek1j000nxzk0kds9n1nu
cmiplfg0c006kxzk0wnfnawiq	cmiplffst006ixzk0lwkx5rih	cmiplek1j000nxzk0kds9n1nu
cmiplfglf006oxzk0y5k4y9l0	cmiplfgdx006mxzk02c3i77xv	cmiplek1j000nxzk0kds9n1nu
cmiplfh6s006sxzk0wmks247o	cmiplfgyt006qxzk0k2gj6loq	cmiplek94000oxzk06s9yi4bn
cmiplfhs4006wxzk0bo62clib	cmiplfhkd006uxzk0njp79pwc	cmiplek94000oxzk06s9yi4bn
cmiplfidc0070xzk0soj6wqm0	cmiplfi5y006yxzk0jk2uj2mu	cmiplek94000oxzk06s9yi4bn
cmiplfiyn0074xzk0u2u2cqzy	cmiplfiqx0072xzk0rimfxnt4	cmiplek94000oxzk06s9yi4bn
cmiplfjjy0078xzk0lzo72xn1	cmiplfjc50076xzk065zuqvoo	cmiplek94000oxzk06s9yi4bn
cmiplfk5n007cxzk04u2gh5fc	cmiplfjxt007axzk07bqlsdkz	cmiplek94000oxzk06s9yi4bn
cmiplfkqr007gxzk03vv2leym	cmiplfkja007exzk0gqj1git7	cmiplek94000oxzk06s9yi4bn
cmiplflcn007kxzk05iahyal1	cmiplfl4v007ixzk0wztpv0jg	cmiplek94000oxzk06s9yi4bn
cmiplflyx007oxzk08uz7y7yt	cmiplflql007mxzk0re9gxu0q	cmiplek94000oxzk06s9yi4bn
cmiplfmk9007sxzk04zl88tfe	cmiplfmcn007qxzk0bh07q66t	cmiplek94000oxzk06s9yi4bn
\.

-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public."User" (id, email, name, "createdAt", "updatedAt") FROM stdin;
\.

-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
70eefde5-82c3-4d4d-b597-910178dd1483	e238159cae35d794b18c0437407312372d31ea9adc72d940c20abf6fad5d0372	2025-12-03 05:54:46.166157+00	20251115110612_add_product	\N	\N	2025-12-03 05:54:45.88026+00	1
3abd8543-cc46-4c0d-b068-f0b5f2137909	67b6b376a2c0b95d08e16924cf0597b3c1774b365e726b41bacfb55ad952223c	2025-12-03 05:54:46.617387+00	20251115113144_init	\N	\N	2025-12-03 05:54:46.278702+00	1
78e107e6-d73c-4889-8d7d-bf17b7a63983	394657885d4eb84012b7da217ef3eae57aa37168791a7ad0c9244549cc490ad0	2025-12-03 05:54:47.030612+00	20251120150512_tweak_product_images	\N	\N	2025-12-03 05:54:46.73114+00	1
4f094bee-7d7e-4a65-b31e-ffe9e5899c42	2acac9872ad570f98a08d5c8d195ab41462c0d70ed3e6834864c5b8ec772194e	2025-12-03 05:54:47.434011+00	20251202060243_add_user_model_and_relations	\N	\N	2025-12-03 05:54:47.142624+00	1
\.