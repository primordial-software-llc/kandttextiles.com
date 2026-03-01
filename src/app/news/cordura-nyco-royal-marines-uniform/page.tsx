import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "CORDURA NYCO Fabric Selected for New Royal Marines Uniform Program | K&T Textiles",
  description: "CORDURA NYCO fabric has been selected for the Royal Marines' Future Commando Force uniform program, validating NYCO ripstop as the gold standard for modern military combat uniforms.",
  keywords: [
    'CORDURA NYCO',
    'NYCO fabric',
    'Royal Marines uniform',
    'military fabric',
    'NYCO ripstop',
    'combat uniform fabric',
    'Future Commando Force',
    'tactical textiles'
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
    title: "CORDURA NYCO Fabric Selected for New Royal Marines Uniform Program",
    description: "CORDURA NYCO fabric has been selected for the Royal Marines' Future Commando Force uniform program.",
    type: "article",
    url: "https://kandttextiles.com/news/cordura-nyco-royal-marines-uniform/",
    siteName: "K&T Textiles",
    publishedTime: "2025-11-15",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORDURA NYCO Fabric Selected for New Royal Marines Uniform Program",
    description: "NYCO ripstop validated as the global standard for modern military combat uniforms.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/cordura-nyco-royal-marines-uniform/",
  },
};

export default function CorduraNycoRoyalMarinesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CORDURA NYCO Fabric Selected for New Royal Marines Uniform Program",
    "author": {
      "@type": "Organization",
      "name": "K&T Textiles"
    },
    "publisher": {
      "@type": "Organization",
      "name": "K&T Textiles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kandttextiles.com/logo.png"
      }
    },
    "datePublished": "2025-11-15",
    "dateModified": "2025-11-15",
    "description": "CORDURA NYCO fabric has been selected for the Royal Marines' Future Commando Force uniform program.",
    "mainEntityOfPage": "https://kandttextiles.com/news/cordura-nyco-royal-marines-uniform/"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#1B2845] transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-[#1B2845] transition-colors">Industry News</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">CORDURA NYCO Royal Marines</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-5 py-16">
          <header className="mb-12">
            <div className="mb-6">
              <Link 
                href="/news" 
                className="inline-flex items-center text-sm text-[#1B2845] hover:text-[#34495e] transition-colors mb-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Industry News
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              CORDURA® NYCO Fabric Selected for New Royal Marines Uniform Program
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2025-11-15">
                November 15, 2025
              </time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              CORDURA® NYCO fabric has been adopted as the base material for the Royal Marines&rsquo; Future Commando 
              Force uniform program. The selection of a nylon-cotton ripstop blend by one of the world&rsquo;s most elite 
              military forces reinforces NYCO&rsquo;s position as the global standard for modern combat uniform fabrics.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Why NYCO Continues to Dominate</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Nylon-cotton (NYCO) blends have been the fabric of choice for military combat uniforms since the U.S. Army 
              adopted the Battle Dress Uniform in the 1980s. The combination of nylon&rsquo;s abrasion resistance and 
              tensile strength with cotton&rsquo;s comfort, breathability, and reduced infrared signature creates a 
              fabric that outperforms single-fiber alternatives in virtually every combat-relevant metric.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              CORDURA® NYCO specifically has demonstrated 3&ndash;5x slower flame spread compared to polyester-cotton 
              alternatives, a critical safety advantage in environments where flash fire or explosive threats exist. 
              This performance characteristic, combined with superior tear and abrasion resistance, makes NYCO the 
              preferred choice for forces operating in demanding conditions.
            </p>

            <div className="bg-[#1B2845]/5 border-l-4 border-[#1B2845] p-6 my-8">
              <p className="text-gray-700 leading-relaxed font-medium mb-0">
                CORDURA® NYCO demonstrates 3&ndash;5x slower flame spread than polyester-cotton blends, while 
                providing superior abrasion resistance and a reduced infrared signature critical for modern combat operations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The Future Commando Force Program</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Royal Marines&rsquo; Future Commando Force initiative represents a comprehensive modernization of 
              Britain&rsquo;s elite amphibious force. The new uniform features Crye Precision&rsquo;s MultiCam 
              camouflage pattern printed on CORDURA® NYCO ripstop, replacing the previous multi-terrain pattern. 
              The uniform program is one component of a broader effort to equip Royal Marines with next-generation 
              equipment optimized for littoral operations, extended deployments, and rapid force projection.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selecting CORDURA® NYCO for this program reflects the fabric&rsquo;s proven track record across 
              NATO forces. The U.S. military&rsquo;s Operational Camouflage Pattern (OCP) uniform, the standard 
              combat uniform for all branches, also uses NYCO ripstop&mdash;creating interoperability advantages 
              and a shared material performance baseline across allied forces.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">NYCO Fabric Specifications</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Military-grade NYCO ripstop fabrics are engineered to meet demanding performance standards. The key 
              specifications that make NYCO the preferred military fabric include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Composition</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>50% nylon / 50% cotton (standard NYCO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>Ripstop weave pattern for tear propagation resistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>6.5 oz/yd² typical weight</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Performance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>NIR (near-infrared) compliant finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>Reduced infrared signature vs. synthetic blends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1B2845] font-bold mr-2">•</span>
                    <span>3&ndash;5x slower flame spread than poly-cotton</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Advancing the CORDURA® Portfolio</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              INVISTA, the manufacturer behind the CORDURA® brand, has continued to expand its military textile 
              portfolio beyond standard NYCO. Recent developments include CORDURA TrueLock™ technology for 
              superior lot-to-lot color consistency&mdash;critical for camouflage pattern fidelity&mdash;and 
              CORDURA re/cor™, made from 100% post-industrial recycled nylon 6,6 for applications where 
              sustainability requirements are emerging.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Additionally, the emergence of VTX Ripstop&mdash;a U.S.-manufactured NYCO blend incorporating 
              INVISTA&rsquo;s T420HT high-tenacity nylon fiber with 61% nylon, 37% cotton, and 2% Lycra®&mdash;points 
              to continued innovation in the NYCO fabric space. These next-generation blends offer improved 
              stretch recovery and durability while maintaining the core performance characteristics that have 
              made NYCO the military standard.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">What This Means for the Industry</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Royal Marines&rsquo; adoption of CORDURA® NYCO further validates the fabric as the international 
              benchmark for combat uniform textiles. For fabric suppliers and distributors serving military, law 
              enforcement, and tactical markets, the continued global adoption of NYCO reinforces demand for 
              high-quality nylon-cotton ripstop materials and the manufacturing capabilities to produce them.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As allied forces increasingly standardize on NYCO-based combat uniforms, the supply chain for 
              military-grade nylon-cotton fabrics remains a critical component of defense readiness&mdash;both 
              domestically under Berry Amendment requirements and across international defense partnerships.
            </p>
          </div>

          <section className="mt-16 mb-8">
            <CTA 
              title="NYCO & Ripstop Fabrics from K&T Textiles"
              description="K&T Textiles supplies military-grade NYCO ripstop and tactical fabrics. Explore our fabric offerings or contact us for specifications and pricing."
              buttons={[
                <AnimatedButtonAccent 
                  key="nyco"
                  href="/fabrics/nyco-50-50"
                  textSize="text-lg"
                >
                  NYCO 50/50 Fabrics
                </AnimatedButtonAccent>,
                <AnimatedButtonOutline 
                  key="contact"
                  href={`mailto:${CONTACT.email}?subject=NYCO Fabric Inquiry`}
                  isExternal={true}
                  textSize="text-lg"
                >
                  Contact Us
                </AnimatedButtonOutline>
              ]}
            />
          </section>
        </article>
      </main>
    </div>
  );
}
