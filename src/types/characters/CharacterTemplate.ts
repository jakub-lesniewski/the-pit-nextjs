import { Armour } from "../Armour";
import { CharacterStats } from "../CharacterStats";
import { Item } from "../Item";
import { Weapon } from "../Weapon";

export type HenchmenTemplate = {
  id: string;
  type: string;
  stats: CharacterStats;
  weaponSelection?: Weapon[];
  armourSelection?: Armour[];
  race: string;
  cost: number;
};

export type HeroTemplate = HenchmenTemplate & {
  itemSelection?: Item[];
  // skillSelection
};

export function isHeroTemplate(characterTemplate: HenchmenTemplate): characterTemplate is HeroTemplate {
  return "itemSelection" in characterTemplate;
}
