import { useState } from "react";
import { Armour, hasArmourType } from "@/types/Armour";

export function useArmour(initialArmour: Armour[] = []) {
  const [armour, setArmour] = useState<Armour[]>(initialArmour);

  function addArmour(newArmour: Armour) {
    if (!hasArmourType(armour, newArmour.type)) {
      setArmour((prevArmour) => [...prevArmour, newArmour]);
    }
  }

  function removeArmour(armourIndex: number) {
    const newArmour = armour.filter((_, index) => index !== armourIndex);
    setArmour(newArmour);
  }

  return {
    armour,
    setArmour,
    armourHandlers: {
      addArmour,
      removeArmour,
    },
  };
}
