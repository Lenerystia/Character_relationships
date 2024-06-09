import { characters } from '../../../schema/schema';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from '../../$types';

    /**
     * * "That works! I explicitly said that params contains the 'charId' string property, and then I parseInt"
     * I don't know that's right path, but works!
     * 
     * @param params - character ID
     * @returns - querry getting information from database about character where character equals page params (character ID)
     */
export const load: PageServerLoad = (async ({params}) => {
    const pageCharacterId = (params as {characterId: string}).characterId;
    //name only for joke
    const parsePageCharacterIdBecauseItStupidOrm = parseInt(pageCharacterId);
    const result = await db.select().from(characters).where(eq(characters.id, parsePageCharacterIdBecauseItStupidOrm));
    return {
       result
   };
})

