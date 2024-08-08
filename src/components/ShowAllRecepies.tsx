"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../../graphql/queries";
import Image from "next/image";
type Props = {};

const ShowAllRecepies = (props: Props) => {
  const { error, loading, data } = useQuery(GET_ALL_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>All Recipes</h1>
      <ul>
        {data.getAllRecipes.map((recipe: any, idx: any) => (
          <li key={idx}>
            <h2>{recipe.id}</h2>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <Image
              src={recipe.image}
              alt="recipe image"
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllRecepies;
