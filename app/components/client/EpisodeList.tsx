'use client';

import classNames from 'classnames';

import styles from '../../../styles/Home.module.scss';
import { MouseEvent } from 'react';
import { IEpisodeList } from '../../types';

/**
 * Episodes of the selected character.
 */
export const EpisodeList = ({ episodes }: IEpisodeList) => {
  const toggleStoryBox = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const flag = target.getAttribute('data-flag') as string;
    const isClosed = target.className.indexOf(flag) > 0;

    isClosed ? target.classList.remove(flag) : target.classList.add(flag);
  };

  return (
    <div className={styles['modal__content__episodes-wrapper']}>
      <ol className={styles['modal__content__episodes']}>
        {episodes.map((episode, index) => (
          <li
            key={index}
            onClick={toggleStoryBox}
            data-flag={styles['modal__content__episodes__story--closed']}
            className={classNames(
              styles['modal__content__episodes__story'],
              styles['modal__content__episodes__story--closed']
            )}
          >
            <p className={styles['modal__content__episodes__story__number']}>
              Episode {index + 1}
            </p>
            <h3 className={styles['modal__content__episodes__story__title']}>
              {episode.title}
            </h3>
            <p className={styles['modal__content__episodes__story__subtitle']}>
              {episode.subtitle}
            </p>
            <p
              className={styles['modal__content__episodes__story__content']}
              dangerouslySetInnerHTML={{ __html: episode.story }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
