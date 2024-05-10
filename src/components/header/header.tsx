"use client";

import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";
import Navbar from "./navbar";
import { Button } from "../ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

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
        <div className="lg:hidden">
          <HamburgerMenu user={user} />
        </div>
        <div className="hidden lg:block">
          <Navbar user={user} />
        </div>
      </nav>
    </header>
  );
}
