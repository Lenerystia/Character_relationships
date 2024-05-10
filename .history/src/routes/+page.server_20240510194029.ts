import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { and, eq } from "drizzle-orm/sql";

export const load = (async () => {
    const parent = alias(characters, "characters2")
    const result = await db.select()
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(characters, eq());
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