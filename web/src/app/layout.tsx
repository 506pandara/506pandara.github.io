import type { Metadata } from "next";
import "./home.css";
import HomeForest from "@/components/home/HomeForest";
import SiteNav from "@/components/home/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";

export const metadata: Metadata = {
  title: "FTC Team 506 Pandara",
  description:
    "FTC Team 506 Pandara — a FIRST Tech Challenge robotics team from Palm Harbor University High School, engineering competition robots and building leaders since 2007.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout applies to every route, not a single page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Yuji+Syuku&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HomeForest />
        <div className="app">
          <SiteNav />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
