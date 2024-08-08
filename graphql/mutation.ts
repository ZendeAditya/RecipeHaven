import { gql } from "@apollo/client"
import { db } from "../lib/db/dbconnect"
import { recipeTable } from "../lib/db/schema"
import { eq } from "drizzle-orm";

export const CREATE_RECIPE = gql`
    mutation AddRecipe(
    $createRecipeId: ID
    $name: String
    $instructions: String
    $description: String
    $createdAt: String
    $category: String
    ) {
    createRecipe(
        id: $createRecipeId
        name: $name
        instructions: $instructions
        description: $description
        createdAt: $createdAt
        category: $category
    ) {
        id
        name
        instructions
        description
        createdAt
        image
        category
    }
}

`
export const UPDATE_RECIPE = gql`
    mutation UpdateRecipe(
    $updateRecipeId: ID
    $name: String
    $instructions: String
    $description: String
    $createdAt: String
    $category: String
    ) {
    updateRecipe(
        id: $updateRecipeId
        name: $name
        instructions: $instructions
        description: $description
        createdAt: $createdAt
        category: $category
    ) {
        id
        name
        instructions
        description
        createdAt
        image
        category
    }
}
`
export const DELETE_RECIPE = gql`
    mutation DeleteRecipe($deleteRecipeId: ID!) {
    deleteRecipe(id: $deleteRecipeId) {
        id
        name
        instructions
        description
        createdAt
        image
        category
    }
}
`

// export const mutation = {
//     createRecipe: async (parent: any, args: any) => {
//         const { id, name, instructions, description, createdAt, category, image } = args;
//         if (!instructions) {
//             throw new Error("Instructions are required.");
//         }
//         const newRecipe = await db.insert(recipeTable).values({
//             id,
//             name,
//             instructions,
//             description,
//             createdAt,
//             category,
//             image
//         }).returning();

//         return newRecipe[0];
//     },
//     updateRecipe: async (parent: any, args: any) => {
//         const { id, name, instructions, description, createdAt, category } = args;
//         console.log('Updating recipe with ID:', id);
//         console.log('New values:', { name, instructions, description, createdAt, category });

//         const updatedRecipe = await db.update(recipeTable)
//             .set({
//                 name,
//                 instructions,
//                 description,
//                 createdAt,
//                 category
//             })
//             .where(eq(recipeTable.id, id)).returning();

//         if (updatedRecipe.length === 0) {
//             throw new Error("Recipe not found or no changes made.");
//         }

//         return updatedRecipe[0];
//     },
//     deleteRecipe: async (parent: any, args: any) => {
//         const { id } = args;
//         const deletedRecipe = await db.delete(recipeTable)
//             .where(eq(recipeTable.id, id))
//             .returning();

//         if (deletedRecipe.length === 0) {
//             throw new Error("Recipe not found or could not be deleted.");
//         }

//         return deletedRecipe[0];
//     },
// }