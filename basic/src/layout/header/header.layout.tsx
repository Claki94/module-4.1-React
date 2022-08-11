import React from "react";
import { NavLink } from "react-router-dom";

import { routes } from "@/core";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

import classes from "./header.layout.styles.scss";

export const HeaderLayout: React.FC = () => {
  const getNavLinkClasses = (isActive: boolean) =>
    [classes.navLink, isActive ? classes.activeNavLink : null].filter(Boolean).join(" ");

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <AssignmentIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Basic exercise
        </Typography>
        <Stack direction="row" alignSelf="stretch">
          <NavLink
            className={({ isActive }) => getNavLinkClasses(isActive)}
            to={routes.organisationMembers}
          >
            Organisation Members
          </NavLink>
          <NavLink
            className={({ isActive }) => getNavLinkClasses(isActive)}
            to={routes.rickAndMorty}
          >
            Rick and Morty
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
