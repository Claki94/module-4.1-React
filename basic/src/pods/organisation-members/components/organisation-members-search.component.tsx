import { Button, Input, Typography } from "@mui/material";
import React from "react";
import classes from "../organisation-members.styles.scss";

interface Props {
  setOrganisationName: React.Dispatch<React.SetStateAction<string>>;
  organisationName: string;
}

export const OrganisationMembersSearch: React.FC<Props> = ({
  setOrganisationName,
  organisationName,
}) => {
  const [searchValue, setSearchValue] = React.useState(organisationName);

  return (
    <div className={classes.membersSearch}>
      <Typography variant="h6" className={classes.membersSearchTitle}>
        Search Organisation members
      </Typography>
      <div className={classes.membersSearchContainer}>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setOrganisationName(searchValue)}
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
