"use client";

import WeaponBox from "../../../../components/warband-editor/weapons-box";
import ArmourBox from "../../../../components/warband-editor/armour-box";
import StatsBox from "@/components/warband-editor/stats-box";
import CharacterNameBox from "@/components/warband-editor/character-name-box";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLeader } from "@/hooks/useLeader";
import { useState } from "react";
import { HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter, UserHero } from "@/types/characters/UserCharacter";

type WarbandLeaderDialogProps = {
  leaderTemplate: HeroTemplate;
  currentLeader?: UserHero;
  leaderHandlers: {
    addLeader: (newLeader: UserCharacter) => void;
    deleteLeader: () => void;
  };
};

export default function WarbandLeaderDialog({
  leaderTemplate,
  currentLeader,
  leaderHandlers,
}: WarbandLeaderDialogProps) {
  const { leaderName, setLeaderName, leaderWeapons, weaponsHandler, leaderArmour, armourHandlers } = useLeader(
    currentLeader,
    leaderTemplate
  );

  function handleSubmit() {
    const newLeader: UserHero = {
      id: crypto.randomUUID(),
      type: leaderTemplate,
      name: leaderName,
      weapons: leaderWeapons,
      armour: leaderArmour,
      items: [],
    };

    leaderHandlers.addLeader(newLeader);

    resetState();
  }

  function resetState() {
    if (!currentLeader) {
      setLeaderName("");
      weaponsHandler.resetWeapons();
      armourHandlers.resetArmour();
    }
  }

  return (
    <DialogContent onPointerDownOutside={resetState}>
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
        {currentLeader && (
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => {
                leaderHandlers.deleteLeader();
                resetState();
              }}
            >
              remove
            </Button>
          </DialogClose>
        )}
      </div>
    </DialogContent>
  );
}
