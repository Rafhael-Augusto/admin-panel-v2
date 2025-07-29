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

export function NewUserModal() {
  const roles = ["admin", "editor", "viewer"];

  return (
    <Dialog open={true}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New user</DialogTitle>
            <DialogDescription>
              Create a new user for the system
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productName" className="text-md mb-1">
                Full name
              </Label>
              <Input id="productName" placeholder="User's  full name" />
            </div>
            <div>
              <Label htmlFor="productName" className="text-md mb-1">
                E-mail
              </Label>
              <Input id="productName" placeholder="User's  e-mail" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <Label className="text-md mb-1">Role</Label>
              <Select>
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
              <Select>
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
            <Button variant={"outline"}>Cancel</Button>
            <Button>Create product</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
