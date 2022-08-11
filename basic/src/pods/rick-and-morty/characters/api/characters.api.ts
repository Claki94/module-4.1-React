import { Character, CharacterAPI, createDefaultCharacter } from "./characters.api.model";

const characterApiUrl: string = "https://rickandmortyapi.com/api/character";

export const getCharactersCollectionApi = async (
  page: number,
  name: string
): Promise<CharacterAPI> => {
  let url = `${characterApiUrl}?page=${page + 1}`;

  if (name) {
    url += `&name=${name}`;
  }

  return fetch(url).then((response) => response.json());
};

export const getCharacterByIdApi = async (id: string): Promise<Character> => {
  const url = `${characterApiUrl}/${id}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Error -> HTTP status code ${response.status}`);
      return response.json();
    })
    .catch(() => Promise<Character>.resolve(createDefaultCharacter()));
};
