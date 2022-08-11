import React from "react";

import { getCharacterById } from "../characters.repository";
import { CharacterDetail } from "./character-detail.component";

interface Props {
  characterId: string;
}

export const CharacterDetailContainer: React.FC<Props> = ({ characterId }) => {
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    getCharacterById(characterId).then(setCharacter);
  }, []);

  return <>{character ? <CharacterDetail character={character} /> : null}</>;
};
