interface ICharacter {
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

/**
 * Sample character data
 */
const thumbnailBaseURL = 'https://chunithm.sega.jp/storage/chara/chunithm-new/thumbnail/';
const illustrationBaseURL = 'https://chunithm.sega.jp/storage/chara/chunithm-new/illustration//';
const characters : ICharacter[] = [
  {
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
        order: 0
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
        order: 1
      },
    ]
  },
  {
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
        order: 0
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
        order: 1
      },
    ]
  },
]

const temp = () => {
  console.log('Called temp from useCharacter hook.');
}

/**
 * A custom hook for main page and characters data.
 */
export const useCharacter = () => {

  return {
    temp,
    characters,
  }
}