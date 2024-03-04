import Post from "@/types/post";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getPost(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {}
