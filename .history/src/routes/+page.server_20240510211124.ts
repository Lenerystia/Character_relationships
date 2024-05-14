import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { eq, sql } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";

export const load = (async () => {
    const char2 = alias(characters, "characters2")
    const result = await db.select({
        'Bohater': (sql<string>`(${characters.firstName})`).as('Bohater'),
        'Bohater pierwszy': characters.lastName,
        'Bohater drugi': char2.lastName,
        'O relacji': relations.about,
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(char2, eq(char2.id, relations.idChar2));
//    const result = await db.select().from(characters)
   return {
       result
   };
})