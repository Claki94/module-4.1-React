import { OrganisationScene } from "@/scenes";
import { RickAndMortyScene } from "@/scenes/rick-and-morty.scene";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";

export const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path={switchRoutes.organisation} element={<OrganisationScene />} />
      <Route path={switchRoutes.rickAndMorty} element={<RickAndMortyScene />} />
    </Routes>
  </BrowserRouter>
);
