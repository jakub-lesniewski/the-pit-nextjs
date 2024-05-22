import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Weapon, isRanged } from "@/types/Weapon";
import { X } from "lucide-react";

type WeaponBoxProps = {
  characterWeapons: Weapon[];
  weaponSelection: Weapon[];
  addWeapon: (weapon: Weapon) => void;
  removeWeapon: (weaponIndex: number) => void;
};

export default function WeaponBox({ characterWeapons, weaponSelection, addWeapon, removeWeapon }: WeaponBoxProps) {
  return (
    <div className="space-y-2 py-2 px-4 border rounded-md ml-4 w-fit">
      <div className="flex gap-3">
        <h2>Weapons</h2>
        <div>
          <p>{characterWeapons.filter((weapon) => !isRanged(weapon)).length}/2 melee weapons</p>
          <p>{characterWeapons.filter((weapon) => isRanged(weapon)).length}/2 ranged weapons</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add weapon
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {weaponSelection.map((weapon) => (
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
        {characterWeapons.map((weapon, index) => (
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
  );
}
