// app/(client)/api/products/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        brand: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    const data = products.map((p) => ({
      id: p.id,
      _id: p.id,
      name: p.name,
      slug: { current: p.slug},
      description: p.description,
      price: p.price,
      discount: p.discount,
      stock: p.stock,
      status: p.status,
      variant: p.variant,
      isFeatured: p.isFeatured,
      images: p.images, 
      categories: p.categories.map((pc) => pc.category.title),
      brandName: p.brand?.name ?? null,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("[GET /api/products] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
