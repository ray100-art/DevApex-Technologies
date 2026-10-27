import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;
  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
}

// Null until DATABASE_URL is configured, so the public site still runs without a database.
export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production" && db) globalForPrisma.prisma = db;
