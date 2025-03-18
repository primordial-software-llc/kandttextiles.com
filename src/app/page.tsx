import Image from "next/image";
import Script from "next/script";

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
      <header className="bg-gradient-to-r from-[#1a237e] to-[#0d47a1] py-5 shadow-md">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              K&T <span className="text-[#64b5f6]">Textiles</span>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#services" className="text-white/90 font-medium hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="text-white/90 font-medium hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-white/90 font-medium hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/90 font-medium hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#01579b]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/50 via-transparent to-transparent"></div>
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
                   className="inline-block bg-[#64b5f6] text-white px-8 py-3 rounded-lg font-semibold 
                            hover:bg-[#42a5f5] transition-all duration-300 shadow-lg">
                  Get in Touch
                </a>
                <a href="#products" 
                   className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-semibold 
                            hover:bg-white/20 transition-all duration-300">
                  View Products
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#64b5f6]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1a237e]/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Services</h2>
            <p className="text-[#34495e] max-w-3xl mx-auto mb-6">
              K&T Textiles provides comprehensive export services for fabric and apparel manufacturers worldwide. We handle everything from quality control to secure shipping, serving both manufacturers and resellers with tailored solutions for their specific needs.
            </p>
            <p className="text-[#34495e] max-w-3xl mx-auto mb-12">
              With our advanced tracking systems and established global network, we ensure your textiles reach their destination safely and efficiently, whether you're a manufacturer looking to expand your market reach or a reseller seeking reliable bulk supply channels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📦",
                title: "Export Logistics",
                description: "End-to-end export management with proven reliability. We ensure your goods arrive at their destination efficiently and as expected."
              },
              {
                icon: "🔍",
                title: "Quality Control",
                description: "Our rigorous quality control process ensures all exported textiles meet international standards and client specifications."
              },
              {
                icon: "🌐",
                title: "Global Distribution",
                description: "Professional handling of your shipments through our established international distribution network, with reliability you can count on."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#01579b] w-24 h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform mx-auto">
                  <div className="text-5xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-4 text-center">{service.title}</h3>
                <p className="text-[#34495e] leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d47a1]/50 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 group hover:bg-black/10 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#64b5f6] to-[#42a5f5] w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <div className="text-5xl">🏭</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-8">For Manufacturers</h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Streamlined export process with end-to-end logistics management</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">International market access with established distribution channels</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Comprehensive quality control and compliance handling</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Real-time shipment tracking and status updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 group hover:bg-black/10 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#64b5f6] to-[#42a5f5] w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <div className="text-5xl">💼</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-8">For Resellers</h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Competitive wholesale pricing with flexible order quantities</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Dedicated account management and priority support</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Access to diverse product lines and new releases</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#64b5f6] mr-4 text-xl font-bold">✓</span>
                  <span className="text-white/90 text-lg">Reliable shipping with advanced tracking capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Products We Export</h2>
            <p className="text-[#34495e] max-w-2xl mx-auto">
              K&T Textiles specializes in exporting a wide range of high-quality textile products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧵",
                title: "Specialty Fabrics",
                description: "High-performance ripstop fabrics, weatherproof materials, and specialty textiles for various applications."
              },
              {
                icon: "🛡️",
                title: "Tactical Apparel",
                description: "Professional-grade protective wear and gear designed for high-stakes operational environments."
              },
              {
                icon: "🛰️",
                title: "Logistics Technology",
                description: "Advanced shipment monitoring and security solutions to ensure reliable delivery of your valuable cargo."
              },
              {
                icon: "📦",
                title: "Bulk Textiles",
                description: "Large-volume fabric exports for manufacturers, including specialized prints and patterns."
              }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a237e]/5 to-[#0d47a1]/5 rounded-xl border border-[#1a237e]/10 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[#64b5f6] to-[#42a5f5] p-8 flex items-center justify-center">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a237e] mb-3">{product.title}</h3>
                  <p className="text-[#34495e] text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#102a43] text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About K&T Textiles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Your trusted partner in textile exports since 2020.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg">
              <p className="leading-relaxed">K&T Textiles was established in 2020 with a mission to provide exceptional textile export services to clients worldwide. We specialize in fabric and clothing exports, focusing on high-quality products that meet stringent international standards.</p>
              <p className="leading-relaxed">Our expertise lies in logistics and distribution rather than production. We work closely with trusted manufacturers to source premium textiles and apparel products, then manage the entire export process to ensure timely and efficient delivery.</p>
              <p className="leading-relaxed">What sets us apart is our commitment to reliability, quality assurance, and personalized service. We understand the unique requirements of each market we serve and work diligently to meet those specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 bg-gradient-to-br from-[#1976d2] via-[#2196f3] to-[#64b5f6] text-white text-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1976d2]/50 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="mb-8 text-white/80">Contact K&T Textiles today to discuss your textile export needs.</p>
          <a href="mailto:contact@k-and-t-textiles.com" 
             className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-semibold 
                      hover:bg-white/20 transition-all duration-300">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">K&T Textiles</h3>
              <p className="text-gray-300">Specializing in fabric and clothing exports since 2020.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: <a href="mailto:contact@k-and-t-textiles.com" className="hover:text-white transition-colors">contact@k-and-t-textiles.com</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-gray-300">&copy; 2025 K&T Textiles. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
