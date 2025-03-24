import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

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
            "email": "contact@k-and-t-textiles.com",
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
              }
            ].map((supplier, index) => (
              <Link 
                href={supplier.link || '#'} 
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(15,23,42,0.02)_25%,transparent_25%,transparent_50%,rgba(15,23,42,0.02)_50%,rgba(15,23,42,0.02)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Global Export Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive international logistics ensuring secure, efficient delivery of tactical gear worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Global Distribution",
                description: "Established international network enabling efficient customs clearance and reliable delivery across borders."
              },
              {
                icon: "🔍",
                title: "Quality Assurance",
                description: "Rigorous authentication and inspection processes ensuring genuine, certified products."
              },
              {
                icon: "📱",
                title: "Advanced Tracking",
                description: "Real-time monitoring and secure documentation from pickup to final delivery."
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B2845]/5 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
                
                {/* Card Content */}
                <div className="relative p-8 rounded-2xl border border-[#1B2845]/10 bg-white/50 backdrop-blur-sm">
                  <div className="bg-[#1B2845]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#1B2845]/10">
                    <div className="text-3xl">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2845] mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                </div>
              </div>
            ))}
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
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="leading-relaxed">Our strength lies in our comprehensive logistics network and rigorous quality control processes. We maintain partnerships with leading manufacturers and implement advanced tracking systems to ensure authenticity and traceability of every shipment.</p>
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
              <a href="mailto:contact@k-and-t-textiles.com" 
                 className="inline-block bg-white text-[#1B2845] px-8 py-3 rounded-lg font-semibold 
                          hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 text-[#1B2845] py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">K&T Textiles</h3>
              <p className="text-gray-600">Specializing in fabric and clothing exports since 2020.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 hover:text-[#1B2845] transition-colors">Services</a></li>
                <li><a href="#products" className="text-gray-600 hover:text-[#1B2845] transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-[#1B2845] transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-[#1B2845] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  Email: <a href="mailto:contact@k-and-t-textiles.com" 
                           className="hover:text-[#1B2845] transition-colors">
                    contact@k-and-t-textiles.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">&copy; 2025 K&T Textiles. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
