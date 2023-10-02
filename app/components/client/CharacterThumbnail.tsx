'use client';

import React, {
  FC,
  MouseEvent,
  TouchEvent,
  useCallback,
  useMemo,
} from 'react';
import styles from '../../../styles/Home.module.scss';
import { ICharacterThumbnailProps } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';

const CharacterThumbnail: FC<ICharacterThumbnailProps> = ({
  character,
  src,
  loading,
}) => {
  const preloadedImages = useMemo(() => new Set(), []);

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
    if (!(targetElement.tagName === 'IMG')) return;
    const id = targetElement.getAttribute('data-key');
    id && preloadImage(ILLUSTRATION_PATH + id + IMG_TYPE);
  }, []);

  return (
    <>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        onMouseEnter={onMouseEnter}
        onTouchStart={onMouseEnter}
        data-cy-thumbnail='thumbnail'
        data-key={character.id}
        className={styles['character-list__thumbnail']}
        src={src}
        alt={character.name}
        loading={loading}
      />
      <p>
        {character.name}
      </p>
    </>
  );
};
export default CharacterThumbnail;
