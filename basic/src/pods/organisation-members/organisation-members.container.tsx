import React from "react";
import { OrganisationMembersSearch } from "./components/organisation-members-search.component";
import { OrganisationMembersTable } from "./components/organisation-members-table.component";
import { getOrganisationMembersVMCollection } from "./organisation-members.repository";
import { OrganisationMember } from "./organisation-members.vm";

export const OrganisationMembersContainer: React.FC = () => {
  const defaultOrganisation: string = "Lemoncode";
  const [organisationMembers, setOrganisationMembers] = React.useState<
    OrganisationMember[]
  >([]);
  const [organisationName, setOrganisationName] =
    React.useState<string>(defaultOrganisation);

  React.useEffect(() => {
    getOrganisationMembersVMCollection(organisationName).then(
      setOrganisationMembers
    );
  }, [organisationName]);

  return (
    <>
      <OrganisationMembersSearch
        setOrganisationName={setOrganisationName}
        defaultValue={defaultOrganisation}
      />
      <OrganisationMembersTable organisationMembers={organisationMembers} />
    </>
  );
};
