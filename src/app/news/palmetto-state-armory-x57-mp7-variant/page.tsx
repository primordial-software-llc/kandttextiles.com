import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Palmetto State Armory Announces X5.7 MP7 Variant | K&T Textiles",
  description: "Palmetto State Armory has announced their X5.7 MP7 variant, bringing an accessible platform inspired by the MP7 design to the civilian market.",
  keywords: [
    'Palmetto State Armory',
    'PSA X5.7',
    'MP7 variant',
    '5.7x28mm',
    'tactical firearms',
    'PSA MP7'
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
    title: "Palmetto State Armory Announces X5.7 MP7 Variant",
    description: "Palmetto State Armory has announced their X5.7 MP7 variant, bringing an accessible platform inspired by the MP7 design to the civilian market.",
    type: "article",
    url: "https://kandttextiles.com/news/palmetto-state-armory-x57-mp7-variant/",
    siteName: "K&T Textiles",
    publishedTime: "2025-01-20",
    authors: ["K&T Textiles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmetto State Armory Announces X5.7 MP7 Variant",
    description: "An accessible MP7-inspired platform - Palmetto State Armory's X5.7 announcement.",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/palmetto-state-armory-x57-mp7-variant/",
  },
};

export default function PSAX57MP7Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Palmetto State Armory Announces X5.7 MP7 Variant",
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
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-20",
    "description": "Palmetto State Armory has announced their X5.7 MP7 variant, bringing an accessible platform inspired by the MP7 design to the civilian market.",
    "mainEntityOfPage": "https://kandttextiles.com/news/palmetto-state-armory-x57-mp7-variant/"
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
              <span className="text-[#1B2845] font-medium">Palmetto State Armory X5.7 MP7</span>
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
                src="/images/news/palmetto_state_armory_logo.png"
                alt="Palmetto State Armory X5.7 MP7 Variant"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Palmetto State Armory Announces X5.7 MP7 Variant
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm space-x-6">
              <time dateTime="2025-01-20">
                January 20, 2025
              </time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              Palmetto State Armory has announced their X5.7 MP7 variant, a platform that brings MP7-inspired design 
              to the civilian market in 5.7x28mm. This announcement represents another example of manufacturers 
              creating accessible alternatives to military and law enforcement platforms for civilian use.
            </p>

            <div className="my-8">
              <div className="aspect-video w-full max-w-3xl mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Wfk5OLCDyIE?si=lcNWi39nLOBIqSBl"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">The X5.7 Platform</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The X5.7 MP7 variant is designed around the 5.7x28mm cartridge, a round that has gained popularity 
              in both civilian and professional markets. The platform takes design cues from the MP7, offering a 
              compact, ergonomic form factor that appeals to enthusiasts interested in modern tactical platforms.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Palmetto State Armory has built a reputation for offering accessible alternatives to premium platforms, 
              and the X5.7 MP7 variant continues this approach. By creating a civilian-legal platform inspired by 
              professional designs, PSA makes these types of firearms more accessible to a broader market.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Market Significance</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The announcement of the X5.7 MP7 variant reflects ongoing trends in the firearms industry where manufacturers 
              create civilian-legal versions of military and law enforcement platforms. These platforms often incorporate 
              design elements and ergonomics from professional-grade firearms while remaining compliant with civilian 
              regulations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The 5.7x28mm cartridge has seen increased adoption in recent years, with multiple manufacturers offering 
              platforms chambered in this round. The X5.7 MP7 variant represents another option for enthusiasts interested 
              in this cartridge, particularly those drawn to the MP7's design language and ergonomics.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Design and Features</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              While specific details about the X5.7 MP7 variant's features and specifications will be available through 
              Palmetto State Armory's official channels, the platform is expected to incorporate design elements inspired 
              by the MP7, adapted for civilian use and chambered in 5.7x28mm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The compact, ergonomic design typical of MP7-inspired platforms makes them appealing for various applications, 
              from range use to potential defensive applications. The 5.7x28mm cartridge offers a balance of performance 
              characteristics that many find appealing in compact platforms.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2845] mt-12 mb-6">Industry Context</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Palmetto State Armory's announcement adds to a growing category of civilian platforms inspired by military 
              and law enforcement designs. These platforms often generate significant interest due to their connection to 
              professional-grade firearms, while remaining accessible to civilian markets.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The X5.7 MP7 variant announcement demonstrates how manufacturers continue to innovate and create new options 
              for enthusiasts. As with any new platform, interested parties should consult Palmetto State Armory's official 
              specifications and availability information for complete details.
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

