import Image from "next/image";
import Link from "next/link";
import { rothcoData } from '@/data/suppliers/rothco';
import { BaseStructuredData } from '@/components/BaseStructuredData';
import { ProductStructuredData } from '@/components/ProductStructuredData';
import ProductSlideshow from '@/components/ProductSlideshow';
import { BrandHero } from '@/components/BrandHero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CONTACT } from '@/constants/contact';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';

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
        <CTA 
          title={rothcoData.cta.title}
          description={rothcoData.cta.description}
          buttons={rothcoData.cta.buttons}
        />
      </main>

      <Footer variant="dark" />
    </>
  );
} 