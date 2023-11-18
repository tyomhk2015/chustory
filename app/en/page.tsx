import styles from '../../styles/Home.module.scss';
import { ICharacter } from '../types';
import ClientCharacterList from '../components/client/ClientCharacterList';
import { FooterContent } from '../components/server/FooterContent';
import prismaClient from '../lib/prismaClient';

export const dynamic = 'error';

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
