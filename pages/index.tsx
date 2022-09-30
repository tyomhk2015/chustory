import classNames from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';
import {
  ICharacterList,
  IEpisodeList,
  IModal,
  useCharacter,
} from '../hook/useCharacter';

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
  const filteredCharacters = prop.characters.filter(
    (character) => character.version === prop.version
  );

  return (
    <>
      {filteredCharacters.length > 0 && (
        <section className={styles['character-list-wrapper']}>
          <h2 className={styles['character-list__version']}>
            CHUNITHM {prop.version}
          </h2>
          <ul className={styles['character-list']}>
            {filteredCharacters.map((character, index) => (
              <li
                key={index}
                onClick={prop.selectCharacter}
                data-key={character.id}
              >
                <Image
                  src={character.thumbnail}
                  alt={character.name}
                  layout={'fill'}
                  objectFit={'contain'}
                />
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
const Modal: React.FC<IModal> = (prop) => {
  const character = prop.getCharacter();

  return (
    <>
      {character && (
        <div
          className={classNames(styles['modal'], {
            [styles['modal--active']]: prop.isActive,
          })}
        >
          <div className={styles['modal__content-wrapper']}>
            <div
              className={styles['modal__close-button']}
              onClick={prop.unselectCharacter}
            >
              Close
            </div>
            <section className={styles['modal__content']}>
              <h2 className={styles['modal__content__title']}>
                {character.name}
              </h2>
              <div className={styles['modal__content__image']}>
                <Image
                  src={character.image}
                  alt={character.name}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
              {character.episodes.length > 0 && (
                <EpisodeList episodes={character.episodes} toggleStoryBox={prop.toggleStoryBox}/>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Episodes of the selected character.
 */
const EpisodeList: React.FC<IEpisodeList> = (prop) => {
  const { episodes } = prop;

  return (
    <div className={styles['modal__content__episodes-wrapper']}>
      <ol className={styles['modal__content__episodes']}>
        {episodes.map((episode, index) => (
          <li
            key={index}
            onClick={prop.toggleStoryBox}
            data-flag={styles['modal__content__episodes__story--closed']}
            className={classNames(styles['modal__content__episodes__story'], styles['modal__content__episodes__story--closed'])}>
            <p className={styles['modal__content__episodes__story__number']}>
              Episode {index + 1}
            </p>
            <h3 className={styles['modal__content__episodes__story__title']}>
              {episode.title}
            </h3>
            <p className={styles['modal__content__episodes__story__subtitle']}>
              {episode.subtitle}
            </p>
            <p className={styles['modal__content__episodes__story__content']} dangerouslySetInnerHTML={{ __html: episode.story }} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
