'use client';

import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IClientModalProps, IEpisode } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';
import { EpisodeList } from './EpisodeList';
import { useEffect, useState } from 'react';

/**
 * Modal for showing selected character's detail.
 */
const Modal = ({
  selectedCharacter,
  setSelectedCharacter,
  unFixWrapper,
}: IClientModalProps) => {
  const closeModal = () => {
    setSelectedCharacter(undefined);
    unFixWrapper();
  };
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [isImageReady, setIsImageReady] = useState(false);

  const showImage = () => {
    setIsImageReady(true);
  };

  useEffect(() => {
    const loadEpisodes = async () => {
      const retrievedEpisodes = await(await fetch(`api/episode/${selectedCharacter.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.NEXT_PUBLIC_API_KEY as string
        }
      })).json();
      setEpisodes(retrievedEpisodes)
    };
    loadEpisodes();
  }, []);

  return (
    <div
      data-cy-modal='modal' // Cypress Best Practices: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
      className={classNames(styles['modal'], {
        [styles['modal--active']]: true,
      })}
    >
      <div className={styles['modal__content-wrapper']}>
        <div
          data-cy-close-button='closeButton'
          className={styles['modal__close-button']}
          onClick={closeModal}
        >
          Close
        </div>
        <section className={styles['modal__content']}>
          <h2 className={styles['modal__content__title']}>
            {selectedCharacter.name}
          </h2>
          <div className={styles['modal__content__image-wrapper']}>
            {/* The following takes much lesser time than next/image */}
            {/* eslint-disable @next/next/no-img-element */}
            <img
              onLoad={showImage}
              data-cy-illustration='illustration'
              className={classNames(styles['modal__content__image'], {
                [styles['modal__content__image--hidden']]: !isImageReady,
              })}
              src={ILLUSTRATION_PATH + selectedCharacter.id + IMG_TYPE}
              alt={selectedCharacter.name}
              loading='eager'
            />
          </div>
          {episodes.length > 0 && (
            <EpisodeList episodes={episodes} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Modal;
