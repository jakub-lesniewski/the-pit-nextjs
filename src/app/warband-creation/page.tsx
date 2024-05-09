import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WarbandCreation() {
  return (
    <Card className="min-w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg tracking-wide">New Reiklanders Warband</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <Label className="text-base">Warband&apos;s Name</Label>
          <Input type="text" placeholder="Rottmeister's Fighting Few" id="warbandsName" />
        </div>
        <div>
          <h2>Leader</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add leader
          </Button>
        </div>
        <div>
          <h2>Heroes</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add hero
          </Button>
          <ol>
            <li className="border-b-2 p-2 flex gap-2 cursor-pointer">
              <p className="border-r-2 pr-2">Baltazar Gąbka</p>
              <p>Youngblood</p>
            </li>
            <li className="border-b-2 p-2 flex gap-2 cursor-pointer">
              <p className="border-r-2 pr-2">Zygmunt Ząbek</p>
              <p>Youngblood</p>
            </li>
            <li className="border-b-2 p-2 flex gap-2 cursor-pointer">
              <p className="border-r-2 pr-2">Golarz Filip</p>
              <p>Youngblood</p>
            </li>
          </ol>
        </div>
        <div>
          <h2>Henchmen groups</h2>
          <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
            add henchmen group
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full tracking-widest text-base" size="sm">
          submit
        </Button>
      </CardFooter>
    </Card>
  );
}
