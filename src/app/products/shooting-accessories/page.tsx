import { Metadata } from "next";
import Link from "next/link";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CTA } from "@/components/CTA";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { SimpleFeaturedProducts } from "@/components/SimpleFeaturedProducts";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CONTACT } from "@/constants/contact";
import { shootingAccessoriesConfig } from "@/data/shootingAccessories";
import { harkenData } from "@/data/suppliers/harken";

// Import specific product data for shooting accessories
import product3553Data from '@/data/rothco/products/product-3553.json'; // G96 Synthetic CLP Gun Oil
import product3330Data from '@/data/rothco/products/product-3330.json'; // Rothco All Caliber Gun Cleaning Kit
import product4045Data from '@/data/rothco/products/product-4045.json'; // Rothco Cotton Gun Cleaning Patches
import product784Data from '@/data/rothco/products/product-784.json'; // Rothco Deluxe Gun Cleaning Kit
import product4010Data from '@/data/rothco/products/product-4010.json'; // Rothco Gun Cleaning Pick & Brush Set
import product3809Data from '@/data/rothco/products/product-3809.json'; // Rothco Universal Gun Cleaning Kit
import product798Data from '@/data/rothco/products/product-798.json'; // Rothco Non-Corded Earplugs
import product3471Data from '@/data/rothco/products/product-3471.json'; // Rothco Ambidextrous Concealed Elastic Belly Band Holster
import product3860Data from '@/data/rothco/products/product-3860.json'; // Rothco Ambidextrous Shoulder Holster
import product4054Data from '@/data/rothco/products/product-4054.json'; // Rothco Ambidextrous Tactical Belt Holster
import product3574Data from '@/data/rothco/products/product-3574.json'; // Rothco Ankle Holster
import product1835Data from '@/data/rothco/products/product-1835.json'; // Rothco Canvas Shoulder Holster
import product4067Data from '@/data/rothco/products/product-4067.json'; // Rothco Concealed Carry Holster Panel
import product4890Data from '@/data/rothco/products/product-4890.json'; // Rothco Concealed Carry Neoprene Belly Band Holster
import product776Data from '@/data/rothco/products/product-776.json'; // Rothco Deluxe Adjustable Universal Drop Leg Tactical Holster
import product4000Data from '@/data/rothco/products/product-4000.json'; // Rothco Elastic Ankle Holster
import product1843Data from '@/data/rothco/products/product-1843.json'; // Rothco Hip Holster
import product3582Data from '@/data/rothco/products/product-3582.json'; // Rothco Inside The Waistband Holster
import product4882Data from '@/data/rothco/products/product-4882.json'; // Rothco Low Profile MOLLE Pistol Holster
import product773Data from '@/data/rothco/products/product-773.json'; // Rothco MOLLE Modular Ambidextrous Holster
import product1845Data from '@/data/rothco/products/product-1845.json'; // Rothco Police Holster
import product1844Data from '@/data/rothco/products/product-1844.json'; // Rothco Tactical Leg Holster
import product1847Data from '@/data/rothco/products/product-1847.json'; // Rothco Undercover Shoulder Holster
import product3513Data from '@/data/rothco/products/product-3513.json'; // Rothco Universal Hook & Loop Holster
import product5142Data from '@/data/rothco/products/product-5142.json'; // Rothco Covert Ops Concealed Carry Soft Shell Jacket
import product5125Data from '@/data/rothco/products/product-5125.json'; // Rothco Concealed Carry Spec Ops Fleece Jacket
import product74Data from '@/data/rothco/products/product-74.json'; // Rothco Soft Shell Tactical M-65 Field Jacket
import product75Data from '@/data/rothco/products/product-75.json'; // Rothco Special Ops Soft Shell Jacket
import product3138Data from '@/data/rothco/products/product-3138.json'; // Rothco 2-Point Tactical Sling
import product4199Data from '@/data/rothco/products/product-4199.json'; // Rothco Deluxe Tactical 2-Point Sling
import product2365Data from '@/data/rothco/products/product-2365.json'; // Rothco Military 3-point Rifle Sling
import product2366Data from '@/data/rothco/products/product-2366.json'; // Rothco Tactical Single Point Sling

