import { db } from "~/db.server";
import type { User } from "@prisma/client";

interface CreatePostDTO {
  title: string;
  content: string;
  published: boolean;
  user: User;
}

export async function createPost({
  title,
  content,
  published,
  user,
}: CreatePostDTO) {
  const post = await db.post.create({
    data: {
      title,
      content,
      published,
      authorId: user.id,
    },
  });

  return post;
}
