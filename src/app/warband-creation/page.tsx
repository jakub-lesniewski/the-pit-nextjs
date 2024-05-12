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
    funds: 500,
  });

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
