import { IVersion } from './types';

/**
 * URLs for API
 */
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://chustory.net';

/**
 * Image related constants
 */
// export const ILLUSTRATION_URL = 'https://chunithm.sega.jp/storage/chara/chunithm-new/illustration/';
export const ILLUSTRATION_PATH = '/illustration/';
export const THUMBNAIL_PATH = '/thumbnail/';
export const IMG_TYPE = '.webp';
export const PLACEHOLDER_IMG_PATH = `/fallback/placeholder${IMG_TYPE}`;

/**
 * A list of all Chunithm versions.
 */
export const VERSIONS: IVersion[] = [
  {
    name: 'SUN',
    number: 7,
  },
  {
    name: 'NEW',
    number: 6,
  },
  {
    name: 'PARADISE',
    number: 5,
  },
  {
    name: 'CRYSTAL',
    number: 4,
  },
  {
    name: 'AMAZON',
    number: 3,
  },
  {
    name: 'STAR',
    number: 2,
  },
  {
    name: 'AIR',
    number: 1,
  },
  {
    name: '',
    number: 0,
  },
];
