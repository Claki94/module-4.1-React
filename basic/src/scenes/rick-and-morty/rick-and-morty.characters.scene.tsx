import { AppLayout } from "@/layout";
import { CharactersContainer } from "@/pods/rick-and-morty";
import React from "react";

export const CharactersScene: React.FC = () => (
  <AppLayout>
    <CharactersContainer />
  </AppLayout>
);
