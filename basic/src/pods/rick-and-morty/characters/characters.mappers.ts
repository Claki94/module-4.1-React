import * as am from "./api/characters.api.model";
import * as vm from "./characters.vm";

export const mapInfoToVM = (info: am.Info): vm.Info => {
  const { count, pages } = info;

  return {
    count,
    pages,
  };
};

export const mapCharactersCollectionToVM = (characters: am.Character[]): vm.Character[] => {
  return characters.map(mapCharacterToVM);
};

export const mapCharacterToVM = (character: am.Character): vm.Character => {
  const { id, name, gender, species, type, status, origin, location, image, created } = character;

  return {
    id,
    name,
    gender: vm.Gender[gender?.toLowerCase()],
    species,
    type,
    status,
    origin: origin?.name,
    location: location?.name,
    image,
    created: new Date(created),
  };
};
