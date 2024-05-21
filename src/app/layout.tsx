import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "@/components/header/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import "./globals.css";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Pit",
  description: "The Mordheim warband builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <UserProvider>
        <body className={cn("font-sans antialiased relative", lusitana.className)}>
          <ThemeProvider attribute="class" disableTransitionOnChange={false}>
            <Image
              className="object-cover object-center dark:invert -z-50"
              quality={10}
              src="/mordheimMap.webp"
              alt="map of Mordheim"
              fill={true}
            />
            <Header />
            <main className="min-h-screen flex items-center justify-center">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
