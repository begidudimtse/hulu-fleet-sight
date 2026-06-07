import { postgres } from 'postgres';

const connectionString = "postgresql://neondb_owner:npg_fwcSbL0Fh8yq@ep-icy-boat-ap5smdz7.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require";

export const sql = postgres(connectionString, { max: 1 });