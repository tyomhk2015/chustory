'use client';

import React, {
  FC,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Modal } from './Modal';
import { IClientCharacterListProps, ICharacter } from '../../types';

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

  const onClick = useCallback((event: MouseEvent) => {
    const targetElement = event.target as HTMLDivElement;
    if (!(targetElement.tagName === 'IMG')) return;

    const id = targetElement.getAttribute('data-key');
    const retrievedCharacter = characters.find(
      (character) => character.id === id
    );

    if (!retrievedCharacter) return;

    const currentScrollYPos = window.pageYOffset;
    toogleRootDOMFix(true);
    setScrollYPos(currentScrollYPos);
    toogleWrapperFix(true, currentScrollYPos);
    setSelectedCharacter(retrievedCharacter);
  }, []);

  const unFixWrapper = () => {
    toogleRootDOMFix(false);
    toogleWrapperFix(false, scrollYPos);
  };

  return (
    <div ref={fixationRef}>
      <div
        onClick={onClick}
      >
        {children}
      </div>
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
