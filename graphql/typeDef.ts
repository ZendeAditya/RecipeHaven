import { gql } from "@apollo/client"
export const typeDefs = gql`#graphql
    type Recipe {
        id: ID!
        name: String
        instructions: String
        description: String
        createdAt: String
        image:String
        category: String
    }
    
    type Query { 
        getAllRecipes: [Recipe!]
        recipeByName(name: String!): [Recipe!]
        recipesByCategory(category: String!): [Recipe!]
    }
    
    type Mutation {
        createRecipe(id: ID, name: String, instructions: String, description: String, createdAt: String, category: String): Recipe
        updateRecipe(id: ID, name: String, instructions: String, description: String, createdAt: String, category: String): Recipe
        deleteRecipe(id: ID!): Recipe
    }
`;