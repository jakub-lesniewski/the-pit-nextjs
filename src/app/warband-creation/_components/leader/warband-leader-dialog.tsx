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
import { CharacterTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";

type WarbandLeaderDialogProps = {
  leaderTemplate: CharacterTemplate;
  currentLeader?: UserCharacter;
};

export default function WarbandLeaderDialog({ leaderTemplate, currentLeader }: WarbandLeaderDialogProps) {
  const [leaderName, setLeaderName] = useState<string>(currentLeader?.name ?? "");
  const { weapons: leaderWeapons, addWeapon, removeWeapon } = useWeapons();
  const { armour: leaderArmour, addArmour, removeArmour } = useArmour();

  function handleSubmit() {
    console.log(leaderName);
    console.log(leaderWeapons);
    console.log(leaderArmour);
  }

  console.log(leaderName);
  return (
    <DialogContent>
      <CharacterNameBox setCharacterName={(e) => setLeaderName(e.target.value)} currentName={leaderName} />

      <StatsBox CharacterStats={dummyStats} />

      {leaderTemplate.weaponSelection && (
        <WeaponBox
          characterWeapons={leaderWeapons}
          weaponSelection={leaderTemplate.weaponSelection}
          addWeapon={addWeapon}
          removeWeapon={removeWeapon}
        />
      )}

      {leaderTemplate.weaponSelection && (
        <ArmourBox
          characterArmour={leaderArmour}
          armourSelection={dummyArmour}
          addArmour={addArmour}
          removeArmour={removeArmour}
        />
      )}

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
