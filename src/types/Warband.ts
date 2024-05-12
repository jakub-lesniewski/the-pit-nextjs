import { Henchmen } from "./Henchmen";
import { Hero } from "./Hero";

export type Warband = {
  name: string;
  leader: Hero;
  heroes: Hero[];
  henchmen: Henchmen[];
  funds: number;
};
