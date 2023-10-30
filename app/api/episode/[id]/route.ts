import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '../../../lib/prismaClient';
import { IContext, IEpisode, IHeaders } from '../../../types';
import { redirect } from 'next/navigation';

export async function GET(req: NextRequest, context: IContext) {
  const isValidRequest =
    req.headers.get('authorization') === process.env.NEXT_PUBLIC_API_KEY;
  if (!isValidRequest) {
    NextResponse.json({ status: 401 });
    redirect('/');
  }

  const requestOrigin = req.headers.get('origin');
  const headers: IHeaders = {};

  if (requestOrigin === process.env.ALLOWED_ORIGIN) {
    headers['Access-Control-Allow-Origin'] = process.env.ALLOWED_ORIGIN;
    headers['Access-Control-Allow-Methods'] = 'GET';
    headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }

  const id = context.params.id;
  const episodes: IEpisode[] = await prismaClient.episode.findMany({
    select: {
      characterId: true,
      title: true,
      subtitle: true,
      story: true,
    },
    where: {
      characterId: id,
    },
    orderBy: {
      order: 'asc'
    }
  });

  return NextResponse.json(episodes, { status: 200, headers: headers });
}
