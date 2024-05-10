import pkg from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";

//const client = new Client({
//  connectionString: "postgres://admin:admin@192.168.56.107:5432/postgres",
//});

// or
const client = new pkg.Client({
 host: "192.168.56.113",
 port: 5432,
 user: "postgres",
 password: "postgres",
 database: "test",
});

await client.connect();
export const db = drizzle(client);