import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";
import { Footer } from "@/components/Footer";

interface Supplier {
  name: string;
  specialty: string;
  description: string;
  logo: string;
  link: string;
  certification?: string;
  featured?: boolean;
}

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "K&T Textiles",
            "description": "Specializing in premium fabric and apparel exports since 2020. Your trusted partner for quality textile logistics.",
            "url": "https://kandttextiles.com",
            "email": CONTACT.email,
            "foundingDate": "2020",
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Export Logistics",
                  "description": "End-to-end export management with proven reliability. We ensure your goods arrive at their destination efficiently and as expected."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Quality Control",
                  "description": "Our rigorous quality control process ensures all exported textiles meet international standards and client specifications."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Global Distribution",
                  "description": "Professional handling of your shipments through our established international distribution network, with reliability you can count on."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Logistics Technology",
                  "description": "Advanced shipment monitoring and security solutions to ensure reliable delivery of your valuable cargo."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Specialty Fabrics Export",
                  "description": "Export services for high-performance ripstop fabrics, weatherproof materials, and specialty textiles."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tactical Apparel Export",
                  "description": "Export services for professional-grade protective wear and gear designed for high-stakes operational environments."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Bulk Textiles Export",
                  "description": "Export services for large-volume fabric exports, including specialized prints and patterns."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "MULTICAM® Fabric",
                  "description": "Exclusive distributor of MULTICAM® fabric development and distribution in the US and internationally."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Military & Tactical Textiles",
                  "description": "Specialized military, tactical, and industrial textile products with expertise in domestic and international manufacturing."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Industrial Webbing",
                  "description": "High-quality military solid and camouflage webbing for various military applications and equipment."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "U.S. Army Uniform Caps",
                  "description": "Premium quality military uniform caps manufactured to exact U.S. Army specifications, made in the USA."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "U.S. Air Force Uniform Caps",
                  "description": "High-quality military headwear meeting U.S. Air Force uniform standards, manufactured in New York."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "U.S. Navy Uniform Caps",
                  "description": "Professional-grade naval uniform caps produced to U.S. Navy specifications, ensuring superior comfort and durability."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "U.S. Marine Corps Uniform Caps",
                  "description": "Military-grade uniform caps for U.S. Marine Corps, manufactured with premium materials to meet strict specifications."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "U.S. Coast Guard Uniform Caps",
                  "description": "Specialized uniform headwear for U.S. Coast Guard personnel, produced to exact service specifications."
                }
              }
            ]
          })
        }}
      />
      
      <section className="relative min-h-[600px] flex items-center bg-[#0f172a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Global Textile<br />Export Solutions
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl font-light">
                Specializing in premium fabric and apparel exports since 2020. Your trusted partner for quality textile logistics.
              </p>
              <div className="flex gap-4">
                <a href="#contact" 
                   className="inline-block bg-[#f8fafc] text-[#0f172a] px-8 py-3 rounded-lg font-semibold 
                            hover:bg-[#e2e8f0] transition-all duration-300 shadow-lg">
                  Get in Touch
                </a>
                <a href="#suppliers" 
                   className="inline-block bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-3 rounded-lg font-semibold 
                            hover:bg-white/10 transition-all duration-300">
                  View Suppliers
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0f172a]/50 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="suppliers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Our Trusted Suppliers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Partnering with industry-leading manufacturers to deliver premium tactical and military-grade textiles worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Rothco",
                specialty: "Military & Tactical Gear",
                description: "Leading manufacturer of military and tactical equipment, providing high-quality gear for over 60 years.",
                logo: "/Rothco_Logo_2-color_8x8-R.jpg",
                link: "/suppliers/rothco"
              },
              {
                name: "Harken",
                specialty: "Marine Hardware & Textiles",
                description: "Global leader in marine hardware and performance textiles, providing innovative solutions for sailing and marine applications.",
                logo: "/harken/harken.webp",
                link: "/suppliers/harken"
              },
              {
                name: "1947 LLC",
                specialty: "Military & Tactical Textiles",
                description: "Full-service textile solution provider specializing in military, tactical, and industrial products, with expertise in MULTICAM® fabric development and distribution.",
                logo: "/1947llc/1947llc-logo-black.svg",
                link: "https://1947llc.com/"
              },
              {
                name: "Kingform Cap Company",
                specialty: "Military Uniform Headwear",
                description: "Premium manufacturer of military uniform caps since 1960, producing high-quality headwear for all branches of the U.S. Armed Forces.",
                logo: "/kingformcap/kflogowhite.jpg",
                link: "https://www.kingformcap.com/"
              }
            ].map((supplier, index) => (
              supplier.link ? (
                <Link 
                  href={supplier.link} 
                  key={index}
                  className="block h-full"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                    {supplier.logo && (
                      <div className="mb-6">
                        <Image 
                          src={supplier.logo}
                          alt={`${supplier.name} logo`}
                          width={200}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#1a237e] mb-2">
                        {supplier.name}
                      </h3>
                      <div className="text-gray-600 font-medium mb-4">{supplier.specialty}</div>
                      <p className="text-[#34495e] mb-4">{supplier.description}</p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center px-6 py-2.5 bg-[#1a237e] text-white rounded-lg font-medium group hover:bg-[#1a237e]/90 transition-all duration-300 shadow-md hover:shadow-lg">
                          Explore {supplier.name}
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div 
                  key={index}
                  className="block h-full"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg h-full flex flex-col`}>
                    {supplier.logo && (
                      <div className="mb-6">
                        <Image 
                          src={supplier.logo}
                          alt={`${supplier.name} logo`}
                          width={200}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#1a237e] mb-2">
                        {supplier.name}
                      </h3>
                      <div className="text-gray-600 font-medium mb-4">{supplier.specialty}</div>
                      <p className="text-[#34495e] mb-4">{supplier.description}</p>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(15,23,42,0.02)_25%,transparent_25%,transparent_50%,rgba(15,23,42,0.02)_50%,rgba(15,23,42,0.02)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Logistics Tools</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced tracking solutions for secure and efficient cargo monitoring worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tracki Pro Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2845]/5 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
              <div className="relative p-8 rounded-2xl border border-[#1B2845]/10 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B2845]">Tracki Pro GPS Tracker</h3>
                  <div className="text-2xl font-bold text-[#3b82f6]">$38.88</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">10,000mAh Battery - Up to 12 months life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">IP67 Waterproof - 30min submersion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Multi-network tracking (GPS, WiFi, Cellular)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Adjustable update intervals (1min - 24hrs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Movement detection & hibernation mode</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Monthly Service: $20</span>
                    <Link href="/logistics/tracki-pro" 
                       className="inline-flex items-center px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Overview Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2845]/5 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
              <div className="relative p-8 rounded-2xl border border-[#1B2845]/10 bg-white/50 backdrop-blur-sm h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#1B2845] mb-4">Logistics Overview</h3>
                  <p className="text-gray-600 mb-6">
                    Discover how modern tracking technology is revolutionizing cargo security and supply chain visibility.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Comprehensive tracking solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Best practices & security protocols</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Educational resources & insights</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link href="/logistics" 
                     className="inline-flex items-center px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors">
                    Explore Logistics Solutions
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-[#1B2845] px-4 py-2 rounded-full text-sm mb-4 border border-blue-100">
                Vendor Tracking Portal
              </div>
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Custom Logistics Tracking Software</h2>
              <p className="text-gray-600 mb-6">
                K&T Textiles has developed a proprietary vendor tracking portal that provides real-time visibility into your shipments. Our custom logistics software gives you complete transparency and control over your textile exports.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Real-Time Tracking</h3>
                    <p className="text-gray-600">Monitor your shipments with GPS precision across oceans and continents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Environmental Monitoring</h3>
                    <p className="text-gray-600">Track temperature, humidity, and conditions for sensitive textile products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Secure Vendor Portal</h3>
                    <p className="text-gray-600">Password-protected access to your company's specific tracking devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Supply Chain Visualization</h3>
                    <p className="text-gray-600">End-to-end visibility of your entire supply chain in one intuitive dashboard</p>
                  </div>
                </div>
              </div>
              <Link href="/vendor/login" 
                 className="inline-flex items-center px-6 py-3 bg-[#1B2845] text-white rounded-lg font-medium hover:bg-[#34495e] transition-all duration-300 shadow-md hover:shadow-lg">
                Try Vendor Portal
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform -rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/vendor-portal-dashboard.png"
                  alt="K&T Textiles Vendor Portal Dashboard"
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-3 border border-gray-100">
                <div className="bg-[#1B2845] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/vendor-portal-device-detail.png"
                  alt="K&T Textiles Vendor Portal Device Detail"
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3 border border-gray-100">
                <div className="bg-[#1B2845] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-blue-50 text-[#1B2845] px-4 py-2 rounded-full text-sm mb-4 border border-blue-100">
                Advanced Device Management
              </div>
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Detailed Tracking Insights</h2>
              <p className="text-gray-600 mb-6">
                Get comprehensive information about each tracking device in your fleet. Our detailed view provides you with all the vital information needed to monitor your shipments effectively.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Device Status Monitoring</h3>
                    <p className="text-gray-600">Track active, inactive, and maintenance status of all your devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Live Data Visualization</h3>
                    <p className="text-gray-600">View real-time tracking data in customizable visual formats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Device Management</h3>
                    <p className="text-gray-600">Add, remove, and configure tracking devices with just a few clicks</p>
                  </div>
                </div>
              </div>
              <Link href="/vendor/login" 
                 className="inline-flex items-center px-6 py-3 bg-[#1B2845] text-white rounded-lg font-medium hover:bg-[#34495e] transition-all duration-300 shadow-md hover:shadow-lg">
                Access Portal
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#102a43] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0f172a]/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/5 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4 border border-white/10">
              Our Story
            </div>
            <h2 className="text-4xl font-bold mb-4">About K&T Textiles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Your trusted partner in textile exports since 2020.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="leading-relaxed">Founded in 2020, K&T Textiles has rapidly emerged as a trusted name in specialized textile exports. We bridge the gap between premium manufacturers and global markets, focusing on technical fabrics, protective wear, and high-performance textiles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 relative">
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

      <Footer />
    </>
  );
}
