import type { NextApiRequest, NextApiResponse } from "next";
const { forums } = require("./data");

interface ForumType {
  id: string;
  name: string;
  place: string;
  address: string;
  host: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

interface ErrorType {
  message: string;
}

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
