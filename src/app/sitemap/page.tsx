import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | K&T Textiles",
  description: "Complete sitemap of K&T Textiles website - find all our pages including products, suppliers, logistics, and resources.",
  robots: {
    index: true,
    follow: true,
  },
};

// Organized site structure
const siteStructure = {
  "Main Pages": [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/#about" },
    { name: "Contact", url: "/#contact" },
  ],
  "Products": [
    { name: "All Products", url: "/products" },
    { name: "Featured Products", url: "/products/featured" },
    { name: "Shooting Accessories", url: "/products/shooting-accessories" },
  ],
  "Suppliers": [
    { name: "Our Suppliers", url: "/suppliers" },
    { name: "Rothco", url: "/suppliers/rothco" },
    { name: "Oakley", url: "/suppliers/oakley" },
    { name: "Harken", url: "/suppliers/harken" },
  ],
  "Logistics & Compliance": [
    { name: "Logistics", url: "/logistics" },
    { name: "ITAR & EAR Restrictions Guide", url: "/logistics/itar-ear-restrictions" },
    { name: "Tracki Pro GPS Tracking", url: "/logistics/tracki-pro" },
  ],
  "Resources": [
    { name: "Florida Range Guides", url: "/ranges/tampa-bay" },
  ],
  "Industry News": [
    { name: "Industry News", url: "/news" },
    { name: "Mossberg 590A1 Professional Series", url: "/news/mossberg-590a1-professional-series-announcement" },
  ],
  "Fabrics": [
    { name: "Fabrics Overview", url: "/fabrics" },
    { name: "Berry Amendment Compliance", url: "/fabrics/berry-amendment" },
    { name: "Camouflage Patterns", url: "/fabrics/camouflage-patterns" },
    { name: "NYCO 50/50 Fabric", url: "/fabrics/nyco-50-50" },
    { name: "Ripstop Fabric", url: "/fabrics/ripstop" },
  ],
  "Vendor Portal": [
    { name: "Vendor Login", url: "/vendor/login" },
    { name: "Vendor Dashboard", url: "/vendor/dashboard" }
  ],
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#1B2845] transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">Sitemap</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Navigate all pages and resources on K&T Textiles
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(siteStructure).map(([category, pages]) => (
              <div key={category} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#1B2845] mb-4 pb-2 border-b border-gray-200">
                  {category}
                </h2>
                <ul className="space-y-3">
                  {pages.map((page) => (
                    <li key={page.url}>
                      <Link 
                        href={page.url}
                        className="text-gray-700 hover:text-[#1B2845] transition-colors flex items-center group"
                      >
                        <svg 
                          className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#1B2845] transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1B2845] mb-4">About Our Site</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              K&T Textiles specializes in premium fabric and apparel exports, tactical equipment, and international logistics. 
              Our website provides comprehensive information about our products, suppliers, and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For questions about specific products or services, please visit our <Link href="/#contact" className="text-[#1B2845] hover:underline">contact page</Link> or 
              email us at <a href="mailto:contact@kandttextiles.com" className="text-[#1B2845] hover:underline">contact@kandttextiles.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

