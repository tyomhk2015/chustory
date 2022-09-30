import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'
import { METHODS } from 'http';

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
