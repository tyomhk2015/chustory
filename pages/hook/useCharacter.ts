import { MouseEventHandler, useState } from 'react';

interface ICharacter {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
  version: string;
  episodes: Episode[];
}

interface Episode {
  title: string;
  subtitle: string;
  story: string;
  order: number;
}

export interface ICharacterList {
  characters: ICharacter[];
  version: string;
  selectCharacter: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModal {
  getCharacter: () => ICharacter | undefined;
  unselectCharacter: () => void;
  isActive: boolean;
}

/**
 * A list of all Chunithm versions.
 */
const VERSIONS = ['NEW', 'PARADISE', 'CRYSTAL', 'AMAZON', 'STAR', 'AIR', ''];

/**
 * A custom hook for main page and characters data.
 */
export const useCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>();

  const selectCharacter = (e: React.MouseEvent<HTMLElement>) => {
    const characterID = e.currentTarget.getAttribute('data-key');
    characterID && setSelectedCharacter(characterID);
  };

  const getCharacter = () : ICharacter | undefined => {
    return characters.find((character) => character.id === selectedCharacter);
  }

  const unselectCharacter = () => {
    setSelectedCharacter('');
  }

  return {
    VERSIONS,
    characters,
    selectedCharacter,

    selectCharacter,
    unselectCharacter,
    getCharacter,
  };
};

/**
 * Sample character data
 */
const thumbnailBaseURL =
  'https://chunithm.sega.jp/storage/chara/chunithm-new/thumbnail/';
const illustrationBaseURL =
  'https://chunithm.sega.jp/storage/chara/chunithm-new/illustration//';
const characters: ICharacter[] = [
  // NEW
  {
    id: 'n_c_2',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_c_2.png`,
    image: `${illustrationBaseURL}n_c_2.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_c_1',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_c_1.png`,
    image: `${illustrationBaseURL}n_c_1.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_6_4',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_6_4.png`,
    image: `${illustrationBaseURL}n_6_4.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_6_3',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_6_3.png`,
    image: `${illustrationBaseURL}n_6_3.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_6_2',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_6_2.png`,
    image: `${illustrationBaseURL}n_6_2.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_c_1',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_6_1.png`,
    image: `${illustrationBaseURL}n_6_1.png`,
    version: 'NEW',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                 '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                 그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                 '다른 사람'은 내가 아닌 자.
                 동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                 '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                 ...(생략)',`,
        order: 1,
      },
    ],
  },
  // PARADISE
  {
    id: 'n_5_4',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_5_4.png`,
    image: `${illustrationBaseURL}n_5_4.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_5_3',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_5_3.png`,
    image: `${illustrationBaseURL}n_5_3.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_5_2',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_5_2.png`,
    image: `${illustrationBaseURL}n_5_2.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_5_1',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_5_1.png`,
    image: `${illustrationBaseURL}n_5_1.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_4_5',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_4_5.png`,
    image: `${illustrationBaseURL}n_4_5.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
  {
    id: 'n_4_4',
    name: '각성자 바시안',
    thumbnail: `${thumbnailBaseURL}n_4_4.png`,
    image: `${illustrationBaseURL}n_4_4.png`,
    version: 'PARADISE',
    episodes: [
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 0,
      },
      {
        title: `신의 거짓말과 깨닳은 자.`,
        subtitle: `"나는 신이 의도한 미래에 미쳤있다. 하지만 정말로 미쳐있는 것은 어느쪽인가?"`,
        story: `처음 알아 차린 것은 '나'였다.
                '나'란 의식과 육체가 다른 사람과 달리하는 존재다.
                그렇다면 '다른 사람'이란? '다른 사람'은 내가 아닌 자.
                '다른 사람'은 내가 아닌 자.
                동료란 목적을 위해 함께 시간을 보내는 자 또는 그렇지 않은 사람이다.
                '목적'은 죽은 세계인 지구를 재생시키는 것이다.
                ...(생략)',`,
        order: 1,
      },
    ],
  },
];
