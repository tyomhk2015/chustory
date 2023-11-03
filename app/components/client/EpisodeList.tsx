'use client';

import classNames from 'classnames';

import styles from '../../../styles/Home.module.scss';
import { MouseEvent } from 'react';
import { IEpisodeList } from '../../types';

/**
 * Episodes of the selected character.
 */
export const EpisodeList = ({ episodes }: IEpisodeList) => {
  return (
    <div className={styles['modal__content__episodes-wrapper']}>
      <div className={styles['modal__content__episodes']}>
        {episodes.map((episode, index) => (
          <details
            key={index}
            className={classNames(styles['modal__content__episodes__story'])}
          >
            <summary>Episode {index + 1}</summary>
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
          </details>
        ))}
      </div>
    </div>
  );
};
