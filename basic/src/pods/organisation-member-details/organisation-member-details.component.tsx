import { routes } from "@/core";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "./organisation-member-details.vm";
import classes from "./organisation-member-details.styles.scss";

interface Props {
  userDetails: UserDetails;
}

export const OrganisationMemberDetails: React.FC<Props> = ({ userDetails }) => {
  return (
    <>
      {!userDetails ? <Typography variant="h5">User not found</Typography> : ""}
      <Card className={classes.memberCard}>
        <CardContent>
          <Typography variant="h6">{userDetails.login}</Typography>
          <Typography variant="body1">Id:&nbsp;{userDetails.id}</Typography>
          <Typography variant="body1">Name: {userDetails.name}</Typography>
          <Typography variant="body1">
            Company: {userDetails.company}
          </Typography>
          <Typography variant="body1">Bio: {userDetails.bio}</Typography>
          <Typography variant="body1">
            Followers: {userDetails.followers}
          </Typography>
          <Typography variant="body1">
            Public repositories: {userDetails.publicRepos}
          </Typography>
          <Typography variant="body1">
            Created at: {userDetails.createdAt?.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
      <Button>
        <Link to={routes.organisationMembers}>Go back</Link>
      </Button>
    </>
  );
};
