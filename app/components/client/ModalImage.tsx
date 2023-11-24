import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IModalImage } from '../../types';
import { MouseEvent } from 'react';

const ModalImage = ({
  selectedCharacterName,
  isImageReady,
  isTransform,
  transformPath,
  normalPath,
  showImage,
}: IModalImage) => {
  const blockContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  }

  return (
    <>
      {/* The following takes much lesser time than next/image */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        onContextMenu={blockContextMenu}
        onLoad={showImage}
        data-cy-illustration='illustration'
        className={classNames(styles['modal__content__image'], {
          [styles['modal__content__image--hidden']]: !isImageReady,
        })}
        src={isTransform ? transformPath : normalPath}
        alt={selectedCharacterName}
        loading='eager'
      />
    </>
  );
};

export default ModalImage;
