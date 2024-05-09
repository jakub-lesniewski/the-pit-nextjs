import LoginButton from "../auth/login-button";
import SignupButton from "../auth/signup-button";
import LogoutButton from "../auth/logout-button";
import ProfileButton from "../auth/profile-button";
import { ThemeToggler } from "@/components/theme/theme-toggler";
import { UserProfile } from "@auth0/nextjs-auth0/client";

type NavbarProps = {
  user?: UserProfile;
};

export default function Navbar({ user }: NavbarProps) {
  return (
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
  );
}
