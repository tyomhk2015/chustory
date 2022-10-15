import Image from "next/image";
import styles from '../styles/Home.module.scss';
import { ICharacterList } from "../hook/useCharacter";
import placeholderImage from '../public/placeholder.webp';

const THUMBNAIL_URL = 'https://chunithm.sega.jp/storage/chara/chunithm-new/thumbnail/';
const THUMBNAIL_PATH = '/thumbnail/';
const IMG_TYPE = '.png';
/**
 * A list of charaters, grouped by each versions.
 */
export const CharacterList: React.FC<ICharacterList> = (prop) => {
  const filteredCharacters = prop.characters.filter(
    (character) => character.version === prop.version
  );

  return (
    <>
      {filteredCharacters.length > 0 && (
        <section className={styles['character-list-wrapper']}>
          <h2 className={styles['character-list__version']}>
            CHUNITHM {prop.versionName}
          </h2>
          <ul className={styles['character-list']}>
            {filteredCharacters.map((character, index) => (
              <li
                key={index}
                onClick={prop.selectCharacter}
                data-key={character.id}
              >
                <img
                  className={styles['character-list__thumbnail']}
                  src={THUMBNAIL_PATH + character.id + IMG_TYPE}
                  alt={character.name}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};