import { createDefaultMember } from "../members.vm";
import { Member, MemberSummary } from "./members.api.model";

export const getMemberDetailsByLogin = async (login: string): Promise<Member> => {
  return fetch(`https://api.github.com/users/${login}`)
    .then((response) => {
      if (!response.ok) throw new Error(`Error -> HTTP status code ${response.status}`);
      return response.json();
    })
    .catch(() => Promise.resolve(createDefaultMember()));
};

export const getMembersCollection = async (name: string): Promise<MemberSummary[]> => {
  return fetch(`https://api.github.com/orgs/${name}/members`)
    .then((response) => {
      if (!response.ok) throw new Error(`Error -> HTTP status code ${response.status}`);
      return response.json();
    })
    .catch(() => Promise<MemberSummary[]>.resolve([]));
};
