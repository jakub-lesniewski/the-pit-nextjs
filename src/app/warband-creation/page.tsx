"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WarbandCreation() {
  const [warband, setWarband] = useState({
    name: "",
    leader: {
      id: 1,
      name: "Jan Pepik",
      type: "Mercenary Captain",
    },
    heroes: [
      {
        id: 1,
        name: "Tobiasz Marszałek",
        type: "Youngblood",
      },
      {
        id: 2,
        name: "Daniik Oplachenko",
        type: "Champion",
      },
      {
        id: 3,
        name: "Ryszard Jeleń",
        type: "Youngblood",
      },
    ],
    henchmen: [
      {
        id: 1,
        name: "Dudes",
        type: "Marksmen",
        amount: 2,
      },
      {
        id: 2,
        name: "Dudes vol. 1",
        type: "Swordsmen",
        amount: 3,
      },
      {
        id: 3,
        name: "Dudes vol. 2",
        type: "Warriors",
        amount: 1,
      },
    ],
  });

  const { name, leader, heroes, henchmen } = warband;

  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <CardTitle className="text-lg tracking-wide">New Reiklanders Warband</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <Label className="text-base">Warband&apos;s Name</Label>
          <Input type="text" placeholder="Rottmeister's Fighting Few" id="warbandsName" value={name} max={100} />
        </div>

        <div className="flex flex-col gap-1">
          <h2>Leader</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add leader
          </Button>
          <div className="border-b-2 p-2 flex justify-between cursor-pointer">
            <p>{leader.name}</p>
            <p>{leader.type}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 border p-4">
          <h2>Heroes</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add hero
          </Button>
          <ol>
            {heroes.map((hero) => (
              <li className="border-b-2 p-2 flex justify-between cursor-pointer" key={hero.id}>
                <p>{hero.name}</p>
                <p>{hero.type}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-1 border p-4">
          <h2>Henchmen</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add henchmen
          </Button>
          <ol>
            {henchmen.map((henchman) => (
              <li className="border-b-2 p-2 flex justify-between cursor-pointer" key={henchman.id}>
                <p>{henchman.name}</p>
                <p>{`${henchman.type} x${henchman.amount}`}</p>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full tracking-widest text-base" size="sm">
          submit
        </Button>
      </CardFooter>
    </Card>
  );
}
