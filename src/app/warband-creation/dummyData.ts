import { Armour, ArmourType } from "@/types/Armour";
import { CharacterStats } from "@/types/CharacterStats";
import { Item } from "@/types/Item";
import { Weapon } from "@/types/Weapon";
import { UserWarband } from "@/types/warbands/UserWarband";
import { WarbandTemplate } from "@/types/warbands/WarbandTemplate";

export const dummyWeapons: Weapon[] = [
  {
    id: "1",
    name: "Sword",
    strength: 1,
    range: undefined,
    cost: 20,
  },
  {
    id: "2",
    name: "Handgun",
    strength: 3,
    range: 8,
    cost: 35,
  },
  {
    id: "4",
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

export const dummyArmour: Armour[] = [
  {
    id: "2",
    name: "Gambeson",
    cost: 20,
    type: ArmourType.CHEST_PIECE,
  },
  {
    id: "3",
    name: "Helmet",
    cost: 50,
    type: ArmourType.HELMET,
  },
  {
    id: "4",
    name: "Shield",
    cost: 40,
    type: ArmourType.SHIELD,
  },
];

export const dummyUserWarband: UserWarband = {
  id: "123",
  name: "Praagmensch",
  leader: {
    id: "1",
    name: "Jan Pepik",
    type: "Mercenary Captain",
    weapons: dummyWeapons,
    armour: dummyArmour,
  },
  heroes: [
    {
      id: "2",
      name: "Tobiasz Marszałek",
      type: "Youngblood",
    },
    {
      id: "3",
      name: "Daniik Oplachenko",
      type: "Champion",
    },
  ],
  henchmen: [
    {
      id: "4",
      name: "Dudes",
      type: "Marksmen",
      amount: 2,
    },
    {
      id: "5",
      name: "Dudes vol. 1",
      type: "Swordsmen",
      amount: 3,
    },
    {
      id: "6",
      name: "Dudes vol. 2",
      type: "Warriors",
      amount: 1,
    },
  ],
  funds: 500,
};

export const dummyItems: Item[] = [
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

export const dummyStats: CharacterStats = {
  movement: 7,
  weapon_skill: 3,
  ballistic_skill: 3,
  strength: 3,
  toughness: 4,
  wounds: 1,
  initiative: 3,
  attacks: 1,
  leadership: 7,
};

export const dummyWarbandTemplate: WarbandTemplate = {
  id: "wawabingus",
  type: "Reiklanders",
  leader: {
    id: "10",
    type: "Reiklander Mercenary Captain",
    stats: {
      movement: 4,
      weapon_skill: 3,
      ballistic_skill: 3,
      strength: 3,
      toughness: 3,
      wounds: 1,
      initiative: 4,
      attacks: 1,
      leadership: 7,
    },
    weaponSelection: dummyWeapons,
    armourSelection: dummyArmour,
    cost: 50,
  },
  heroes: [
    {
      id: "11",
      type: "Champion",
      stats: {
        movement: 4,
        weapon_skill: 3,
        ballistic_skill: 3,
        strength: 3,
        toughness: 3,
        wounds: 1,
        initiative: 4,
        attacks: 1,
        leadership: 7,
      },
      weaponSelection: dummyWeapons,
      armourSelection: dummyArmour,
      cost: 50,
    },
    {
      id: "12",
      type: "Youngblood",
      stats: {
        movement: 4,
        weapon_skill: 3,
        ballistic_skill: 3,
        strength: 3,
        toughness: 3,
        wounds: 1,
        initiative: 4,
        attacks: 1,
        leadership: 7,
      },
      weaponSelection: dummyWeapons,
      armourSelection: dummyArmour,
      cost: 50,
    },
  ],
  henchmen: [
    {
      id: "13",
      type: "Swordsman",
      stats: {
        movement: 4,
        weapon_skill: 3,
        ballistic_skill: 3,
        strength: 3,
        toughness: 3,
        wounds: 1,
        initiative: 4,
        attacks: 1,
        leadership: 7,
      },
      weaponSelection: dummyWeapons,
      armourSelection: dummyArmour,
      cost: 50,
    },
  ],
  funds: 500,
};
