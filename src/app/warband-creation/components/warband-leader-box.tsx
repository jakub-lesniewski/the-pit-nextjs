import { Button } from "@/components/ui/button";
import { Hero } from "../page";

type WarbandLeaderBoxProps = {
  leader: Hero;
};

export default function WarbandLeaderBox({ leader }: WarbandLeaderBoxProps) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Leader</h2>
      {leader ? (
        <div className="border-b-2 p-2 flex justify-between cursor-pointer">
          <p>{leader.name}</p>
          <p>{leader.type}</p>
        </div>
      ) : (
        <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
          add leader
        </Button>
      )}
    </div>
  );
}
