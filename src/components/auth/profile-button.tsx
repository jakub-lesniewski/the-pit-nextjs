import Link from "next/link";
import { Button } from "../ui/button";

export default function ProfileButton() {
  return (
    <Link href="/profile">
      <Button variant="ghost" className="text-base">
        profile
      </Button>
    </Link>
  );
}
