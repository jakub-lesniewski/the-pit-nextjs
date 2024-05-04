import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-auto min-h-screen relative">
      <Image
        className="object-cover object-center -z-50 dark:invert"
        src="/mordheimMap.webp"
        alt="map of Mordheim"
        fill={true}
      />
      <Button className="text-2xl px-8 py-6" size="lg" variant="default">
        Enter
      </Button>
    </main>
  );
}
