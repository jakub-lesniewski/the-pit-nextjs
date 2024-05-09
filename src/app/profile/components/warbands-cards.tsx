import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

const dummyWarbands = [
  {
    id: 1,
    name: "warband 1",
    type: "type 1",
  },
  {
    id: 2,
    name: "warband 2",
    type: "type 2",
  },
  {
    id: 3,
    name: "warband 3",
    type: "type 3",
  },
  {
    id: 4,
    name: "warband 4",
    type: "type 4",
  },
  {
    id: 5,
    name: "warband 5",
    type: "type 5",
  },
];

export default function WarbandsCard() {
  return (
    <Card>
      <CardContent className="px-6 py-4 flex flex-col gap-3 ">
        <h1 className="text-xl border-b pt-1 pb-4">My warbands</h1>
        <Link href="/warband-creation">
          <Button className="text-base">Create Warband</Button>
        </Link>
        <ul>
          {dummyWarbands.map((warband) => (
            <Popover key={warband.id}>
              <PopoverTrigger asChild>
                <li className="border-b p-1 cursor-pointer flex items-center">
                  <p className="pr-2 border-r text-lg tracking-wide">{warband.name}</p>
                  <p className="pl-2 text-lg tracking-wide">{warband.type}</p>
                </li>
              </PopoverTrigger>
              <PopoverContent side="right" align="start" className="flex gap-1 p-1">
                <Button variant="ghost" size="sm">
                  edit
                </Button>
                <Button variant="destructive" size="sm">
                  delete
                </Button>
              </PopoverContent>
            </Popover>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
