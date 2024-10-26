import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from '@next/font/google';
import Cursor from "./utils/useMousePosition";
const roboto = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700']
}
)

export const metadata: Metadata = {
  title: "ben melville",
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Cursor/>
        {children}
      </body>
    </html>
  );
}
