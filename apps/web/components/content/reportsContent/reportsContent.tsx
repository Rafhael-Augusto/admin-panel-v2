import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getIcon } from "@/utils/iconUtils";

export function ReportsContent() {
  const reportsInfo = [
    {
      title: "Generated Reports",
      value: "47",
      desc: "Reports generated",
      icon: "barchart",
    },
    {
      title: "Downloads",
      value: "234",
      desc: "Reports downloaded",
      icon: "download",
    },
    {
      title: "Scheduled",
      value: "12",
      desc: "Automated Reports",
      icon: "calendar",
    },
    {
      title: "Shared",
      value: "89",
      desc: "By email/link",
      icon: "upload",
    },
  ];

  return (
    <div className="h-full px-5">
      <div className="flex gap-6">
        {reportsInfo.map((orderInfo, index) => {
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
                  <p className="text-gray-700">{orderInfo.desc}</p>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
