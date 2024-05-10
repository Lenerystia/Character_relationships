import { characters as relations } from '../../schema/schema';
import { db } from '$lib/db';

export const load = (async () => {
   const result = await db.select().from(relations)
   return {
       result
   };
})