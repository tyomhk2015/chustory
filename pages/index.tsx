import prismaClient from '../lib/prismaClient';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next'
import React from 'react';
import styles from '../styles/Home.module.scss';
import { useCharacter } from '../hook/useCharacter';
import { MetaHead, CharacterList, Modal, FooterContent } from '../components';

const Home: NextPage = ({data: characterData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const characterHook = useCharacter(characterData);

  return (
    <div className={styles['wrapper']}>
      <MetaHead />
      <main>
        <h1 className={styles['main__title']}>Chunithm Character Story</h1>
        {characterHook.characters.length > 0 && (
          <>
            {characterHook.VERSIONS.map((version, index) => (
              <CharacterList
                key={version}
                characters={characterHook.characters}
                version={index}
                versionName={version}
                selectCharacter={characterHook.selectCharacter}
              />
            ))}
          </>
        )}
      </main>

      <footer className={styles['footer']}>
        <FooterContent />
      </footer>

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

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=600'
  );

  const characters = JSON.parse(JSON.stringify(await prismaClient.character.findMany({
    include: {
      episodes: true, // Return all episodes
    },
  })));

  return { props: { data : characters } }
}

export default Home;
