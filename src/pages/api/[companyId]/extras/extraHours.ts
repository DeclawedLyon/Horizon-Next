import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

const extraHours = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    words: 'more words'
  })
}

export default extraHours