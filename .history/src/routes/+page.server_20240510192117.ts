import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';

export const load = (async () => {
   const result = await db.select().from(characters)
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