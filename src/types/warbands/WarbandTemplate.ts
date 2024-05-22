import { CharacterTemplate } from "../characters/CharacterTemplate";

export type WarbandTemplate = {
  id: string;
  type: string;
  leader: CharacterTemplate;
  heroes: CharacterTemplate[];
  henchmen: CharacterTemplate[];
  funds: number;
};
