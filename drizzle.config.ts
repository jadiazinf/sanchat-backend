// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';
import { config as dotenv } from 'dotenv';

// Carga .env.<NODE_ENV>; si no viene, usa development por defecto
dotenv({ path: `.env.${process.env.NODE_ENV || 'development'}` });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing. Check your .env files.');
}

export default defineConfig({
  schema: './src/database/schema/*.{ts,js}',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: { url: process.env.DATABASE_URL! },
});
