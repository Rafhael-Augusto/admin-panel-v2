"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";

import { toUpperCaseFirst } from "@/utils/stringUtils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface modal {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export function NewUserModal({ setModalOpen, isModalOpen }: modal) {
  const roles = ["admin", "editor", "viewer"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New user</DialogTitle>
          <DialogDescription>
            Create a new user for the system
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productName" className="text-md mb-1">
                Full name
              </Label>
              <Input
                id="productName"
                placeholder="User's  full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="productName" className="text-md mb-1">
                E-mail
              </Label>
              <Input id="productName" placeholder="User's  e-mail" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <Label className="text-md mb-1">Role</Label>
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role, index) => {
                    return (
                      <SelectItem value={role} key={index}>
                        {toUpperCaseFirst(role)}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-md">Status</Label>
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="[&>*]:cursor-pointer">
            <Button type="button" variant={"outline"} onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Create user</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
