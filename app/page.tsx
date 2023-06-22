import { prisma } from "@/prisma/db";
export default async function Home() {
  const posts = await prisma.post.findMany();
  return <main>{JSON.stringify(posts, null, 2)}</main>;
}
