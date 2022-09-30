import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function characterHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(prismaClient);
  res.status(200).json({ name: 'John Doe' })
}
