"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const { user } = useUser();

  function getUsersInitials(name: string) {
    return name.split(" ").map((n) => n[0]);
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex gap-3">
        <Card>
          <CardContent className="px-6 py-4 flex flex-col gap-3">
            <div className="flex gap-3 items-center border-b pb-2">
              <Avatar>
                <AvatarFallback className="font-mono">{getUsersInitials(user.name as string)}</AvatarFallback>
              </Avatar>
              <h1 className="text-lg">{user.name}</h1>
            </div>
            <div>
              <Link href="/warband-creation">
                <Button>Create Warband</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="px-6 py-4 flex flex-col gap-3">
            <h1>My warbands</h1>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
