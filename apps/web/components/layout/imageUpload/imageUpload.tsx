"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Upload } from "lucide-react";
import { useRef } from "react";

export function ImageUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div>
      <Input ref={fileInputRef} type="file" accept="image/" hidden />

      <div>
        <Label className="text-md mb-1">Upload product image</Label>

        <Card className="border-dashed border-2 border-gray-400">
          <CardContent className="flex flex-col items-center">
            <ImageIcon className="size-10 mb-4 text-gray-400" />
            <p className="text-gray-400 ">
              Click here to upload an image of the current product
            </p>
            <Button
              onClick={handleImageSelect}
              variant={"outline"}
              className="mt-4 cursor-pointer"
            >
              <Upload />
              Select image
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
