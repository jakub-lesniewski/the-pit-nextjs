"use client";

import WeaponBox from "../../../../components/warband-editor/weapons-box";
import ArmourBox from "../../../../components/warband-editor/armour-box";
import StatsBox from "@/components/warband-editor/stats-box";
import CharacterNameBox from "@/components/warband-editor/character-name-box";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dummyArmour, dummyStats, dummyWeapons } from "../../dummyData";
import { useWeapons } from "@/hooks/useWeapons";
import { useArmour } from "@/hooks/useArmour";
import { useState } from "react";
import { CharacterTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";

type WarbandLeaderDialogProps = {
  leaderTemplate: CharacterTemplate;
  currentLeader?: UserCharacter;
};

export default function WarbandLeaderDialog({ leaderTemplate, currentLeader }: WarbandLeaderDialogProps) {
  const [leaderName, setLeaderName] = useState<string>(currentLeader?.name ?? "");
  const { weapons: leaderWeapons, weaponsHandler, setWeapons } = useWeapons(currentLeader?.weapons);
  const { armour: leaderArmour, armourHandlers, setArmour } = useArmour(currentLeader?.armour);

  function handleSubmit(): void {
    console.log(leaderName);
    console.log(leaderWeapons);
    console.log(leaderArmour);
    resetState();
  }

  function resetState(): void {
    setLeaderName(currentLeader?.name || "");
    setWeapons(currentLeader?.weapons || []);
    setArmour(currentLeader?.armour || []);
  }

  return (
    <DialogContent onPointerDownOutside={resetState} onEscapeKeyDown={resetState}>
      <CharacterNameBox setCharacterName={(e) => setLeaderName(e.target.value)} currentName={leaderName} />

      <StatsBox CharacterStats={leaderTemplate.stats} />

      {leaderTemplate.weaponSelection && (
        <WeaponBox
          characterWeapons={leaderWeapons}
          weaponSelection={leaderTemplate.weaponSelection}
          weaponsHandler={weaponsHandler}
        />
      )}

      {leaderTemplate.armourSelection && (
        <ArmourBox
          characterArmour={leaderArmour}
          armourSelection={leaderTemplate.armourSelection}
          armourHandler={armourHandlers}
        />
      )}

      <div className="flex justify-between px-2 pt-3">
        <DialogClose asChild>
          <Button
            onClick={() => {
              handleSubmit();
              resetState();
            }}
          >
            submit
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="destructive">remove</Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
