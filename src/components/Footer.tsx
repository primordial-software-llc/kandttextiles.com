import Link from "next/link";
import { CONTACT } from "@/constants/contact";

interface FooterProps {
  variant?: 'light' | 'dark';
}

export function Footer({ variant = 'light' }: FooterProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#1B2845]';
  const bgColor = isDark ? 'bg-[#102a43]' : 'bg-gray-50';
  const borderColor = isDark ? 'border-gray-600' : 'border-gray-200';
  const linkColor = isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#1B2845]';

  return (
    <footer className={`${bgColor} ${textColor} py-10 border-t ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">K&T Textiles</h3>
            <p className={linkColor}>Specializing in fabric and clothing exports since 2020.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className={linkColor}>Home</Link></li>
              <li><Link href="/#services" className={linkColor}>Services</Link></li>
              <li><Link href="/#products" className={linkColor}>Products</Link></li>
              <li><Link href="/#about" className={linkColor}>About Us</Link></li>
              <li><Link href="/#contact" className={linkColor}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className={linkColor}>
                Email: <a href={`mailto:${CONTACT.email}`} 
                         className="hover:text-[#1B2845] transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className={linkColor}>
                <a href="https://www.linkedin.com/in/kiara-manrique-3014b6b3/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200">
          <p className={linkColor}>&copy; 2025 K&T Textiles. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 