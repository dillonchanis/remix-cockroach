import { db } from "~/db.server";
import { getUserId } from "~/session.server";

export async function getUser(request: Request) {
  const userId = await getUserId(request);

  console.log("userId", userId);

  if (typeof userId !== "string") {
    return null;
  }

  console.log("AFTER******")

  const user = await db.user.findUnique({
    where: { id: BigInt(userId) },
  });

  console.log("AFTER*****USER", user);

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await db.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user) return null;

  return user;
}
