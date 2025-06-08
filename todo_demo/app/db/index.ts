import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export async function createTestSnippet(title: string, code: string) {
  return await db.snippet.create({
    data: {
      title,
      code,
    },
  });
}
