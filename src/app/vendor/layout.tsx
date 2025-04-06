"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't apply layout to login page
  if (pathname === '/vendor/login') {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Vendor Portal Navigation */}
      <nav className="bg-[#1B2845] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/vendor/dashboard" className="font-bold text-xl">
                  K&T Vendor Portal
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/vendor/dashboard"
                  className={`${
                    pathname === '/vendor/dashboard'
                      ? 'border-b-2 border-white'
                      : 'hover:border-b-2 hover:border-gray-300'
                  } inline-flex items-center px-1 pt-1 text-sm font-medium h-full`}
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/vendor/login"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Tracker
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#34495e] hover:bg-[#2c3e50] focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
} 