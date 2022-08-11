import { AppLayout } from "@/layout";
import { CharactersTableContainer } from "@/pods/rick-and-morty";
import React from "react";

export const CharactersTableScene: React.FC = () => (
  <AppLayout>
    <CharactersTableContainer />
  </AppLayout>
);
