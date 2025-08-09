import { findComponentByName } from "@/utils/contentListUtils";
import { toUpperCaseFirst } from "@/utils/stringUtils";

interface Props {
  content: string;
}

export function MainContent({ content }: Props) {
  const List = findComponentByName(content);
  console.log(content);

  return (
    <div className="w-full">
      <h1 className="text-primary text-3xl font-bold p-8">
        {toUpperCaseFirst(content)}
      </h1>
      {List && <List />}
    </div>
  );
}
