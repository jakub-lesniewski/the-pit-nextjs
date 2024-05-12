"use client";

import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Weapon } from "@/types/weapon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

const dummyWeapons: Weapon[] = [
  {
    id: "1",
    name: "Sword",
    strength: 1,
    range: undefined,
    cost: 20,
  },
  {
    id: "4",
    name: "Handgun",
    strength: 3,
    range: 8,
    cost: 35,
  },
  {
    id: "2",
    name: "Axe",
    strength: 2,
    range: undefined,
    cost: 15,
  },
  {
    id: "3",
    name: "Pistol",
    strength: 2,
    range: 7,
    cost: 30,
  },
];

export default function WarbandLeaderDialog() {
  const [leaderWeapons, setLeaderWeapons] = useState<Weapon[]>([]);
  const [leaderArmour, setLeaderArmour] = useState<Weapon[]>([]);

  function addWeapon(weapon: Weapon) {
    setLeaderWeapons((prevWeapons) => [...prevWeapons, weapon]);
  }

  function removeWeapon(weaponIndex: number) {
    setLeaderWeapons((prevWeapons) => {
      const updatedWeapons = [...prevWeapons];
      updatedWeapons.splice(weaponIndex, 1);
      return updatedWeapons;
    });
  }

  return (
    <DialogContent>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Guntbert Krahl" />
      <p>Weapons</p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add weapon
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {dummyWeapons.map((weapon) => (
            <DropdownMenuItem
              onClick={() => addWeapon(weapon)}
              key={weapon.id}
              className="flex justify-between cursor-pointer"
            >
              <p>{weapon.name}</p>
              <p>{weapon.cost} gc</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ol>
        {leaderWeapons.map((weapon, index) => (
          <li key={index} className="flex justify-between border-b p-1 cursor-pointer">
            <p>{weapon.name}</p>
            <div className="flex items-center gap-3">
              <p>{weapon.cost} gc</p>
              <X onClick={() => removeWeapon(index)} className="w-4" />
            </div>
          </li>
        ))}
      </ol>
    </DialogContent>
  );
}
