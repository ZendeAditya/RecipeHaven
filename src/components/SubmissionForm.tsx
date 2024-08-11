"use client";
import React, { FormEvent, useState } from "react";
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
import { CREATE_RECIPE } from "../../graphql/mutation";
import { supabase } from "../../utils/SupabaseClient";
import { useRouter } from "next/navigation";
const categories = ["Dessert", "Dinner", "Breakfast", "Lunch"];

const SubmissionForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    instructions: "",
    category: categories[0],
    file: null as File | null,
    imageURL: undefined as string | undefined,
  });
  const [supabaseImage, setSupabaseImage] = useState("");
  const [createRecipe, { loading, error }] = useMutation(CREATE_RECIPE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormState((prevState) => ({
        ...prevState,
        file,
        imageURL: URL.createObjectURL(file),
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        file: null,
        imageURL: undefined,
      }));
    }
  };

  const initialFormState = {
    name: "",
    description: "",
    instructions: "",
    category: categories[0],
    file: null,
    imageURL: undefined,
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Extract file extension and create a unique file name
    const fileExt = formState.file?.name.split(".").pop();
    const fileName = `${Math.floor(Math.random() * 10000)}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload the file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("recipeBucket")
      .upload(filePath, formState.file!);

    if (uploadError) {
      console.error("Image upload failed:", uploadError.message);
      return;
    }

    // Get the public URL of the uploaded image
    const { data } = await supabase.storage
      .from("recipeBucket")
      .getPublicUrl(filePath);

    const imageUrl = data.publicUrl;

    if (!imageUrl) {
      console.error("Failed to get the image URL");
      return;
    }

    // Create the recipe with the image URL and other form data
    try {
      const res = await createRecipe({
        variables: {
          name: formState.name,
          instructions: formState.instructions,
          description: formState.description,
          createdAt: new Date().toISOString(),
          category: formState.category,
          image: imageUrl, // Use the image URL directly
        },
      });
      setFormState(initialFormState);
      console.log("Recipe created successfully:");
      router.refresh();
    } catch (error) {
      console.error("Recipe creation failed:", error);
    }
  };

  if (loading) return "Submitting...";
  if (error) return `Error! ${error.message}`;

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
                className="flex flex-col items-start gap-2 justify-center relative"
              >
                {formState.imageURL && (
                  <div className="py-2 flex justify-center">
                    <Image
                      src={formState.imageURL}
                      alt={formState.file?.name || ""}
                      width={200}
                      height={200}
                    />
                  </div>
                )}
                <Input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
                <Input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your secret recipe name"
                  required
                />
                <Input
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Enter your secret recipe description"
                  required
                />
                <Input
                  name="instructions"
                  value={formState.instructions}
                  onChange={handleChange}
                  placeholder="Enter your secret recipe instruction"
                  required
                />
                <select
                  id="category"
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  className="py-2 w-52 text-center border-2 border-gray-300 outline-none shadow rounded-lg"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Button type="submit" className="w-52">
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
