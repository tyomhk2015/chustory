import prismaClient from './lib/prismaClient';
import styles from '../styles/Home.module.scss';
import { ICharacter } from './types';
import ClientCharacterList from './components/client/ClientCharacterList';
import { FooterContent } from './components/server/FooterContent';

export const dynamic = 'error';

const Home = async () => {
  const characters: ICharacter[] = await prismaClient.character.findMany({
    select: {
      id: true,
      name: true,
      version: true,
      illustrator: true,
      episodes: {
        select: {
          characterId: true,
          title: true,
          subtitle: true,
          story: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
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
