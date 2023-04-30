import type { NextApiRequest, NextApiResponse } from "next";
import { ForumType, ErrorType } from "../../../types";
const { forums } = require("./data");

export default (
  req: NextApiRequest,
  res: NextApiResponse<ForumType[] | ErrorType>,
) => {
  if (req.method === "GET") {
    res.status(200).json(forums);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
