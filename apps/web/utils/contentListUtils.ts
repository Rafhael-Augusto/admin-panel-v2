import { contentList } from "@/utils/componentsContent";

export function findComponentByName(listName: string) {
  const match = contentList.find((item) => item.name === listName);
  return match?.component ?? null;
}
