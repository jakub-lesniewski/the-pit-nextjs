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
import { UserHero } from "@/types/characters/UserCharacter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroTemplate } from "@/types/characters/CharacterTemplate";

type WarbandHeroDialogProps = {
  heroesTemplate: HeroTemplate[];
  currentHero?: UserHero;
  heroHandlers: {
    addHero: (newHero: UserHero) => void;
    deleteHero: (heroId: string) => void;
  };
};

export default function WarbandHeroDialog({ heroesTemplate, currentHero, heroHandlers }: WarbandHeroDialogProps) {
  const [heroName, setHeroName] = useState<string>(currentHero?.name ?? "");
  const [selectedHeroType, setSelectedHeroType] = useState<HeroTemplate>(heroesTemplate[0]);
  const { weapons: heroWeapons, weaponsHandler } = useWeapons(currentHero?.weapons);
  const { armour: heroArmour, armourHandlers } = useArmour(currentHero?.armour);

  function handleSubmit() {
    const newHero: UserHero = {
      id: crypto.randomUUID(),
      type: selectedHeroType,
      name: heroName,
      weapons: heroWeapons,
      armour: heroArmour,
      items: [],
    };

    heroHandlers.addHero(newHero);

    resetState();
  }

  function resetState() {
    if (!currentHero) {
      setHeroName("");
      weaponsHandler.resetWeapons();
      armourHandlers.resetArmour();
    }
  }

  return (
    <DialogContent onPointerDownOutside={resetState}>
      <CharacterNameBox setCharacterName={(e) => setHeroName(e.target.value)} currentName={heroName} />

      <StatsBox CharacterStats={selectedHeroType.stats} />

      <div className="px-4 py-2 border w-fit ml-4 rounded-md space-y-2">
        <h1>Type</h1>
        <Select
          onValueChange={(value) =>
            setSelectedHeroType(heroesTemplate.find((hero) => hero.type === value) || selectedHeroType)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={selectedHeroType.type} />
          </SelectTrigger>
          <SelectContent>
            {heroesTemplate.map((hero) => (
              <SelectItem key={hero.id} value={hero.type}>
                {hero.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedHeroType.weaponSelection && (
        <WeaponBox
          characterWeapons={heroWeapons}
          weaponSelection={selectedHeroType.weaponSelection}
          weaponsHandler={weaponsHandler}
        />
      )}

      {selectedHeroType.armourSelection && (
        <ArmourBox
          characterArmour={heroArmour}
          armourSelection={selectedHeroType.armourSelection}
          armourHandler={armourHandlers}
        />
      )}

      <div className="flex justify-between px-2 pt-3">
        <DialogClose asChild>
          <Button onClick={handleSubmit}>submit</Button>
        </DialogClose>
        {currentHero && (
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => {
                heroHandlers.deleteHero(currentHero?.id);
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
