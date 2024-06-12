import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter, UserHero } from "@/types/characters/UserCharacter";
import { useState } from "react";
import WarbandHeroDialog from "./warband-hero-dialog";

type WarbandHeroesBoxProps = {
  heroesTemplate: HeroTemplate[];
  currentHeroes?: UserCharacter[];
  heroHandlers: {
    addHero: (newHero: UserHero) => void;
    deleteHero: (heroId: string) => void;
  };
};

export default function WarbandHeroesBox({ heroesTemplate, currentHeroes, heroHandlers }: WarbandHeroesBoxProps) {
  const [currentHero, setCurrentHero] = useState<UserHero>();

  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Heroes</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add hero
          </Button>
        </DialogTrigger>
        <WarbandHeroDialog heroesTemplate={heroesTemplate} heroHandlers={heroHandlers} />
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
                <p>{hero.type.type}</p>
              </li>
            </DialogTrigger>
            <WarbandHeroDialog currentHero={currentHero} heroesTemplate={heroesTemplate} heroHandlers={heroHandlers} />
          </Dialog>
        ))}
      </ol>
    </div>
  );
}
