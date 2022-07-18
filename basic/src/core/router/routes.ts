import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  organisationMembers: string;
  organisationMemberDetails: string;
  rickAndMorty: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  organisationMembers: "/organisation-members",
  organisationMemberDetails: "/organisation-members/:login",
  rickAndMorty: "/rick-and-morty",
};

interface Routes extends Omit<SwitchRoutes, "organisationMemberDetails"> {
  organisationMemberDetails: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  organisationMemberDetails: (login: string) =>
    generatePath(switchRoutes.organisationMemberDetails, { login }),
};
