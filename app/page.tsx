import styles from '../styles/Home.module.scss';
import { ICharacter } from './types';
import ClientCharacterList from './components/client/ClientCharacterList';
import { FooterContent } from './components/server/FooterContent';

export const dynamic = 'error';

const Home = async () => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const characters: ICharacter[] = await (
    await fetch(`${protocol}://localhost:3000/api/character`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
      },
    })
  ).json();

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
