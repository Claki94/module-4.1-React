import React from "react";

import { MembersSearch } from "./members-search.component";
import { MembersTable } from "./members-table.component";
import { getMembersVMCollection } from "../members.repository";
import { MemberSummary } from "../members.vm";
import { MembersContext } from "../members.provider";

export const MembersTableContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberSummary[]>([]);
  const { organisationName, setOrganisationName } = React.useContext(MembersContext);

  React.useEffect(() => {
    getMembersVMCollection(organisationName).then(setMembers);
  }, [organisationName]);

  return (
    <>
      <MembersSearch
        organisationName={organisationName}
        setOrganisationName={setOrganisationName}
      />
      <MembersTable members={members} />
    </>
  );
};
