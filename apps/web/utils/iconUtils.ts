import {
  CircleQuestionMark,
  DollarSign,
  Package,
  Shield,
  TrendingUp,
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

    case "ticket":
      return TrendingUp;

    default:
      return CircleQuestionMark;
  }
}
