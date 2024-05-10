import type { Config } from "drizzle-kit";

export default {
 schema: "./src/schema/schema.ts",
 out: "./drizzle",
 driver: 'pg',
 dbCredentials: {
   host: "192.168.56.113",
   port: 5432,
   user: "postgres",
   password: "admin",
   database: "test",
 }
} satisfies Config;