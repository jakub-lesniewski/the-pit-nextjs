import { Armour } from "../Armour";
import { CharacterStats } from "../CharacterStats";
import { Item } from "../Item";
import { Weapon } from "../Weapon";
import { HenchmenTemplate, HeroTemplate } from "./CharacterTemplate";

export type UserCharacter = {
  id: string;
  name: string;
  type: HenchmenTemplate | HeroTemplate;
  weapons?: Weapon[];
  armour?: Armour[];
};

export type UserHero = UserCharacter & {
  items?: Item[];
};

export type UserHenchmen = UserCharacter & {
  amount?: number;
};

export function isUserHero(userCharacter: UserCharacter): userCharacter is UserHero {
  return "items" in userCharacter;
}

export function isUserHenchmen(userCharacter: UserCharacter): userCharacter is UserHenchmen {
  return "amount" in userCharacter;
}
