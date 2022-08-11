import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core";
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

import classes from "../members.styles.scss";
import { MemberSummary } from "../members.vm";

interface Props {
  members: MemberSummary[];
}

export const MembersTable: React.FC<Props> = ({ members }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    setPage(0);
  }, [members]);

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
            {members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member) => (
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
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={members.length === 0 ? 0 : page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
