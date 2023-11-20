import { NextRequest, NextResponse } from 'next/server';
import fs, { promises as fsPromises} from 'fs';
import path from 'path';
import { IContext } from '../../../types';
import { IMG_TYPE } from '../../../constants';

export async function GET(req: NextRequest, context: IContext) {
  const id = context.params.id;
  const transformFilePath = path.join(process.cwd(), 'public', 'illustration', 'transform', id + IMG_TYPE);

  try {
    await fsPromises.access(transformFilePath, fs.constants.F_OK);
    return NextResponse.json({ status: 200, ok: true });
  } catch (err) {
    return NextResponse.json({ status: 404, ok: false });
  }
}
