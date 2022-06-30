import { NextApiRequest, NextApiResponse } from "next";

export default function getUserById(req: NextApiRequest, res: NextApiResponse) {

  res.send({
    message: `testing: ${req.query.userId}`,
    status: 200
  })
}