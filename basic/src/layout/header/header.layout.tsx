/** @jsx jsx */
import { routes } from "@/core/router/routes";
import { jsx } from "@emotion/react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./header.layout.styles";

export const HeaderLayout: React.FC = () => (
  <AppBar position="static" css={styles.appBar}>
    <Toolbar css={styles.toolbar}>
      <AssignmentIcon />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Basic exercise
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button>
          <Link to={routes.organisation}>Organisations</Link>
        </Button>
        <Button>
          <Link to={routes.rickAndMorty}>Rick and Morty</Link>
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
);
