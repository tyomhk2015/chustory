import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '../../../lib/prismaClient';
import { IContext, IEpisode } from '../../../types';

export async function GET(req: NextRequest, context: IContext) {
  const isValidRequest =
    req.headers.get('authorization') === process.env.NEXT_PUBLIC_API_KEY;
  if (!isValidRequest) return NextResponse.json({ status: 401 });

  const id = context.params.id;
  const episodes: IEpisode[] = await prismaClient.episode.findMany({
    select: {
      characterId: true,
      title: true,
      subtitle: true,
      story: true,
      order: true,
    },
    where: {
      characterId: id,
    },
  });
  return NextResponse.json(episodes, { status: 200 });
}
