"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
type Props = {
  name: String;
  instructions: String;
  description: String;
  image: String;
  createdAt: String;
  category: String;
};

const RecipeCard = ({
  name,
  instructions,
  description,
  image,
  createdAt,
  category,
}: Props) => {
  const router = useRouter();
  function limitWords(str: String, limit: number) {
    const words = str.trim().split(" ");
    if (words.length <= limit) {
      return str;
    }
    return words.slice(0, limit).join(" ") + "...";
  }
  return (
    <section className="py-2 px-2">
      <div className="rounded-md shadow-lg border-2 border-gray-300 relative w-80 h-96">
        <Image
          src={image as string}
          alt="Recipe Image"
          width={300}
          height={300}
          className="object-contain w-full rounded  h-52"
        />
        <div className="py-2  flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="border px-5 py-1 rounded-md cursor-pointer">
            {category}
          </p>
        </div>
        <p className="px-4 py-1">{limitWords(description, 10)}</p>

        <Button
          className="py-2 mx-2 w-40 absolute bottom-2"
          onClick={() => router.push(`recipe-details/${name}`)}
        >
          Read More
        </Button>
      </div>
    </section>
  );
};

export default RecipeCard;
