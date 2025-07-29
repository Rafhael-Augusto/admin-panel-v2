import { toUpperCaseFirst } from "@/utils/stringUtils";
import { ImageUpload } from "@/components/layout";

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
import { Textarea } from "@/components/ui/textarea";

export function NewProductModal() {
  const categories = ["electronics", "clothes"];

  return (
    <Dialog open={true}>
      <form>
        <DialogContent className="max-h-[70vh] overflow-y-scroll ">
          <DialogHeader>
            <DialogTitle>New product</DialogTitle>
            <DialogDescription>
              Create a new product for the catalog
            </DialogDescription>
          </DialogHeader>

          <div>
            <ImageUpload />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productName" className="text-md mb-1">
                Product name
              </Label>
              <Input id="productName" placeholder="Product name" />
            </div>
            <div>
              <Label className="text-md mb-1">Select category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category, index) => {
                    return (
                      <SelectItem value={category} key={index}>
                        {toUpperCaseFirst(category)}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 my-4">
            <div>
              <Label htmlFor="price" className="text-md">
                Price (R$)
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="0,00"
                className="w-[140px]"
              />
            </div>

            <div>
              <Label htmlFor="stock" className="text-md">
                Stock
              </Label>
              <Input
                id="stock"
                type="number"
                placeholder="0"
                className="w-[140px]"
              />
            </div>

            <div>
              <Label className="text-md">Status</Label>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-md">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Description of the product"
              rows={4}
            />
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
