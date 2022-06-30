import { NextApiRequest, NextApiResponse } from "next";

export default function getExtraTasks(req: NextApiRequest, res: NextApiResponse) {
  res.json({hello: 'world', method: req.method})
}