export const metadata: Metadata = {
  title: shootingAccessoriesConfig.meta.title,
  description: shootingAccessoriesConfig.meta.description,
  keywords: [
    'shooting accessories',
    'range gear', 
    'range equipment',
    'shooting sports gear',
    'tactical accessories',
    'gun cleaning supplies',
    'holsters',
    'concealed carry',
    'weapon slings',
    'tactical equipment',
    'shooting range gear',
    'firearm accessories',
    'professional shooting gear'
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
    title: "Shooting Accessories & Range Equipment | K&T Textiles",
    description: "Quality shooting accessories and range equipment. Professional holsters, gun cleaning supplies, weapon slings, and tactical gear for shooting sports enthusiasts.",
    type: "website",
    url: "https://kandttextiles.com/products/shooting-accessories",
    siteName: "K&T Textiles",
    images: [
      {
        url: "https://kandttextiles.com/images/shooting-accessories-og.jpg",
        width: 1200,
        height: 630,
        alt: "Shooting Accessories and Range Equipment from K&T Textiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shooting Accessories & Range Equipment",
    description: "Quality shooting accessories and range equipment. Professional holsters, gun cleaning supplies, weapon slings, and tactical gear.",
    images: ["https://kandttextiles.com/images/shooting-accessories-og.jpg"],
  },
  alternates: {
    canonical: "https://kandttextiles.com/products/shooting-accessories",
  },
};

export default function ShootingAccessoriesPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Shooting Accessories & Range Equipment",
    "description": "Quality shooting accessories and range equipment. Professional holsters, gun cleaning supplies, weapon slings, and tactical gear for shooting sports enthusiasts.",
    "url": "https://kandttextiles.com/products/shooting-accessories",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Shooting Accessories Collection",
      "description": "Professional shooting accessories and tactical gear",
      "numberOfItems": 32,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cleaning & Maintenance",
          "description": "Essential gun cleaning supplies, maintenance tools, and safety equipment"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Weapon Slings",
          "description": "Professional rifle and weapon slings for secure carry and quick access"
        },
        {
          "@type": "ListItem",
          "position": 3, 
          "name": "Concealed Carry Jackets",
          "description": "Tactical jackets and vests designed for concealed carry and professional use"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Holsters & Carry",
          "description": "Professional holsters for concealed carry, tactical use, and law enforcement"
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kandttextiles.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://kandttextiles.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Shooting Accessories",
          "item": "https://kandttextiles.com/products/shooting-accessories"
        }
      ]
    }
  };

  // Curated product groups for shooting accessories
  const productGroups = [
    {
      supplier: "rothco",
      name: "Cleaning & Maintenance",
      description: "Essential gun cleaning supplies, maintenance tools, and safety equipment for proper firearm care",
      products: [
        { ...product3553Data, selectedVariationItemNo: "3553" },
        { ...product3330Data, selectedVariationItemNo: "3330" },
        { ...product4045Data, selectedVariationItemNo: "4045" },
        { ...product784Data, selectedVariationItemNo: "784" },
        { ...product4010Data, selectedVariationItemNo: "4010" },
        { ...product3809Data, selectedVariationItemNo: "3809" },
        { ...product798Data, selectedVariationItemNo: "4715" }
      ]
    },
    {
      supplier: "rothco",
      name: "Weapon Slings",
      description: "Professional rifle and weapon slings for secure carry and quick access",
      products: [
        { ...product3138Data, selectedVariationItemNo: "4656" },
        { ...product4199Data, selectedVariationItemNo: "4651" },
        { ...product2365Data, selectedVariationItemNo: "4007" },
        { ...product2366Data, selectedVariationItemNo: "4067" }
      ]
    },
    {
      supplier: "rothco",
      name: "Concealed Carry Jackets",
      description: "Tactical jackets and vests designed for concealed carry and professional use",
      products: [
        { ...product5142Data, selectedVariationItemNo: "52630" },
        { ...product5125Data, selectedVariationItemNo: "86672" },
        { ...product74Data, selectedVariationItemNo: "5244" },
        { ...product75Data, selectedVariationItemNo: "9745" }
      ]
    },
    {
      supplier: "rothco",
      name: "Holsters & Carry",
      description: "Professional holsters for concealed carry, tactical use, and law enforcement",
      products: [
        { ...product3471Data, selectedVariationItemNo: "3471" },
        { ...product3860Data, selectedVariationItemNo: "3860" },
        { ...product4054Data, selectedVariationItemNo: "4054" },
        { ...product3574Data, selectedVariationItemNo: "3574" },
        { ...product1835Data, selectedVariationItemNo: "1835" },
        { ...product4067Data, selectedVariationItemNo: "4067" },
        { ...product4890Data, selectedVariationItemNo: "4890" },
        { ...product776Data, selectedVariationItemNo: "776" },
        { ...product4000Data, selectedVariationItemNo: "4000" },
        { ...product1843Data, selectedVariationItemNo: "1843" },
        { ...product3582Data, selectedVariationItemNo: "3582" },
        { ...product4882Data, selectedVariationItemNo: "4882" },
        { ...product773Data, selectedVariationItemNo: "773" },
        { ...product1845Data, selectedVariationItemNo: "1845" },
        { ...product1844Data, selectedVariationItemNo: "1844" },
        { ...product1847Data, selectedVariationItemNo: "1847" },
        { ...product3513Data, selectedVariationItemNo: "3513" }
      ]
    }
  ];

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
              <Link href="/products" className="hover:text-[#1B2845] transition-colors">Products</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">Shooting Accessories</span>
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
              {shootingAccessoriesConfig.meta.h1}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Quality gear for training, practice, and professional use.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButtonAccent 
                href={`mailto:${CONTACT.email}?subject=Shooting Accessories Bulk Pricing Inquiry&body=I'm interested in bulk pricing for shooting accessories and tactical gear. Please send me more information about wholesale pricing and minimum order quantities.`}
                isExternal={true}
                textSize="text-base"
              >
                Contact for Bulk Pricing
              </AnimatedButtonAccent>
              <AnimatedButtonOutline href="/suppliers" textSize="text-base">
                Browse All Suppliers
              </AnimatedButtonOutline>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Product Groups */}
      <main className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-5">
          <header className="text-center mb-12">
            <div className="w-12 h-1 bg-gradient-to-r from-[#1B2845] to-[#34495e] mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Essential Shooting Accessories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional-grade equipment for shooting sports enthusiasts and professionals. 
              Built to handle Florida conditions and heavy use.
            </p>
          </header>
        </div>
        
        {productGroups.map((group, index) => (
          <FeaturedProducts
            key={index}
            supplier={group.supplier}
            title={group.name}
            products={group.products}
            sectionId={`shooting-accessories-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-products`}
          />
        ))}

        {/* Harken Tactical Gloves */}
        <SimpleFeaturedProducts
          title="Tactical Gloves"
          products={[harkenData.featuredProducts[0]]} // Reflex Gloves 3/4 Finger
          sectionId="shooting-accessories-tactical-gloves"
          supplier="harken"
          productIds={["reflex-gloves-3-4-finger"]}
        />

        {/* Call to action */}
        <div className="text-center py-12">
          <AnimatedButton href="/products" textSize="text-lg">
            View All Products
          </AnimatedButton>
        </div>

        {/* Range Guide Link */}
        <div className="bg-gradient-to-r from-[#1B2845] to-[#34495e] text-white rounded-lg p-8 mx-5 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Planning Your Range Visit?</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out our comprehensive guide to Tampa Bay shooting ranges, including beginner tips, range reviews, and what to expect on your first visit.
            </p>
            <Link 
              href="/ranges/tampa-bay" 
              className="inline-block bg-white text-[#1B2845] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tampa Bay Range Guide
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#1B2845] mb-4">{shootingAccessoriesConfig.disclaimer.title}</h3>
            <p className="text-gray-700 leading-relaxed">
              {shootingAccessoriesConfig.disclaimer.content}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Need Custom Shooting Gear?"
        description="We specialize in custom sourcing and international shipping for shooting accessories and tactical equipment. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            key="contact-sales"
            href={`mailto:${CONTACT.email}?subject=Shooting Accessories Inquiry&body=I'm interested in shooting accessories and tactical gear. Please send me more information about your products and wholesale pricing.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Sales</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            key="browse-suppliers"
            href="/suppliers"
            textSize="text-xl"
          >
            <span className="font-bold">Browse Suppliers</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
}
