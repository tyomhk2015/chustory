import React, { useState } from 'react';

export interface ICharacter {
  id: string;
  name: string;
  version: number;
  episodes: IEpisode[];
}

export interface ICharacterAdd {
  id: string;
  name: string;
  version: number;
}

export interface IEpisode {
  characterId: string;
  title: string;
  subtitle: string;
  story: string;
}

export interface ICharacterList {
  characters: ICharacter[];
  version: number;
  versionName: string;
  // selectCharacter: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModal {
  isActive: boolean;

  getCharacter: () => ICharacter | undefined;
  unselectCharacter: () => void;
  toggleStoryBox: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface IEpisodeList {
  episodes: IEpisode[];
}

/**
 * A list of all Chunithm versions.
 */
const VERSIONS = [
  {
    name: 'SUN',
    number: 7
  },
  {
    name: 'NEW',
    number: 6
  },
  {
    name: 'PARADISE',
    number: 5
  },
  {
    name: 'CRYSTAL',
    number: 4
  },
  {
    name: 'AMAZON',
    number: 3
  },
  {
    name: 'STAR',
    number: 2
  },
  {
    name: 'AIR',
    number: 1
  },
  {
    name: '',
    number: 0
  },
];

/**
 * Make HTML and body tag scrollable/unscrollable.
 * @param doFix - A flag for fixing 'html' and 'body' tag.
 */
const toogleRootDOMsFix = (doFix: boolean) => {
  const rootDOMs = document.querySelectorAll('html, body');
  rootDOMs.forEach((DOM) => doFix ? DOM.classList.add('fixed') : DOM.removeAttribute('class'));
}

  /**
   * Fix the vertical position of the 'main' tag.
   * @param mainRef - Captured DOM element, 'main' tag.
   * @param fix - A flag for fixing the 'mainRef'.
   * @param yPos - The vertical position in number.
   */
   const togglefixMainDOM = (mainRef: React.MutableRefObject<null>,fix: boolean, yPos: number) => {
    if(!mainRef.current) return;
    const mainDOM = mainRef.current as HTMLElement;
    
    if(fix) {
      mainDOM.style.position = 'relative';
      mainDOM.style.top = -yPos + 'px';
    } else {
      mainDOM.style.removeProperty('position');
      mainDOM.style.removeProperty('top');
      window.scrollTo(0, yPos);
    }
  }

/**
 * Close or open the selected story box.
 * @param e <li> tag that holds the story information.
 */
const toggleStoryBox = (e: React.MouseEvent<HTMLLIElement>) => {
  const target = e.currentTarget;
  const flag = target.getAttribute('data-flag') as string;
  const isClosed = target.className.indexOf(flag) > 0;

  if(isClosed) {
    target.classList.remove(flag);
  } else {
    target.classList.add(flag)
  }
}

/**
 * A custom hook for main page and characters data.
 */
export const useCharacter = (characterData: ICharacter[], mainRef: React.MutableRefObject<null>) => {
  const characters = characterData;
  const [selectedCharacter, setSelectedCharacter] = useState<string>();
  const [scrollYPos, setScrollYPos] = useState(0);

  const selectCharacter = (e: React.MouseEvent<HTMLElement>) => {
    const characterID = e.currentTarget.getAttribute('data-key');
    const currentScrollYPos = window.pageYOffset;
    characterID && setSelectedCharacter(characterID);
    setScrollYPos(currentScrollYPos);
    toogleRootDOMsFix(true);
    togglefixMainDOM(mainRef, true, currentScrollYPos);
  };

  const getCharacter = () : ICharacter | undefined => {
    return characters.find((character) => character.id === selectedCharacter);
  }

  const unselectCharacter = () => {
    setSelectedCharacter('');
    toogleRootDOMsFix(false);
    togglefixMainDOM(mainRef, false, scrollYPos);
  }

  return {
    VERSIONS,
    characters,
    selectedCharacter,

    selectCharacter,
    unselectCharacter,
    getCharacter,
    toggleStoryBox,
  };
};