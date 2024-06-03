import { characters } from "../../../schema/schema";
import { relations } from "../../../schema/schema";
import { db } from '$lib/db';
import { eq } from "drizzle-orm/sql";
import { sql } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";

/**
 * Gets information from the database about characters 1 and 2 and their common relationship
 */
export const load = (async () => {
    const char2 = alias(characters, "characters2")
    const result = await db.select({
        'idFirstChar': characters.id,
        'idSecondChar': char2.id,
        'First Character': sql`CONCAT(${characters.firstName}, ' ',${characters.lastName} )`,
        'Second Character': sql`CONCAT(${char2.firstName}, ' ',${char2.lastName} )`,
        'About relationship': relations.about,
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(char2, eq(char2.id, relations.idChar2));
//    const result = await db.select().from(characters)
   return {
       result
   };
})