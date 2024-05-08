import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <a href="/api/auth/logout">
      <Button variant="ghost" className="text-base">
        logout
      </Button>
    </a>
  );
}
