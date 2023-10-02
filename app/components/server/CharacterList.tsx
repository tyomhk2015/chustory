import { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import { CharacterListProp } from '../../types';
import { IMG_TYPE, THUMBNAIL_PATH } from '../../constants';
import Image from 'next/image';

/**
 * A list of charaters, grouped by each versions.
 */
export const CharacterList: FC<CharacterListProp> = async ({ characters }) => {
  return (
    <>
      {VERSIONS.map((version, index) => {
        const filteredCharacters = characters.filter(
          (character) => character.version === version.number
        );

        return (
          <section
            key={`version${index}`}
            className={styles['character-list-wrapper']}
          >
            <h2 className={styles['character-list__version']}>
              CHUNITHM {version.name}
            </h2>
            <ul className={styles['character-list']}>
              {filteredCharacters.map((character, index) => (
                <li key={index} className={styles['character-list__item']}>
                  {/* The following takes much lesser time than next/image */}
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    alt={character.name}
                    className={styles['character-list__thumbnail']}
                    data-cy-thumbnail='thumbnail'
                    data-key={character.id}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    src={THUMBNAIL_PATH + character.id + IMG_TYPE}
                  />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

interface Version {
  name: string;
  number: number;
}

/**
 * A list of all Chunithm versions.
 */
const VERSIONS: Version[] = [
  {
    name: 'SUN',
    number: 7,
  },
  {
    name: 'NEW',
    number: 6,
  },
  {
    name: 'PARADISE',
    number: 5,
  },
  {
    name: 'CRYSTAL',
    number: 4,
  },
  {
    name: 'AMAZON',
    number: 3,
  },
  {
    name: 'STAR',
    number: 2,
  },
  {
    name: 'AIR',
    number: 1,
  },
  {
    name: '',
    number: 0,
  },
];
