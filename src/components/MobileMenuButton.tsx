'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className="mobile-menu-button p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <ul className="flex flex-col space-y-4">
          <li><Link href="/#services" className="block text-gray-600 font-medium hover:text-[#1a237e] transition-colors">Services</Link></li>
          <li><Link href="/#suppliers" className="block text-gray-600 font-medium hover:text-[#1a237e] transition-colors">Suppliers</Link></li>
          <li><Link href="/#about" className="block text-gray-600 font-medium hover:text-[#1a237e] transition-colors">About</Link></li>
          <li><Link href="/#contact" className="block text-gray-600 font-medium hover:text-[#1a237e] transition-colors">Contact</Link></li>
        </ul>
      </div>
    </>
  );
} 