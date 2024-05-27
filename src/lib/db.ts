import { env } from '$env/dynamic/private';
import pkg from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";

//const client = new Client({
//  connectionString: "postgres://admin:admin@192.168.56.107:5432/postgres",
//});

// or
const client = new pkg.Client({
 host: env.DB_HOST,
 port: env.DB_port,
 user: env.DB_USER,
 password: env.DB_PASS,
 database: env.DB_DB,
});

await client.connect();
export const db = drizzle(client);