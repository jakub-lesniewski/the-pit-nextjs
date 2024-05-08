"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import WarbandsCard from "./components/warbands-cards";
import ProfileCard from "./components/profile-card";

export default function Page() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex gap-3 flex-col md:flex-row">
        <ProfileCard user={user} />
        <WarbandsCard />
      </div>
    </main>
  );
}
