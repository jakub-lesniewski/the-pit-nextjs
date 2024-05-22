import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WarbandNameBox() {
  return (
    <div className="p-4 border">
      <Label htmlFor="warbandName" className="text-lg">
        Name
      </Label>
      <Input id="warbandName" type="text" placeholder="Rottmeister's Fighting Few" />
    </div>
  );
}
