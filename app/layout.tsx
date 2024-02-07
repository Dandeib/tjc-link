import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TJC Erlaubte Links",
  description: "Erlaubte links vom TJC Discord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="font-mono">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
