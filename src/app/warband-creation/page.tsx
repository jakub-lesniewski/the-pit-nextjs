"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { dummyUserWarband, dummyWarbandTemplate } from "./dummyData";
import { UserWarband } from "@/types/warbands/UserWarband";
import { UserCharacter, UserHenchmen, UserHero } from "@/types/characters/UserCharacter";
import WarbandTitleBox from "../../components/warband-editor/warband-title-box";
import WarbandNameBox from "../../components/warband-editor/warband-name-input";
import WarbandHeroesBox from "./_components/heroes/warband-heroes-box";
import WarbandHenchmenBox from "./_components/henchmen/warband-henchmen-box";
import WarbandLeaderBox from "./_components/leader/warband-leader-box";

export default function WarbandCreation() {
  // const [userWarband, setUserWarband] = useState<UserWarband>(dummyUserWarband);

  const [warbandName, setWarbandName] = useState<string>("");
  const [leader, setLeader] = useState<UserCharacter>();
  const [heroes, setHeroes] = useState<UserCharacter[]>([]);
  const [henchmen, setHenchmen] = useState<UserCharacter[]>([]);
  const [funds, setFunds] = useState<number>(500);

  const leaderHandlers = {
    addLeader(newLeader: UserHero) {
      setLeader(newLeader);
    },

    deleteLeader() {
      setLeader(undefined);
    },
  };

  const heroHandlers = {
    addHero(newHero: UserHero) {
      setHeroes([...heroes, newHero]);
    },

    deleteHero(heroId: string) {
      setHeroes(heroes.filter((hero) => hero.id !== heroId));
    },
  };

  const henchmenHandlers = {
    addHenchmen(newHenchmen: UserHenchmen) {
      setHenchmen([...henchmen, newHenchmen]);
    },

    deleteHenchmen(henchmenId: string) {
      setHenchmen(henchmen.filter((group) => group.id !== henchmenId));
    },
  };

  const {
    startingFunds: fundsTemplate,
    type: typeTemplate,
    leader: leaderTemplate,
    heroes: heroesTemplate,
    henchmen: henchmenTemplate,
  } = dummyWarbandTemplate;

  return (
    <Card className="min-w-[400px]">
      <WarbandTitleBox funds={fundsTemplate} />
      <CardContent className="flex flex-col gap-3">
        <WarbandNameBox />
        <WarbandLeaderBox leaderTemplate={leaderTemplate} currentLeader={leader} leaderHandlers={leaderHandlers} />
        <WarbandHeroesBox heroesTemplate={heroesTemplate} currentHeroes={heroes} heroHandlers={heroHandlers} />
        <WarbandHenchmenBox
          henchmenTemplate={henchmenTemplate}
          currentHenchmen={henchmen}
          henchmenHandlers={henchmenHandlers}
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full tracking-widest text-base" size="sm">
          submit
        </Button>
      </CardFooter>
    </Card>
  );
}
