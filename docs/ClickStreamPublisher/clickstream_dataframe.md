# Clickstream Dataframe (Markdown)

| Category | Field Name | Data Type | Required | Description | Enum | Example |
| --- | --- | --- | --- | --- | --- | --- |
| Event Info | event_id | string (UUID) | YES | ID duy nhat cho moi event clickstream | - | 550e8400-e29b-41d4-a716-446655440000 |
| Event Info | event_timestamp | datetime (UTC) | YES | Thoi diem ghi nhan event | - | 2025-12-01T14:23:11Z |
| Event Info | event_name | string | YES | Ten event | home_view / category_view / product_view / add_to_cart_click / remove_from_cart_click / wishlist_toggle / share_click / login_open / login_success / logout / checkout_start / checkout_complete | product_view |
| User Info | user_id | string | NO | ID user tu he thong login (NULL neu chua dang nhap) | - | user_2q9v9p... |
| User Info | user_login_state | enum | YES | Trang thai dang nhap | logged_in / anonymous | logged_in |
| User Info | identity_source | string | YES | Nguon dinh danh | clerk_google / clerk_email / clerk_password / anonymous | clerk_google |
| User Info | client_id | string | YES | ID an danh gan voi browser (cookie/localStorage) | - | c_9f87ad... |
| User Info | session_id | string | YES | ID phien duyet web (reset sau 30 phut khong hoat dong) | - | s_a13b2c... |
| Session Info | is_first_visit | boolean | NO | Lan dau browser nay vao site khong (theo client_id) | TRUE / FALSE | TRUE |
| context_product | product_id | string | NO* | Bat buoc voi event san pham: product_view / add_to_cart_click / remove_from_cart_click / checkout_start / checkout_complete | - | prod_aula_m75_tm |
| context_product | product_name | string | NO | Ten san pham tai thoi diem event | - | Ban phim AULA M75 TM |
| context_product | product_category | string | NO | Danh muc chinh | Suggested (not strict): laptop / keyboard / monitor / mouse / headphone / accessory (Product.variant snapshot) | keyboard |
| context_product | product_brand | string | NO | Thuong hieu san pham | Free text (suggested current seed: Acer / Akko / AOC / ASUS / AULA / Corsair / DareU / Dell / E-Dra / Gigabyte / Keychron / LG / Logitech / MSI / Razer / Samsung / SteelSeries / ViewSonic / Xiaomi) | AULA |
| context_product | product_price | decimal | NO | Gia niem yet tai thoi diem event (VND) | - | 1990000 |
| context_product | product_discount_price | decimal | NO | Gia sau giam tai thoi diem event (VND). NULL neu khong giam | - | 1790000 |
| context_product | product_url_path | string | NO | Duong dan tuong doi cua trang san pham | - | /product/ban-phim-aula-m75-tm |
