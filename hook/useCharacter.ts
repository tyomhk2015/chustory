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
  title: string;
  subtitle: string;
  story: string;
  order: number;
}

export interface ICharacterList {
  characters: ICharacter[];
  version: number;
  versionName: string;
  selectCharacter: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModal {
  isActive: boolean;

  getCharacter: () => ICharacter | undefined;
  unselectCharacter: () => void;
  toggleStoryBox: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface IEpisodeList {
  episodes: IEpisode[];
  toggleStoryBox: (e: React.MouseEvent<HTMLLIElement>) => void;
}

/**
 * A list of all Chunithm versions.
 */
const VERSIONS = ['', 'AIR', 'STAR', 'AMAZON', 'CRYSTAL', 'PARADISE', 'NEW'];

/**
 * Make HTML and body tag scrollable/unscrollable.
 * @param doFix 
 */
const toogleRootDOMsFix = (doFix: boolean) => {
  const rootDOMs = document.querySelectorAll('html, body');
  rootDOMs.forEach((DOM) => doFix ? DOM.classList.add('fixed') : DOM.removeAttribute('class'));
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
export const useCharacter = (characterData: ICharacter[]) => {
  const characters = characterData;
  const [selectedCharacter, setSelectedCharacter] = useState<string>();

  const selectCharacter = (e: React.MouseEvent<HTMLElement>) => {
    const characterID = e.currentTarget.getAttribute('data-key');
    characterID && setSelectedCharacter(characterID);
    toogleRootDOMsFix(true);
  };

  const getCharacter = () : ICharacter | undefined => {
    return characters.find((character) => character.id === selectedCharacter);
  }

  const unselectCharacter = () => {
    setSelectedCharacter('');
    toogleRootDOMsFix(false);
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