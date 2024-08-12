"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function RecipeDetailsPage() {
  const pathname = usePathname();
  const recipeName = pathname.split("/recipe-details/")[1];
  return <div>My Post: {recipeName}</div>;
}
