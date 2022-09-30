import Image from "next/image";
import styles from '../styles/Home.module.scss';
import { ICharacterList } from "../hook/useCharacter";

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