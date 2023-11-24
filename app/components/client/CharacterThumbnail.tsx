'use client';

import React, {
  MouseEvent,
  TouchEvent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import styles from '../../../styles/Home.module.scss';
import { ICharacterThumbnailProps } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';
import classNames from 'classnames';

const CharacterThumbnail = ({
  character,
  src,
  loading,
  isInitial,
}: ICharacterThumbnailProps) => {
  const preloadedImages = useMemo(() => new Set(), []);
  const [isImageReady, setIsImageReady] = useState(false);

  const preloadImage = useCallback((imageLocation: string) => {
    if (preloadedImages.has(imageLocation)) return;
    const image = new Image();
    image.src = imageLocation;
    image.onload = () => {
      preloadedImages.add(imageLocation);
    };
  }, []);

  const onMouseEnter = useCallback((event: MouseEvent | TouchEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG' || targetElement.tagName === 'P'))
      return;
    const id = targetElement.getAttribute('data-key');
    id && preloadImage(ILLUSTRATION_PATH + id + IMG_TYPE);
  }, []);

  const showImage = () => {
    setIsImageReady(true);
  };

  const blockContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  }

  useLayoutEffect(() => {
    isInitial && showImage();
  }, []);

  return (
    <>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        onContextMenu={blockContextMenu}
        onMouseEnter={onMouseEnter}
        onTouchStart={onMouseEnter}
        onLoad={showImage}
        data-cy-thumbnail='thumbnail'
        data-key={character.id}
        className={classNames(styles['character-list__thumbnail'], {
          [styles['character-list__thumbnail--hidden']]: !isImageReady,
        })}
        src={src}
        alt={character.name}
        loading={loading}
      />
      <p
        onMouseEnter={onMouseEnter}
        onTouchStart={onMouseEnter}
        data-key={character.id}
      >
        {character.name}
      </p>
    </>
  );
};
export default CharacterThumbnail;
