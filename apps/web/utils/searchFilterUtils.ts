import { Product, User } from "@/@types/apiTypes";
import { toUpperCaseFirst } from "./stringUtils";

interface Props {
  list: (User | Product)[];
  role?: string;
  category?: string;
  status?: string;
}

export default function Filter({ list, role, category, status }: Props) {
  if (role && status) {
    const realRole = toUpperCaseFirst(role);
    const realStatus = toUpperCaseFirst(status);

    const filterUser = list.filter((item): item is User => "role" in item);

    if (filterUser) {
      const filteredList = filterUser.filter((item) => {
        const match =
          (realRole === "All" || item.role === realRole) &&
          (realStatus === "All" || item.status === realStatus);
        return match;
      });
      return filteredList;
    }
  } else if (category && status) {
    const realCategory = toUpperCaseFirst(category);
    const realStatus = toUpperCaseFirst(status);

    const filterProduct = list.filter(
      (item): item is Product => "category" in item
    );

    if (filterProduct) {
      const filteredList = filterProduct.filter((item) => {
        const match =
          (realCategory === "All" || item.category === realCategory) &&
          (realStatus === "All" || item.status === realStatus);
        return match;
      });

      return filteredList;
    }
  }
}
