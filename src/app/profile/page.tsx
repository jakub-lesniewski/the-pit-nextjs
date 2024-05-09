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
    <div className="flex gap-3 flex-col">
      <ProfileCard user={user} />
      <WarbandsCard />
    </div>
  );
}
