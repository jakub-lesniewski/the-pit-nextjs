import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "@/components/header/header";
import Footer from "@/components/ui/footer";
import "./globals.css";
import Image from "next/image";

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
        <body className={cn("font-sans antialiased min-h-full", lusitana.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange={false}>
            <Image
              className="object-cover object-center -z-50 dark:invert"
              src="/mordheimMap.webp"
              alt="map of Mordheim"
              fill={true}
            />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
