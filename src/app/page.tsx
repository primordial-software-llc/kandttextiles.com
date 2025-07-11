import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductStructuredData } from '@/components/ProductStructuredData';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';
import { rothcoData } from '@/data/suppliers/rothco';
import product5168Data from '@/data/rothco/products/product-5168.json';
import product5169Data from '@/data/rothco/products/product-5169.json';
import product5170Data from '@/data/rothco/products/product-5170.json';
import product997Data from '@/data/rothco/products/product-997.json';
import product4198Data from '@/data/rothco/products/product-4198.json';
import product4446Data from '@/data/rothco/products/product-4446.json';

export const metadata = {
  title: "K&T Textiles | Premium Textile Export Solutions & Military Tactical Gear",
  description: "Specializing in premium fabric and apparel exports since 2020. Featured tactical gear from Rothco including waterproof bags, tactical boots, and concealed carry knives. Your trusted partner for quality textile logistics.",
  keywords: [
    'IPX7 waterproof bags',
    'military waterproof gear',
    'textile exports',
    'Rothco waterproof bags',
    'tactical waterproof equipment',
    'submersible bags',
    'military tactical gear',
    'Rothco dealer',
    'waterproof bags',
    'tactical boots',
    'concealed carry knives',
    'international shipping',
    'logistics solutions',
    'premium fabrics',
    'tactical equipment'
  ]
};

