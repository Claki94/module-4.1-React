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
  TablePagination,
  TableRow,
} from "@mui/material";

interface Props {
  organisationMembers: OrganisationMember[];
}

export const OrganisationMembersTable: React.FC<Props> = ({ organisationMembers }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    setPage(0);
  }, [organisationMembers]);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow className={classes.membersThRow}>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organisationMembers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((member) => (
                <TableRow key={member.id}>
                  <TableCell className={classes.membersTdImg}>
                    <img src={member.avatarUrl} />
                  </TableCell>
                  <TableCell>
                    <span>{member.id}</span>
                  </TableCell>
                  <TableCell>
                    <Link to={routes.organisationMemberDetails(member.login)}>{member.login}</Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={organisationMembers.length}
        rowsPerPage={rowsPerPage}
        page={organisationMembers.length === 0 ? 0 : page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
