import classNames from "classnames";
import Image from "next/image";
import { IModal } from "../hook/useCharacter";
import styles from '../styles/Home.module.scss';
import { EpisodeList } from "./EpisodeList";

const ILLUSTRATION_URL = 'https://chunithm.sega.jp/storage/chara/chunithm-new/illustration//';
const IMG_TYPE = '.png';

/**
 * Modal for showing selected character's detail.
 */
export const Modal: React.FC<IModal> = (prop) => {
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
                  src={ILLUSTRATION_URL + character.id + IMG_TYPE}
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