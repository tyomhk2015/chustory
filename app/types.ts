import { Dispatch, SetStateAction } from 'react';

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

export interface EventsForServer {
  onClick: () => void;
}

export interface CharacterListProp {
  characters: ICharacter[];
}

export interface ClientCharacterListProps {
  characters: ICharacter[];
}

export interface ClientModalProps {
  selectedCharacter: ICharacter;
  setSelectedCharacter: Dispatch<SetStateAction<ICharacter | undefined>>;
  unFixWrapper: () => void
}