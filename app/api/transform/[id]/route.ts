import { NextRequest, NextResponse } from 'next/server';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { IContext, IHeaders } from '../../../types';
import { IMG_TYPE } from '../../../constants';
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
  const transformFilePath = path.join(
    process.cwd(),
    'public',
    'illustration',
    'transform',
    id + IMG_TYPE
  );
  const extraTransformFilePath = path.join(
    process.cwd(),
    'public',
    'illustration',
    'transform',
    `${id}a${IMG_TYPE}`
  );
  const anotherExtraTransformFilePath = path.join(
    process.cwd(),
    'public',
    'illustration',
    'transform',
    `${id}b${IMG_TYPE}`
  );

  let transformExists = false;
  let extraTransformExists = false;
  let anotherExtraTransformExists = false;

  try {
    await fsPromises.access(transformFilePath, fs.constants.F_OK);
    transformExists = true;
    await fsPromises.access(extraTransformFilePath, fs.constants.F_OK);
    extraTransformExists = true;
    await fsPromises.access(anotherExtraTransformFilePath, fs.constants.F_OK);
    anotherExtraTransformExists = true;
  } catch (err) {}

  if (anotherExtraTransformExists) {
    return NextResponse.json({ status: 200, ok: true, images: 3 });
  } else if (extraTransformExists) {
    return NextResponse.json({ status: 200, ok: true, images: 2 });
  } else if (transformExists) {
    return NextResponse.json({ status: 200, ok: true, images: 1 });
  } else {
    return NextResponse.json({ status: 404, ok: false });
  }
}
