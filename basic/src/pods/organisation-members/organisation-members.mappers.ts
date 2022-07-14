import * as am from "./api/organisation-members.api.model";
import * as vm from "./organisation-members.vm";

export const mapOrganisationMembersCollectionToVM = (
  data: am.OrganisationMember[]
): vm.OrganisationMember[] => data.map(mapOrganisationMemberToVM);

const mapOrganisationMemberToVM = (
  data: am.OrganisationMember
): vm.OrganisationMember => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
