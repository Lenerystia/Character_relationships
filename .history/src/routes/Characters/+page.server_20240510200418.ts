import { characters } from "../schema/schema";
import { relations } from "../schema/schema";
import { db } from '$lib/db';
import { eq } from "drizzle-orm/sql";
import { alias } from "drizzle-orm/pg-core";

export const load = (async () => {
   const result = await db.select().from(characters)
   return {
       result
   };
})