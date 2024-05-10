import { characters } from '../../schema/schema';
import { db } from '$lib/db';

export const load = (async () => {
   const result = await db.select().from(characters)
   return {
       result
   };
})