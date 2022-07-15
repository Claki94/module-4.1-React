import { UserDetails } from "./organisation-member-details.vm";
import { getUserDetailsByLogin } from "./api/organisation-member-details.api";
import { mapUserDetailstoVM } from "./organisation-member-details.mappers";

export const getUserDetailsVMByLogin = (
  login: string
): Promise<UserDetails> => {
  return getUserDetailsByLogin(login).then(mapUserDetailstoVM);
};
