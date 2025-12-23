import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Mossberg Introduces Purpose-Built 590A1 Professional Series Shotguns | K&T Textiles",
  description: "Mossberg's announcement about building purpose-made 590A1 Professional Series versions marks a significant development for law enforcement and tactical professionals. Read the full press release and analysis.",
  keywords: [
    'Mossberg 590A1',
    'Mossberg Professional Series',
    'law enforcement shotguns',
    'tactical shotguns',
    'Mossberg 590A1 announcement',
    'purpose-built shotguns'
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
    title: "Mossberg Introduces Purpose-Built 590A1 Professional Series Shotguns",
    description: "Mossberg's announcement about building purpose-made 590A1 Professional Series versions marks a significant development for law enforcement and tactical professionals.",
    type: "article",
    url: "https://kandttextiles.com/news/mossberg-590a1-professional-series-announcement/",
    siteName: "K&T Textiles",
    publishedTime: "2025-01-15",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossberg Introduces Purpose-Built 590A1 Professional Series Shotguns",
    description: "A significant development for law enforcement and tactical professionals - Mossberg's purpose-made 590A1 Professional Series announcement.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/mossberg-590a1-professional-series-announcement/",
  },
};

export default function Mossberg590A1ArticlePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mossberg Introduces Purpose-Built 590A1 Professional Series Shotguns",
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
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "description": "Mossberg's announcement about building purpose-made 590A1 Professional Series versions marks a significant development for law enforcement and tactical professionals.",
    "mainEntityOfPage": "https://kandttextiles.com/news/mossberg-590a1-professional-series-announcement/"
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
              <span className="text-[#1B2845] font-medium">Mossberg 590A1 Professional Series</span>
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
                alt="Mossberg 590A1 Professional Series"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Mossberg Introduces Purpose-Built 590A1 Professional Series Shotguns
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2025-01-15">
                January 15, 2025
              </time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              Earlier this year, Mossberg made a significant announcement that hasn't received the attention it deserves: 
              the introduction of purpose-built 590A1 Professional Series shotguns. For those familiar with the platform, 
              this represents a major development - essentially the most capable version of what's already considered one 
              of the most reliable shotguns in service today.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Why This Matters</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Mossberg 590A1 has long been a standard for law enforcement and military applications. What makes this 
              Professional Series announcement notable is that these aren't simply commercial shotguns with tactical accessories 
              - they're purpose-built from the ground up for professional use. The distinction matters.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              While Mossberg has consistently produced reliable shotguns for decades, the Professional Series designation 
              suggests a level of specification and build quality specifically tailored to the demands of law enforcement 
              and tactical operations. This isn't just marketing - it's a commitment to meeting the exact requirements 
              that professionals need in the field.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The Professional Series Difference</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The 590A1 Professional Series builds on the proven 590A1 platform with features specifically designed for 
              law enforcement applications. These shotguns are built to meet the demanding specifications required by 
              agencies that rely on them in high-stakes situations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Key aspects of the Professional Series include enhanced durability, improved ergonomics, and configurations 
              optimized for various tactical roles. The attention to detail in these purpose-built versions reflects an 
              understanding of what professionals actually need - not just what looks good in a catalog.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Industry Significance</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              What makes this announcement particularly noteworthy is how under-reported it's been in the mainstream 
              firearms media. For a platform as widely used as the 590A1, a purpose-built Professional Series represents 
              a significant shift in how manufacturers approach law enforcement needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Historically, many law enforcement shotguns were commercial models adapted for professional use. The 
              Professional Series concept suggests a more direct approach - designing specifically for professional 
              requirements from the outset, rather than retrofitting commercial models.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The Press Release</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Mossberg has released detailed information about the 590A1 Professional Series in their official press release. 
              The document provides specifications, configurations, and details that aren't readily available elsewhere. 
              Rather than burying this information, we're making it easily accessible:
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
                    Mossberg 590A1 Professional Series Press Release
                  </h3>
                  <a 
                    href="/news/mossberg-590a1-professional-series-press-release.pdf" 
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

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">What This Means for Professionals</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For law enforcement agencies and tactical professionals, the Professional Series represents an option that's 
              been built with their specific requirements in mind. Rather than adapting a commercial shotgun, these are 
              designed from the ground up to meet professional standards.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The availability of purpose-built options is always a positive development in the industry. When manufacturers 
              take the time to understand professional requirements and build specifically for them, everyone benefits - 
              from the officers in the field to the agencies making procurement decisions.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Related Resources</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For more information about Mossberg's Professional Series and other law enforcement offerings, visit the 
              official Mossberg Law Enforcement website:
            </p>

            <ul className="space-y-2 mb-8">
              <li>
                <a 
                  href="https://lawenforcement.mossberg.com/corporate/press-releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1B2845] hover:underline flex items-center"
                >
                  Mossberg Press Releases
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://lawenforcement.mossberg.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1B2845] hover:underline flex items-center"
                >
                  Mossberg Law Enforcement Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
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

