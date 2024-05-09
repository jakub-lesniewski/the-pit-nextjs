"use client";

import Link from "next/link";
import LoginButton from "./auth/login-button";
import SignupButton from "./auth/signup-button";
import LogoutButton from "./auth/logout-button";
import ProfileButton from "./auth/profile-button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "./ui/button";
import { ThemeToggler } from "@/components/theme-toggler";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="border-b px-4 py-2 absolute w-full top-0 bg-background/60 backdrop-blur z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="">
          <Button variant="ghost" className="text-2xl">
            The Pit
          </Button>
        </Link>
        <div className="flex">
          {user ? (
            <>
              <ProfileButton />
              <LogoutButton />
            </>
          ) : (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )}
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
}
