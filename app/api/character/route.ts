import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '../../lib/prismaClient';
import { ICharacter, IHeaders } from '../../types';
import { redirect } from 'next/navigation';

export async function GET(req: NextRequest) {
  const isValidRequest =
    req.headers.get('authorization') === process.env.NEXT_PUBLIC_API_KEY;
  if (!isValidRequest) {
    NextResponse.json({ status: 401 });
    redirect('/not-found');
  }

  const allowedOrigin = ['https://chustory.net'];
  const requestOrigin = req.headers.get('origin');
  const headers: IHeaders = {};

  if (requestOrigin && allowedOrigin.includes(requestOrigin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'GET';
    headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }

  const characters: ICharacter[] = await prismaClient.character.findMany({
    select: {
      id: true,
      name: true,
      version: true,
      illustrator: true,
    },
    orderBy: {
      id: 'desc'
    }
  });

  return NextResponse.json(characters, { status: 200, headers: headers });
}
