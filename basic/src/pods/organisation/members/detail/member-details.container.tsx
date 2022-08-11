import React from "react";

import { getMemberVMByLogin } from "../members.repository";
import { createDefaultMember, Member } from "../members.vm";
import { MemberDetails } from "./member-details.component";

interface Props {
  login: string;
}

export const MemberDetailsContainer: React.FC<Props> = ({ login }) => {
  const [member, setMember] = React.useState<Member>(createDefaultMember());

  React.useEffect(() => {
    getMemberVMByLogin(login).then(setMember);
  }, []);

  return <MemberDetails member={member}></MemberDetails>;
};
