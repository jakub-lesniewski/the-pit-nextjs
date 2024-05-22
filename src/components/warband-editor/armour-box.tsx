import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Armour, ArmourType } from "@/types/Armour";
import { X } from "lucide-react";

type ArmourBoxProps = {
  characterArmour: Armour[];
  armourSelection: Armour[];
  armourHandler: {
    addArmour: (armour: Armour) => void;
    removeArmour: (armourIndex: number) => void;
  };
};

export default function ArmourBox({ characterArmour, armourSelection, armourHandler }: ArmourBoxProps) {
  const { addArmour, removeArmour } = armourHandler;

  return (
    <div className="space-y-2 px-4 ml-4 py-2 border rounded-md w-fit">
      <div className="flex gap-3">
        <h2>Armour</h2>
        <div>
          <p>{characterArmour.filter((armour) => armour.type === ArmourType.HELMET).length}/1 helmet</p>
          <p>{characterArmour.filter((armour) => armour.type === ArmourType.CHEST_PIECE).length}/1 chest piece</p>
          <p>{characterArmour.filter((armour) => armour.type === ArmourType.SHIELD).length}/1 shield</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add armour
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {armourSelection.map((armour) => (
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
        {characterArmour.map((armour, index) => (
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
  );
}
