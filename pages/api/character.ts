import prismaClient from '../../lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IEpisode } from '../../hook/useCharacter';

interface Data {
  [key: string]: string
}

export default async function characterHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(400);
    return;
  }

  const {character, episodes} = req.body;

  // Check if the character id exist in the DB
  // If character ID already exist do not do anything.
  const loadedCharacter = await prismaClient.character.findUnique({
    where: {
      id: character.id
    }
  });

  if (loadedCharacter === null) {
    const createdCharacter = await prismaClient.character.create({
      data: {
        id: character.id,
        name: character.name,
        version: character.version,
      }
    });
  }

  // Check if the episode of the character with current order exist.
  // If exists, updated the story.
  // else register new one.
  const inputEpisodes: IEpisode[] = [];
  for (const [_, value] of Object.entries(episodes)) {
    inputEpisodes.push(value as IEpisode);
  }

  inputEpisodes.forEach(async (episode, index) => {
    const createdEpisode = await prismaClient.episode.upsert({
      where: {
        identifier: character.id + episode.order
      },
      update: {
        title: episode.title,
        subtitle: episode.subtitle,
        story: episode.story,
        order: +episode.order,
      },
      create: {
        title: episode.title,
        subtitle: episode.subtitle,
        story: episode.story,
        order: +episode.order,
        identifier: character.id + '/' + episode.order,
        character: {
          connect: {
            id: character.id
          }
        }
      }
    });
  });

  res.status(200).json({name: 'characterHandler'});
}
