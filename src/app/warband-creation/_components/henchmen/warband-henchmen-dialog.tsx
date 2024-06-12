"use client";

import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WeaponBox from "../../../../components/warband-editor/weapons-box";
import ArmourBox from "../../../../components/warband-editor/armour-box";
import StatsBox from "@/components/warband-editor/stats-box";
import CharacterNameBox from "@/components/warband-editor/character-name-box";
import { UserHenchmen, UserHero } from "@/types/characters/UserCharacter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HenchmenTemplate } from "@/types/characters/CharacterTemplate";
import { useHenchmen } from "@/hooks/useHenchmen";
import { Input } from "@/components/ui/input";

type WarbandHenchmenDialogProps = {
  henchmenTemplate: HenchmenTemplate[];
  currentHenchmen?: UserHenchmen;
  henchmenHandlers: {
    addHenchmen: (newHero: UserHero) => void;
    deleteHenchmen: (heroId: string) => void;
  };
};

export default function WarbandHenchmenDialog({
  henchmenTemplate,
  currentHenchmen,
  henchmenHandlers,
}: WarbandHenchmenDialogProps) {
  const {
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
  } = useHenchmen(currentHenchmen, henchmenTemplate);

  function handleSubmit() {
    const newHenchmen: UserHenchmen = {
      id: crypto.randomUUID(),
      type: selectedHenchmenType,
      name: henchmenName,
      weapons: henchmenWeapons,
      armour: henchmenArmour,
      amount: henchmenAmount,
    };

    henchmenHandlers.addHenchmen(newHenchmen);

    resetState();
  }

  function resetState() {
    if (!currentHenchmen) {
      setHenchmenName("");
      henchmenWeaponHandler.resetWeapons();
      henchmenArmourHandler.resetArmour();
      setHenchmenAmount(0);
    }
  }

  return (
    <DialogContent onPointerDownOutside={resetState}>
      <CharacterNameBox setCharacterName={(e) => setHenchmenName(e.target.value)} currentName={henchmenName} />

      <StatsBox CharacterStats={selectedHenchmenType.stats} />

      <div className="px-4 py-2 border w-fit ml-4 rounded-md space-y-2">
        <h1>Type</h1>
        <Select onValueChange={(value) => handleSelectHenchmenType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={selectedHenchmenType.type} />
          </SelectTrigger>
          <SelectContent>
            {henchmenTemplate.map((henchmen) => (
              <SelectItem key={henchmen.id} value={henchmen.type}>
                {henchmen.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedHenchmenType.weaponSelection && (
        <WeaponBox
          characterWeapons={henchmenWeapons}
          weaponSelection={selectedHenchmenType.weaponSelection}
          weaponsHandler={henchmenWeaponHandler}
        />
      )}

      {selectedHenchmenType.armourSelection && (
        <ArmourBox
          characterArmour={henchmenArmour}
          armourSelection={selectedHenchmenType.armourSelection}
          armourHandler={henchmenArmourHandler}
        />
      )}

      <div className="px-4 py-2 border w-fit ml-4 rounded-md space-y-2">
        <h1>Amount</h1>
        <Input
          type="number"
          min="0"
          max="15"
          value={henchmenAmount.toString()}
          onChange={(e) => setHenchmenAmount(parseInt(e.target.value))}
        />
      </div>

      <div className="flex justify-between px-2 pt-3">
        <DialogClose asChild>
          <Button onClick={handleSubmit}>submit</Button>
        </DialogClose>
        {currentHenchmen && (
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => {
                henchmenHandlers.deleteHenchmen(currentHenchmen?.id);
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
