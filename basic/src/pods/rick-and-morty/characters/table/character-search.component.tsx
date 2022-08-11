import React from "react";

import { Input, Typography } from "@mui/material";

import classes from "../characters.styles.scss";

interface Props {
  characterSearch: string;
  setCharacterSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const CharacterSearch: React.FC<Props> = ({ characterSearch, setCharacterSearch }) => {
  return (
    <div className={classes.searchInputContainer}>
      <Typography variant="h6">Search Rick and Morty characters: </Typography>
      <div>
        <Input value={characterSearch} onChange={(e) => setCharacterSearch(e.target.value)} />
      </div>
    </div>
  );
};
