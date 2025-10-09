import Image from "next/image";
import Link from "next/link";
import { oakleyData } from '@/data/suppliers/oakley';
import { BaseStructuredData } from '@/components/BaseStructuredData';
import ProductSlideshow from '@/components/ProductSlideshow';
import { BrandHero } from '@/components/BrandHero';
import { CONTACT } from '@/constants/contact';
import { CTA } from '@/components/CTA';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';

export const metadata = {
  title: "Oakley Tactical & Performance Eyewear | Authorized Dealer",
  description: "Authorized Oakley dealer providing ballistic eyewear, tactical gloves, and performance gear with worldwide shipping. Military, law enforcement, and professional grade equipment.",
  keywords: [
    'Oakley dealer',
    'Oakley SI',
    'ballistic eyewear',
    'tactical glasses',
    'M Frame',
    'Oakley tactical gloves',
    'ballistic protection',
    'military eyewear',
    'law enforcement gear',
    'Oakley Standard Issue'
  ],
  openGraph: {
    title: "Oakley Tactical & Performance Eyewear | K&T Textiles",
    description: "Authorized dealer shipping authentic Oakley tactical gear worldwide",
    images: [
      {
        url: "/oakley/m-frame-ballistic.jpg",
        width: 1200,
        height: 630,
        alt: "Oakley M Frame Ballistic Eyewear"
      }
    ]
  }
};

function urlSafeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function OakleySupplier() {
  return (
    <>
      <BaseStructuredData />

      <BrandHero
        title={oakleyData.hero.title}
        subtitle={oakleyData.hero.subtitle}
        logo={oakleyData.hero.logo}
      />

      {/* Spotlight Section with Product Slideshow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src={oakleyData.spotlight.logo.src}
                    alt={oakleyData.spotlight.logo.alt}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-[#1B2845]">
                  {oakleyData.spotlight.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {oakleyData.spotlight.description}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {oakleyData.spotlight.links.map((link, index) => (
                  link.variant === 'primary' ? (
                    <AnimatedButtonAccent
                      key={index}
                      href={link.href}
                      isExternal={link.isExternal}
                    >
                      {link.text}
                    </AnimatedButtonAccent>
                  ) : link.variant === 'secondary' ? (
                    <AnimatedButtonOutline
                      key={index}
                      href={link.href}
                      isExternal={link.isExternal}
                    >
                      {link.text}
                    </AnimatedButtonOutline>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className="px-6 py-3 border border-[#1B2845] text-[#1B2845] rounded-lg hover:bg-[#1B2845] hover:text-white transition-all duration-300"
                    >
                      {link.text}
                    </Link>
                  )
                ))}
              </div>
            </div>

            <div>
              <ProductSlideshow
                images={oakleyData.spotlight.slideshow.images}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title={oakleyData.cta.title}
        description={oakleyData.cta.description}
        buttons={oakleyData.cta.buttons.map((button, index) =>
          button.variant === 'primary' ? (
            <AnimatedButtonAccent
              key={index}
              href={button.href}
              isExternal={button.isExternal}
              textSize="text-xl"
            >
              <span className="font-bold">{button.text}</span>
            </AnimatedButtonAccent>
          ) : (
            <AnimatedButtonOutline
              key={index}
              href={button.href}
              isExternal={button.isExternal}
              textSize="text-xl"
            >
              <span className="font-bold">{button.text}</span>
            </AnimatedButtonOutline>
          )
        )}
      />
    </>
  );
}

