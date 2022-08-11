import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core";
import { Button, Card, CardContent, Typography } from "@mui/material";

import classes from "../members.styles.scss";
import { Member } from "../members.vm";

interface Props {
  member: Member;
}

export const MemberDetails: React.FC<Props> = ({ member }) => {
  return (
    <>
      {!member ? <Typography variant="h5">User not found</Typography> : ""}
      <Card className={classes.memberCard}>
        <CardContent>
          <Typography variant="h6">{member.login}</Typography>
          <Typography variant="body1">Id:&nbsp;{member.id}</Typography>
          <Typography variant="body1">Name: {member.name}</Typography>
          <Typography variant="body1">Company: {member.company}</Typography>
          <Typography variant="body1">Bio: {member.bio}</Typography>
          <Typography variant="body1">Followers: {member.followers}</Typography>
          <Typography variant="body1">Public repositories: {member.publicRepos}</Typography>
          <Typography variant="body1">Created at: {member.createdAt?.toLocaleString()}</Typography>
        </CardContent>
      </Card>
      <Button>
        <Link to={routes.organisationMembers}>Go back</Link>
      </Button>
    </>
  );
};
