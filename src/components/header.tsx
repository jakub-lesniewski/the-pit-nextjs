import { ThemeToggler } from "@/components/theme-toggler";
import Link from "next/link";
import LoginButton from "./auth/login-button";
import SignupButton from "./auth/signup-button";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b px-4 py-2 absolute w-full top-0 bg-background/60 backdrop-blur z-50">
      <Link href="/" className="">
        <Button variant="ghost" className="text-2xl">
          The Pit
        </Button>
      </Link>
      <div className="flex">
        <LoginButton />
        <SignupButton />
        <ThemeToggler />
      </div>
    </header>
  );
}
