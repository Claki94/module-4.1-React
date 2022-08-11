import React from "react";

interface MembersContext {
  organisationName: string;
  setOrganisationName: (value: string) => void;
}

export const MembersContext = React.createContext<MembersContext>({
  organisationName: "",
  setOrganisationName: () => {},
});

export const MembersProvider = ({ children }) => {
  const [organisationName, setOrganisationName] = React.useState("Lemoncode");

  return (
    <MembersContext.Provider value={{ organisationName, setOrganisationName }}>
      {children}
    </MembersContext.Provider>
  );
};
