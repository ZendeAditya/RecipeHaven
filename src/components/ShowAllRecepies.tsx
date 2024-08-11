"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../../graphql/queries";
import Image from "next/image";
import RecipeCard from "./RecipeCard";
type Props = {};

const ShowAllRecepies = (props: Props) => {
  const { error, loading, data } = useQuery(GET_ALL_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-center text-2xl py-2 font-bold">
        Delicious Creations: Your Recipe Collection
      </h1>
      <ul className="flex flex-wrap items-center justify-center">
        {data.getAllRecipes.map((recipe: any, idx: any) => (
          <li key={idx}>
            <RecipeCard
              name={recipe.name}
              instructions={recipe.instruction}
              description={recipe.description}
              image={recipe.image}
              createdAt={recipe.createdAt}
              category={recipe.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllRecepies;
