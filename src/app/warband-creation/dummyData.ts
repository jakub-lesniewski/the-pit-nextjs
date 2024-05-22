import { Armour, ArmourType } from "@/types/Armour";
import { CharacterStats } from "@/types/CharacterStats";
import { Item } from "@/types/Item";
import { Weapon } from "@/types/Weapon";
import { UserWarband } from "@/types/warbands/UserWarband";
import { WarbandTemplate } from "@/types/warbands/WarbandTemplate";

export const dummyUserWarband: UserWarband = {
  id: "123",
  name: "Praagmensch",
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
};

export const dummyWeapons: Weapon[] = [
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

export const dummyArmour: Armour[] = [
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
    id: "123",
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
    weaponSelection: [
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
    ],
    armourSelection: [
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
    ],
    cost: 50,
  },
  heroes: [
    {
      id: "4123452134",
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
      weaponSelection: [
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
      ],
      armourSelection: [
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
      ],
      cost: 50,
    },
    {
      id: "456",
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
      weaponSelection: [
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
      ],
      armourSelection: [
        {
          id: "789",
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
      ],
      cost: 50,
    },
  ],
  henchmen: [
    {
      id: "rqwrqwerqw",
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
      weaponSelection: [
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
      ],
      armourSelection: [
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
      ],
      cost: 50,
    },
  ],
  funds: 500,
};
