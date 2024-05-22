import { CharacterStats } from "@/types/CharacterStats";

const statsHeader = ["M", "WS", "BS", "S", "T", "W", "I", "A", "Ld"];

type StatsBoxProps = {
  CharacterStats: CharacterStats;
};

export default function StatsBox({ CharacterStats }: StatsBoxProps) {
  return (
    <div className="flex w-fit border rounded-md ml-4">
      {statsHeader.map((stat, index) => (
        <div className="flex flex-col p-2 items-center" key={index}>
          <p>{stat}</p>
          <p>{Object.values(CharacterStats)[index]}</p>
        </div>
      ))}
    </div>
  );
}
