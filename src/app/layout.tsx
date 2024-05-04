import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "@/components/theme-toggler";
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
    <html lang="en">
      <body className={cn("font-sans antialiased min-h-full", lusitana.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          <header className="flex justify-between items-center border-b px-4 py-2">
            <h1 className="text-2xl">The Pit</h1>
            <ThemeToggler />
          </header>
          {children}
          <footer className="px-4 py-2 border-t">bingus</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
