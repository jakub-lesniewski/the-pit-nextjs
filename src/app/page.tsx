import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen relative">
      <Image
        className="object-cover object-center -z-50 dark:invert"
        src="/mordheimMap.webp"
        alt="map of Mordheim"
        fill={true}
      />
      <div className="flex gap-4">
        <Link href="authenticated-user">
          <Button className="text-2xl px-8 py-6" size="lg" variant="default">
            Sign in
          </Button>
        </Link>
        <Button className="text-2xl px-8 py-6" size="lg" variant="outline">
          Register
        </Button>
      </div>
    </main>
  );
}
