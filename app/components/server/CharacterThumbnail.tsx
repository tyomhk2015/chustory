import { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import { ICharacterThumbnailProps } from '../../types';

const CharacterThumbnail: FC<ICharacterThumbnailProps> = ({
  character,
  src,
  loading,
}) => {
  return (
    <>
      {/* eslint-disable @next/next/no-img-element */}
      <img
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
