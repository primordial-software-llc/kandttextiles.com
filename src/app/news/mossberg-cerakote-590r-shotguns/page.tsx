import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector | K&T Textiles",
  description: "Mossberg has introduced Cerakote-finished versions of their 590R shotguns featuring rotary safety selectors, offering enhanced durability and corrosion resistance for professional applications.",
  keywords: [
    'Mossberg 590R',
    'Cerakote shotguns',
    'rotary safety selector',
    'Mossberg 590R Cerakote',
    'tactical shotguns',
    'corrosion resistant shotguns'
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
    title: "Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector",
    description: "Mossberg has introduced Cerakote-finished versions of their 590R shotguns featuring rotary safety selectors, offering enhanced durability and corrosion resistance.",
    type: "article",
    url: "https://kandttextiles.com/news/mossberg-cerakote-590r-shotguns/",
    siteName: "K&T Textiles",
    publishedTime: "2025-07-01",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector",
    description: "Enhanced durability and corrosion resistance - Mossberg's new Cerakote 590R shotguns with rotary safety selector.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/mossberg-cerakote-590r-shotguns/",
  },
};

export default function MossbergCerakote590RPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector",
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
    "datePublished": "2025-07-01",
    "dateModified": "2025-07-01",
    "description": "Mossberg has introduced Cerakote-finished versions of their 590R shotguns featuring rotary safety selectors, offering enhanced durability and corrosion resistance for professional applications.",
    "mainEntityOfPage": "https://kandttextiles.com/news/mossberg-cerakote-590r-shotguns/"
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
              <span className="text-[#1B2845] font-medium">Mossberg Cerakote 590R Shotguns</span>
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
                alt="Mossberg Cerakote 590R Shotguns"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2025-07-01">
                July 1, 2025
              </time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              Mossberg has expanded their 590R shotgun line with Cerakote-finished versions featuring rotary safety selectors. 
              This addition addresses the need for enhanced durability and corrosion resistance in professional and tactical 
              applications, while the rotary safety selector provides improved ergonomics and reliability.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Cerakote Finish Benefits</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cerakote ceramic coating offers significant advantages over traditional finishes, particularly in demanding 
              environments. The finish provides superior corrosion resistance, hardness, and durability compared to standard 
              bluing or anodizing. For shotguns used in law enforcement, military, or harsh environmental conditions, this 
              translates to better long-term performance and reduced maintenance requirements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The ceramic-based coating creates a protective barrier that resists moisture, chemicals, and wear. This is 
              particularly valuable for firearms that may be exposed to adverse weather conditions, saltwater environments, 
              or extended storage periods. The finish also maintains its appearance and protective qualities over time, 
              making it a practical choice for professional applications.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Rotary Safety Selector</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The rotary safety selector represents an important ergonomic improvement. Unlike traditional cross-bolt safeties, 
              the rotary design offers more intuitive operation and can be easier to manipulate, especially when wearing 
              gloves or in high-stress situations. This type of safety mechanism has become increasingly popular in tactical 
              and professional applications for its reliability and ease of use.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For professionals who rely on their equipment in critical situations, the rotary safety selector provides 
              consistent, positive engagement that can be operated quickly and confidently. The design reduces the likelihood 
              of accidental disengagement while maintaining quick access when needed.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Professional Applications</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The combination of Cerakote finish and rotary safety selector makes these 590R variants particularly well-suited 
              for professional use. Law enforcement agencies, security professionals, and tactical operators often require 
              equipment that can withstand harsh conditions while maintaining reliability and ease of operation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              These enhancements address real-world needs identified through professional use. The improved corrosion 
              resistance extends the service life of the firearms, while the rotary safety selector improves operational 
              efficiency. Together, these features represent a thoughtful evolution of the 590R platform based on user 
              feedback and professional requirements.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The Press Release</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Mossberg has released detailed information about the new Cerakote-finished 590R shotguns with rotary safety 
              selectors in their official press release. The document provides specifications, available configurations, 
              and details about the features:
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
                    Mossberg Press Release - Cerakote 590R Shotguns
                  </h3>
                  <a 
                    href="/news/Mossberg Press Release - Mossberg Adds Cerakote Versions of 590R Shotguns with Rotary Safety Selector - 7-1-25.pdf" 
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

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Industry Significance</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The introduction of Cerakote-finished versions with rotary safety selectors reflects ongoing industry trends 
              toward enhanced durability and improved ergonomics. Manufacturers continue to refine their products based on 
              professional feedback, incorporating features that address real-world operational needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              These enhancements demonstrate Mossberg's commitment to evolving their product lines to meet changing 
              professional requirements. The combination of proven platform reliability with modern finish technology and 
              improved ergonomics represents a thoughtful approach to product development.
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

