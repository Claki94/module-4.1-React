import React from "react";

interface OrganisationMembersContext {
  organisationName: string;
  setOrganisationName: (value: string) => void;
}

export const OrganisationMembersContext = React.createContext<OrganisationMembersContext>({
  organisationName: "",
  setOrganisationName: () => {},
});

export const OrganisationMembersProvider = ({ children }) => {
  const [organisationName, setOrganisationName] = React.useState("Lemoncode");

  return (
    <OrganisationMembersContext.Provider value={{ organisationName, setOrganisationName }}>
      {children}
    </OrganisationMembersContext.Provider>
  );
};
