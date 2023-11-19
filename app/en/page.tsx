import styles from '../../styles/Home.module.scss';
import { ICharacter } from '../types';
import ClientCharacterList from '../components/client/ClientCharacterList';
import { FooterContent } from '../components/server/FooterContent';
import prismaClient from '../lib/prismaClient';
import type { Metadata } from 'next';

export const dynamic = 'error';

export const metadata: Metadata = {
  applicationName: 'Chunithm Character Story',
  title: 'Chunithm Character Story',
  description: 'Chunithm Character Story is a place for enjoying stories of the characters that are in Chunithm, which is proudly presented by SEGA Co., Ltd.',
  openGraph: {
    siteName: 'Chunithm Character Story',
    title: 'Chunithm Character Story',
    description: 'Chunithm Character Story is a place for enjoying stories of the characters that are in Chunithm, which is proudly presented by SEGA Co., Ltd.',
    url: 'https://www.chustory.net/en',
    images: 'https://chunithm.sega.com/assets/img/ogp.png'
  },
};

const EnPage = async () => {
  const characters: ICharacter[] = await prismaClient.characterEn.findMany({
    select: {
      id: true,
      name: true,
      version: true,
      illustrator: true,
    },
  });

  return (
    <div className={styles['wrapper']}>
      <main>
        <h1 className={styles['main__title']}>Chunithm Character Story</h1>
        <ClientCharacterList characters={characters} />
      </main>

      <footer className={styles['footer']}>
        <FooterContent />
      </footer>
    </div>
  );
};

export default EnPage;
