import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const characters = pgTable('characters', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
});

export const relation = pgTable('relations',{
    id: serial('id').primaryKey(),
    idChar1: serial('id_char_1').references(()=>characters.id),
    idChar2: serial('id_char_2').references(()=>characters.id),
});