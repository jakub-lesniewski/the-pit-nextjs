import { CardHeader, CardTitle } from "@/components/ui/card";

type WarbandTitleBoxProps = {
  funds: number;
};

export default function WarbandTitleBox({ funds }: WarbandTitleBoxProps) {
  return (
    <CardHeader className="flex flex-row justify-between items-center">
      <CardTitle className="text-lg tracking-wide w-fit">New Reiklanders Warband</CardTitle>
      <p className="text-lg font-semibold">{funds} gc</p>
    </CardHeader>
  );
}
