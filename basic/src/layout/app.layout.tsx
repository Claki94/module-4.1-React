import { Container } from "@mui/system";
import React from "react";
import { HeaderLayout } from "./header/header.layout";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <HeaderLayout />
    <Container sx={{ padding: "26px 0px" }}>{children}</Container>
  </React.Fragment>
);
