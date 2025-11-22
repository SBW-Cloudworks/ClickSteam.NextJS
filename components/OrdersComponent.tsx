"use client";

import { useState } from "react";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import PriceFormatter from "./PriceFormatter";
import { format } from "date-fns";
import { X } from "lucide-react";
import OrderDetailDialog from "./OrderDetailDialog";
import toast from "react-hot-toast";

// Kiểu dữ liệu order lấy từ Prisma
type OrderRow = {
  id: string;
  orderNumber: string;
  totalPrice: number;
  status: string;
  createdAt: string | Date;
  // các field dưới đây có thể chưa có trong DB, nên để optional
  customerName?: string | null;
  email?: string | null;
  invoiceNumber?: string | null;
};

const OrdersComponent = ({ orders }: { orders: OrderRow[] }) => {
  const [selectedOrder, setSelectedOrder] = useState<OrderRow | null>(null);

  const handleDelete = () => {
    toast.error("Delete method is only available for Admin");
  };

  return (
    <>
      <TableBody>
        <TooltipProvider>
          {orders.map((order) => (
            <Tooltip key={order.id ?? order.orderNumber}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-gray-100 h-12"
                  onClick={() => setSelectedOrder(order)}
                >
                  {/* Order number */}
                  <TableCell className="font-medium">
                    {order.orderNumber
                      ? `${order.orderNumber.slice(-10)}...`
                      : "N/A"}
                  </TableCell>

                  {/* Date */}
                  <TableCell className="hidden md:table-cell">
                    {order.createdAt &&
                      format(new Date(order.createdAt), "dd/MM/yyyy")}
                  </TableCell>

                  {/* Customer name (hiện chưa lưu nên fallback '-') */}
                  <TableCell>{order.customerName ?? "-"}</TableCell>

                  {/* Email (hiện chưa lưu nên fallback '-') */}
                  <TableCell className="hidden sm:table-cell">
                    {order.email ?? "-"}
                  </TableCell>

                  {/* Total price */}
                  <TableCell>
                    <PriceFormatter
                      amount={order.totalPrice}
                      className="text-black font-medium"
                    />
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    {order.status && (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.status === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    )}
                  </TableCell>

                  {/* Invoice number – hiện chưa có nên fallback '----' */}
                  <TableCell className="hidden sm:table-cell">
                    <p className="font-medium line-clamp-1">
                      {order.invoiceNumber ?? "----"}
                    </p>
                  </TableCell>

                  {/* Delete icon */}
                  <TableCell
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete();
                    }}
                    className="flex items-center justify-center group"
                  >
                    <X
                      size={20}
                      className="group-hover:text-shop_dark_green hoverEffect"
                    />
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to see order details</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>

      {/* Dialog chi tiết đơn hàng */}
      <OrderDetailDialog
        order={selectedOrder as any}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrdersComponent;
