import { Button } from "../ui/button";

export default function SignupButton() {
  return (
    <a className="button__sign-up" href="/api/auth/signup">
      <Button variant="ghost" className="text-base">
        sign up
      </Button>
    </a>
  );
}
