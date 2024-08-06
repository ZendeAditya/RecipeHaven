import { pgTable, serial, text, timestamp, integer, date, pgTableCreator, pgEnum } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm"

export const createTable = pgTableCreator(
    (name) => `nomad_competition_${name}`,
);
export const MealTypeEnum = pgEnum('meal_type', ['breakfast', 'lunch', 'dinner', 'dessert']);

export const recipeTable = pgTable("recipes", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    instructions: text("instructions").notNull(),
    createdAt: date("created_at").notNull().defaultNow(),
    image: text("image").notNull(),
    category: text("category")
});

export const categoriesTable = pgTable("categories", {
    id: serial("id").primaryKey(),
    type: MealTypeEnum("type").notNull()
});

export const recipeCategoriesTable = pgTable("recipe_categories", {
    id: serial("id").primaryKey(),
    recipeId: integer("recipe_id").references(() => recipeTable.id),
    categoryId: integer("category_id").references(() => categoriesTable.id),
});

export type RecipeTable = InferInsertModel<typeof recipeTable>;
export type CategoriesTable = InferInsertModel<typeof categoriesTable>;
export type RecipeCategoriesTable = InferInsertModel<typeof recipeCategoriesTable>;
