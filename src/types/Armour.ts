export type Armour = {
  id: string;
  name: string;
  cost: number;
  type: ArmourType;
};

export enum ArmourType {
  CHEST_PIECE = "Chest Piece",
  HELMET = "Helmet",
  SHIELD = "Shield",
}
