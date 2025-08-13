"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface modal {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export function EditProfileModal({ setModalOpen, isModalOpen }: modal) {
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
                <div className="flex gap-4">
                  <div>
                    <Label htmlFor="name" className="text-lg">
                      Name
                    </Label>
                    <Input id="name" placeholder="Name" />
                  </div>

                  <div>
                    <Label htmlFor="surname" className="text-lg">
                      Surname
                    </Label>
                    <Input id="surname" placeholder="Surname" />
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="email" className="text-lg">
                  E-mail
                </Label>
                <Input id="email" placeholder="E-mail" />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg">
                  Phone
                </Label>
                <Input id="phone" placeholder="Phone" />
              </div>

              <div>
                <span className="text-lg">Departament</span>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleact a department" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Departments</SelectLabel>

                      <SelectItem value="it">IT Department</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="Biography" className="text-lg">
                  Biography
                </Label>
                <Textarea placeholder="Biography" />
              </div>
            </div>

            <Button type="submit" className="cursor-pointer w-full mt-8">
              Save changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
