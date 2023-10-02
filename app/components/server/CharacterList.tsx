import { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import { ICharacterListProp } from '../../types';
import { IMG_TYPE, THUMBNAIL_PATH } from '../../constants';
import CharacterThumbnail from './CharacterThumbnail';

/**
 * A list of charaters, grouped by each versions.
 */
export const CharacterList: FC<ICharacterListProp> = async ({ characters }) => {
  return (
    <>
      {VERSIONS.map((version, versionIndex) => {
        const filteredCharacters = characters.filter(
          (character) => character.version === version.number
        );

        return (
          <section
            key={`version${versionIndex}`}
            className={styles['character-list-wrapper']}
          >
            <h2 className={styles['character-list__version']}>
              CHUNITHM {version.name}
            </h2>
            <ul className={styles['character-list']}>
              {filteredCharacters.map((character, index) => (
                <li key={index}>
                  <CharacterThumbnail character={character} src={THUMBNAIL_PATH + character.id + IMG_TYPE} loading={versionIndex === 0 ? 'eager' : 'lazy'}/>
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
