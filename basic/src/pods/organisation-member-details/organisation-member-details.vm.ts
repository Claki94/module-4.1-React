export interface UserDetails {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
  publicRepos: number;
  followers: number;
  createdAt: Date;
}

export const createDefaultUserDetails = (): UserDetails => ({
  id: null,
  login: "",
  name: "",
  company: "",
  bio: "",
  publicRepos: null,
  followers: null,
  createdAt: null,
});
