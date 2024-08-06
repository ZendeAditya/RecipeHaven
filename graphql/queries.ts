import { eq } from "drizzle-orm";
import { db } from "../lib/db/dbconnect";
import { recipeTable } from "../lib/db/schema";
import { gql } from '@apollo/client';


export const GET_ALL_RECIPES = gql`
  query GetAllRecipes {
    recipes {
      id
      name
      description
      instructions
      createdAt
      image
      category
    }
  }
`;

export const queries = {
    getAllRecipes: async () => db.select().from(recipeTable).execute(),

    recipeByName: async (parent: any, args: any) => {
        const { name } = args;
        return db.select().from(recipeTable).where(eq(recipeTable.name, name)).execute();
    },
    recipesByCategory: async (parent: any, args: any) => {
        const { category } = args;
        console.log(category);
        return db.select().from(recipeTable).where(eq(recipeTable.category, category)).execute();
    }
}