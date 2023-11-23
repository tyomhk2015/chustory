import { Dispatch, MouseEvent } from 'react';

export interface ICharacter {
  id: string;
  name: string;
  illustrator: string | null;
  version: number;
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

export interface SelectedCharacter {
  id: string;
  name: string;
  illustrator: string | null;
}

export interface IModal {
  isActive: boolean;
  getCharacter: () => ICharacter | undefined;
  unselectCharacter: () => void;
  toggleStoryBox: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface IModalImage {
  selectedCharacterName: string;
  normalPath: string;
  transformPath: string;
  isTransform: boolean;
  isImageReady: boolean;
  showImage: () => void;
}

export interface IEpisodeList {
  episodes: IEpisode[];
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
  selectedCharacter: SelectedCharacter;
  setSelectedCharacter: Dispatch<
    React.SetStateAction<SelectedCharacter | undefined>
  >;
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

export interface IContext {
  params: {
    id: string;
  };
}

export interface IHeaders {
  [key: string]: string;
}

export interface ILanguage {
  isKr: boolean;
}

export interface ITransformResponse {
  status: number;
  ok: boolean;
  images?: number;
}
