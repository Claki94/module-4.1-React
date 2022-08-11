import React from "react";

import { useDebounce } from "@/core";

import { getCharactersCollection } from "../characters.repository";
import { CharacterSearch } from "./character-search.component";
import { CharactersTable } from "./characters-table.component";

export const CharactersTableContainer: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [characters, setCharacters] = React.useState([]);
  const [characterSearch, setCharacterSearch] = React.useState("");
  const debouncedSearchValue = useDebounce(characterSearch, 500);

  React.useEffect(() => {
    getCharacters();
  }, [page]);

  React.useEffect(() => {
    if (page === 0) {
      getCharacters();
    } else {
      setPage(0);
    }
  }, [debouncedSearchValue]);

  const getCharacters = (): void => {
    getCharactersCollection(page, debouncedSearchValue).then(([info, characters]) => {
      setCount(info.count);
      setCharacters(characters);
    });
  };

  return (
    <>
      <CharacterSearch characterSearch={characterSearch} setCharacterSearch={setCharacterSearch} />
      <CharactersTable characters={characters} page={page} setPage={setPage} count={count} />
    </>
  );
};
