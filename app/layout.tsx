import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meowforge-studio.lau-ho-tin.chatgpt.site"),
  title: "Meowforge Studio — Games that leave a mark",
  description: "Meowforge Studio creates bold, kinetic worlds. Discover NULLSTRIDE, now in development.",
  openGraph: {
    title: "Meowforge Studio — NULLSTRIDE",
    description: "Games that leave a mark.",
    images: [{ url: "/og.png", width: 1800, height: 1012, alt: "Meowforge Studio — NULLSTRIDE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meowforge Studio — NULLSTRIDE",
    description: "Games that leave a mark.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
