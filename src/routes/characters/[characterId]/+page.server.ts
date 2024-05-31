import { characterId } from '+page.svelte';
import { characters } from '../../../schema/schema';
import { db } from '$lib/db';
import { sql } from 'drizzle-orm';

export const load = (async () => {
//    const result = await db.select().from(characters).where(eq(characters.id, characterId))
   const result = await db.select().from(characters).where(sql`${characters.id} = ${characterId}`);//o co chodzi, że not found, ja pierdziele mam dość xD
   return {
       result
   };
})