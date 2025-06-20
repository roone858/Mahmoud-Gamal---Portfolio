// src/app/(main)/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Make sure the Navbar component exists at this path, or update the path if necessary
import Navbar from "../components/NavMenu";
import SplashCursor from "@/components/SplashCursor";
import MobileMenu from "@/components/MobileMenu";
import { RouteTransition } from "@/components/RouteTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahmoud Gamal - Portfolio",
  description: "Freelance Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-amber-700 text-white`}>
        <SplashCursor />
        <MobileMenu />
        <RouteTransition/>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
