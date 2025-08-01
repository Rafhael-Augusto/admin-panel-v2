"use client";

import { useState } from "react";

import { NewProductModal } from "@/components/modals";
import { toUpperCaseFirst } from "@/utils/stringUtils";
import { Package, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const products = [
    { title: "Total products", value: "5", desc: "3 active" },
    { title: "Total stock", value: "228", desc: "units in stock" },
    { title: "Total value", value: "R$ 200.000", desc: "value of stock" },
    { title: "No stock", value: "1", desc: "products with no stock" },
  ];

  const productsList = [
    {
      name: "Iphone 15 Pro",
      category: "electronics",
      stock: "25",
      price: "R$ 9000",
    },
    {
      name: "Notebook",
      category: "electronics",
      stock: "10",
      price: "R$ 3800,55",
    },
    {
      name: "Tshirt",
      category: "clothes",
      stock: "90",
      price: "R$ 59,55",
    },
    {
      name: "Jordans",
      category: "shoes",
      stock: "0",
      price: "R$ 59,55",
    },
  ];

  const categories = ["electronics", "clothes"];

  return (
    <>
      <div className="h-full px-5">
        <div className="flex gap-6">
          {products.map((product, index) => {
            return (
              <Card key={index} className="w-[260]">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">{product.title}</h2>
                      <Package />
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent
                  className={`${product.title === "No stock" && Number(product.value) > 0 ? "text-red-700" : "text-black"} text-2xl font-bold`}
                >
                  {product.value}
                </CardContent>

                <CardFooter>
                  <div className="flex gap-1">
                    <p className="text-gray-700">{product.desc}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="my-4">
          <Card>
            <CardHeader className="text-3xl font-bold">Filters</CardHeader>

            <CardContent>
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <Search className="text-primary/50  absolute left-1.5 top-1.5" />
                  <Input
                    className="pl-8 w-xl"
                    placeholder="Search products..."
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categories.map((category, index) => {
                      return (
                        <SelectItem key={index} value={category}>
                          {toUpperCaseFirst(category)}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="flex items-center justify-between text-3xl font-bold">
              List of Products ({productsList.length})
              <div className="flex items-center gap-4">
                <Button className="cursor-pointer">
                  {" "}
                  <Plus /> New product
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productsList.map((product, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>Image here </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          {Number(product.stock) > 0 ? "active" : "inactive"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* <NewProductModal /> */}
    </>
  );
}
