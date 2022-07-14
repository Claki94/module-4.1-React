/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Container } from "@mui/system";
import React from "react";
import { HeaderLayout } from "./header/header.layout";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <HeaderLayout />
    <Container>{children}</Container>
  </React.Fragment>
);
