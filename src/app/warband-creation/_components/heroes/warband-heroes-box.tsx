import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CharacterTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";
import { useState } from "react";
import WarbandHeroDialog from "./warband-hero-dialog";

type WarbandHeroesBoxProps = {
  heroesTemplate: CharacterTemplate[];
  currentHeroes?: UserCharacter[];
};

export default function WarbandHeroesBox({ heroesTemplate, currentHeroes }: WarbandHeroesBoxProps) {
  const [currentHero, setCurrentHero] = useState<UserCharacter>();

  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Heroes</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add hero
          </Button>
        </DialogTrigger>
        <WarbandHeroDialog heroesTemplate={heroesTemplate} />
      </Dialog>
      <ol>
        {currentHeroes?.map((hero) => (
          <Dialog key={hero.id}>
            <DialogTrigger asChild>
              <li
                className="border-b-2 p-2 flex justify-between cursor-pointer"
                onClick={() => {
                  setCurrentHero(hero);
                }}
              >
                <p>{hero.name}</p>
                <p>{hero.type}</p>
              </li>
            </DialogTrigger>
            <WarbandHeroDialog currentHero={hero} heroesTemplate={heroesTemplate} />
          </Dialog>
        ))}
      </ol>
    </div>
  );
}
