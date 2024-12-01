import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

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
