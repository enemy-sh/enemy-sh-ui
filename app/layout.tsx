import type { Metadata } from "next";
import localFont from "next/font/local";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "enemy.sh",
  description: "Turn enenemies into allies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
