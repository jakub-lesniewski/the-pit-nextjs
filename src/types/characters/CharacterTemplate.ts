import { Armour } from "../Armour";
import { CharacterStats } from "../CharacterStats";
import { Weapon } from "../Weapon";

export type CharacterTemplate = {
  id: string;
  name: string;
  stats: CharacterStats;
  weaponSelection?: Weapon[];
  allowedArmour?: Armour[];
  cost: number;
};
