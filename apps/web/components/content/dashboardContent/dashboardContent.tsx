import { LineChart, PieChart } from "@/components/charts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getIcon } from "@/utils/iconUtils";

export function DashboardContent() {
  const cards = [
    {
      title: "Total users",
      value: "1.234",
      percentage: "-12",
      desc: "compared to last month",
      icon: "users",
    },
    {
      title: "Total sales",
      value: "R$ 13.2321",
      percentage: "+20",
      desc: "compared to last month",
      icon: "sales",
    },
    {
      title: "Active products",
      value: "1.500",
      percentage: "-5",
      desc: "new products this month",
      icon: "products",
    },
    {
      title: "Average ticket",
      value: "R$ 156",
      percentage: "+8",
      desc: "compared to last month",
      icon: "ticket",
    },
  ];

  const lastOrders = [
    {
      order: 1,
      client: "Rafhael Augusto",
      status: "delivered",
      date: "07/30/2025",
      amount: "R$ 2000",
    },
    {
      order: 2,
      client: "Markus",
      status: "processing",
      date: "03/30/2025",
      amount: "R$ 400",
    },
    {
      order: 3,
      client: "Joao",
      status: "canceled",
      date: "07/20/2025",
      amount: "R$ 20400",
    },
  ];

  const monthlySales = [
    {
      id: "month",
      data: [
        {
          x: "jan",
          y: 120,
        },
        {
          x: "feb",
          y: 160,
        },
        {
          x: "mar",
          y: 240,
        },
        {
          x: "apr",
          y: 180,
        },
        {
          x: "may",
          y: 150,
        },
        {
          x: "jun",
          y: 180,
        },
        {
          x: "jul",
          y: 240,
        },
        {
          x: "aug",
          y: 190,
        },
        {
          x: "sep",
          y: 190,
        },
        {
          x: "oct",
          y: 190,
        },
        {
          x: "nov",
          y: 190,
        },
        {
          x: "dec",
          y: 190,
        },
      ],
    },
  ];

  const bestSellingProducts = [
    {
      id: "Notebook",
      label: "Notebook",
      value: 200,
      color: "#000000",
    },
    {
      id: "RTX 3090",
      label: "RTX 3090",
      value: 500,
      color: "hsl(149, 70%, 50%)",
    },
    {
      id: "teclado",
      label: "teclado",
      value: 100,
      color: "hsl(249, 70%, 50%)",
    },
  ];

  return (
    <div className="h-full px-5">
      <div className="flex  gap-6">
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon);

          return (
            <Card key={index} className="w-[260px]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl">{card.title}</h2>
                    {Icon && <Icon />}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="text-2xl font-bold">
                {card.value}
              </CardContent>

              <CardFooter>
                <div className="flex gap-1">
                  <p
                    className={`${Number(card.percentage) > 0 ? "text-green-700" : "text-red-600"}`}
                  >
                    {card.percentage}%
                  </p>
                  <p className="text-gray-700">{card.desc}</p>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-around">
        <Card className="h-[500px] w-[500px] my-4">
          <CardHeader className="text-3xl font-medium">
            Monthly sales
          </CardHeader>

          <LineChart data={monthlySales} />
        </Card>

        <Card className="h-[500px] w-[500px] m-4">
          <CardHeader className="text-3xl font-medium">
            Best selling product
          </CardHeader>

          <PieChart data={bestSellingProducts} />
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader className="text-3xl font-medium">
            Recent Orders
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="[&>*]:text-lg text-primary">
                  <TableHead>Order</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lastOrders.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.order}</TableCell>
                    <TableCell>{item.client}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
