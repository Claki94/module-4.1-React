import * as am from "./api/organisation-member-details.api.model";
import * as vm from "./organisation-member-details.vm";

export const mapUserDetailstoVM = (
  userDetails: am.UserDetails
): vm.UserDetails => {
  const {
    id,
    login,
    name,
    bio,
    company,
    public_repos: publicRepos,
    created_at: createdAtString,
    followers,
  } = userDetails;

  const createdAt = new Date(createdAtString);

  return {
    id,
    login,
    name,
    bio,
    company,
    publicRepos,
    createdAt,
    followers,
  };
};
