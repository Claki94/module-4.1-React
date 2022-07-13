interface SwitchRoutes {
  organisation: string;
  rickAndMorty: string;
}

export const switchRoutes: SwitchRoutes = {
  organisation: "/",
  rickAndMorty: "/rick-and-morty",
};

interface Routes extends SwitchRoutes {}

export const routes: Routes = {
  ...switchRoutes,
};
