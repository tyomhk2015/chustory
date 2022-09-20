import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';
import { ICharacterList, useCharacter } from './hook/useCharacter';

const Home: NextPage = () => {
  const characterHook = useCharacter();

  return (
    <div className={styles['wrapper']}>
      <MetaHead />
      <main>
        <h1 className={styles['main__title']}>Chunithm Character Story</h1>
        {characterHook.characters.length > 0 && (
          <>
            <CharacterList characters={characterHook.characters} version='NEW'/>
            <CharacterList characters={characterHook.characters} version='PARADISE'/>
            <CharacterList characters={characterHook.characters} version='CRYSTAL'/>
            <CharacterList characters={characterHook.characters} version='AMAZON'/>
            <CharacterList characters={characterHook.characters} version='STAR'/>
            <CharacterList characters={characterHook.characters} version='AIR'/>
            <CharacterList characters={characterHook.characters} version=''/>
          </>
        )}
      </main>

      <footer className={styles['footer']}></footer>
      <Modal />
    </div>
  );
};

/**
 * 'Head' tag of HTML
 */
const MetaHead = () => {
  return (
    // https://developers.google.com/search/docs/crawling-indexing/special-tags
    // <meta name="google-site-verification" content="...">

    <Head>
      <title>Chunithm Character Story</title>
      <meta charSet='UTF-8' />
      <meta name='application-name' content='Chunithm Character Story' />
      <meta name='author' content='©SEGA' />
      <meta name='copyright' content='©SEGA' />
      <meta
        name='description'
        content='츄니즘 캐릭터 스토리 | Chunithm Character Story'
      />
      <meta
        name='robots'
        content='츄니즘 캐릭터 스토리 | Chunithm Character Story'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='keywords'
        content='츄니즘, Chunithm, チュウニズム, チューニズム, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS,'
      />
      <meta name='rating' content='general' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

/**
 * A list of charaters, grouped by each versions.
 */
const CharacterList: React.FC<ICharacterList> = (prop) => {
  const filteredCharacters = prop.characters.filter((character) => character.version === prop.version);
  return (
    <>
      {filteredCharacters.length > 0 && (
        <section className={styles['character-list-wrapper']}>
          <h2 className={styles['character-list__version']}>CHUNITHM {prop.version}</h2>
            <ul className={styles['character-list']}>
              {filteredCharacters.map((character, index) => (
                <li key={index}>
                  <Image src={character.thumbnail} alt={character.name} layout={'fill'} objectFit={'contain'} />
                </li>
              ))}
            </ul>
        </section>
      )}
    </>
  );
};

/**
 * Modal for showing selected character's detail.
 */
const Modal: React.FC = () => {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal__content-wrapper']}>
        <CloseButton />
      </div>
    </div>
  )
}

const CloseButton: React.FC = () => {
  return (
    <div className={styles['modal__close-button']}>
      Close
    </div>
  )
}

export default Home;
