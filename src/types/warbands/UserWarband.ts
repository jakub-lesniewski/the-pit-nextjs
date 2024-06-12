import { UserCharacter } from "../characters/UserCharacter";

export type UserWarband = {
  id: string;
  name: string;
  leader: UserCharacter;
  heroes: UserCharacter[];
  henchmen: UserCharacter[];
  funds: number;
};
