import { characters } from '../../../schema/schema';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from '../../$types';

/**
     * * "That works! I explicitly said that params contains the 'charId' string property, and then I parseInt"
     * I don't know that's right path, but works!
     */
export const load: PageServerLoad = (async ({params}) => {
    //dla pokazu, tu wywali błąd w VS code
    // const charId = params.charId;
    //tu nie
    const charId = (params as {charId: string}).charId;
    const parseCharId = parseInt(charId);
    const result = await db.select().from(characters).where(eq(characters.id, parseCharId));
    return {
       result
   };
})

