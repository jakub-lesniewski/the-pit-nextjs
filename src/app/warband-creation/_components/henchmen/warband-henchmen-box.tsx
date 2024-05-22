import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CharacterTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";

type WarbandHenchmenBox = {
  henchmenTemplate: CharacterTemplate[];
  currentHenchmen?: UserCharacter[];
};

export default function WarbandHenchmenBox({ henchmenTemplate, currentHenchmen }: WarbandHenchmenBox) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Henchmen</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add henchmen
          </Button>
        </DialogTrigger>
        <DialogContent>hi</DialogContent>
      </Dialog>
      <ol>
        {currentHenchmen?.map((henchman) => (
          <Dialog key={henchman.id}>
            <DialogTrigger asChild>
              <li className="border-b-2 p-2 flex justify-between cursor-pointer">
                <p>{henchman.name}</p>
                <p>{`${henchman.type} x${henchman.amount}`}</p>
              </li>
            </DialogTrigger>
            <DialogContent>hi</DialogContent>
          </Dialog>
        ))}
      </ol>
    </div>
  );
}
