import { characters } from '../../schema/schema';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = (async ({params}) => {
    const charId = params.charId;
    const result = await db.select().from(characters).where(eq(characters.id, charId));
    return {
       result
   };
})

