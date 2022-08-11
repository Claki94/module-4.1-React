import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MembersProvider } from "@/pods/organisation";
import {
  CharacterDetailScene,
  CharactersTableScene,
  MemberDetailsScene,
  MembersTableScene,
} from "@/scenes";

import { switchRoutes } from "./routes";

export const AppRouter = () => (
  <BrowserRouter basename="/">
    <MembersProvider>
      <Routes>
        <Route path={switchRoutes.organisationMembers} element={<MembersTableScene />} />
        <Route path={switchRoutes.organisationMemberDetails} element={<MemberDetailsScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.organisationMembers} />}
        />
        <Route path={switchRoutes.rickAndMorty} element={<CharactersTableScene />} />
        <Route path={switchRoutes.rickAndMortyCharacter} element={<CharacterDetailScene />} />
      </Routes>
    </MembersProvider>
  </BrowserRouter>
);
