import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meowforge-studio.lau-ho-tin.chatgpt.site"),
  title: "MEOMI FORGE GAME STUDIO — NULLSTRIDE",
  description: "MEOMI FORGE GAME STUDIO / 喵米遊戲工坊. Discover NULLSTRIDE / 零域之痕, a fast-paced sci-fi action platformer with precision sword combat and fluid parkour.",
  openGraph: {
    title: "NULLSTRIDE / 零域之痕 — MEOMI FORGE GAME STUDIO",
    description: "Precision sword combat. High-speed parkour. Enter the Null Zone. 精準劍術、高速跑酷，踏入神秘零域。",
    locale: "en_US",
    alternateLocale: ["zh_TW"],
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "NULLSTRIDE / 零域之痕 — new character key art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NULLSTRIDE / 零域之痕 — MEOMI FORGE GAME STUDIO",
    description: "Precision sword combat. High-speed parkour. Enter the Null Zone.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
