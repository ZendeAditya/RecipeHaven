DO $$ BEGIN
 CREATE TYPE "public"."meal_type" AS ENUM('breakfast', 'lunch', 'dinner', 'dessert');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "categories" DROP CONSTRAINT "categories_name_unique";--> statement-breakpoint
ALTER TABLE "recipes" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "type" "meal_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "name";