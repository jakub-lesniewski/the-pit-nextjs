import Link from "next/link";
import { Button } from "../ui/button";

export default function ProfileButton() {
  return (
    <Button variant="ghost" className="text-base">
      <Link href="/profile">profile</Link>
    </Button>
  );
}
