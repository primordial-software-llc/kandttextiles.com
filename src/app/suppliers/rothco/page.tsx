import Image from "next/image";
import Link from "next/link";
import { rothcoData } from '@/data/suppliers/rothco';
import { BaseStructuredData } from '@/components/BaseStructuredData';
import { ProductStructuredData } from '@/components/ProductStructuredData';
import ProductSlideshow from '@/components/ProductSlideshow';
import { BrandHero } from '@/components/BrandHero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CONTACT } from '@/constants/contact';

export const metadata = {
  title: "Rothco Military & Tactical Gear | Authorized International Dealer",
  description: "Authorized Rothco dealer providing worldwide shipping of premium military and tactical gear. Get authentic Rothco products with expert international fulfillment.",
  keywords: [
    'Rothco dealer',
    'military gear',
    'tactical equipment',
    'international shipping',
    'MA-1 Flight Jacket',
    'tactical pants',
    'military boots',
    'shemagh',
    'wholesale tactical gear'
  ],
  openGraph: {
    title: "Rothco Military & Tactical Gear | K&T Textiles",
    description: "Authorized dealer shipping authentic Rothco tactical gear worldwide",
    images: [
      {
        url: "/rothco/ma1-flight-jacket/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rothco MA-1 Flight Jacket"
      }
    ]
  }
};

function urlSafeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function Suppliers() {
  return (
    <>
      <BaseStructuredData />
      <ProductStructuredData 
        products={rothcoData.featuredProducts.map(product => ({
          name: product.name,
          description: product.description,
          image: product.image,
          brandName: "Rothco",
          sellerName: "K&T Textiles",
          price: product.price
        }))}
      />

      <BrandHero
        title={rothcoData.hero.title}
        subtitle={rothcoData.hero.subtitle}
        logo={rothcoData.hero.logo}
      />

      <main>
        {/* Supplier Spotlight Section */}
        <section className="supplier-spotlight bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-12">
                <div className="space-y-8">
                  <div className="flex items-center h-24">
                    <div className="relative w-[240px] h-[160px]">
                      <Image
                        src={rothcoData.spotlight.logo.src}
                        alt={rothcoData.spotlight.logo.alt}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 240px, 240px"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#1a237e]">{rothcoData.spotlight.title}</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line">
                      {rothcoData.spotlight.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {rothcoData.spotlight.links.map((link, index) => {
                        const className = `inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          link.variant === 'primary' 
                            ? 'bg-[#1a237e] text-white hover:bg-[#0d47a1]'
                            : link.variant === 'secondary'
                            ? 'bg-[#64b5f6] text-white hover:bg-[#42a5f5]'
                            : 'bg-white text-[#1a237e] border border-[#1a237e] hover:bg-[#1a237e] hover:text-white'
                        }`;

                        return link.isExternal ? (
                          <a 
                            key={index}
                            href={link.href}
                            target="_blank"
                            className={className}
                          >
                            {link.text}
                          </a>
                        ) : (
                          <Link 
                            key={index}
                            href={link.href}
                            className={className}
                          >
                            {link.text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <ProductSlideshow 
                  images={rothcoData.spotlight.slideshow.images}
                />
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts
          title={rothcoData.spotlight.title}
          products={rothcoData.featuredProducts}
          sectionId={`${urlSafeName(rothcoData.spotlight.title)}-products`}
        />

        {/* CTA Section */}
        <section className="supplier-cta bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 py-12">
            <div className="relative bg-[#1B2845] rounded-2xl p-12 text-center overflow-hidden">
              {/* Simpler, more subtle background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">{rothcoData.cta.title}</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {rothcoData.cta.description}
                </p>
                <div className="flex gap-4 justify-center">
                  {rothcoData.cta.buttons.map((button, index) => (
                    button.isExternal ? (
                      <a 
                        key={index}
                        href={button.href}
                        target="_blank"
                        className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                          button.variant === 'primary' 
                            ? 'bg-white text-[#1B2845] hover:bg-gray-100' 
                            : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
                        }`}
                      >
                        {button.text}
                      </a>
                    ) : (
                      <Link 
                        key={index}
                        href={button.href}
                        className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                          button.variant === 'primary' 
                            ? 'bg-white text-[#1B2845] hover:bg-gray-100' 
                            : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
                        }`}
                      >
                        {button.text}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#102a43] text-white py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">K&T Textiles</h3>
              <p className="text-gray-300">Authorized Rothco dealer specializing in military and tactical gear exports.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Rothco Products</h3>
              <ul className="space-y-2">
                <li><a href="#rothco-products" className="text-gray-300 hover:text-white transition-colors">Featured Items</a></li>
                <li><Link href="/catalog" className="text-gray-300 hover:text-white transition-colors">Full Catalog</Link></li>
                <li><a href="https://www.rothco.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">Visit Rothco.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a></li>
                <li className="text-sm mt-4">Authorized Rothco Dealer</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-gray-300">&copy; 2025 K&T Textiles. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 