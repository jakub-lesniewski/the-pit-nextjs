import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type User = {
  name?: string | null | undefined;
};

type ProfileCardProps = {
  user: User;
};

export default function ProfileCard({ user }: ProfileCardProps) {
  function getUsersInitials(name: string) {
    return name.split(" ").map((n) => n[0]);
  }

  return (
    <Card>
      <CardContent className="px-6 py-4 flex flex-col gap-3">
        <div className="flex gap-3 items-center border-b pb-2">
          <Avatar>
            <AvatarFallback className="font-mono">{getUsersInitials(user.name as string)}</AvatarFallback>
          </Avatar>
          <h1 className="text-xl tracking-wider">{user.name}</h1>
        </div>
        <div className="py-2">
          <Link href="/warband-creation">
            <Button className="text-base">Create Warband</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
