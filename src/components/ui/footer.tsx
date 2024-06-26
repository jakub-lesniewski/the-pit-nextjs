import Link from "next/link";
import { Button } from "./button";

export default function Footer() {
  return (
    <footer className="px-4 py-2 border-t w-full bg-background/60 backdrop-blur">
      <div className="flex items-center">
        <p>sources:</p>
        <a href="https://broheim.net/" target="_blank">
          <Button variant="link" className="text-base">
            broheim
          </Button>
        </a>
        <a href="https://mordheimer.net/" target="_blank">
          <Button variant="link" className="text-base">
            mordheimer
          </Button>
        </a>
        <Link href="/disclaimer">
          <Button variant="link" className="text-base">
            disclaimer
          </Button>
        </Link>
      </div>
    </footer>
  );
}
