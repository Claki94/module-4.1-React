import { AppLayout } from "@/layout";
import { CharacterDetailContainer } from "@/pods/rick-and-morty";
import React from "react";
import { useParams } from "react-router-dom";

export const CharacterDetailScene: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout>
      <CharacterDetailContainer characterId={id} />
    </AppLayout>
  );
};
