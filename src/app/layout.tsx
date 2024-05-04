import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/ui/footer";
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
      <body className={cn("font-sans antialiased min-h-full", lusitana.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
