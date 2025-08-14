"use client";

import { useEffect, useState } from "react";
import Filter from "@/utils/searchFilterUtils";
import { User } from "@/@types/apiTypes";

import { NewUserModal } from "@/components/modals";
import { Plus, Search } from "lucide-react";

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
import { getIcon } from "@/utils/iconUtils";

export function UsersContent() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState<User[]>();

  const users = [
    {
      name: "Rafhael",
      email: "rafhael@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Marcos",
      email: "marcos@gmail.com",
      role: "Editor",
      status: "Inactive",
    },
  ];

  const usersInfos = [
    {
      title: "Total users",
      value: "6",
      desc: "registered users",
      icon: "users",
    },
    {
      title: "Active users",
      value: "4",
      desc: "total active users",
      icon: "usercheck",
      percentage: "+67",
    },
    {
      title: "Administrators",
      value: "2",
      desc: "users with total access",
      icon: "shield",
    },
    { title: "Pending", value: "1", desc: "waiting approval", icon: "userx" },
  ];

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const filterResult = Filter({
      list: users,
      role: selectedRole,
      status: selectedStatus,
    });

    setFilteredItems(filterResult as User[]);
  }, [selectedRole, selectedStatus]);

  return (
    <>
      <div className="h-full px-5">
        <div className="flex gap-6">
          {usersInfos.map((userInfo, index) => {
            const Icon = getIcon(userInfo.icon);

            return (
              <Card key={index} className="w-[260]">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">{userInfo.title}</h2>
                      {Icon && <Icon />}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-bold text-2xl">
                  {userInfo.value}
                </CardContent>

                <CardFooter>
                  <div className="flex gap-1">
                    <p
                      className={`${userInfo.percentage && Number(userInfo.percentage) > 50 ? "text-green-700" : "text-red-600"}`}
                    >
                      {userInfo.percentage
                        ? userInfo.percentage + "%"
                        : ""}{" "}
                    </p>

                    <p className="text-gray-700">{userInfo.desc}</p>
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
                  <Input className="pl-8 w-xl" placeholder="Search users..." />
                </div>

                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
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
              List of Users ({(filteredItems ?? users).length})
              <div className="flex items-center gap-4">
                <Button className="cursor-pointer" onClick={handleModalClick}>
                  {" "}
                  <Plus /> New user
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(filteredItems ?? users).map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      <NewUserModal setModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
}
