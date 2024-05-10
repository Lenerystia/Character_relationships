import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const characters = pgTable('characters', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('first_name'),
});

export const relation = pgTable('relations',{
    id: serial('id').primaryKey(),
});