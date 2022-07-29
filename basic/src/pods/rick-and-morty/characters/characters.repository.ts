import { Character, Info } from "./characters.vm";
import { getCharactersCollectionApi } from "./api/characters.api";
import { mapCharactersCollectionToVM, mapInfoToVM } from "./characters.mappers";

export const getInfoSection = async (): Promise<Info> => {
  const { info } = await getCharactersCollectionApi();
  return mapInfoToVM(info);
};

export const getCharactersCollection = async (page: number): Promise<Character[]> => {
  const { results } = await getCharactersCollectionApi(page);
  return mapCharactersCollectionToVM(results);
};
