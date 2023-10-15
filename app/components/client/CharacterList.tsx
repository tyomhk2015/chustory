'use client';
import styles from '../../../styles/Home.module.scss';
import { ICharacterListProp } from '../../types';
import { IMG_TYPE, THUMBNAIL_PATH, VERSIONS } from '../../constants';
import CharacterThumbnail from './CharacterThumbnail';

/**
 * A list of charaters, grouped by each versions.
 */
export const CharacterList = ({
  characters,
  selectedVersion,
  isInitial,
}: ICharacterListProp) => {
  const versionName = VERSIONS.find(
    (item) => item.number === selectedVersion
  )?.name;
  const filteredCharacters = characters.filter(
    (character) => character.version === selectedVersion
  );
  return (
    <section className={styles['character-list-wrapper']}>
      <h2 className={styles['character-list__version']}>
        CHUNITHM {versionName}
      </h2>
      <ul className={styles['character-list']}>
        {filteredCharacters.map((character, index) => (
          <li key={index}>
            <CharacterThumbnail
              isInitial={isInitial}
              character={character}
              src={THUMBNAIL_PATH + character.id + IMG_TYPE}
              loading={'lazy'}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
