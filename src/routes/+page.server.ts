import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { eq } from "drizzle-orm/sql";
import { sql } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";


export const load = (async () => {
    const char2 = alias(characters, "characters2")
    // const result = await db.select({
        // Bohater1Imie: characters.firstName,
        // Bohater1Nazwisko: characters.lastName,
        // Bohater2Imie: char2.firstName,
        // Bohater2Nazwisko: char2.lastName,
        // Relacja: relations.about,
    const result = await db.select({
            // 'Bohater pierwszy': characters.lastName,
            // 'Bohater drugi': char2.lastName,
            // 'O relacji': relations.about,
        'Bohater pierwszy': sql`CONCAT(${characters.firstName}, ' ',${characters.lastName} )`,
        'Bohater drugi': sql`CONCAT(${char2.firstName}, ' ',${char2.lastName} )`,
        'O relacji': relations.about,
    // const result = await db.select({
    //     'Bohater pierwszy': sql`CONCAT(${characters.firstName}, ' ',${characters.lastName} )`,
    //     'Bohater drugi': sql`CONCAT(${char2.firstName}, ' ',${char2.lastName} )`,
    //     'O relacji': relations.about,
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(char2, eq(char2.id, relations.idChar2));
//    const result = await db.select().from(characters)
   return {
       result
   };
})