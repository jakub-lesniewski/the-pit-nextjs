import { Armour } from "../Armour";
import { CharacterStats } from "../CharacterStats";
import { Weapon } from "../Weapon";

export type CharacterTemplate = {
  id: string;
  type: string;
  stats: CharacterStats;
  weaponSelection?: Weapon[];
  armourSelection?: Armour[];
  cost: number;
};
