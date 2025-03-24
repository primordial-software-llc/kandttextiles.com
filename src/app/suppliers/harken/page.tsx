import Image from "next/image";
import Link from "next/link";
import { CONTACT } from '@/constants/contact';
import { harkenData } from '@/data/suppliers/harken';
import { BaseStructuredData } from '@/components/BaseStructuredData';
import { ProductStructuredData } from '@/components/ProductStructuredData';
import ProductSlideshow from '@/components/ProductSlideshow';
import { BrandHero } from '@/components/BrandHero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: "Harken Marine Hardware | Authorized Seller",
  description: "Authorized seller of genuine Harken marine hardware and equipment. Professional international shipping and fulfillment.",
  keywords: [
    'Harken dealer',
    'marine hardware',
    'sailing equipment',
    'international shipping',
    'boat hardware',
    'winches',
    'blocks',
    'travelers'
  ],
  openGraph: {
    title: "Harken Marine Hardware | K&T Textiles",
    description: "Authorized seller shipping genuine Harken marine hardware worldwide",
    images: [
      {
        url: "/harken/reflex-glove-3-4-finger.webp",
        width: 1200,
        height: 630,
        alt: "Harken Reflex Sailing Gloves"
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
        products={harkenData.featuredProducts.map(product => ({
          name: product.name,
          description: product.description,
          image: product.image,
          brandName: "Harken",
          sellerName: "K&T Textiles",
          price: product.price
        }))}
      />

      <BrandHero
        title={harkenData.hero.title}
        subtitle={harkenData.hero.subtitle}
        logo={harkenData.hero.logo}
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
                        src={harkenData.spotlight.logo.src}
                        alt={harkenData.spotlight.logo.alt}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 240px, 240px"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#1a237e]">{harkenData.spotlight.title}</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line">
                      {harkenData.spotlight.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {harkenData.spotlight.links.map((link, index) => {
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
                  images={harkenData.spotlight.slideshow.images}
                />
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts
          title={harkenData.spotlight.title}
          products={harkenData.featuredProducts}
          sectionId={`${urlSafeName(harkenData.spotlight.title)}-products`}
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
                <h2 className="text-3xl font-bold text-white mb-4">{harkenData.cta.title}</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {harkenData.cta.description}
                </p>
                <div className="flex gap-4 justify-center">
                  {harkenData.cta.buttons.map((button, index) => (
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

      <Footer variant="dark" />
    </>
  );
} 