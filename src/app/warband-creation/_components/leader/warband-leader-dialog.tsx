"use client";

import { DialogClose, DialogContent } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { dummyArmour, dummyStats, dummyWeapons } from "../../dummyData";
import { useWeapons } from "@/hooks/useWeapons";
import { useArmour } from "@/hooks/useArmour";
import { useState } from "react";
import WeaponBox from "../../../../components/warband-editor/weapons-box";
import ArmourBox from "../../../../components/warband-editor/armour-box";
import StatsBox from "@/components/warband-editor/stats-box";
import CharacterNameBox from "@/components/warband-editor/character-name-box";

export default function WarbandLeaderDialog() {
  const [leaderName, setLeaderName] = useState<string>("");
  const { weapons: leaderWeapons, addWeapon, removeWeapon } = useWeapons();
  const { armour: leaderArmour, addArmour, removeArmour } = useArmour();

  function handleSubmit() {
    console.log(leaderName);
    console.log(leaderWeapons);
    console.log(leaderArmour);
  }

  return (
    <DialogContent>
      <CharacterNameBox setCharacterName={(e) => setLeaderName(e.target.value)} />

      <StatsBox CharacterStats={dummyStats} />

      <WeaponBox
        characterWeapons={leaderWeapons}
        weaponSelection={dummyWeapons}
        addWeapon={addWeapon}
        removeWeapon={removeWeapon}
      />

      <ArmourBox
        characterArmour={leaderArmour}
        armourSelection={dummyArmour}
        addArmour={addArmour}
        removeArmour={removeArmour}
      />

      <div className="flex justify-between px-2 pt-3">
        <DialogClose asChild>
          <Button onClick={handleSubmit}>submit</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="destructive">remove</Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
