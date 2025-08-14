import { Order, Product, User } from "@/@types/apiTypes";
import { toUpperCaseFirst } from "./stringUtils";

interface Props {
  list: (User | Product | Order)[];
  role?: string;
  category?: string;
  status?: string;
  order?: string;
  words?: string;
}

export function Filter({ list, role, category, status, order, words }: Props) {
  if (role && status) {
    const realRole = toUpperCaseFirst(role);
    const realStatus = toUpperCaseFirst(status);

    const filterUser = list.filter((item): item is User => "role" in item);

    if (filterUser) {
      const filteredList = filterUser.filter((item) => {
        const match =
          (realRole === "All" || item.role === realRole) &&
          (realStatus === "All" || item.status === realStatus) &&
          (!words || item.name.toLowerCase().includes(words.toLowerCase()));
        return match;
      });
      return filteredList;
    }
  }

  if (category && status) {
    const realCategory = toUpperCaseFirst(category);
    const realStatus = toUpperCaseFirst(status);

    const filterProduct = list.filter(
      (item): item is Product => "category" in item
    );

    if (filterProduct) {
      const filteredList = filterProduct.filter((item) => {
        const match =
          (realCategory === "All" || item.category === realCategory) &&
          (realStatus === "All" || item.status === realStatus) &&
          (!words || item.name.toLowerCase().includes(words.toLowerCase()));
        return match;
      });

      return filteredList;
    }
  }

  if (order && status) {
    const realStatus = toUpperCaseFirst(status);

    const filterOrder = list.filter((item): item is Order => "order" in item);

    if (filterOrder) {
      const sort = () => {
        switch (order) {
          case "higher":
            return [...filterOrder].sort((a, b) => b.total - a.total);
          case "lower":
            return [...filterOrder].sort((a, b) => a.total - b.total);
          default:
            return filterOrder;
        }
      };

      const filteredList = sort().filter((item) => {
        const match =
          (realStatus === "All" || item.status === realStatus) &&
          (!words ||
            item.client.name.toLowerCase().includes(words.toLowerCase()));
        return match;
      });

      return filteredList;
    }
  }
}
