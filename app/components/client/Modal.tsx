'use client';

import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IClientModalProps, IEpisode } from '../../types';
import {
  ILLUSTRATION_PATH,
  ILLUSTRATION_TRANSFORM_PATH,
  IMG_TYPE,
  TRANSITION_DURATION,
} from '../../constants';
import { EpisodeList } from './EpisodeList';
import { useEffect, useRef, useState } from 'react';
import ModalImage from './ModalImage';

/**
 * Modal for showing selected character's detail.
 */
const Modal = ({
  selectedCharacter,
  setSelectedCharacter,
  unFixWrapper,
}: IClientModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [isImageReady, setIsImageReady] = useState(false);
  const [isTransformExist, setIsTransformExist] = useState(false);
  const [isTransform, setIsTransform] = useState(false);
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);

  let timeoutToggle = 0;
  const normalPath = ILLUSTRATION_PATH + selectedCharacter.id + IMG_TYPE;
  const transformPath =
    ILLUSTRATION_TRANSFORM_PATH + selectedCharacter.id + IMG_TYPE;

  const toggleTransform = async () => {
    if (!isTransitionEnd) return;
    setIsImageReady(false);
    setIsTransitionEnd(false);
    timeoutToggle = window.setTimeout(
      () => setIsTransform((prevState) => !prevState),
      TRANSITION_DURATION
    );
  };

  const closeModal = () => {
    setSelectedCharacter(undefined);
    unFixWrapper();
  };

  const scrollTop = () => {
    modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showImage = async () => {
    setIsImageReady(true);
    setIsTransitionEnd(true);
  };

  useEffect(() => {
    if (!selectedCharacter || !selectedCharacter.id) return;

    const checkTransformImage = async () => {
      try {
        const response = await fetch(transformPath, {
          method: 'HEAD',
        });
        setIsTransformExist(response.ok);
      } catch (error) {
        setIsTransformExist(false);
      }
    };

    const loadEpisodes = async () => {
      const english =
        window.location.pathname.split('/')[1] === 'en' ? 'En' : '';
      const retrievedEpisodes = await (
        await fetch(`api/episode/${selectedCharacter.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
            Language: english,
          },
        })
      ).json();
      setEpisodes(retrievedEpisodes);
    };

    checkTransformImage();
    loadEpisodes();

    return () => {
      window.clearTimeout(timeoutToggle);
    };
  }, []);

  return (
    <div
      data-cy-modal='modal'
      className={classNames(styles['modal'], [styles['modal--active']])}
    >
      <div ref={modalRef} className={styles['modal__content-wrapper']}>
        <div
          data-cy-transform-button='transFormButton'
          className={classNames(styles['modal__transform-button'], {
            [styles['modal__transform-button--hidden']]: !isTransformExist,
          })}
          onClick={toggleTransform}
        >
          <svg
            className={styles['modal__transform-button-icon']}
            focusable='false'
            viewBox='0 0 24 24'
          >
            <path d='M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z'></path>
          </svg>
        </div>
        <div
          data-cy-close-button='closeButton'
          className={styles['modal__close-button']}
          onClick={closeModal}
        >
          <svg
            className={styles['modal__close-button-icon']}
            focusable='false'
            viewBox='0 0 24 24'
          >
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'></path>
          </svg>
        </div>
        <section className={styles['modal__content']}>
          <h2 className={styles['modal__content__title']}>
            {selectedCharacter.name}
          </h2>
          <div className={styles['modal__content__image-wrapper']}>
            <ModalImage
              selectedCharacterName={selectedCharacter.name}
              normalPath={normalPath}
              transformPath={transformPath}
              isTransform={isTransform}
              isImageReady={isImageReady}
              showImage={showImage}
            />
            {selectedCharacter.illustrator && (
              <p
                className={classNames(
                  styles['modal__content__image-illustrator'],
                  {
                    [styles['modal__content__image-illustrator--hidden']]:
                      !isImageReady,
                  }
                )}
              >
                ©{selectedCharacter.illustrator}
              </p>
            )}
          </div>
          {episodes.length > 0 && <EpisodeList episodes={episodes} />}
        </section>
        <div onClick={scrollTop} className={styles['modal__scrollTop']}>
          <svg
            focusable='false'
            aria-hidden='true'
            viewBox='0 0 24 24'
            data-testid='KeyboardDoubleArrowUpIcon'
          >
            <path d='M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z'></path>
            <path d='m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
