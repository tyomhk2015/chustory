import type { NextPage } from 'next';
import React from 'react';
import styles from '../styles/Home.module.scss';
import { useCharacter } from '../hook/useCharacter';
import { MetaHead, CharacterList, Modal } from '../components';

const Home: NextPage = () => {
  const characterHook = useCharacter();

  return (
    <div className={styles['wrapper']}>
      <MetaHead />
      <main>
        <h1 className={styles['main__title']}>Chunithm Character Story</h1>
        {characterHook.characters.length > 0 && (
          <>
            {characterHook.VERSIONS.map((version) => (
              <CharacterList
                key={version}
                characters={characterHook.characters}
                version={version}
                selectCharacter={characterHook.selectCharacter}
              />
            ))}
          </>
        )}
      </main>

      <footer className={styles['footer']}></footer>
      {characterHook.getCharacter() && (
        <Modal
          isActive={!!characterHook.selectedCharacter}
          getCharacter={characterHook.getCharacter}
          unselectCharacter={characterHook.unselectCharacter}
          toggleStoryBox={characterHook.toggleStoryBox}
        />
      )}
    </div>
  );
};

export default Home;
