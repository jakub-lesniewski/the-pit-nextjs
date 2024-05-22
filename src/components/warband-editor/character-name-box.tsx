import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CharacterNameBoxProps = {
  setCharacterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CharacterNameBox({ setCharacterName }: CharacterNameBoxProps) {
  return (
    <div className="space-y-2 px-4 py-2 w-fit">
      <Label htmlFor="name">Name</Label>
      <Input onChange={setCharacterName} id="name" placeholder="Guntbert Krahl" />
    </div>
  );
}
