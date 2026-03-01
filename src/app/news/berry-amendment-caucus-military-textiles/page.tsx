import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing | K&T Textiles",
  description: "A bipartisan Berry Amendment Caucus has been launched in Congress to strengthen domestic defense textile manufacturing, protecting over $1.8 billion in annual military uniform and equipment production.",
  keywords: [
    'Berry Amendment',
    'Berry Amendment Caucus',
    'military textiles',
    'domestic textile manufacturing',
    'defense procurement',
    'NDAA 2026',
    'military uniforms',
    'Made in USA textiles'
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
    title: "Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing",
    description: "A bipartisan Berry Amendment Caucus has been launched in Congress to strengthen domestic defense textile manufacturing.",
    type: "article",
    url: "https://kandttextiles.com/news/berry-amendment-caucus-military-textiles/",
    siteName: "K&T Textiles",
    publishedTime: "2026-02-20",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing",
    description: "Bipartisan caucus aims to strengthen domestic defense textile manufacturing and protect American military procurement.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/berry-amendment-caucus-military-textiles/",
  },
};

export default function BerryAmendmentCaucusPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing",
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
    "datePublished": "2026-02-20",
    "dateModified": "2026-02-20",
    "description": "A bipartisan Berry Amendment Caucus has been launched in Congress to strengthen domestic defense textile manufacturing.",
    "mainEntityOfPage": "https://kandttextiles.com/news/berry-amendment-caucus-military-textiles/"
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
              <span className="text-[#1B2845] font-medium">Berry Amendment Caucus</span>
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
              Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2026-02-20">
                February 20, 2026
              </time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              A bipartisan Berry Amendment Caucus has been launched in the U.S. House of Representatives, co-chaired by 
              Representatives Pat Harrigan (R-N.C.) and Don Davis (D-N.C.). The caucus aims to strengthen domestic defense 
              manufacturing and protect the American military textile supply chain&mdash;an industry producing more than 
              $1.8 billion annually in uniforms and equipment for the U.S. military.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">What Is the Berry Amendment?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Berry Amendment is a statutory requirement that the Department of Defense procure certain items&mdash;including 
              textiles, clothing, footwear, and food&mdash;that are produced entirely in the United States. Originally enacted 
              in 1941, the amendment ensures that critical military supplies are manufactured domestically, protecting both 
              national security interests and American manufacturing jobs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For the textile industry specifically, the Berry Amendment requires that every stage of production occurs in the 
              U.S.: from fiber and yarn production, through weaving and finishing, to the final cut-and-sew operations. This 
              end-to-end domestic requirement has sustained a robust military textile manufacturing base across the country.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Why the Caucus Matters Now</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The formation of the Berry Amendment Caucus comes at a critical time for domestic textile manufacturers. 
              The FY2026 National Defense Authorization Act, signed by President Trump on December 18, 2025, raised the 
              Simplified Acquisition Threshold (SAT) under the Berry Amendment from $150,000 to $200,000 following a 
              DOD inflationary review. Contracts below this threshold are exempt from Berry Amendment requirements, 
              meaning the Department of Defense can purchase foreign-made textiles for smaller procurements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Industry groups including the National Council of Textile Organizations (NCTO) and the U.S. Industrial &amp; 
              Narrow Fabrics Institute (USINFI) have expressed strong support for the caucus, viewing it as an important 
              counterweight to threshold increases that could erode domestic manufacturing capacity over time.
            </p>

            <div className="bg-[#1B2845]/5 border-l-4 border-[#1B2845] p-6 my-8">
              <p className="text-gray-700 leading-relaxed font-medium mb-0">
                American companies produce more than 8,000 different textile items for military use, supporting 
                manufacturing jobs across the country and ensuring the U.S. military is not dependent on foreign 
                supply chains for essential equipment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">FY2026 NDAA: Key Textile Provisions</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond the SAT adjustment, the FY2026 NDAA includes Section 865, which directs the Secretary of Defense 
              to pursue &ldquo;public-private partnerships and investments into technological advancement of the domestic 
              textile and footwear industrial base.&rdquo; While the provision does not include specific funding, it 
              signals Congressional recognition that domestic textile manufacturing capabilities require ongoing investment 
              to remain competitive.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This is particularly relevant as military fabric specifications continue to evolve. Modern combat uniforms 
              require advanced materials like NYCO ripstop blends with specific performance characteristics&mdash;flame 
              resistance, infrared signature management, and near-infrared compliance&mdash;that demand sophisticated 
              domestic manufacturing capabilities.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Impact on the Textile Supply Chain</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For textile distributors and suppliers operating in the military and tactical markets, the Berry Amendment 
              Caucus represents an important development. A strong domestic textile manufacturing base ensures reliable 
              sourcing for Berry-compliant fabrics including:
            </p>

            <ul className="text-gray-700 leading-relaxed mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-[#1B2845] font-bold mr-3 mt-1">•</span>
                <span><strong>NYCO 50/50 ripstop</strong> &mdash; The standard nylon-cotton blend used across U.S. military combat uniforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B2845] font-bold mr-3 mt-1">•</span>
                <span><strong>Flame-resistant fabrics</strong> &mdash; Critical for combat applications where burn injury protection is required</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B2845] font-bold mr-3 mt-1">•</span>
                <span><strong>Camouflage-printed textiles</strong> &mdash; OCP, Multicam, and other patterns requiring precise color matching and NIR compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B2845] font-bold mr-3 mt-1">•</span>
                <span><strong>Load-bearing and pack fabrics</strong> &mdash; High-tenacity nylons and CORDURA® materials for tactical gear</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Looking Ahead</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Berry Amendment Caucus is expected to advocate for maintaining strong domestic content requirements 
              in future defense authorization bills and to push for investments in textile manufacturing technology. 
              With increasing geopolitical tensions highlighting the risks of supply chain dependence on foreign nations, 
              the caucus has bipartisan support for ensuring the U.S. maintains its capability to produce the textiles 
              and equipment its military needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For companies like K&T Textiles that operate within the military and tactical textile supply chain, 
              these developments reinforce the importance of Berry Amendment compliance and domestic sourcing 
              relationships. As specifications evolve and procurement thresholds shift, staying informed on 
              legislative developments is essential for maintaining a competitive position in the defense textile market.
            </p>
          </div>

          <section className="mt-16 mb-8">
            <CTA 
              title="Berry Amendment Compliant Fabrics"
              description="K&T Textiles supplies Berry Amendment compliant NYCO, ripstop, and tactical fabrics for military and government applications. Contact us for specifications and availability."
              buttons={[
                <AnimatedButtonAccent 
                  key="fabrics"
                  href="/fabrics/berry-amendment"
                  textSize="text-lg"
                >
                  Berry Amendment Fabrics
                </AnimatedButtonAccent>,
                <AnimatedButtonOutline 
                  key="contact"
                  href={`mailto:${CONTACT.email}?subject=Berry Amendment Fabric Inquiry`}
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
