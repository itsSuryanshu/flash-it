import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT!),
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
        //url: process.env.DATABASE_URL!,
        ssl: {
            rejectUnauthorized: false,
            ca: undefined,
        },
    },
});
