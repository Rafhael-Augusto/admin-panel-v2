"use client";

import { toUpperCaseFirst } from "@/utils/stringUtils";

import { sidebarButtons } from "@/data/sidebarButtons";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { MainContent } from "../mainContent/mainContent";

export function SideBar() {
  const [buttonSelected, setButtonSelected] = useState<string>("dashboard");

  const handleButtonSelect = (buttonName: string) => {
    setButtonSelected(buttonName);
  };

  return (
    <SidebarProvider className="w-screen">
      <Sidebar>
        <SidebarHeader className="bg-primary border-b border-b-gray-400">
          <h1 className="text-secondary text-center text-2xl font-semibold py-2">
            Admin Panel
          </h1>
        </SidebarHeader>

        <SidebarContent className="bg-primary">
          <SidebarGroup>
            {sidebarButtons.map((button, index) => {
              const Icon = button.icon;
              const name = toUpperCaseFirst(button.name);

              return (
                <div key={index} className="rounded-md cursor-pointer my-1">
                  <div
                    onClick={() => handleButtonSelect(button.name)}
                    className={`${buttonSelected === button.name ? "bg-gray-800 [&>*]:text-secondary" : ""} items-center flex transition-colors rounded-xl px-4 hover:bg-gray-800 [&>*]:text-gray-400 hover:[&>*]:text-secondary`}
                  >
                    <Icon />
                    <Button className="hover:bg-transparent bg-transparent my-1 cursor-pointer">
                      {name}
                    </Button>
                  </div>
                </div>
              );
            })}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <MainContent content={buttonSelected} />
    </SidebarProvider>
  );
}
