"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getIcon } from "@/utils/iconUtils";
import { BarChart3, Calendar1, Funnel, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function ReportsContent() {
  const [typeSelected, setTypeSelected] = useState("Sales");

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

  const reportsTypes = [
    {
      title: "Sales",
      desc: "Report of Sales and revenue",
      fields: [
        "Data",
        "Client",
        "Status",
        "Shipping",
        "Order ID",
        "Total",
        "Payment Method",
      ],
    },
    {
      title: "Products",
      desc: "Products performance",
      fields: [
        "Product Name",
        "Price",
        "Sales",
        "Category",
        "Stock",
        "Revenune",
      ],
    },
    {
      title: "Clients",
      desc: "Clients analysis",
      fields: [
        "Name",
        "Total Orders",
        "Last Orders",
        "Email",
        "Total Spent",
        "Status",
      ],
    },
    {
      title: "Stock",
      desc: "Stock management",
      fields: [
        "Product",
        "Current Stock",
        "Total Value",
        "Category",
        "Minimun Stock",
      ],
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

      <div className="grid grid-cols-2 gap-4 pr-8">
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Settings size={25} />
                <h2 className="text-2xl">Set Up Report</h2>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <h3 className="font-bold">Report Type</h3>

              <div className="grid grid-cols-2 gap-x-4">
                {reportsTypes.map((report, index) => (
                  <div
                    key={index}
                    className={`${typeSelected === report.title ? "bg-gray-100 border-gray-800 " : ""} cursor-pointer my-4 border-2 p-4 rounded-xl hover:bg-gray-100 transition-all`}
                    onClick={() => setTypeSelected(report.title)}
                  >
                    <span className="text-xl font-medium">{report.title}</span>
                    <p className="text-gray-700 ">{report.desc}</p>
                  </div>
                ))}
              </div>

              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>
                    <h3 className="font-bold">Time Period</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="flex items-center gap-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2">
                        <div>
                          <Button variant={"outline"}>
                            <Calendar1 size={20} /> Initial Date
                          </Button>
                        </div>
                        <span className="text-gray-700">to</span>
                        <div>
                          <Button variant={"outline"}>
                            <Calendar1 size={20} /> End Date
                          </Button>
                        </div>
                      </div>
                    </PopoverTrigger>

                    <PopoverContent>
                      <Calendar
                        mode="single"
                        className="rounded-md border shadow-sm"
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>
                    <h3 className="font-bold">Report Fields</h3>
                  </CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-2">
                  {reportsTypes.map((report) => {
                    if (report.title === typeSelected) {
                      return report.fields.map((field, index) => (
                        <div key={index} className="flex gap-2 my-2">
                          <Checkbox
                            key={index}
                            id={field}
                            className="border-black"
                          />
                          <Label htmlFor={field} className="cursor-pointer">
                            {field}
                          </Label>
                        </div>
                      ));
                    } else return;
                  })}
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardContent className="grid grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Group by</h3>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-[90%]">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="Data">Data</SelectItem>
                          <SelectItem value="Category">Category</SelectItem>
                          <SelectItem value="Client">Client</SelectItem>
                          <SelectItem value="Product">Product</SelectItem>
                          <SelectItem value="Status">Status</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Filter by</h3>

                    <div className="my-2">
                      <Select>
                        <SelectTrigger className="w-[90%]">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="All">All</SelectItem>
                          <SelectItem value="Active Only">
                            Active Only
                          </SelectItem>
                          <SelectItem value="Done">Done</SelectItem>
                          <SelectItem value="High Value">High Value</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex justify-center">
                  <Button className="cursor-pointer">
                    <Funnel />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        <div className="my-4 ">
          <Card className="w-full [&>*]:flex [&>*]:justify-center">
            <CardHeader>
              <CardTitle>
                <BarChart3 size={80} className="text-gray-700" />
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-2">
              <h2 className="font-bold text-lg">No reports generated</h2>
              <p className="text-sm text-gray-700">
                Set the parameters on the side and click &apos;Generate
                Report&apos; to view the data.
              </p>
              <Badge variant={"outline"} className="font-bold">
                Waiting for settings
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
