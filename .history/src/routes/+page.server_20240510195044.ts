import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { eq } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";

export const load = (async () => {
    const parent = alias(characters, "characters2")
    const result = await db.select({
        bohater1: characters.lastName,
        'bohater 2': parent.lastName,
        about
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(parent, eq(parent.id, relations.idChar2));
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