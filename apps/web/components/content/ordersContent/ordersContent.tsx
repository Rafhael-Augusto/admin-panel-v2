"use client";

import { useEffect, useState } from "react";
import { Filter } from "@/utils/searchFilterUtils";
import { Search } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getIcon } from "@/utils/iconUtils";
import { Order } from "@/@types/apiTypes";

const ordersInfos = [
  {
    title: "Total orders",
    value: "6",
    desc: "orders this month",
    icon: "shoppingcart",
  },
  {
    title: "Preparing",
    value: "2",
    desc: "waiting process",
    icon: "alarmclock",
  },
  { title: "Dispatched", value: "2", desc: "in transport", icon: "truck" },
  {
    title: "Total revenue",
    value: "R$ 1460",
    desc: "compared to last month",
    icon: "dollarsign",
    percentage: "+12",
  },
];

const orders = [
  {
    order: "#1",
    client: { name: "Rafhael Augusto", email: "rafhael@gmail.com" },
    date: {
      date: "07-28-2025",
      time: "14:30",
    },
    total: 100,
    status: "Shipped",
  },
  {
    order: "#2",
    client: { name: "Rafhael Augusto", email: "rafhael@gmail.com" },
    date: {
      date: "07-28-2025",
      time: "14:30",
    },
    total: 100,
    status: "Canceled",
  },
  {
    order: "#3",
    client: { name: "Rafhael Augusto", email: "rafhael@gmail.com" },
    date: {
      date: "07-28-2025",
      time: "14:30",
    },
    total: 200,
    status: "Shipped",
  },
];

export function OrdersContent() {
  const [selectedOrder, setSelectedOrder] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [filteredItems, setFilteredItems] = useState<Order[]>();
  const [wordFilter, setWordFilter] = useState("");

  useEffect(() => {
    const filterResult = Filter({
      list: orders,
      order: selectedOrder,
      status: selectedStatus,
      words: wordFilter,
    });

    setFilteredItems(filterResult as Order[]);
  }, [selectedOrder, selectedStatus, wordFilter]);

  return (
    <div className="h-full px-5">
      <div className="flex gap-6">
        {ordersInfos.map((orderInfo, index) => {
          const Icon = getIcon(orderInfo.icon);

          return (
            <Card key={index} className="w-[260]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl">{orderInfo.title}</h2>
                    {Icon && <Icon />}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="font-bold text-2xl">
                {orderInfo.value}
              </CardContent>

              <CardFooter>
                <div className="flex gap-1">
                  <p
                    className={`${orderInfo.percentage && Number(orderInfo.percentage) > 0 ? "text-green-700" : "text-red-600"}`}
                  >
                    {orderInfo.percentage ? orderInfo.percentage + "%" : ""}
                  </p>
                  <p className="text-gray-700">{orderInfo.desc}</p>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="my-4">
        <Card>
          <CardHeader className="text-3xl font-bold">Filters</CardHeader>

          <CardContent>
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <Search className="text-primary/50  absolute left-1.5 top-1.5" />
                <Input
                  className="pl-8 w-xl"
                  placeholder="Search orders..."
                  onChange={(e) => setWordFilter(e.target.value)}
                />
              </div>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All roles</SelectItem>
                  <SelectItem value="preparing">Preparing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">Default</SelectItem>
                  <SelectItem value="higher">Higher to lower</SelectItem>
                  <SelectItem value="lower">Lower to higher</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader className="flex items-center justify-between text-3xl font-bold">
            List of Orders ({(filteredItems ?? orders).length})
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order #</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(filteredItems ?? orders).map((order, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{order.order}</TableCell>
                      <TableCell>
                        {order.client.name}
                        <p className="text-gray-700">{order.client.email}</p>
                      </TableCell>
                      <TableCell>
                        {order.date.date}
                        <p className="text-gray-700">{order.date.time}</p>
                      </TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>{order.total}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
