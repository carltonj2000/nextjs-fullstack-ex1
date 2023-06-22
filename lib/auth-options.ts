import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
