export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: string;
  location: string;
  image: string;
  created: Date;
}

export interface Info {
  count: number;
  pages: number;
}

export enum Gender {
  male,
  female,
}
