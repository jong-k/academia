import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { QUERY_URL } from "@/config/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "권한이 없습니다" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    try {
      const strapiRes = await fetch(`${QUERY_URL}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = await strapiRes.json();
      res.status(200).json({ user });
    } catch (err) {
      res.status(403).json({ message: "권한이 없는 유저입니다" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `${req.method} 메서드는 사용이 불가합니다` });
  }
}
