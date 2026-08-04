import type { Metadata } from "next";
import { Anton, Bangers, Inter } from "next/font/google";
import BambooSide from "@/components/ui/BambooSide";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FTC Team 506 Pandara",
  description:
    "FTC Team 506 Pandara — a FIRST Tech Challenge robotics team from Palm Harbor University High School, engineering competition robots and building leaders since 2007.",
  icons: {
    icon: "/favicon-panda.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bangers.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-purple focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white"
        >
          Skip to main content
        </a>
        <BambooSide />
        {children}
      </body>
    </html>
  );
}
