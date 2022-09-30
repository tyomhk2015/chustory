import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  [key: string]: string
}

export default async function characterHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(400);
    return;
  }
  res.status(200).json({name: 'characterHandler'});
}
