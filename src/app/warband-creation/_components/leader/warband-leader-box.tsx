import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { HeroTemplate } from "@/types/characters/CharacterTemplate";
import { UserCharacter } from "@/types/characters/UserCharacter";
import WarbandLeaderDialog from "./warband-leader-dialog";

type WarbandLeaderBoxProps = {
  leaderTemplate: HeroTemplate;
  currentLeader?: UserCharacter;
  leaderHandlers: {
    addLeader: (newLeader: UserCharacter) => void;
    deleteLeader: () => void;
  };
};

export default function WarbandLeaderBox({ leaderTemplate, currentLeader, leaderHandlers }: WarbandLeaderBoxProps) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Leader</h2>
      <Dialog>
        <DialogTrigger asChild>
          {currentLeader ? (
            <div className="border-b-2 p-2 flex justify-between cursor-pointer">
              <p>{currentLeader.name}</p>
              <p>{currentLeader.type.type}</p>
            </div>
          ) : (
            <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
              add leader
            </Button>
          )}
        </DialogTrigger>
        <WarbandLeaderDialog
          leaderTemplate={leaderTemplate}
          currentLeader={currentLeader}
          leaderHandlers={leaderHandlers}
        />
      </Dialog>
    </div>
  );
}
