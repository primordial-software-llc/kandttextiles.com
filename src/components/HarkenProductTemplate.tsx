"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";

interface HarkenProductTemplateProps {
  product: {
    name: string;
    image: string;
    description: string;
    features: string[];
    price: number;
    video?: string;
  };
  productId: string;
}

export function HarkenProductTemplate({ product, productId }: HarkenProductTemplateProps) {
  // Generate product-specific email subject and body
  const getEmailSubject = () => `${product.name} Quote Request`;
  const getEmailBody = () => `I'm interested in the ${product.name}. Please send me pricing and availability information.`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white py-4 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#1B2845] transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-[#1B2845] transition-colors">Products</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/suppliers/harken" className="hover:text-[#1B2845] transition-colors">Harken</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">{product.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <Link 
                  href="/suppliers/harken"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-[#1B2845] transition-colors mb-4"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Harken
                </Link>
                <h1 className="text-4xl font-bold text-[#1B2845] mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-[#1B2845] to-[#34495e] text-white rounded-lg p-6 mb-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-sm opacity-80 uppercase tracking-wide block mb-1">MSRP</span>
                    <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Contact us for wholesale pricing and bulk order discounts
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <AnimatedButtonAccent
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`}
                  isExternal={true}
                >
                  Request Quote
                </AnimatedButtonAccent>
                <AnimatedButtonOutline
                  href="/suppliers/harken"
                >
                  View All Harken Products
                </AnimatedButtonOutline>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#1B2845] mb-6">Product Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-[#2d4a2d] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section (if available) */}
      {product.video && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-[#1B2845] mb-6">Product Video</h2>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={product.video.replace('watch?v=', 'embed/')}
                title={product.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* About Harken Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-gradient-to-r from-[#1B2845] to-[#34495e] text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About Harken</h2>
            <p className="text-lg opacity-90 mb-6">
              While renowned in the sailing world, Harken's performance gloves excel in numerous demanding environments. 
              Their innovative Black Magic® palm material delivers exceptional grip and durability for any rope handling or technical work.
            </p>
            <Link 
              href="/suppliers/harken"
              className="inline-block bg-white text-[#1B2845] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More About Harken
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need Harken Products?"
        description="We specialize in international shipping and bulk orders for Harken's performance gear. Contact us for wholesale pricing and custom solutions."
        buttons={[
          <AnimatedButtonAccent
            key="contact-sales"
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Request Quote</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline
            key="view-harken"
            href="/suppliers/harken"
            textSize="text-xl"
          >
            <span className="font-bold">View All Harken Products</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
}

