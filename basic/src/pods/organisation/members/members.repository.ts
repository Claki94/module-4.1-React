import { getMemberDetailsByLogin, getMembersCollection } from "./api/members.api";
import { mapMembersSummaryCollectionToVM, mapMemberToVM } from "./members.mappers";
import { Member, MemberSummary } from "./members.vm";

export const getMemberVMByLogin = (login: string): Promise<Member> => {
  return getMemberDetailsByLogin(login).then(mapMemberToVM);
};

export const getMembersVMCollection = (name: string): Promise<MemberSummary[]> => {
  return getMembersCollection(name).then(mapMembersSummaryCollectionToVM);
};
