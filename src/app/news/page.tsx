import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industry News & Insights | K&T Textiles",
  description: "Stay informed with industry news, product announcements, and insights on tactical gear, law enforcement equipment, and shooting sports.",
  keywords: [
    'tactical gear news',
    'law enforcement equipment',
    'shooting sports news',
    'firearms industry',
    'tactical equipment updates'
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
    title: "Industry News & Insights | K&T Textiles",
    description: "Stay informed with industry news, product announcements, and insights on tactical gear, law enforcement equipment, and shooting sports.",
    type: "website",
    url: "https://kandttextiles.com/news/",
    siteName: "K&T Textiles",
  },
  alternates: {
    canonical: "https://kandttextiles.com/news/",
  },
};

// Helper function to format dates without timezone issues
function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// This would typically come from a CMS or database
const articles = [
  {
    slug: "berry-amendment-caucus-military-textiles",
    title: "Congress Launches Berry Amendment Caucus to Protect Domestic Military Textile Manufacturing",
    excerpt: "A bipartisan Berry Amendment Caucus has been launched in the House of Representatives to strengthen domestic defense textile manufacturing, protecting over $1.8 billion in annual military uniform and equipment production.",
    publishedDate: "2026-02-20",
    category: "Industry News",
    readTime: "6 min read"
  },
  {
    slug: "cordura-nyco-royal-marines-uniform",
    title: "CORDURA® NYCO Fabric Selected for New Royal Marines Uniform Program",
    excerpt: "CORDURA® NYCO fabric has been adopted for the Royal Marines' Future Commando Force uniform program, reinforcing NYCO ripstop as the global standard for modern military combat uniforms.",
    publishedDate: "2025-11-15",
    category: "Industry News",
    readTime: "5 min read"
  }
];

export default function NewsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industry News & Insights",
    "description": "Stay informed with industry news, product announcements, and insights on tactical gear, law enforcement equipment, and shooting sports.",
    "url": "https://kandttextiles.com/news/",
    "publisher": {
      "@type": "Organization",
      "name": "K&T Textiles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kandttextiles.com/logo.png"
      }
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
              <span className="text-[#1B2845] font-medium">Industry News</span>
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
              Industry News & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest product announcements, industry developments, and insights on tactical gear, law enforcement equipment, and shooting sports.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="aspect-video bg-gray-100 relative">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1B2845] to-[#34495e]">
                        <span className="text-white text-2xl font-bold">News</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#1B2845] bg-[#1B2845]/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#1B2845] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500" dateTime={article.publishedDate}>
                        {formatDate(article.publishedDate)}
                      </time>
                      <span className="text-[#1B2845] font-medium text-sm">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

