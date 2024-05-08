import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <a href="/api/auth/login">
      <Button variant="ghost" className="text-base">
        login
      </Button>
    </a>
  );
}
