// src/app/(main)/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Navbar from "@/components/NavMenu";
import MobileMenu from "@/components/MobileMenu";
import { RouteTransition } from "@/components/RouteTransition";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"], // You can customize the weights
  display: "swap",
  variable: "--font-poppins",
});

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
      <body className={`${poppins.variable} text-white`}>
        <Navbar />
        <MobileMenu />
        <main>
          <RouteTransition />
          {children}
        </main>
      </body>
    </html>
  );
}
