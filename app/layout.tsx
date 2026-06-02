import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asma Rahali — Full Stack Web Developer",
  description:
    "Portfolio of Asma Rahali, a Full Stack Web Developer crafting elegant, user-friendly web applications with Laravel, Next.js and React.",
  keywords: [
    "Asma Rahali",
    "Full Stack Web Developer",
    "Laravel",
    "Next.js",
    "React",
    "Filament",
    "Portfolio",
  ],
  authors: [{ name: "Asma Rahali" }],
  openGraph: {
    title: "Asma Rahali — Full Stack Web Developer",
    description:
      "Crafting elegant, user-friendly web applications with Laravel, Next.js and React.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
