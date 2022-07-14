import { routes } from "@/core";
import React from "react";
import { Link } from "react-router-dom";
import { OrganisationMember } from "../organisation-members.vm";
import classes from "../organisation-members.styles.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Props {
  organisationMembers: OrganisationMember[];
}

export const OrganisationMembersTable: React.FC<Props> = ({
  organisationMembers,
}) => (
  <TableContainer component={Paper} className={classes.membersComponent}>
    <Table sx={{ minWidth: 700 }}>
      <TableHead>
        <TableRow className={classes.membersThRow}>
          <TableCell>Avatar</TableCell>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {organisationMembers.map((member) => (
          <TableRow key={member.id}>
            <TableCell className={classes.membersTdImg}>
              <img src={member.avatarUrl} />
            </TableCell>
            <TableCell>
              <span>{member.id}</span>
            </TableCell>
            <TableCell>
              <Link to={routes.organisationMemberDetails(member.login)}>
                {member.login}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
