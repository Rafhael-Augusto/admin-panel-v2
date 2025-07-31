import {
  DashboardContent,
  OrdersContent,
  ProductsContent,
  SalesContent,
  UsersContent,
} from "@/components/content";

export const contentList = [
  { name: "dashboard", component: DashboardContent },
  { name: "products", component: ProductsContent },
  { name: "users", component: UsersContent },
  { name: "orders", component: OrdersContent },
  { name: "sales", component: SalesContent },
];
