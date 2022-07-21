import React from "react";
import { OrganisationMembersSearch } from "./components/organisation-members-search.component";
import { OrganisationMembersTable } from "./components/organisation-members-table.component";
import { OrganisationMembersContext } from "./organisation-members.provider";
import { getOrganisationMembersVMCollection } from "./organisation-members.repository";
import { OrganisationMember } from "./organisation-members.vm";

export const OrganisationMembersContainer: React.FC = () => {
  const [organisationMembers, setOrganisationMembers] = React.useState<OrganisationMember[]>([]);
  const { organisationName, setOrganisationName } = React.useContext(OrganisationMembersContext);

  React.useEffect(() => {
    getOrganisationMembersVMCollection(organisationName).then(setOrganisationMembers);
  }, [organisationName]);

  return (
    <>
      <OrganisationMembersSearch
        organisationName={organisationName}
        setOrganisationName={setOrganisationName}
      />
      <OrganisationMembersTable organisationMembers={organisationMembers} />
    </>
  );
};
