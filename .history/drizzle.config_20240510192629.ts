import type { Config } from "drizzle-kit";

export default {
 schema: "./src/schema/schema.ts",
 out: "./drizzle",
 dialect: "pg",
//  driver: 'pg',
 dbCredentials: {
   host: "192.168.56.113",
   port: 5432,
   user: "postgres",
   password: "postgres",
   database: "test",
 }
} satisfies Config;