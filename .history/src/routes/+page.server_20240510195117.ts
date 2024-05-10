import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { eq } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";

export const load = (async () => {
    const char2 = alias(characters, "characters2")
    const result = await db.select({
        bohater1: characters.lastName,
        'bohater 2': char2.lastName,
        'about': relations.about,
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(char2, eq(char2.id, relations.idChar2));
//    const result = await db.select().from(characters)
   return {
       result
   };
})

// export const load = (async () => {
//     const result = await db.select({"First char":characters.firstName, }).from(characters)
//     return {
//         result
//     };
//  })