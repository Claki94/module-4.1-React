import { getCharacterByIdApi, getCharactersCollectionApi } from "./api/characters.api";
import { mapCharactersCollectionToVM, mapCharacterToVM, mapInfoToVM } from "./characters.mappers";
import { Character, Info } from "./characters.vm";

type Characters = [Info, Character[]];

export const getCharactersCollection = async (page: number, name: string): Promise<Characters> => {
  const { info, results } = await getCharactersCollectionApi(page, name);
  return results ? [info, mapCharactersCollectionToVM(results)] : [{ count: 0, pages: 0 }, []];
};

export const getCharacterById = async (id: string): Promise<Character> => {
  const character = await getCharacterByIdApi(id);
  return mapCharacterToVM(character);
};
