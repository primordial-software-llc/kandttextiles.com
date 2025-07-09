import { BaseStructuredData } from '@/components/BaseStructuredData';
import { Footer } from '@/components/Footer';
import { CONTACT } from '@/constants/contact';
import Link from 'next/link';

export const metadata = {
  title: "About K&T Textiles | Your Trusted Textile Export Partner Since 2020",
  description: "Learn about K&T Textiles' journey since 2020 as a trusted name in specialized textile exports, bridging premium manufacturers with global markets through advanced logistics technology.",
  keywords: [
    'K&T Textiles history',
    'textile export company',
    'specialized textile sourcing',
    'textile logistics',
    'international textile trade',
    'textile export partner',
    'premium textile manufacturers',
    'global textile markets'
  ],
  openGraph: {
    title: "About K&T Textiles | Textile Export Specialists",
    description: "Your trusted partner in textile exports since 2020, specializing in sourcing and logistics solutions",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "K&T Textiles Logo"
      }
    ]
  }
};

export default function About() {
  return (
    <>
      <BaseStructuredData />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-[#0f172a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-5">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About K&T Textiles
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light">
              Your trusted partner in textile exports since 2020.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Company Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-[#1B2845] to-[#34495e] text-white px-4 py-2 rounded-full text-sm mb-6 font-medium">
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-[#1B2845] mb-6 leading-tight">
                  Founded in 2020, K&T Textiles has emerged as a trusted name in specialized textile exports
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We bridge the gap between premium manufacturers and global markets, delivering excellence through every partnership.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our specialized sourcing capabilities allow us to identify and connect clients with suppliers based on precise fabric specifications and performance requirements. Our advanced logistics tracking technology ensures reliable delivery with real-time visibility across international markets.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" 
                     className="inline-flex items-center px-6 py-3 bg-[#1B2845] text-white rounded-lg font-medium hover:bg-[#34495e] transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <Link href="/suppliers" 
                     className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
                    View Suppliers
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B2845]/10 to-[#34495e]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#34495e]/10 to-[#1B2845]/10 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1B2845] to-[#34495e] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B2845]">Global Reach</h3>
                        <p className="text-gray-600 text-sm">Worldwide distribution network</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1B2845] to-[#34495e] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B2845]">Quality Assured</h3>
                        <p className="text-gray-600 text-sm">Rigorous quality control standards</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1B2845] to-[#34495e] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B2845]">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">Real-time tracking technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We are committed to excellence in textile exports through innovation, reliability, and partnerships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1B2845]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Quality First</h3>
                <p className="text-gray-600">Every product we export meets the highest quality standards and client specifications.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1B2845]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Innovation</h3>
                <p className="text-gray-600">We leverage cutting-edge logistics technology to provide transparency and efficiency.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1B2845]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Partnership</h3>
                <p className="text-gray-600">We build lasting relationships with manufacturers and clients based on trust and reliability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose K&T Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Why Choose K&T Textiles?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our expertise and dedication set us apart in the textile export industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B2845]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2845] mb-2">Specialized Sourcing</h3>
                    <p className="text-gray-600">We identify and connect clients with suppliers based on precise fabric specifications and performance requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B2845]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2845] mb-2">Advanced Logistics</h3>
                    <p className="text-gray-600">Our proprietary tracking technology ensures reliable delivery with real-time visibility across international markets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B2845]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2845] mb-2">Global Reach</h3>
                    <p className="text-gray-600">We bridge the gap between premium manufacturers and global markets with established international distribution networks.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1B2845] to-[#0f172a] rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                  <p className="text-white/80 mb-6">
                    Let's discuss how K&T Textiles can help with your textile export needs.
                  </p>
                  <a 
                    href={`mailto:${CONTACT.email}`}
                    className="inline-block bg-white text-[#1B2845] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5">
            <div className="relative bg-gradient-to-br from-[#1B2845] to-[#0f172a] rounded-2xl p-12 text-center overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0f172a]/50 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block bg-white/5 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4 border border-white/10">
                  Get in Touch
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Contact K&T Textiles today to discuss your textile export needs.
                </p>
                <a href={`mailto:${CONTACT.email}`} 
                   className="inline-block bg-white text-[#1B2845] px-8 py-3 rounded-lg font-semibold 
                            hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 