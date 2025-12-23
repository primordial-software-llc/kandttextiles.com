import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Mossberg Awarded US Army Contract | K&T Textiles",
  description: "Mossberg has been awarded a significant contract by the US Army, marking an important development in military procurement and tactical equipment. Read the full press release and analysis.",
  keywords: [
    'Mossberg US Army contract',
    'Mossberg military contract',
    'US Army shotguns',
    'military procurement',
    'Mossberg contract award',
    'tactical shotguns'
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
    title: "Mossberg Awarded US Army Contract",
    description: "Mossberg has been awarded a significant contract by the US Army, marking an important development in military procurement and tactical equipment.",
    type: "article",
    url: "https://kandttextiles.com/news/mossberg-awarded-us-army-contract/",
    siteName: "K&T Textiles",
    publishedTime: "2025-12-01",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossberg Awarded US Army Contract",
    description: "A significant development in military procurement - Mossberg's US Army contract award.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/mossberg-awarded-us-army-contract/",
  },
};

export default function MossbergArmyContractPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mossberg Awarded US Army Contract",
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
    "datePublished": "2025-12-01",
    "dateModified": "2025-12-01",
    "description": "Mossberg has been awarded a significant contract by the US Army, marking an important development in military procurement and tactical equipment.",
    "mainEntityOfPage": "https://kandttextiles.com/news/mossberg-awarded-us-army-contract/"
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
              <Link href="/news" className="hover:text-[#1B2845] transition-colors">Industry News</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">Mossberg US Army Contract</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-5 py-16">
          {/* Article Header */}
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
            
            <div className="aspect-video bg-gray-100 relative mb-6 rounded-lg overflow-hidden w-1/2 mx-auto">
              <Image
                src="/images/news/MOSSBERG_SINCE 1919_Black_with path.jpg"
                alt="Mossberg US Army Contract"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Mossberg Awarded US Army Contract
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2025-12-01">
                December 1, 2025
              </time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              Mossberg has been awarded a significant contract by the US Army, representing a major development in military 
              procurement and tactical equipment. This contract award underscores the continued importance of reliable, 
              purpose-built firearms in military applications.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Contract Significance</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Military contract awards represent the culmination of extensive testing, evaluation, and procurement processes. 
              When a manufacturer receives a contract from the US Army, it reflects not just product quality, but also the 
              manufacturer's ability to meet demanding specifications, production requirements, and logistical needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For Mossberg, this contract award demonstrates the company's continued relevance in military applications. 
              The US Army's procurement standards are among the most rigorous in the world, requiring products that can 
              perform reliably under extreme conditions and meet exacting specifications.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Industry Impact</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Military contract awards have broader implications for the industry. They validate manufacturing capabilities, 
              quality control processes, and product reliability. For other manufacturers and suppliers in the tactical 
              equipment space, these awards provide insight into what military end-users value and require.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The procurement process for military contracts involves extensive evaluation of not just the product itself, 
              but also the manufacturer's production capacity, quality assurance systems, and ability to deliver on schedule. 
              Success in this process reflects well on the entire industry's commitment to meeting professional standards.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The Press Release</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Mossberg has released detailed information about the US Army contract award in their official press release. 
              The document provides important details about the contract, specifications, and what this means for military 
              procurement:
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 hover:border-[#1B2845] transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg className="w-8 h-8 text-[#1B2845]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1B2845] mb-4">
                    Mossberg Press Release - US Army Contract
                  </h3>
                  <a 
                    href="/news/Mossberg Press Release - Mossberg Awarded US Army Contract - 12-1-25.pdf" 
                    download
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#1B2845] text-white rounded-lg hover:bg-[#34495e] transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">What This Means</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Military contract awards represent significant validation of a manufacturer's capabilities and products. For 
              professionals in law enforcement and tactical applications, these awards often indicate that the products 
              have been tested and proven under the most demanding conditions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              While military procurement decisions are based on specific requirements that may differ from civilian or law 
              enforcement needs, the rigorous evaluation process provides valuable information about product reliability, 
              durability, and performance characteristics.
            </p>
          </div>

          {/* CTA Section */}
          <section className="mt-16 mb-8">
            <CTA 
              title="Need Professional Tactical Gear?"
              description="While we don't sell firearms, K&T Textiles supplies professional-grade tactical gear, holsters, range bags, and equipment for law enforcement and shooting sports professionals."
              buttons={[
                <AnimatedButtonAccent 
                  key="shooting-accessories"
                  href="/products/shooting-accessories"
                  textSize="text-lg"
                >
                  Browse Shooting Accessories
                </AnimatedButtonAccent>,
                <AnimatedButtonOutline 
                  key="contact"
                  href={`mailto:${CONTACT.email}?subject=Professional Gear Inquiry`}
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

