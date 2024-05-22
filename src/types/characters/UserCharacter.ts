import { Armour } from "../Armour";
import { Weapon } from "../Weapon";

export type UserCharacter = {
  id: string;
  name: string;
  type: string;
  weapons?: Weapon[];
  armour?: Armour[];
  amount?: number;
};
