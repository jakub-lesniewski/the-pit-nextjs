import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CharacterNameBoxProps = {
  currentName: string;
  setCharacterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CharacterNameBox({ setCharacterName, currentName }: CharacterNameBoxProps) {
  return (
    <div className="space-y-2 px-4 py-2 w-fit">
      <Label htmlFor="name">Name</Label>
      <Input onChange={setCharacterName} id="name" placeholder="Guntbert Krahl" value={currentName} />
    </div>
  );
}
