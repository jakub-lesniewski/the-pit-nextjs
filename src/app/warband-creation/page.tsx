"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { dummyUserWarband, dummyWarbandTemplate } from "./dummyData";
import { UserWarband } from "@/types/warbands/UserWarband";
import WarbandTitleBox from "../../components/warband-editor/warband-title-box";
import WarbandNameBox from "../../components/warband-editor/warband-name-input";
import WarbandHeroesBox from "./_components/heroes/warband-heroes-box";
import WarbandHenchmenBox from "./_components/henchmen/warband-henchmen-box";
import WarbandLeaderBox from "./_components/leader/warband-leader-box";

export default function WarbandCreation() {
  const [userWarband, setUserWarband] = useState<UserWarband>(dummyUserWarband);

  const { funds, type, leader, heroes, henchmen } = dummyWarbandTemplate;

  return (
    <Card className="min-w-[400px]">
      <WarbandTitleBox funds={funds} />
      <CardContent className="flex flex-col gap-3">
        <WarbandNameBox />
        <WarbandLeaderBox leaderTemplate={leader} currentLeader={userWarband.leader} />
        <WarbandHeroesBox heroesTemplate={heroes} currentHeroes={userWarband.heroes} />
        <WarbandHenchmenBox henchmenTemplate={henchmen} currentHenchmen={userWarband.henchmen} />
      </CardContent>
      <CardFooter>
        <Button className="w-full tracking-widest text-base" size="sm">
          submit
        </Button>
      </CardFooter>
    </Card>
  );
}
