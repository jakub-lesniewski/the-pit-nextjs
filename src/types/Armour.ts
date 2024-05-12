export type Armour = {
  id: string;
  name: string;
  cost: number;
  type: ArmourType;
};

export enum ArmourType {
  HELMET = "Helmet",
  CHEST_PIECE = "Chest Piece",
  SHIELD = "Shield",
}

export function hasArmourType(armourList: Armour[], armourType: ArmourType): boolean {
  return armourList.some((armour) => armour.type === armourType);
}
