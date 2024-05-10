import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable('characters', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('first_name'),
});