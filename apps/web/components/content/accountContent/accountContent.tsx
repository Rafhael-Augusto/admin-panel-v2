"use client";

import { useState } from "react";

import { LogoutModal } from "@/components/modals";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getIcon } from "@/utils/iconUtils";
import { Calendar, LogOut, Mail, MapPin, User } from "lucide-react";

export function AccountContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const accountCards = [
    { title: "Account status", desc: "Active", icon: "shield", color: "green" },
    {
      title: "Active sessions",
      desc: "2 Devices",
      icon: "activity",
      color: "blue",
    },
    {
      title: "Online time",
      desc: "2h 45min",
      icon: "alarmclock",
      color: "purple",
    },
  ];

  return (
    <>
      <div className="h-full px-5">
        <div className="flex justify-center gap-8">
          {accountCards.map((card, index) => {
            const Icon = getIcon(card.icon);

            return (
              <Card key={index} className="w-[25%]">
                <CardContent className={`flex items-center gap-4 `}>
                  <Icon
                    size={50}
                    className={`${"text-" + card.color + "-700"} ${"bg-" + card.color + "-700/10"} p-2 rounded-lg `}
                  />
                  <div>
                    <p className="text-xl">{card.title}</p>
                    <p
                      className={`font-bold ${"text-" + card.color + "-700"} text-lg`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="my-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col">
                <div className="flex items-center gap-2">
                  <User />
                  <h3 className="text-2xl font-bold">User profile</h3>
                </div>

                <p className="text-gray-700 font-medium">
                  Basic information of your account
                </p>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <Mail size={20} />
                    <p className="text-xl font-bold">Email:</p>
                  </div>
                  <p className="text-gray-700 ml-7">Rafhael@gmail.com</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <Calendar size={20} />
                    <p className="text-xl font-bold">Last access:</p>
                  </div>
                  <p className="text-gray-700 ml-7">Today 14:30</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <MapPin size={20} />
                    <p className="text-xl font-bold">Localization:</p>
                  </div>
                  <p className="text-gray-700 ml-7">Lousiana, Usa</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <User size={20} />
                    <p className="text-xl font-bold">Department:</p>
                  </div>
                  <p className="text-gray-700 ml-7">IT department</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="my-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl font-bold">Account actions</h3>
                <p className="text-gray-700 font-medium">
                  Manage your session and account access
                </p>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Card>
                <CardContent className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">Log out</h4>
                    <p className="text-gray-700 font-medium">
                      End your current session and log out
                    </p>
                  </div>

                  <Button
                    variant={"outline"}
                    className="cursor-pointer"
                    onClick={handleModalClick}
                  >
                    <LogOut /> Log out
                  </Button>
                </CardContent>
              </Card>

              <Separator className="my-8" />

              <h4 className="text-xl font-bold mb-4">Active sessions</h4>

              <div className="flex flex-col gap-4">
                <Card>
                  <CardContent className="flex justify-between">
                    <div className="flex flex-col">
                      <p>Chrome - Windows</p>
                      <p className="text-gray-700 font-medium">
                        Lousiana, USA - Actual
                      </p>
                    </div>
                    <Badge
                      variant={"outline"}
                      className="text-gray-700  font-bold"
                    >
                      Actual
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <LogoutModal setModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
}
