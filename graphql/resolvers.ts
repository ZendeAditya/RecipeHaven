
import { eq } from "drizzle-orm";
import { db } from "../lib/db/dbconnect";
import { recipeTable } from "../lib/db/schema";

export const resolvers = {
    Query: {
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
    },
    Mutation: {
        createRecipe: async (parent: any, args: any) => {
            const { id, name, instructions, description, createdAt, category, image } = args;
            if (!instructions) {
                throw new Error("Instructions are required.");
            }
            const newRecipe = await db.insert(recipeTable).values({
                id,
                name,
                instructions,
                description,
                createdAt,
                category,
                image
            }).returning();

            return newRecipe[0];
        },
        updateRecipe: async (parent: any, args: any) => {
            const { id, name, instructions, description, createdAt, category } = args;
            console.log('Updating recipe with ID:', id);
            console.log('New values:', { name, instructions, description, createdAt, category });

            const updatedRecipe = await db.update(recipeTable)
                .set({
                    name,
                    instructions,
                    description,
                    createdAt,
                    category
                })
                .where(eq(recipeTable.id, id)).returning();

            if (updatedRecipe.length === 0) {
                throw new Error("Recipe not found or no changes made.");
            }

            return updatedRecipe[0];
        },
        deleteRecipe: async (parent: any, args: any) => {
            const { id } = args;
            const deletedRecipe = await db.delete(recipeTable)
                .where(eq(recipeTable.id, id))
                .returning();

            if (deletedRecipe.length === 0) {
                throw new Error("Recipe not found or could not be deleted.");
            }

            return deletedRecipe[0];
        },
    }
};