import { getOrganisationMembersCollection } from "./api/organisation-members.api";
import { mapOrganisationMembersCollectionToVM } from "./organisation-members.mappers";
import { OrganisationMember } from "./organisation-members.vm";

export const getOrganisationMembersVMCollection = (
  name: string
): Promise<OrganisationMember[]> =>
  getOrganisationMembersCollection(name).then(
    mapOrganisationMembersCollectionToVM
  );
