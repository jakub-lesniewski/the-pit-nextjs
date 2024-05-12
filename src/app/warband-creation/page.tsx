"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import WarbandTitleBox from "./components/warband-title-box";
import WarbandNameBox from "./components/warband-name-input";
import WarbandLeaderBox from "./components/leader/warband-leader-box";
import WarbandHeroesBox from "./components/heroes/warband-heroes-box";
import WarbandHenchmenBox from "./components/henchmen/warband-henchmen-box";

export type Hero = {
  id: string;
  name: string;
  type: string;
};

export type Henchmen = {
  id: string;
  name: string;
  type: string;
  amount: number;
};

type Warband = {
  name: string;
  leader: Hero;
  heroes: Hero[];
  henchmen: Henchmen[];
};

export default function WarbandCreation() {
  const [warband, setWarband] = useState<Warband>({
    name: "",
    leader: {
      id: "1",
      name: "Jan Pepik",
      type: "Mercenary Captain",
    },
    heroes: [
      {
        id: "1",
        name: "Tobiasz Marszałek",
        type: "Youngblood",
      },
      {
        id: "2",
        name: "Daniik Oplachenko",
        type: "Champion",
      },
      {
        id: "3",
        name: "Ryszard Jeleń",
        type: "Youngblood",
      },
    ],
    henchmen: [
      {
        id: "1",
        name: "Dudes",
        type: "Marksmen",
        amount: 2,
      },
      {
        id: "2",
        name: "Dudes vol. 1",
        type: "Swordsmen",
        amount: 3,
      },
      {
        id: "3",
        name: "Dudes vol. 2",
        type: "Warriors",
        amount: 1,
      },
    ],
  });

  const { name, leader, heroes, henchmen } = warband;

  return (
    <Card className="min-w-[400px]">
      <WarbandTitleBox />
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
