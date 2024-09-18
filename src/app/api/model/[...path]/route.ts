import { prisma } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";

// Async but no await needed for Clerk auth(), as per ZenStack's Clerk integration docs
// eslint-disable-next-line @typescript-eslint/require-await
async function getPrisma() {
  const authObject = auth(); // Clerk's auth() is synchronous

  console.log(
    "userId in getPrisma() in api/model/[...path]/route: ",
    authObject.userId,
  );

  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return enhance(
    prisma,
    {
      user:
        authObject && authObject.userId ? { id: authObject.userId } : undefined,
    },
    { logPrismaQuery: true },
  );
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
