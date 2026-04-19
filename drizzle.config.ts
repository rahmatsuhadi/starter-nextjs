import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // Ubah ke postgresql
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // URL PostgreSQL (misal: neon, supabase, atau local)
  },
});
