export interface Member {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
  publicRepos: number;
  followers: number;
  createdAt: Date;
}

export interface MemberSummary {
  id: number;
  login: string;
  avatarUrl: string;
}

export const createDefaultMember = (): Member => ({
  id: null,
  login: "",
  name: "",
  company: "",
  bio: "",
  publicRepos: null,
  followers: null,
  createdAt: null,
});
