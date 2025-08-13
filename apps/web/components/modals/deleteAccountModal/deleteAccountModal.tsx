"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrashIcon, TriangleAlert } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

interface modal {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export function DeleteAccountModal({ setModalOpen, isModalOpen }: modal) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>
                <Alert variant={"destructive"}>
                  <AlertTitle className="flex items-center justify-center gap-2">
                    <TriangleAlert />
                    <p className="text-xl">Warning</p>
                  </AlertTitle>

                  <AlertDescription>
                    <p className="text-lg">
                      This action is irreversible. All your data, including
                      profile, settings, and history, will be permanently
                      removed from our servers.
                    </p>
                  </AlertDescription>
                </Alert>
              </DialogTitle>
            </DialogHeader>

            <div className="mt-8">
              <span className="font-bold">What will be deleted:</span>

              <ul className="[&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>li>*]:text-red-700 my-4 flex flex-col gap-1">
                <li>
                  <div className="bg-red-400 rounded-full h-2 w-2" />{" "}
                  <p>Account & profile information</p>
                </li>
                <li>
                  <div className="bg-red-400 rounded-full h-2 w-2" />{" "}
                  <p>All settings and preferences</p>
                </li>
                <li>
                  <div className="bg-red-400 rounded-full h-2 w-2" />{" "}
                  <p>Activities & logs history</p>
                </li>
                <li>
                  <div className="bg-red-400 rounded-full h-2 w-2" />{" "}
                  <p>Usage data & analytics</p>
                </li>
                <li>
                  <div className="bg-red-400 rounded-full h-2 w-2" />{" "}
                  <p>Files and documents sent</p>
                </li>
              </ul>
            </div>

            <div className="[&>*]:flex [&>*]:gap-2 [&>*]:items-center">
              <div>
                <Checkbox id="confirm" required />
                <Label htmlFor="confirm" className="text-md cursor-pointer">
                  I understand that this action is permanent and irreversible
                </Label>
              </div>

              <div>
                <Checkbox id="confirm2" required />
                <Label htmlFor="confirm2" className="text-md cursor-pointer">
                  I confirm that i wish to permanently delete my account
                </Label>
              </div>
            </div>

            <div className="my-4">
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="currentpassword" className="text-lg">
                  Type your password to confirm
                </Label>
                <Input
                  required
                  id="currentpassword"
                  placeholder="Your current password"
                />
              </div>

              <div className="flex flex-col items-start gap-2 mt-2">
                <Label htmlFor="delete" className="text-lg">
                  Type &apos;DELETE&apos; to confirm
                </Label>
                <Input required id="delete" placeholder="DELETE" />
              </div>
            </div>

            <Button
              variant={"destructive"}
              className="cursor-pointer w-full mt-4"
              type="submit"
            >
              <TrashIcon />
              Delete account
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
