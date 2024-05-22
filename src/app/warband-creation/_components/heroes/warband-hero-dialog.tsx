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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type WarbandHeroDialogProps = {
  heroesTemplate: CharacterTemplate[];
  currentHero?: UserCharacter;
};

export default function WarbandHeroDialog({ heroesTemplate, currentHero }: WarbandHeroDialogProps) {
  const [heroName, setHeroName] = useState<string>(currentHero?.name ?? "");
  const [selectedHeroType, setSelectedHeroType] = useState<CharacterTemplate>(heroesTemplate[0]);
  const { weapons: heroWeapons, weaponsHandler } = useWeapons();
  const { armour: heroArmour, armourHandlers } = useArmour();

  function handleSubmit() {
    console.log(heroName);
    console.log(heroWeapons);
    console.log(heroArmour);
  }

  return (
    <DialogContent>
      <CharacterNameBox setCharacterName={(e) => setHeroName(e.target.value)} currentName={heroName} />

      <StatsBox CharacterStats={dummyStats} />

      <div className="px-4 py-2 border w-fit ml-4 rounded-md space-y-2">
        <h1>Type</h1>
        <Select
          onValueChange={(value) => {
            const selectedTemplate = heroesTemplate.find((hero) => hero.type === value);
            if (selectedTemplate) {
              setSelectedHeroType(selectedTemplate);
            }
          }}
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
        <DialogClose asChild>
          <Button variant="destructive">remove</Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
