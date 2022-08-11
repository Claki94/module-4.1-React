import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  organisationMembers: string;
  organisationMemberDetails: string;
  rickAndMorty: string;
  rickAndMortyCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  organisationMembers: "/organisation-members",
  organisationMemberDetails: "/organisation-members/:login",
  rickAndMorty: "/rick-and-morty/characters",
  rickAndMortyCharacter: "/rick-and-morty/characters/:id",
};

interface Routes extends Omit<SwitchRoutes, "organisationMemberDetails" | "rickAndMortyCharacter"> {
  organisationMemberDetails: (login: string) => string;
  rickAndMortyCharacter: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  organisationMemberDetails: (login: string) =>
    generatePath(switchRoutes.organisationMemberDetails, { login }),
  rickAndMortyCharacter: (id: number) =>
    generatePath(switchRoutes.rickAndMortyCharacter, { id: id.toString() }),
};
