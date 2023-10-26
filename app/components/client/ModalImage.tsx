import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IModalImage } from '../../types';

const ModalImage = ({
  selectedCharacterName,
  isImageReady,
  isTransform,
  transformPath,
  normalPath,
  showImage,
}: IModalImage) => {
  return (
    <>
      {/* The following takes much lesser time than next/image */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
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
