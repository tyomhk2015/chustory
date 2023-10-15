import { Dispatch, MouseEvent, SetStateAction } from 'react';

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

export interface IEventsForServer {
  onClick: () => void;
}

export interface ICharacterListProp {
  characters: ICharacter[];
  selectedVersion: number;
  isInitial: boolean;
}

export interface IClientCharacterListProps {
  characters: ICharacter[];
}

export interface IClientModalProps {
  selectedCharacter: ICharacter;
  setSelectedCharacter: Dispatch<SetStateAction<ICharacter | undefined>>;
  unFixWrapper: () => void;
}

export interface ICharacterThumbnailProps {
  character: ICharacter;
  src: string;
  loading: 'eager' | 'lazy';
  isInitial: boolean;
}

export interface IVersion {
  name: string;
  number: number;
}

export interface IVersionTabListProps {
  selectedVersion: number;
  setSelectedVersion: Dispatch<React.SetStateAction<number>>;
  setIsInitial: Dispatch<React.SetStateAction<boolean>>;
}

export interface IVersionTabProps {
  versionId: number;
  versionName: string;
  isSelected: boolean;
  onSelectVersion: (event: MouseEvent<HTMLLabelElement>) => void;
}
