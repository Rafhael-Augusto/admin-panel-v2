import {
  AlarmClock,
  CircleQuestionMark,
  DollarSign,
  Package,
  Shield,
  ShoppingCart,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  UserX,
} from "lucide-react";

export function getIcon(icon: string) {
  switch (icon) {
    case "users":
      return Users;

    case "usercheck":
      return UserCheck;

    case "userx":
      return UserX;

    case "shield":
      return Shield;

    case "sales":
      return DollarSign;

    case "products":
      return Package;

    case "shoppingcart":
      return ShoppingCart;

    case "alarmclock":
      return AlarmClock;

    case "truck":
      return Truck;

    case "dollarsign":
      return DollarSign;

    case "ticket":
      return TrendingUp;

    default:
      return CircleQuestionMark;
  }
}
