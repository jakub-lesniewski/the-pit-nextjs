import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WarbandLeaderDialog from "./warband-leader-dialog";
import { CharacterTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";

type WarbandLeaderBoxProps = {
  leaderTemplate: CharacterTemplate;
  currentLeader?: UserCharacter;
};

export default function WarbandLeaderBox({ leaderTemplate, currentLeader }: WarbandLeaderBoxProps) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Leader</h2>
      {currentLeader ? (
        <Dialog>
          <DialogTrigger>
            <div className="border-b-2 p-2 flex justify-between cursor-pointer">
              <p>{currentLeader.name}</p>
              <p>{currentLeader.type}</p>
            </div>
          </DialogTrigger>
          <WarbandLeaderDialog leaderTemplate={leaderTemplate} currentLeader={currentLeader} />
        </Dialog>
      ) : (
        <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
          add leader
        </Button>
      )}
    </div>
  );
}
