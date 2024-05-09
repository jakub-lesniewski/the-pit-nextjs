import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { ThemeToggler } from "../theme-toggler";
import ProfileButton from "../auth/profile-button";
import LogoutButton from "../auth/logout-button";
import LoginButton from "../auth/login-button";
import SignupButton from "../auth/signup-button";

type HamburgerMenuProps = {
  user?: UserProfile;
};

export default function HamburgerMenu({ user }: HamburgerMenuProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <ThemeToggler />
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
      </SheetContent>
    </Sheet>
  );
}
