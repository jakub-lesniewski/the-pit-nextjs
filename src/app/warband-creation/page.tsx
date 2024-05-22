"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import WarbandTitleBox from "../../components/warband-editor/warband-title-box";
import WarbandNameBox from "../../components/warband-editor/warband-name-input";
import WarbandHeroesBox from "./_components/heroes/warband-heroes-box";
import WarbandHenchmenBox from "./_components/henchmen/warband-henchmen-box";
import WarbandLeaderBox from "./_components/leader/warband-leader-box";
import { dummyWarband } from "./dummyData";

export default function WarbandCreation() {
  const { name, leader, heroes, henchmen, funds } = dummyWarband;

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
