import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Version {
  id: number;
  name: string;
  order: number;
}

export default async function characterHandler(
  req: NextApiRequest,
  res: NextApiResponse<Version[]>
) {
  if(req.method !== 'GET') {
    res.status(400);
    return;
  };

  const versions = await prismaClient.version.findMany();
  res.status(200).json(versions);
}
