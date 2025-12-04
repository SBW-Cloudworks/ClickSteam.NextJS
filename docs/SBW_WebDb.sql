-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.Brand (
  id text NOT NULL,
  name text NOT NULL,
  slug text NOT NULL,
  imageUrl text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT Brand_pkey PRIMARY KEY (id)
);
CREATE TABLE public.Category (
  id text NOT NULL,
  title text NOT NULL,
  slug text NOT NULL,
  imageUrl text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT Category_pkey PRIMARY KEY (id)
);
CREATE TABLE public.Order (
  id text NOT NULL,
  userId text NOT NULL,
  orderNumber text NOT NULL,
  status text NOT NULL,
  totalPrice integer NOT NULL,
  paymentStatus text NOT NULL,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp without time zone NOT NULL,
  CONSTRAINT Order_pkey PRIMARY KEY (id),
  CONSTRAINT Order_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);
CREATE TABLE public.OrderItem (
  id text NOT NULL,
  orderId text NOT NULL,
  productId text NOT NULL,
  quantity integer NOT NULL,
  price integer NOT NULL,
  CONSTRAINT OrderItem_pkey PRIMARY KEY (id),
  CONSTRAINT OrderItem_orderId_fkey FOREIGN KEY (orderId) REFERENCES public.Order(id),
  CONSTRAINT OrderItem_productId_fkey FOREIGN KEY (productId) REFERENCES public.Product(id)
);
CREATE TABLE public.Product (
  id text NOT NULL,
  brandId text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  description text,
  discount integer NOT NULL DEFAULT 0,
  images ARRAY DEFAULT ARRAY[]::text[],
  isFeatured boolean NOT NULL DEFAULT false,
  name text NOT NULL,
  price integer NOT NULL,
  slug text NOT NULL,
  status text NOT NULL,
  stock integer NOT NULL,
  updatedAt timestamp without time zone NOT NULL,
  variant text NOT NULL,
  CONSTRAINT Product_pkey PRIMARY KEY (id),
  CONSTRAINT Product_brandId_fkey FOREIGN KEY (brandId) REFERENCES public.Brand(id)
);
CREATE TABLE public.ProductCategory (
  id text NOT NULL,
  productId text NOT NULL,
  categoryId text NOT NULL,
  CONSTRAINT ProductCategory_pkey PRIMARY KEY (id),
  CONSTRAINT ProductCategory_productId_fkey FOREIGN KEY (productId) REFERENCES public.Product(id),
  CONSTRAINT ProductCategory_categoryId_fkey FOREIGN KEY (categoryId) REFERENCES public.Category(id)
);
CREATE TABLE public.User (
  id text NOT NULL,
  email text NOT NULL,
  name text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp without time zone NOT NULL,
  CONSTRAINT User_pkey PRIMARY KEY (id)
);
CREATE TABLE public._prisma_migrations (
  id character varying NOT NULL,
  checksum character varying NOT NULL,
  finished_at timestamp with time zone,
  migration_name character varying NOT NULL,
  logs text,
  rolled_back_at timestamp with time zone,
  started_at timestamp with time zone NOT NULL DEFAULT now(),
  applied_steps_count integer NOT NULL DEFAULT 0,
  CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id)
);