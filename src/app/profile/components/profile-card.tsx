import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

type ProfileCardProps = {
  user: UserProfile;
};

export default function ProfileCard({ user }: ProfileCardProps) {
  function getUsersInitials(name: string) {
    return name.split(" ").map((n) => n[0]);
  }

  return (
    <Card>
      <CardContent className="px-6 py-4 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarFallback className="font-mono">{getUsersInitials(user.name as string)}</AvatarFallback>
          </Avatar>
          <h1 className="text-xl tracking-wider">{user.name}</h1>
        </div>
      </CardContent>
    </Card>
  );
}
