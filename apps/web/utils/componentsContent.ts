import {
  AccountContent,
  DashboardContent,
  OrdersContent,
  ProductsContent,
  ReportsContent,
  SalesContent,
  SettingsContent,
  UsersContent,
} from "@/components/content";

export const contentList = [
  { name: "dashboard", component: DashboardContent },
  { name: "products", component: ProductsContent },
  { name: "users", component: UsersContent },
  { name: "orders", component: OrdersContent },
  { name: "sales", component: SalesContent },
  { name: "reports", component: ReportsContent },
  { name: "settings", component: SettingsContent },
  { name: "account", component: AccountContent },
];
