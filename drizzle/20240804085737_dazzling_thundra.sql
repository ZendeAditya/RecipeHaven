ALTER TABLE "recipes" ADD COLUMN "instructions" text NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "category" text;--> statement-breakpoint
ALTER TABLE "recipes" DROP COLUMN IF EXISTS "instruction";