export default function Home() {
  // Constants for featured product groups
  const FEATURED_GROUP_NAME = "Fully Submersible Waterproof Bags";

  var productGroups = [
  {
    supplier: "rothco",
    name: "Fully Submersible Waterproof Bags",
    products: [
      { ...product5170Data, selectedVariationItemNo: "12440" },
      { ...product5168Data, selectedVariationItemNo: "12422" },
      { ...product5169Data, selectedVariationItemNo: "12431" }
    ]
  }];
  
  // Helper function to find specific product groups
  const getProductGroupByName = (groupName: string) => {
    return rothcoData.featuredProductGroups.find(group => group.name === groupName);
  };

  // Featured group for homepage
  const featuredHomepageGroup = getProductGroupByName(FEATURED_GROUP_NAME);
  const featuredHomepageProducts = featuredHomepageGroup ? [featuredHomepageGroup] : [];

  return (
    <>
      <ProductStructuredData 
        products={featuredHomepageProducts.flatMap(group => 
          group.products.map(product => ({
            name: product.name,
            description: product.description,
            image: product.image,
            brandName: "Rothco",
            sellerName: "K&T Textiles",
            price: product.price
          }))
        )}
      />
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
      
      <section className="relative min-h-[700px] flex items-center bg-[#0f172a]">
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
              <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                Our specialized sourcing capabilities and advanced logistics tracking technology ensure reliable delivery with real-time visibility across international markets.
              </p>
              <div className="flex gap-4">
                <AnimatedButtonAccent href="#contact" textSize="text-base" width="w-44">
                  Get in Touch
                </AnimatedButtonAccent>
                <AnimatedButtonOutline href="/suppliers" textSize="text-base" width="w-44">
                  View Suppliers
                </AnimatedButtonOutline>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0f172a]/50 rounded-full blur-3xl"></div>
              
              {/* Enhanced feature cards */}
              <div className="relative bg-white rounded-2xl p-8 border border-white/10 overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B2845]">Global Reach</h3>
                      <p className="text-gray-600 text-sm">Worldwide distribution network</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B2845]">Custom Sourcing</h3>
                      <p className="text-gray-600 text-sm">Specialized fabric specifications on demand</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section id="suppliers" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-3">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with premium manufacturers to deliver quality textiles worldwide.
            </p>
          </div>
          
          {/* Supplier logos in horizontal layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mb-10">
            {[
              {
                name: "Rothco",
                logo: "/Rothco_Logo_2-color_8x8-R.jpg",
                link: "/suppliers/rothco"
              },
              {
                name: "Harken",
                logo: "/harken/harken.webp",
                link: "/suppliers/harken"
              },
              {
                name: "1947 LLC",
                logo: "/1947llc/1947llc-logo-black.svg",
                link: "https://1947llc.com/",
                isExternal: true
              },
              {
                name: "Kingform Cap Company",
                logo: "/kingformcap/kflogowhite.jpg",
                link: "https://www.kingformcap.com/",
                isExternal: true
              }
            ].map((supplier, index) => (
              supplier.isExternal ? (
                <a
                  key={index}
                  href={supplier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative bg-transparent p-8 rounded-lg hover:bg-white/20 transition-all duration-300 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image 
                        src={supplier.logo}
                        alt={`${supplier.name} logo`}
                        width={200}
                        height={120}
                        className="object-contain transition-all duration-300 max-w-full max-h-full"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                    
                    {/* Animated lines from AnimatedButton */}
                    {/* Bottom underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
                    
                    {/* Left border - slides down from top */}
                    <div className="absolute left-0 top-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
                    
                    {/* Right border - slides up from bottom */}
                    <div className="absolute right-0 bottom-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
                  </div>
                </a>
              ) : (
                <Link 
                  key={index}
                  href={supplier.link}
                  className="group"
                >
                  <div className="relative bg-transparent p-8 rounded-lg hover:bg-white/20 transition-all duration-300 aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image 
                        src={supplier.logo}
                        alt={`${supplier.name} logo`}
                        width={200}
                        height={120}
                        className="object-contain transition-all duration-300 max-w-full max-h-full"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                    
                    {/* Animated lines from AnimatedButton */}
                    {/* Bottom underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
                    
                    {/* Left border - slides down from top */}
                    <div className="absolute left-0 top-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
                    
                    {/* Right border - slides up from bottom */}
                    <div className="absolute right-0 bottom-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
                  </div>
                </Link>
              )
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <AnimatedButton href="/suppliers" textSize="text-lg">
              View All Suppliers
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Featured Product Groups */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gradient-to-r from-[#1B2845] to-[#34495e] mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Top-Recommended Tactical Gear</h2>
          </div>
        </div>
        
        {productGroups.map((group, index) => (
          <FeaturedProducts
            key={index}
            supplier={group.supplier}
            title={group.name}
            products={group.products}
            sectionId={`homepage-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-products`}
          />
        ))}

          {/* Call to action */}
          <div className="text-center">
            <AnimatedButton href="/products" textSize="text-lg">
              View All Products
            </AnimatedButton>
          </div>
        
      </section>

      <section className="py-20 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(15,23,42,0.02)_25%,transparent_25%,transparent_50%,rgba(15,23,42,0.02)_50%,rgba(15,23,42,0.02)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gradient-to-r from-[#1B2845] to-[#34495e] mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Advanced Cargo Tracking Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
              Gain complete visibility and control over your shipments with our proprietary tracking technology. From real-time GPS monitoring to environmental sensors, we provide the tools you need for confident logistics management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1B2845] mb-2">Real-Time Location Tracking</h3>
              <p className="text-gray-600 text-sm">GPS precision monitoring with worldwide coverage for complete shipment visibility</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1B2845] mb-2">Environmental Monitoring</h3>
              <p className="text-gray-600 text-sm">Temperature, humidity, and condition tracking for sensitive textile products</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1B2845] mb-2">Vendor Portal Access</h3>
              <p className="text-gray-600 text-sm">Secure, password-protected dashboard for comprehensive shipment management</p>
            </div>
          </div>

          <div className="text-center">
            <AnimatedButton href="/suppliers/logistics" textSize="text-lg">
            Explore Our Logistics Technology
            </AnimatedButton>
          </div>
        </div>
      </section>

      <div id="contact">
      {/* CTA Section */}
      <CTA 
        title="Need Custom Products?"
        description="We specialize in custom sourcing and international shipping. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            href="mailto:info@kandttextiles.com?subject=Custom Product Inquiry&body=I'm interested in custom product sourcing and wholesale pricing. Please send me more information."
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Sales</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            href="/suppliers"
            textSize="text-xl"
          >
            <span className="font-bold">Browse Suppliers</span>
          </AnimatedButtonOutline>
        ]}
      />
      </div>
    </>
  );
}
