import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K&T Textiles - Global Textile Export Solutions",
  description: "Specializing in premium fabric and apparel exports since 2020. Your trusted partner for quality textile logistics.",
  keywords: ['textile exports', 'fabric exports', 'apparel exports', 'logistics', 'quality control'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
