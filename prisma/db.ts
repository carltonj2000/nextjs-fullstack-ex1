import { PrismaClient } from "@prisma/client";
import { global } from "styled-jsx/css";

const globalPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalPrisma.prisma = prisma;
}
