"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
type Props = {};
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { useMutation } from "@apollo/client";
const categories = ["Dessert", "Dinner", "Breakfast", "Lunch"];
const SubmissionForm = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline" className="hover:bg-orange-400">
            Submit Recipe
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Your Secret Recipe</DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit}
                className="flex items-start gap-2 justify-center flex-col relative"
              >
                <div className="flex items-center justify-center py-2">
                  {selectedFile && (
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt={selectedFile.name}
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <Input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <Input
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your secret recipe name"
                />

                <Input
                  value={description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDescription(e.target.value)
                  }
                  placeholder="Enter your secret recipe description"
                />

                <Input
                  value={instruction}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInstruction(e.target.value)
                  }
                  placeholder="Enter your secret recipe instruction"
                />
                <div className="w-52">
                  <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                    className="py-2 w-52 text-center border-2 border-gray-300 outline-none shadow rounded-lg"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-52 ">
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmissionForm;
