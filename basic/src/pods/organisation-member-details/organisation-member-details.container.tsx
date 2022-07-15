import React from "react";
import { OrganisationMemberDetails } from "./organisation-member-details.component";
import { getUserDetailsVMByLogin } from "./organisation-member-details.repository";
import {
  createDefaultUserDetails,
  UserDetails,
} from "./organisation-member-details.vm";

interface Props {
  login: string;
}

export const OrganisationMemberDetailsContainer: React.FC<Props> = ({
  login,
}) => {
  const [userDetails, setUserDetails] = React.useState<UserDetails>(
    createDefaultUserDetails()
  );

  React.useEffect(() => {
    getUserDetailsVMByLogin(login).then(setUserDetails);
  }, []);

  return (
    <OrganisationMemberDetails
      userDetails={userDetails}
    ></OrganisationMemberDetails>
  );
};
