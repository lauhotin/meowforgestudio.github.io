import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meowforge Studio — Games that leave a mark",
  description: "Meowforge Studio creates bold, kinetic worlds. Discover NULLSTRIDE, now in development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
