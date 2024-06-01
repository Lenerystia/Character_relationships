import { characters } from '../../schema/schema';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';

//na razie mam dość walki z pobraniem wartości charId z +page do użycia w queries
// import Page from './+page.svelte';
// import { render } from 'svelte/server';
// import type { RequestHandler } from '@sveltejs/kit';

// let charId: string;

// export const get: RequestHandler = async ({ params }) => {
//     const charId = params;
// }

// charId = $page.params.charId;

export const load = (async () => {
   const result = await db.select().from(characters).where(eq(characters.id, 1));
   return {
       result
   };
})