"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle, LogOut } from "lucide-react";

interface modal {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export function LogoutModal({ setModalOpen, isModalOpen }: modal) {
  const onOpenChange = () => {
    setModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-2">
                <LogOut />
                <span className="font-bold text-2xl">Log out</span>
              </div>
              <p className="text-gray-700 font-medium my-2">
                Are you sure you want to log out of your account?
              </p>
            </DialogTitle>
          </DialogHeader>

          <DialogDescription>
            <Card>
              <CardContent>
                <div>
                  <div className="flex items-center justify-center gap-2 [&>*]:text-red-700">
                    <AlertTriangle />
                    <span className="text-xl">You will be disconnected</span>
                  </div>
                  <p className="text-yellow-700 text-lg my-2 text-center">
                    You will need to log in again to access your account
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4">
              <ul>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <p className="text-lg text-gray-700">
                    All your sessions will be ended
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <p className="text-lg text-gray-700">
                    Unsaved data will be lost
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <p className="text-lg text-gray-700">
                    You will be redirected to the login page
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-4 mt-4">
              <Button
                variant={"secondary"}
                className="cursor-pointer w-[30%]"
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                variant={"destructive"}
                className="cursor-pointer w-[30%]"
              >
                <LogOut />
                Log out
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
