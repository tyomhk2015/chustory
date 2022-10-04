import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'

// method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(objectWithData),
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
