import styles from '../styles/Home.module.scss';
import { ICharacter } from './types';
import ClientCharacterList from './components/client/ClientCharacterList';
import { FooterContent } from './components/server/FooterContent';
import prismaClient from './lib/prismaClient';
import type { Metadata } from 'next';

export const dynamic = 'error';

export const metadata: Metadata = {
  applicationName: '츄니즘 캐릭터 스토리',
  title: '츄니즘 캐릭터 스토리',
  description:
    '츄니즘 캐릭터 스토리는 주식회사 SEGA에서 출시한 츄니즘 게임에 등장하는 캐릭터들의 스토리들을 즐길 수 있는 곳입니다.',
  openGraph: {
    siteName: '츄니즘 캐릭터 스토리',
    title: '츄니즘 캐릭터 스토리',
    description:
      '츄니즘 캐릭터 스토리는 주식회사 SEGA에서 출시한 츄니즘 게임에 등장하는 캐릭터들의 스토리들을 즐길 수 있는 곳입니다.',
    url: 'https://www.chustory.net/',
    images: 'https://chunithm.sega.com/assets/img/ogp.png',
  },
};

const Home = async () => {
  const characters: ICharacter[] = await prismaClient.character.findMany({
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

export default Home;
