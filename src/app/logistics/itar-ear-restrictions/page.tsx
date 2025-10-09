import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";

export const metadata: Metadata = {
  title: "Export Compliance Guide: ITAR & EAR for Tactical Gear | K&T Textiles",
  description: "Export compliance guide for tactical gear and shooting accessories. Learn about EAR regulations (primary concern) and ITAR restrictions (limited application) for textile exports.",
  keywords: [
    'ITAR restrictions',
    'EAR export controls',
    'tactical gear export',
    'shooting accessories export',
    'international shipping compliance',
    'export regulations',
    'controlled items',
    'defense articles',
    'dual-use items',
    'export licensing'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ITAR & EAR Export Restrictions | K&T Textiles",
    description: "Understanding ITAR and EAR export restrictions for tactical gear and shooting accessories. Compliance guidance for international shipping.",
    type: "website",
    url: "https://kandttextiles.com/logistics/itar-ear-restrictions",
    siteName: "K&T Textiles",
    images: [
      {
        url: "https://kandttextiles.com/images/itar-ear-compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "ITAR and EAR Export Compliance for Tactical Gear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITAR & EAR Export Restrictions",
    description: "Understanding ITAR and EAR export restrictions for tactical gear and shooting accessories. Compliance guidance for international shipping.",
    images: ["https://kandttextiles.com/images/itar-ear-compliance-og.jpg"],
  },
  alternates: {
    canonical: "https://kandttextiles.com/logistics/itar-ear-restrictions",
  },
};

export default function ITAREARRestrictionsPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ITAR & EAR Export Restrictions",
    "description": "Understanding ITAR and EAR export restrictions for tactical gear and shooting accessories. Compliance guidance for international shipping of controlled items.",
    "url": "https://kandttextiles.com/logistics/itar-ear-restrictions",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kandttextiles.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Logistics",
          "item": "https://kandttextiles.com/logistics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ITAR & EAR Restrictions",
          "item": "https://kandttextiles.com/logistics/itar-ear-restrictions"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#1B2845] transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/logistics" className="hover:text-[#1B2845] transition-colors">Logistics</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">ITAR & EAR Restrictions</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              ITAR & EAR Export Restrictions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Understanding export compliance for tactical gear and shooting accessories. 
              Essential information for international shipping of controlled items.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          
          {/* Overview Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Export Compliance Overview</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                For most tactical gear and shooting accessories, <strong>EAR regulations</strong> are the primary concern. ITAR applies only to specific military-grade items like high-level body armor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-800">ITAR (International Traffic in Arms Regulations)</h3>
                </div>
                <p className="text-red-700 mb-4">
                  <strong>Limited application to textiles:</strong> Only affects specific military-grade items like NIJ Level IV body armor and military-spec ballistic protection.
                </p>
                <ul className="text-red-600 space-y-2">
                  <li>• <strong>NIJ Level IV body armor</strong> (military-grade)</li>
                  <li>• <strong>Military-spec ballistic protection</strong></li>
                  <li>• <strong>Defense articles</strong> on US Munitions List</li>
                  <li>• <strong>Rare for most tactical gear</strong></li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">EAR (Export Administration Regulations)</h3>
                </div>
                <p className="text-blue-700 mb-4">
                  <strong>Primary concern for tactical textiles:</strong> Controls most tactical gear, body armor, and dual-use items that have both commercial and military applications.
                </p>
                <ul className="text-blue-600 space-y-2">
                  <li>• <strong>Most tactical clothing</strong> and gear</li>
                  <li>• <strong>Body armor</strong> (NIJ Level III and below)</li>
                  <li>• <strong>Dual-use technologies</strong></li>
                  <li>• <strong>May require BIS licensing</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed EAR Section */}
          <section className="mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Understanding EAR Regulations</h2>
              <p className="text-blue-700 mb-6">
                The Export Administration Regulations (EAR) are particularly relevant for tactical gear and shooting accessories, as many items that appear to be "civilian" may actually be controlled under EAR.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Common EAR-Controlled Items</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Body armor and ballistic protection</strong> (even civilian versions)</li>
                    <li>• <strong>Night vision equipment</strong> and thermal imaging</li>
                    <li>• <strong>GPS and navigation systems</strong> with military applications</li>
                    <li>• <strong>Encryption software</strong> and secure communications</li>
                    <li>• <strong>Drones and UAVs</strong> with certain capabilities</li>
                    <li>• <strong>Surveillance equipment</strong> and monitoring systems</li>
                    <li>• <strong>Chemical detection</strong> and analysis equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">EAR Classification Process</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-100 border border-blue-300 rounded p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">1. Determine ECCN</h4>
                      <p className="text-blue-700 text-sm">Find the Export Control Classification Number (ECCN) for your item</p>
                    </div>
                    <div className="bg-blue-100 border border-blue-300 rounded p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">2. Check Destination</h4>
                      <p className="text-blue-700 text-sm">Verify if the destination country requires a license</p>
                    </div>
                    <div className="bg-blue-100 border border-blue-300 rounded p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">3. End User/Use</h4>
                      <p className="text-blue-700 text-sm">Consider who will use the item and for what purpose</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-100 border border-blue-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Important EAR Considerations for Tactical Gear:</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• <strong>Even "civilian" tactical gear</strong> may be EAR-controlled if it has military applications</li>
                  <li>• <strong>Software and technical data</strong> related to controlled items are also regulated</li>
                  <li>• <strong>Re-export restrictions</strong> apply even after initial export</li>
                  <li>• <strong>De minimis rule</strong> - foreign-made items with US content may be controlled</li>
                  <li>• <strong>License exceptions</strong> may apply for certain destinations and end uses</li>
                </ul>
              </div>
              
              <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ EAR and Shooting Accessories:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Likely EAR-Controlled:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Body armor and ballistic protection</li>
                      <li>• Night vision and thermal equipment</li>
                      <li>• Advanced optics with military features</li>
                      <li>• Tactical communication equipment</li>
                      <li>• Surveillance and monitoring gear</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Usually Not Controlled:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Basic shooting accessories (holsters, slings)</li>
                      <li>• Standard cleaning supplies</li>
                      <li>• Basic tactical clothing</li>
                      <li>• Non-ballistic gear bags</li>
                      <li>• Standard shooting range equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* K&T Textiles Position */}
          <section className="mb-16">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">K&T Textiles Compliance Position</h3>
              <p className="text-green-700 mb-4">
                <strong>Important:</strong> K&T Textiles is NOT a Federal Firearms Licensee (FFL) and does not sell, ship, store, or handle firearms, ammunition, body armor, explosives, or ITAR-controlled items. We specialize in compliant accessories and gear only.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">What We Handle:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Basic tactical clothing</strong> (non-military spec)</li>
                    <li>• <strong>Shooting accessories</strong> (holsters, slings, cleaning supplies)</li>
                    <li>• <strong>Non-ballistic gear</strong> and equipment</li>
                    <li>• <strong>EAR-compliant items</strong> only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">What We DON'T Handle:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Firearms or ammunition</strong></li>
                    <li>• <strong>Body armor or ballistic protection</strong></li>
                    <li>• <strong>Military-spec tactical gear</strong></li>
                    <li>• <strong>ITAR-controlled items</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Export Compliance Guidelines</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-3">Know Your Items</h3>
                <p className="text-gray-600 mb-4">
                  Classify your products according to ITAR/EAR regulations. Check if items are on the USML or CCL.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Review product specifications</li>
                  <li>• Check export control lists</li>
                  <li>• Consult with compliance experts</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-3">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Maintain proper export documentation and record-keeping for all international shipments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Export licenses (if required)</li>
                  <li>• Commercial invoices</li>
                  <li>• Packing lists</li>
                  <li>• End-user certificates</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-3">Stay Compliant</h3>
                <p className="text-gray-600 mb-4">
                  Regular training and updates on export regulations to ensure ongoing compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular compliance training</li>
                  <li>• Monitor regulation changes</li>
                  <li>• Internal compliance audits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Compliance Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1B2845] mb-4">Government Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.pmddtc.state.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      DDTC (ITAR) - Directorate of Defense Trade Controls
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bis.doc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      BIS (EAR) - Bureau of Industry and Security
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      CBP - Customs and Border Protection
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1B2845] mb-4">Key Regulations</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700">
                    <strong>22 CFR Parts 120-130:</strong> ITAR Regulations
                  </li>
                  <li className="text-gray-700">
                    <strong>15 CFR Parts 730-774:</strong> EAR Regulations
                  </li>
                  <li className="text-gray-700">
                    <strong>19 CFR Parts 1-199:</strong> Customs Regulations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Important Disclaimer</h3>
            <p className="text-yellow-700 mb-4">
              This information is for general guidance only and does not constitute legal advice. Export compliance is complex and regulations change frequently.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded p-4">
              <p className="text-yellow-800 font-semibold">
                Always consult with qualified export compliance attorneys or consultants for specific guidance on your products and export transactions.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <CTA 
        title="Need Export Compliance Guidance?"
        description="While we don't handle ITAR-controlled items, we can help with general export documentation and logistics for compliant products."
        buttons={[
          <AnimatedButtonAccent 
            key="contact-compliance"
            href={`mailto:${CONTACT.email}?subject=Export Compliance Inquiry&body=I have questions about export compliance for tactical gear and shooting accessories. Please provide guidance on documentation and shipping requirements.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Compliance Team</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            key="logistics-services"
            href="/logistics"
            textSize="text-xl"
          >
            <span className="font-bold">Our Logistics Services</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
}
