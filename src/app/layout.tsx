import type { Metadata } from "next";
import { Geist, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const editorial = STIX_Two_Text({
  variable: "--font-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Ruang Taut — Referensi untuk build", template: "%s | Ruang Taut" },
  description: "Katalog tools AI, komponen UI, dokumentasi, dan referensi desain untuk development dan vibecoding. Cari berdasarkan topik dan kategori.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`dark ${geistSans.variable} ${editorial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
