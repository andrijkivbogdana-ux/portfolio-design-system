import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Review AI — Design System",
  description: "Component library and design tokens for the Portfolio Review AI tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
      </body>
    </html>
  );
}
