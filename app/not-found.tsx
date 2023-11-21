import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { FooterContent } from './components/server/FooterContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'Chunithm Character Story',
  title: 'Chunithm Character Story',
  description:
    'Chunithm Character Story is a place for enjoying stories of the characters that are in Chunithm, which is proudly presented by SEGA Co., Ltd.',
  openGraph: {
    siteName: 'Chunithm Character Story',
    title: 'Chunithm Character Story',
    description:
      'Chunithm Character Story is a place for enjoying stories of the characters that are in Chunithm, which is proudly presented by SEGA Co., Ltd.',
    url: 'https://www.chustory.net/en',
    images: 'https://chunithm.sega.com/assets/img/ogp.png',
  },
};

const NotFound = async () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['notFound-wrapper']}>
        <h1 className={styles['notFound__title']}>Return To </h1>
        <div className={styles['notFound__links']}>
          <Link href='/'>▶ Chustory 🇰🇷</Link>
          <Link href='/en'>▶ Chustory 🇺🇸</Link>
        </div>
      </div>
      <footer className={styles['footer']}>
        <FooterContent />
      </footer>
    </div>
  );
};

export default NotFound;
