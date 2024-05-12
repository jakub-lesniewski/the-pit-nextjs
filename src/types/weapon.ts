export type Weapon = {
  id: string;
  name: string;
  strength: number;
  range?: number;
  cost: number;
};

export function isRanged(weapon: Weapon): boolean {
  return weapon.range !== undefined;
}
