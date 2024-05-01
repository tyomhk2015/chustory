'use client';

import React, {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Modal from './Modal';
import { IClientCharacterListProps, SelectedCharacter } from '../../types';
import { CharacterList } from './CharacterList';
import { VERSIONS } from '../../constants';
import { VersionTabList } from './VersionTabList';

const ClientCharacterList = ({
  characters,
}: PropsWithChildren<IClientCharacterListProps>) => {
  const isKr = true;
  const fixationRef = useRef(null);
  const [selectedCharacter, setSelectedCharacter] = useState<
    SelectedCharacter | undefined
  >();
  const [selectedVersion, setSelectedVersion] = useState(VERSIONS[0].number);
  const [isInitial, setIsInitial] = useState(true);
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
    if (!(targetElement.tagName === 'IMG' || targetElement.tagName === 'P'))
      return;

    const id = targetElement.getAttribute('data-key');
    if (!id) return;

    const character = characters.find((character) => character.id === id);
    if (!character) return;

    const currentCharacter = {
      id: id,
      name: character.name,
      illustrator: character.illustrator,
    };
    setSelectedCharacter(currentCharacter);

    const currentScrollYPos = window.pageYOffset;
    toogleRootDOMFix(true);
    setScrollYPos(currentScrollYPos);
    toogleWrapperFix(true, currentScrollYPos);
  }, []);

  const unFixWrapper = () => {
    toogleRootDOMFix(false);
    toogleWrapperFix(false, scrollYPos);
  };

  useLayoutEffect(() => {
    const scripts = document.querySelectorAll('script');
    scripts.forEach((script) => {
      script.parentNode?.removeChild(script);
    });
  }, []);

  return (
    <>
      <div ref={fixationRef}>
        <VersionTabList
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
          setIsInitial={setIsInitial}
        />
        <div onClick={onClick}>
          <CharacterList
            characters={characters}
            selectedVersion={selectedVersion}
            isInitial={isInitial}
          />
        </div>
        {selectedCharacter && (
          <Modal
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
            unFixWrapper={unFixWrapper}
          />
        )}
      </div>
    </>
  );
};

export default ClientCharacterList;
