"use client";

import { getIcon } from "@/utils/iconUtils";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Calendar1,
  Filter,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function SalesContent() {
  const cards = [
    {
      title: "Total Revenue",
      value: "R$ 20",
      change: "+12.5",
      icon: "dollarsign",
    },
    { title: "New Clients", value: "1239", change: "+8", icon: "users" },
    { title: "Conversion Rate", value: "3.2%", change: "-2", icon: "target" },
    {
      title: "Total Orders",
      value: "800",
      change: "+15",
      icon: "shoppingcart",
    },
  ];

  const chartMonth = [
    { month: "Jan", Sales: 150 },
    { month: "Feb", Sales: 180 },
    { month: "Mar", Sales: 240 },
    { month: "Apr", Sales: 150 },
    { month: "May", Sales: 180 },
    { month: "Jun", Sales: 240 },
    { month: "Jul", Sales: 300 },
    { month: "Aug", Sales: 340 },
    { month: "Sep", Sales: 240 },
    { month: "Oct", Sales: 120 },
    { month: "Nov", Sales: 90 },
    { month: "Dec", Sales: 75 },
  ];

  const salesDistrubution = [
    {
      id: "Online",
      label: "Online",
      value: 5306,
    },
    {
      id: "Store",
      label: "Store",
      value: 1309,
    },
  ];

  const detailedCards = [
    {
      title: "Average Order Value",
      value: "R$ 156,78",
      change: "+8.3",
      icon: "calculator",
      desc: {
        "Lowest Value": "R$ 25.90",
        "Righest Value": "R$ 1,299.99",
        "Median Value": "R$ 89.50",
      },
    },
    {
      title: "Gross Profit",
      value: "R$ 18.092,76",
      change: "+15.2",
      icon: "dollarsign",
      desc: {
        "Total Costs": "R$ 27.139,13",
      },
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1",
      icon: "target",
      desc: {
        Visitants: "27.534",
        Convertions: "892",
      },
    },
  ];

  const bestSellingProducts = [
    { title: "iPhone 15 Pro", sales: "234", totalrevenue: "R$ 2.106.766,00" },
    { title: "Notebook", sales: "189", totalrevenue: "R$ 868.311,00" },
    { title: "Basic Shirt", sales: "156", totalrevenue: "R$ 7.784,40" },
    { title: "Sportive shoes", sales: "134", totalrevenue: "R$ 40.186,60" },
  ];

  const salesByChannel = [
    {
      id: "Website",
      label: "Website",
      value: "20.354",
    },
    {
      id: "Mobile App",
      label: "Mobile App",
      value: "13.569",
    },
    {
      id: "Marketplace",
      label: "Marketplace",
      value: "9.046",
    },
    {
      id: "Brick-and-Mortar Store",
      label: "Brick-and-Mortar Store",
      value: "2.261",
    },
  ];

  return (
    <div className="h-full px-5">
      <Card>
        <CardHeader className="flex items-center text-2xl">
          <Filter />
          <h1>Filters & Date Ranges</h1>
        </CardHeader>
        <CardContent className="flex justify-between mx-2w">
          <div className="flex gap-12">
            <div className="flex gap-4">
              <div className="flex gap-2">
                <Label>Time Period:</Label>
                <Select value="30">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Date</SelectLabel>

                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 90 days</SelectItem>
                      <SelectItem value="365">Last year</SelectItem>
                      <SelectItem value="customDate">Custom date</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"}>
                      <Calendar1 />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <span className="text-gray-700">to</span>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"}>
                      <Calendar1 />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>

              <Button className="cursor-pointer " variant={"outline"}>
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-3xl font-bold p-6">Comparison (Last 30 days)</p>

      <div className="flex gap-6 justify-center">
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon);

          return (
            <Card key={index} className="w-[260]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl">{card.title}</h2>
                    {Icon && <Icon />}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="font-bold text-2xl">
                {card.value}
              </CardContent>

              <CardFooter>
                <div className="flex gap-1">
                  <Badge
                    variant={
                      Number(card.change) > 0 ? "default" : "destructive"
                    }
                  >
                    {Number(card.change) > 0 ? (
                      <TrendingUp />
                    ) : (
                      <TrendingDown />
                    )}
                    <p>{card.change}%</p>
                  </Badge>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="h-[500px] w-full my-4">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-bold">Sales Over Time</h2>
              <p className="text-gray-700">Last 365 days</p>
            </CardTitle>
          </CardHeader>

          <CardContent className="h-full w-full">
            <ResponsiveBar
              data={chartMonth}
              indexBy={"month"}
              keys={["Sales"]}
              margin={{ top: 10, right: 0, bottom: 50, left: 50 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "dark2" }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Months",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Sales",
                legendPosition: "middle",
                legendOffset: -40,
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="h-[500px] w-full my-4">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-bold">Sales Distribution</h2>
              <p className="text-gray-700">Last 365 days</p>
            </CardTitle>
          </CardHeader>

          <CardContent className="h-full w-full">
            <ResponsivePie
              data={salesDistrubution}
              margin={{ top: 10, right: 0, bottom: 70, left: 0 }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <p className="text-2xl font-bold m-8">Detailed Statistics</p>
        <div className="flex gap-6 justify-center">
          {detailedCards.map((card, index) => {
            const Icon = getIcon(card.icon);
            return (
              <Card key={index} className="w-[300]">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">{card.title}</h2>
                      {Icon && <Icon />}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-bold text-2xl">
                  {card.value}
                </CardContent>

                <CardFooter className="flex flex-col items-start">
                  <div className="flex gap-1 justify-between w-full items-center">
                    <Badge
                      variant={
                        Number(card.change) > 0 ? "default" : "destructive"
                      }
                    >
                      {Number(card.change) > 0 ? (
                        <TrendingUp />
                      ) : (
                        <TrendingDown />
                      )}
                      <p>{card.change}%</p>
                    </Badge>

                    <span className="text-gray-700 text-sm">Last 365 days</span>
                  </div>

                  <div className="flex flex-col gap-2 w-full [&>*]:text-gray-700 mt-4">
                    {Object.keys(card.desc).map((item, index) => {
                      return (
                        <div key={index} className="flex justify-between gap-2">
                          <p>{item}: </p>
                          <p className="text-black font-bold">
                            {item in card.desc &&
                              card.desc[item as keyof typeof card.desc]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="my-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 size={24} />
              <h2 className="text-2xl font-bold">Best Selling Products</h2>
            </CardTitle>

            <CardContent>
              {bestSellingProducts.map((product, index) => (
                <div key={index} className="flex flex-col items-start my-2">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="font-bold">{product.title}</h3>
                    <Badge variant={"outline"} className="font-bold">
                      {product.sales}
                    </Badge>
                  </div>

                  <div className="flex gap-2 text-gray-700 text-sm">
                    <p>{product.sales} sales • </p>
                    <p>{product.totalrevenue}</p>
                  </div>
                  <Progress
                    className="text-gray-700 "
                    value={Number(product.sales) / 10}
                  />
                </div>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      <div className="h-[500px] w-full">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-bold">Sales by Channel</h2>
            </CardTitle>
          </CardHeader>

          <CardContent className="h-full w-full">
            <ResponsivePie
              data={salesByChannel}
              margin={{ top: 22, right: 0, bottom: 60, left: 0 }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
