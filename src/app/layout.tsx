import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K&T Textiles - Global Textile Export Solutions",
  description: "Specializing in premium fabric and apparel exports since 2020. Your trusted partner for quality textile logistics.",
  keywords: ['textile exports', 'fabric exports', 'apparel exports', 'logistics', 'quality control'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-100 py-5 shadow-sm">
          <div className="max-w-7xl mx-auto px-5">
            <nav className="relative">
              <input type="checkbox" id="nav-toggle" className="hidden peer/nav" />
              
              <div className="flex justify-between items-center">
                <Link href="/" className="text-[#1B2845] text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
                  K&T Textiles
                </Link>
                
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8">
                  <li><Link href="/#services" className="text-gray-600 font-medium hover:text-[#1B2845] transition-colors">Services</Link></li>
                  <li><Link href="/#suppliers" className="text-gray-600 font-medium hover:text-[#1B2845] transition-colors">Suppliers</Link></li>
                  <li><Link href="/#about" className="text-gray-600 font-medium hover:text-[#1B2845] transition-colors">About</Link></li>
                  <li><Link href="/#contact" className="text-gray-600 font-medium hover:text-[#1B2845] transition-colors">Contact</Link></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <label htmlFor="nav-toggle" className="p-2 md:hidden cursor-pointer">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              
              {/* Mobile Navigation */}
              <div className="hidden peer-checked/nav:block md:hidden absolute left-0 right-0 top-full bg-white mt-2 shadow-lg z-50 w-full rounded-b-lg border-t">
                <ul className="flex flex-col">
                  <li className="border-b">
                    <Link href="/#services" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-colors">Services</Link>
                  </li>
                  <li className="border-b">
                    <Link href="/#suppliers" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-colors">Suppliers</Link>
                  </li>
                  <li className="border-b">
                    <Link href="/#about" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-colors">About</Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
