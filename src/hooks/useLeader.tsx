import { HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserHero } from "@/types/characters/UserCharacter";
import { useState } from "react";
import { useWeapons } from "./useWeapons";
import { useArmour } from "./useArmour";

export function useLeader(initialLeader: UserHero | undefined, leaderTemplate: HeroTemplate) {
  const [leaderName, setLeaderName] = useState<string>(initialLeader?.name ?? "");
  const { weapons: leaderWeapons, weaponsHandler } = useWeapons(initialLeader?.weapons);
  const { armour: leaderArmour, armourHandlers } = useArmour(initialLeader?.armour);

  return {
    leaderName,
    setLeaderName,
    leaderWeapons,
    weaponsHandler,
    leaderArmour,
    armourHandlers,
  };
}
