import { Button, Input, Typography } from "@mui/material";
import React from "react";
import classes from "../organisation-members.styles.scss";

interface Props {
  setOrganisationName: React.Dispatch<React.SetStateAction<string>>;
  defaultValue: string;
}

export const OrganisationMembersSearch: React.FC<Props> = ({
  setOrganisationName,
  defaultValue,
}) => {
  const [searchValue, setSearchValue] = React.useState(defaultValue);

  return (
    <div className={classes.membersComponent}>
      <Typography variant="h6" className={classes.membersSearchTitle}>
        Search Organisation members
      </Typography>
      <div className={classes.membersSearchContainer}>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          variant="contained"
          className={classes.searchButton}
          onClick={() => setOrganisationName(searchValue)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
