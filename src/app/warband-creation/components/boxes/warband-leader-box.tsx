import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Hero } from "@/types/Hero";
import WarbandLeaderDialog from "../dialogs/warband-leader-dialog";

type WarbandLeaderBoxProps = {
  leader: Hero;
};

export default function WarbandLeaderBox({ leader }: WarbandLeaderBoxProps) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Leader</h2>
      {leader ? (
        <Dialog>
          <DialogTrigger>
            <div className="border-b-2 p-2 flex justify-between cursor-pointer">
              <p>{leader.name}</p>
              <p>{leader.type}</p>
            </div>
          </DialogTrigger>
          <WarbandLeaderDialog />
        </Dialog>
      ) : (
        <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
          add leader
        </Button>
      )}
    </div>
  );
}
