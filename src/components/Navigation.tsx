"use client";

import Link from 'next/link';
import { AnimatedButton } from "@/components/AnimatedButton";
import { useEffect } from 'react';

export function Navigation() {
  useEffect(() => {
    // Close mobile menu when clicking on navigation links
    const handleNavLinkClick = () => {
      const navToggle = document.getElementById('nav-toggle') as HTMLInputElement;
      if (navToggle) {
        navToggle.checked = false;
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="/"], a[href^="/#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 py-5 shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="relative">
          <input type="checkbox" id="nav-toggle" className="hidden peer/nav" />
          
          <div className="flex justify-between items-center">
            <Link href="/" className="text-[#1B2845] text-2xl font-bold tracking-tight hover:opacity-90 transition-all duration-300 relative inline-block group">
              <span className="relative z-10">K&T Textiles</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 items-center">
              <li className="group">
                <Link href="/suppliers" className="text-gray-600 font-medium hover:text-[#1B2845] transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Suppliers</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group relative">
                <Link href="/fabrics" className="text-gray-600 font-medium hover:text-[#1B2845] transition-all duration-300 relative inline-block flex items-center">
                  <span className="relative z-10">Fabrics</span>
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/fabrics" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">All Fabrics</div>
                      <div className="text-xs text-gray-500">Overview & comparison</div>
                    </Link>
                    <Link href="/fabrics/nyco-50-50" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">NYCO 50/50</div>
                      <div className="text-xs text-gray-500">Cotton-nylon blend</div>
                    </Link>
                    <Link href="/fabrics/ripstop" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">Ripstop</div>
                      <div className="text-xs text-gray-500">Tear-resistant weave</div>
                    </Link>
                    <Link href="/fabrics/berry-amendment" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">Berry Amendment</div>
                      <div className="text-xs text-gray-500">Compliance & requirements</div>
                    </Link>
                    <Link href="/fabrics/camouflage-patterns" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">Camouflage Patterns</div>
                      <div className="text-xs text-gray-500">Military & commercial designs</div>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/logistics" className="text-gray-600 font-medium hover:text-[#1B2845] transition-all duration-300 relative inline-block flex items-center">
                  <span className="relative z-10">Logistics</span>
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/logistics" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">Logistics Overview</div>
                      <div className="text-xs text-gray-500">Tracking & technology</div>
                    </Link>
                    <Link href="/logistics/itar-ear-restrictions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B2845] transition-colors">
                      <div className="font-medium">ITAR & EAR Restrictions</div>
                      <div className="text-xs text-gray-500">Export compliance guide</div>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group">
                <Link href="/news" className="text-gray-600 font-medium hover:text-[#1B2845] transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Industry News</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/about" className="text-gray-600 font-medium hover:text-[#1B2845] transition-all duration-300 relative inline-block">
                  <span className="relative z-10">About</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li>
                 <AnimatedButton href="/vendor/login" textSize="text-sm">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                   Vendor Login
                 </AnimatedButton>
               </li>
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
              <li className="border-b group">
                <Link href="/suppliers" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10">Suppliers</span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/fabrics" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10">All Fabrics</span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/fabrics/nyco-50-50" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    NYCO 50/50
                  </span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/fabrics/ripstop" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Ripstop
                  </span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/fabrics/berry-amendment" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Berry Amendment
                  </span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/fabrics/camouflage-patterns" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Camouflage Patterns
                  </span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/logistics" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10">Logistics</span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/logistics/itar-ear-restrictions" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    ITAR & EAR Restrictions
                  </span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/news" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10">Industry News</span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="border-b group">
                <Link href="/about" className="block w-full px-5 py-4 text-gray-600 font-medium hover:text-[#1B2845] hover:bg-gray-50 transition-all duration-300 relative">
                  <span className="relative z-10">About</span>
                  <div className="absolute bottom-0 left-5 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]"></div>
                </Link>
              </li>
              <li className="p-5">
                 <AnimatedButton href="/vendor/login" textSize="text-sm" className="w-full">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                   Vendor Login
                 </AnimatedButton>
               </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
} 