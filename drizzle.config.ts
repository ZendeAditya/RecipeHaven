import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import type { Config } from "drizzle-kit"
dotenv.config({
    path: ".env.local",
});
export default defineConfig({
    schema: "./lib/db/schema.ts",
    out: "./drizzle",
    dialect: 'postgresql',
    migrations: {
        prefix: "supabase"
    },
    dbCredentials: {
        url: process.env.DATABASE_URL! || "",
        database: "postgresql",
        port: 6543,
        user: "postgres.kmsbpxsvqgilqloyukaj",
        host: "aws-0-ap-south-1.pooler.supabase.com",
        password: process.env.PW || "",
    }
}) satisfies Config;
