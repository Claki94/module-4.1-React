import { CharacterAPI } from "./characters.api.model";

export const getCharactersCollectionApi = async (page: number = null): Promise<CharacterAPI> => {
  const apiUrl =
    page !== null
      ? `https://rickandmortyapi.com/api/character?page=${page + 1}`
      : "https://rickandmortyapi.com/api/character";
  return fetch(apiUrl).then((response) => response.json());
};
