import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HenchmenTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter, UserHenchmen } from "@/types/characters/UserCharacter";
import WarbandHenchmenDialog from "./warband-henchmen-dialog";
import { useState } from "react";

type WarbandHenchmenBox = {
  henchmenTemplate: HenchmenTemplate[];
  currentHenchmen?: UserHenchmen[];
  henchmenHandlers: {
    addHenchmen: (newHenchmen: UserHenchmen) => void;
    deleteHenchmen: (henchmenId: string) => void;
  };
};

export default function WarbandHenchmenBox({
  henchmenTemplate,
  currentHenchmen,
  henchmenHandlers,
}: WarbandHenchmenBox) {
  const [selectedHenchmen, setSelectedHenchmen] = useState<UserHenchmen>();

  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Henchmen</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add henchmen
          </Button>
        </DialogTrigger>
        <WarbandHenchmenDialog henchmenTemplate={henchmenTemplate} henchmenHandlers={henchmenHandlers} />
      </Dialog>
      <ol>
        {currentHenchmen?.map((henchman) => (
          <Dialog key={henchman.id}>
            <DialogTrigger asChild>
              <li
                className="border-b-2 p-2 flex justify-between cursor-pointer"
                onClick={() => {
                  setSelectedHenchmen(henchman);
                }}
              >
                <p>{henchman.name}</p>
                <p>{`${henchman.type.type} x${henchman.amount}`}</p>
              </li>
            </DialogTrigger>
            <WarbandHenchmenDialog
              henchmenTemplate={henchmenTemplate}
              currentHenchmen={selectedHenchmen}
              henchmenHandlers={henchmenHandlers}
            />
          </Dialog>
        ))}
      </ol>
    </div>
  );
}
