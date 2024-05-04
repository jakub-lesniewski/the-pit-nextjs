import { ThemeToggler } from "@/components/theme-toggler";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b px-4 py-2 absolute w-full top-0 bg-background/60 backdrop-blur z-50">
      <Link href="/" className="text-2xl">
        The Pit
      </Link>
      <ThemeToggler />
    </header>
  );
}
