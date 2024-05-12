"use client";

import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Armour, ArmourType, hasArmourType } from "@/types/Armour";
import { Item } from "@/types/Item";
import { Weapon, isRanged } from "@/types/Weapon";
import { useState } from "react";

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
  {
    id: "5",
    name: "Dagger",
    strength: -1,
    range: undefined,
    cost: 1,
  },
];

const dummyArmour: Armour[] = [
  {
    id: "1",
    name: "Hauberk",
    cost: 20,
    type: ArmourType.CHEST_PIECE,
  },
  {
    id: "4",
    name: "Gambeson",
    cost: 20,
    type: ArmourType.CHEST_PIECE,
  },
  {
    id: "2",
    name: "Helmet",
    cost: 50,
    type: ArmourType.HELMET,
  },
  {
    id: "3",
    name: "Shield",
    cost: 40,
    type: ArmourType.SHIELD,
  },
];

const dummyItems: Item[] = [
  {
    id: "1",
    name: "Rabbit's Paw",
    cost: 20,
  },
  {
    id: "2",
    name: "Crucifix",
    cost: 15,
  },
];

export default function WarbandLeaderDialog() {
  const [leaderName, setLeaderName] = useState<string>("");
  const [leaderWeapons, setLeaderWeapons] = useState<Weapon[]>([]);
  const [leaderArmour, setLeaderArmour] = useState<Armour[]>([]);
  const [leaderItems, setleaderItems] = useState<Item[]>([]);

  const statsHeader = ["M", "WS", "BS", "S", "T", "W", "I", "A", "Ld"];
  const dummyStats = [7, 3, 3, 3, 4, 1, 3, 1, 7];

  function addWeapon(weapon: Weapon) {
    const meleeCount = leaderWeapons.filter((weapon) => !isRanged(weapon)).length;
    const rangedCount = leaderWeapons.filter((weapon) => isRanged(weapon)).length;

    if (meleeCount < 2 && !isRanged(weapon)) {
      setLeaderWeapons((prevWeapons) => [...prevWeapons, weapon]);
    } else if (rangedCount < 2 && isRanged(weapon)) {
      setLeaderWeapons((prevWeapons) => [...prevWeapons, weapon]);
    }
  }

  function addArmour(armour: Armour) {
    if (!hasArmourType(leaderArmour, armour.type)) {
      setLeaderArmour((prevArmour) => [...prevArmour, armour]);
    }
  }

  function addItem(item: Item) {
    setleaderItems((prevItems) => [...prevItems, item]);
  }

  function removeWeapon(weaponIndex: number) {
    const newLeaderWeapons = leaderWeapons.filter((weapon, index) => index !== weaponIndex);
    setLeaderWeapons(newLeaderWeapons);
  }

  function removeArmour(armourIndex: number) {
    const newLeaderArmour = leaderArmour.filter((armour, index) => index !== armourIndex);
    setLeaderArmour(newLeaderArmour);
  }

  function removeItem(itemIndex: number) {
    const newLeaderItems = leaderItems.filter((item, index) => index !== itemIndex);
    setleaderItems(newLeaderItems);
  }

  return (
    <DialogContent>
      <div className="space-y-2 px-4 py-2 w-fit">
        <Label htmlFor="name">Name</Label>
        <Input onChange={(e) => setLeaderName(e.target.value)} id="name" placeholder="Guntbert Krahl" />
      </div>

      <div className="flex w-fit border rounded-md ml-4">
        {statsHeader.map((stat, index) => (
          <div className="flex flex-col p-2 items-center" key={index}>
            <p>{stat}</p>
            <p>{dummyStats[index]}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 px-4">
        <div className="flex gap-3">
          <h2>Weapons</h2>
          <div>
            <p>{leaderWeapons.filter((weapon) => !isRanged(weapon)).length}/2 melee weapons</p>
            <p>{leaderWeapons.filter((weapon) => isRanged(weapon)).length}/2 ranged weapons</p>
          </div>
        </div>
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
            <li key={index} className="flex justify-between border-b py-1 cursor-pointer gap-3">
              <p>{weapon.name}</p>
              <div className="flex items-center gap-3">
                <p>{weapon.cost} gc</p>
                <X onClick={() => removeWeapon(index)} className="w-4" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-2 px-4">
        <div className="flex gap-3">
          <h2>Armour</h2>
          <div>
            <p>{leaderArmour.filter((armour) => armour.type === ArmourType.HELMET).length}/1 helmet</p>
            <p>{leaderArmour.filter((armour) => armour.type === ArmourType.CHEST_PIECE).length}/1 chest piece</p>
            <p>{leaderArmour.filter((armour) => armour.type === ArmourType.SHIELD).length}/1 shield</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
              add armour
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {dummyArmour.map((armour) => (
              <DropdownMenuItem
                onClick={() => addArmour(armour)}
                key={armour.id}
                className="flex justify-between cursor-pointer gap-3"
              >
                <p>{armour.name}</p>
                <p>{armour.cost} gc</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ol>
          {leaderArmour.map((armour, index) => (
            <li key={index} className="flex justify-between border-b py-1 cursor-pointer">
              <p>{armour.name}</p>
              <div className="flex items-center gap-3">
                <p>{armour.cost} gc</p>
                <X onClick={() => removeArmour(index)} className="w-4" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-2 px-4">
        <h2>Items</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
              add item
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {dummyItems.map((item) => (
              <DropdownMenuItem
                onClick={() => addItem(item)}
                key={item.id}
                className="flex justify-between cursor-pointer gap-3"
              >
                <p>{item.name}</p>
                <p>{item.cost} gc</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ol>
          {leaderItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-1 cursor-pointer">
              <p>{item.name}</p>
              <div className="flex items-center gap-3">
                <p>{item.cost} gc</p>
                <X onClick={() => removeItem(index)} className="w-4" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex justify-between px-2">
        <DialogClose asChild>
          <Button>submit</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="destructive">Remove</Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
