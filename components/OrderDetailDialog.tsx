import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import PriceFormatter from "./PriceFormatter";

// ---- Kiểu dữ liệu order lấy từ Prisma (order + items + product) ----
interface OrderItemWithProduct {
  id: string;
  quantity: number;
  price: number; // đơn giá mỗi item trong OrderItem
  product?: {
    id: string;
    name: string;
    price: number;
    images: string[]; // mảng URL ảnh, ví dụ "/images/products/product_1.png"
  } | null;
}

interface OrderWithItems {
  id: string;
  orderNumber: string;
  status: string;
  totalPrice: number;
  createdAt: string | Date;
  // có thể sau này bạn thêm các field này vào Order model thì UI dùng được luôn
  customerName?: string | null;
  email?: string | null;
  items: OrderItemWithProduct[];
}

interface OrderDetailsDialogProps {
  order: OrderWithItems | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) return null;

  const orderDate = new Date(order.createdAt);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Order Details - {order.orderNumber}</DialogTitle>
        </DialogHeader>

        {/* Thông tin chung của đơn hàng */}
        <div className="mt-4 space-y-1">
          <p>
            <strong>Customer:</strong>{" "}
            {order.customerName ?? "-"}
          </p>
          <p>
            <strong>Email:</strong> {order.email ?? "-"}
          </p>
          <p>
            <strong>Date:</strong> {orderDate.toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="capitalize text-green-600 font-medium">
              {order.status}
            </span>
          </p>
        </div>

        {/* Bảng sản phẩm trong đơn hàng */}
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.items?.map((item) => {
              const product = item.product;
              const imageSrc = product?.images?.[0];

              return (
                <TableRow key={item.id}>
                  <TableCell className="flex items-center gap-2">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={product?.name ?? "productImage"}
                        width={50}
                        height={50}
                        className="border rounded-sm object-contain"
                      />
                    )}
                    <span>{product?.name ?? "Unknown product"}</span>
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <PriceFormatter
                      amount={item.price ?? product?.price ?? 0}
                      className="text-black font-medium"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* Tổng tiền */}
        <div className="mt-4 text-right flex items-center justify-end">
          <div className="w-44 flex flex-col gap-1">
            <div className="w-full flex items-center justify-between">
              <strong>Total: </strong>
              <PriceFormatter
                amount={order.totalPrice}
                className="text-black font-bold"
              />
            </div>
          </div>
        </div>

        {/* (Tuỳ chọn) nút quay lại / đi tới trang khác */}
        <div className="mt-4 flex justify-end gap-2">
          <Button asChild variant="outline">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
