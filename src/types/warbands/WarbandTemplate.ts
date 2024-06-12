import { HenchmenTemplate, HeroTemplate } from "../characters/CharacterTemplate";

export type WarbandTemplate = {
  id: string;
  type: string;
  leader: HeroTemplate;
  heroes: HeroTemplate[];
  henchmen: HenchmenTemplate[];
  startingFunds: number;
};
