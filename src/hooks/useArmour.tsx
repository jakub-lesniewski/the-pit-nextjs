import { useState } from "react";
import { Armour, hasArmourType } from "@/types/Armour";
import { toast } from "sonner";

export function useArmour(initialArmour: Armour[] = []) {
  const [armour, setArmour] = useState<Armour[]>(initialArmour);

  function addArmour(newArmour: Armour) {
    if (!hasArmourType(armour, newArmour.type)) {
      setArmour((prevArmour) => [...prevArmour, newArmour]);
    } else toast("This character already has this armour type");
  }

  function removeArmour(armourIndex: number) {
    const newArmour = armour.filter((_, index) => index !== armourIndex);
    setArmour(newArmour);
  }

  function resetArmour() {
    setArmour([]);
  }

  return {
    armour,
    armourHandlers: {
      addArmour,
      removeArmour,
      resetArmour,
    },
  };
}
