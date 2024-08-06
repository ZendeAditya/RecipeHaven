"use client"
import React from "react";
import { gql, useQuery } from "@apollo/client";
type Props = {};
import { GET_ALL_RECIPES } from "../../../graphql/queries";
const ViewRecipePage = (props: Props) => {
  // const { error, loading, data } = useQuery(GET_ALL_RECIPES);


  return (
    <div>
      <h1>All Recipes</h1>
      
    </div>
  );
};

export default ViewRecipePage;
