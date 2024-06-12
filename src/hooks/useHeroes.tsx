import { HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";
import { useState } from "react";
import { useWeapons } from "./useWeapons";
import { useArmour } from "./useArmour";

export function useHero(initialHero: UserCharacter | undefined, heroTemple: HeroTemplate) {
  const [heroName, setHeroName] = useState<string>(initialHero?.name ?? "");
  const { weapons: heroWeapons, weaponsHandler: heroWeaponsHandler } = useWeapons(initialHero?.weapons);
  const { armour: heroArmour, armourHandlers: heroArmourHandlers } = useArmour(initialHero?.armour);

  return {
    heroName,
    setHeroName,
    heroWeapons,
    heroWeaponsHandler,
    heroArmour,
    heroArmourHandlers,
  };
}
