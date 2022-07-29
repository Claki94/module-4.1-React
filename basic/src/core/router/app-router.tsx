import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  OrganisationMemberDetailsScene,
  OrganisationMembersScene,
  CharactersScene,
} from "@/scenes";
import { OrganisationMembersProvider } from "@/pods/organisation-members/organisation-members.provider";

export const AppRouter = () => (
  <BrowserRouter basename="/">
    <OrganisationMembersProvider>
      <Routes>
        <Route path={switchRoutes.organisationMembers} element={<OrganisationMembersScene />} />
        <Route
          path={switchRoutes.organisationMemberDetails}
          element={<OrganisationMemberDetailsScene />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.organisationMembers} />}
        />
        <Route path={switchRoutes.rickAndMorty} element={<CharactersScene />} />
      </Routes>
    </OrganisationMembersProvider>
  </BrowserRouter>
);
