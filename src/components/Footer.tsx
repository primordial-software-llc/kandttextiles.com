import Link from "next/link";
import { CONTACT } from "@/constants/contact";

export function Footer() {

  return (
    <footer className="bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#102a43] text-white py-16 border-t border-gray-600/30 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>
      
      {/* Gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B2845] via-[#34495e] to-[#1B2845]"></div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-white">
              K&T Textiles
            </h3>
            <p className="text-gray-300 hover:text-white leading-relaxed">
              Specializing in premium fabric and clothing exports since 2020. Your trusted partner for quality textile logistics worldwide.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e]"></div>
            </h3>
            <ul className="space-y-3">
              <li className="group">
                <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Home</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/products" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Products</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/suppliers" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Suppliers</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/logistics" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Logistics</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/logistics/itar-ear-restrictions" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">ITAR & EAR Guide</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Sitemap</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/#about" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
              <li className="group">
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e]"></div>
            </h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <span className="block text-sm text-gray-400">Email</span>
                <div className="group">
                  <a href={`mailto:${CONTACT.email}`} 
                     className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block font-medium">
                    <span className="relative z-10">{CONTACT.email}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </div>
              </li>
              <li className="space-y-2">
                <span className="block text-sm text-gray-400">Connect</span>
                <div className="group">
                  <a href="https://www.linkedin.com/in/kiara-manrique-3014b6b3/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gray-300 hover:text-white transition-all duration-300 relative inline-block font-medium">
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B2845] to-[#34495e] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with enhanced styling */}
        <div className="text-center pt-8 border-t border-gray-200/30 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1B2845] to-transparent"></div>
          <p className="text-gray-300 hover:text-white text-sm mt-4">
            &copy; 2025 K&T Textiles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 