import { OrganisationMember } from "./organisation-members.api.model";

export const getOrganisationMembersCollection = (
  name: string
): Promise<OrganisationMember[]> => {
  return fetch(`https://api.github.com/orgs/${name}/members`)
    .then((response) => {
        if (!response.ok) throw new Error(`Error -> HTTP status code ${response.status}`);
        return response.json();
    })
    .catch(() => Promise<OrganisationMember[]>.resolve([]));
};
