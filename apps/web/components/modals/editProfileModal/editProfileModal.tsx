import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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

export function EditProfileModal() {
  return (
    <div>
      <Dialog open={false}>
        <form>
          <DialogContent>
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

            <Button className="cursor-pointer">Save changes</Button>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
