import { Weapon, isRanged } from "@/types/Weapon";
import { useState } from "react";
import { toast } from "sonner";

export function useWeapons(initialWeapons: Weapon[] = []) {
  const [weapons, setWeapons] = useState<Weapon[]>(initialWeapons);

  function addWeapon(weapon: Weapon) {
    if (weapons.filter((weapon) => !isRanged(weapon)).length < 2 && !isRanged(weapon)) {
      setWeapons((prevWeapons) => [...prevWeapons, weapon]);
    } else if (weapons.filter((weapon) => isRanged(weapon)).length < 2 && isRanged(weapon)) {
      setWeapons((prevWeapons) => [...prevWeapons, weapon]);
    } else {
      toast("Cannot exceed weapon limit");
    }
  }

  function removeWeapon(weaponIndex: number) {
    const newWeapons = weapons.filter((_, index) => index !== weaponIndex);
    setWeapons(newWeapons);
  }

  function resetWeapons() {
    setWeapons([]);
  }

  return {
    weapons,
    weaponsHandler: {
      addWeapon,
      removeWeapon,
      resetWeapons,
    },
  };
}
