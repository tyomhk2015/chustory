'use client';

import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IClientModalProps } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';
import { EpisodeList } from './EpisodeList';
import { FC } from 'react';

/**
 * Modal for showing selected character's detail.
 */
const Modal: FC<IClientModalProps> = ({
  selectedCharacter,
  setSelectedCharacter,
  unFixWrapper
}) => {
  const closeModal = () => {
    setSelectedCharacter(undefined);
    unFixWrapper();
  }

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
          <h2 className={styles['modal__content__title']}>{selectedCharacter.name}</h2>
          <div className={styles['modal__content__image']}>
            {/* The following takes much lesser time than next/image */}
            {/* eslint-disable @next/next/no-img-element */}
            <img
              data-cy-illustration='illustration'
              src={ILLUSTRATION_PATH + selectedCharacter.id + IMG_TYPE}
              alt={selectedCharacter.name}
              loading='eager'
            />
          </div>
          {selectedCharacter.episodes.length > 0 && (
            <EpisodeList episodes={selectedCharacter.episodes} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Modal;