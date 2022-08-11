import * as am from "./api/members.api.model";
import * as vm from "./members.vm";

export const mapMembersSummaryCollectionToVM = (data: am.MemberSummary[]): vm.MemberSummary[] =>
  data.map(mapMemberSummaryToVM);

const mapMemberSummaryToVM = (data: am.MemberSummary): vm.MemberSummary => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});

export const mapMemberToVM = (member: am.Member): vm.Member => {
  const {
    id,
    login,
    name,
    bio,
    company,
    public_repos: publicRepos,
    created_at: createdAtString,
    followers,
  } = member;

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
