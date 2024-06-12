import { HenchmenTemplate, HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserHenchmen } from "@/types/characters/UserCharacter";
import { useState } from "react";
import { useWeapons } from "./useWeapons";
import { useArmour } from "./useArmour";

export function useHenchmen(initialHenchmen: UserHenchmen | undefined, henchmenTemplate: HenchmenTemplate[]) {
  const [henchmenName, setHenchmenName] = useState<string>(initialHenchmen?.name ?? "");
  const [selectedHenchmenType, setSelectedHenchmenType] = useState<HeroTemplate>(henchmenTemplate[0]);
  const [henchmenAmount, setHenchmenAmount] = useState<number>(initialHenchmen?.amount ?? 0);
  const { weapons: henchmenWeapons, weaponsHandler: henchmenWeaponHandler } = useWeapons(initialHenchmen?.weapons);
  const { armour: henchmenArmour, armourHandlers: henchmenArmourHandler } = useArmour(initialHenchmen?.armour);

  function handleSelectHenchmenType(value: string) {
    const selectedTemplate = henchmenTemplate.find((henchmen) => henchmen.type === value) || henchmenTemplate[0];
    setSelectedHenchmenType(selectedTemplate);
  }

  return {
    henchmenName,
    setHenchmenName,
    selectedHenchmenType,
    handleSelectHenchmenType,
    henchmenAmount,
    setHenchmenAmount,
    henchmenWeapons,
    henchmenWeaponHandler,
    henchmenArmour,
    henchmenArmourHandler,
  };
}
