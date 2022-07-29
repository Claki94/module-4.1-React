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
import React from "react";
import { Character } from "./characters.vm";
import classes from "./characters.styles.scss";

interface Props {
  characters: Character[];
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CharactersTable: React.FC<Props> = ({ characters, count, page, setPage }) => {
  const rowsPerPage: number = 20;

  const handleOnPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => {
    setPage(page);
  };

  const tableColumns = React.useMemo(
    () => (
      <TableHead>
        <TableRow className={classes.charactersThRow}>
          <TableCell>Avatar</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Details url</TableCell>
        </TableRow>
      </TableHead>
    ),
    []
  );

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          {tableColumns}
          <TableBody>
            {characters.map((character) => (
              <TableRow key={character.id}>
                <TableCell className={classes.charactersTdImg}>
                  <img src={character.image} />
                </TableCell>
                <TableCell>
                  <span>{character.name}</span>
                </TableCell>
                <TableCell>
                  <span>{character.location}</span>
                </TableCell>
                <TableCell>
                  <span>Enlace a detalles</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[rowsPerPage]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleOnPageChange}
      />
    </Paper>
  );
};
