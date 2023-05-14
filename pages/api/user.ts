import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { MUTATION_URL, QUERY_URL } from "@/config/index";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "권한이 없습니다" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${QUERY_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "권한이 없는 유저입니다" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `${req.method} 메서드는 사용이 불가합니다` });
  }
}
