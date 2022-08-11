import React from "react";

import { Container } from "@mui/system";

import { HeaderLayout } from "./header/header.layout";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <>
    <HeaderLayout />
    <Container sx={{ padding: "26px 0px" }}>{children}</Container>
  </>
);
