import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retro Pixel Sci-Fi OS",
  description: "A cinematic retro pixel sci-fi experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${vt323.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col font-vt323 text-terminal-green bg-black selection:bg-terminal-green selection:text-black">
        {children}
      </body>
    </html>
  );
}
