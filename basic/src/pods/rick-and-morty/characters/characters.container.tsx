import React from "react";
import { CharactersTable } from "./characters-table.component";
import { getCharactersCollection, getInfoSection } from "./characters.repository";

export const CharactersContainer: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    getInfoSection().then(({ count }) => setCount(count));
  }, []);

  React.useEffect(() => {
    getCharactersCollection(page).then(setCharacters);
  }, [page]);

  return <CharactersTable characters={characters} page={page} setPage={setPage} count={count} />;
};
