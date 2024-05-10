import { Button } from "@/components/ui/button";
import { Hero } from "../page";

type WarbandHeroesBoxProps = {
  heroes: Hero[];
};

export default function WarbandHeroesBox({ heroes }: WarbandHeroesBoxProps) {
  return (
    <div className="flex flex-col gap-1 border p-4">
      <h2>Heroes</h2>
      <Button className="w-full tracking-wide text-base" variant="outline" size="sm">
        add hero
      </Button>
      <ol>
        {heroes.map((hero) => (
          <li className="border-b-2 p-2 flex justify-between cursor-pointer" key={hero.id}>
            <p>{hero.name}</p>
            <p>{hero.type}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
