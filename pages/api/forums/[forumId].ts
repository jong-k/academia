import type { NextApiRequest, NextApiResponse } from "next";
import { ForumType, ErrorType } from "../../../types";
const { forums } = require("./data");

export default (
  req: NextApiRequest,
  res: NextApiResponse<ForumType[] | ErrorType>,
) => {
  const forum = forums.filter((item) => item.id === req.query.forumId);

  if (req.method === "GET") {
    res.status(200).json(forum);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
