import classNames from "classnames";
import { IEpisodeList } from "../hook/useCharacter";
import styles from '../styles/Home.module.scss';

/**
 * Episodes of the selected character.
 */
export const EpisodeList: React.FC<IEpisodeList> = (prop) => {
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