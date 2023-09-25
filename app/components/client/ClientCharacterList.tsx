'use client';

import React, {
  FC,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useRef,
  useState,
} from 'react';
import { Modal } from './Modal';
import { ClientCharacterListProps, ICharacter } from '../../types';
import { ILLUSTRATION_PATH, IMG_TYPE } from '../../constants';

const ClientCharacterList: FC<
  PropsWithChildren<ClientCharacterListProps>
> = ({ characters, children }) => {
  const fixationRef = useRef(null);
  const [selectedCharacter, setSelectedCharacter] = useState<
    ICharacter | undefined
  >(undefined);
  const [scrollYPos, setScrollYPos] = useState(0);

  const toogleRootDOMFix = (doFix: boolean) => {
    const rootDOMs = document.querySelectorAll('html, body');
    rootDOMs.forEach((DOM) => doFix ? DOM.classList.add('fixed') : DOM.removeAttribute('class'));
  }

  const toogleWrapperFix = (fix: boolean, yPos: number) => {
    if(!fixationRef.current) return;
    const wrapper = fixationRef.current as HTMLElement;

    if(fix) {
      wrapper.style.position = 'relative';
      wrapper.style.top = -yPos + 'px';
    } else {
      wrapper.style.removeProperty('position');
      wrapper.style.removeProperty('top');
      window.scrollTo(0, yPos);
    }
  }

  const preloadImage = (imageLocation: string) => {
    const image = new Image();
    image.src = imageLocation;
  };

  const onClick = (event: MouseEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG')) return;

    const id = targetElement.getAttribute('data-key');
    const retrievedCharacter = characters.find(
      (character) => character.id === id
    );

    if(!retrievedCharacter) return
    const currentScrollYPos = window.pageYOffset;
    toogleRootDOMFix(true);
    setScrollYPos(currentScrollYPos);
    toogleWrapperFix(true, currentScrollYPos);
    setSelectedCharacter(retrievedCharacter);
  };

  const unFixWrapper = () => {
    toogleRootDOMFix(false);
    toogleWrapperFix(false, scrollYPos)
  }

  const onMouseEnter = (event: MouseEvent | TouchEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG')) return;
    const id = targetElement.getAttribute('data-key');
    id && preloadImage(ILLUSTRATION_PATH + id + IMG_TYPE);
  };

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
