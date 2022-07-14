import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  OrganisationDetailScene,
  OrganisationMembersScene,
  RickAndMortyScene,
} from "@/scenes";

export const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route
        path={switchRoutes.organisationMembers}
        element={<OrganisationMembersScene />}
      />
      <Route
        path={switchRoutes.organisationMemberDetails}
        element={<OrganisationDetailScene />}
      />
      <Route path={switchRoutes.rickAndMorty} element={<RickAndMortyScene />} />
      <Route
        path={switchRoutes.root}
        element={<Navigate to={switchRoutes.organisationMembers} />}
      />
    </Routes>
  </BrowserRouter>
);
