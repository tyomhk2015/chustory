'use client';

import React, {
  FC,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Modal } from './Modal';
import { IClientCharacterListProps, ICharacter } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';

const ClientCharacterList: FC<PropsWithChildren<IClientCharacterListProps>> = ({
  characters,
  children,
}) => {
  const fixationRef = useRef(null);
  const [selectedCharacter, setSelectedCharacter] = useState<
    ICharacter | undefined
  >(undefined);
  const [scrollYPos, setScrollYPos] = useState(0);

  const toogleRootDOMFix = useCallback((doFix: boolean) => {
    const rootDOMs = document.querySelectorAll('html, body');
    rootDOMs.forEach((DOM) =>
      doFix ? DOM.classList.add('fixed') : DOM.removeAttribute('class')
    );
  }, []);

  const toogleWrapperFix = useCallback((fix: boolean, yPos: number) => {
    if (!fixationRef.current) return;
    const wrapper = fixationRef.current as HTMLElement;

    if (fix) {
      wrapper.style.position = 'relative';
      wrapper.style.top = -yPos + 'px';
    } else {
      wrapper.style.removeProperty('position');
      wrapper.style.removeProperty('top');
      window.scrollTo(0, yPos);
    }
  }, []);

  const preloadedImages = useMemo(() => new Set(), []);

  const preloadImage = useCallback((imageLocation: string) => {
    if (preloadedImages.has(imageLocation)) return;
    const image = new Image();
    image.src = imageLocation;
    image.onload = () => {
      preloadedImages.add(imageLocation);
    };
  }, []);

  const onClick = useCallback((event: MouseEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG')) return;

    const id = targetElement.getAttribute('data-key');
    const retrievedCharacter = characters.find(
      (character) => character.id === id
    );

    if (!retrievedCharacter) return;

    const currentScrollYPos = window.pageYOffset;
    id && preloadImage(ILLUSTRATION_PATH + id + IMG_TYPE);
    toogleRootDOMFix(true);
    setScrollYPos(currentScrollYPos);
    toogleWrapperFix(true, currentScrollYPos);
    setSelectedCharacter(retrievedCharacter);
  }, []);

  const unFixWrapper = () => {
    toogleRootDOMFix(false);
    toogleWrapperFix(false, scrollYPos);
  };

  const onMouseEnter = useCallback((event: MouseEvent | TouchEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG')) return;
    const id = targetElement.getAttribute('data-key');
    id && preloadImage(ILLUSTRATION_PATH + id + IMG_TYPE);
  }, []);

  return (
    <div
      ref={fixationRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onTouchStart={onMouseEnter}
    >
      {children}
      {selectedCharacter && (
        <Modal
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
          unFixWrapper={unFixWrapper}
        />
      )}
    </div>
  );
};

export default ClientCharacterList;
