"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Warband } from "@/types/Warband";
import WarbandTitleBox from "./components/warband-title-box";
import WarbandNameBox from "./components/warband-name-input";
import WarbandHeroesBox from "./components/boxes/warband-heroes-box";
import WarbandHenchmenBox from "./components/boxes/warband-henchmen-box";
import WarbandLeaderBox from "./components/boxes/warband-leader-box";
import { dummyWarband } from "./dummyData";

export default function WarbandCreation() {
  const [warband, setWarband] = useState<Warband>(dummyWarband);

  const { name, leader, heroes, henchmen, funds } = warband;

  return (
    <Card className="min-w-[400px]">
      <WarbandTitleBox funds={funds} />
      <CardContent className="flex flex-col gap-3">
        <WarbandNameBox />
        <WarbandLeaderBox leader={leader} />
        <WarbandHeroesBox heroes={heroes} />
        <WarbandHenchmenBox henchmen={henchmen} />
      </CardContent>
      <CardFooter>
        <Button className="w-full tracking-widest text-base" size="sm">
          submit
        </Button>
      </CardFooter>
    </Card>
  );
}
