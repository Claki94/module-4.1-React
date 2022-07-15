import { createDefaultUserDetails } from "../organisation-member-details.vm";
import { UserDetails } from "./organisation-member-details.api.model";

export const getUserDetailsByLogin = (login: string): Promise<UserDetails> => {
  return fetch(`https://api.github.com/users/${login}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error -> HTTP status code ${response.status}`);
      return response.json();
    })
    .catch(() => Promise.resolve(createDefaultUserDetails()));
};
