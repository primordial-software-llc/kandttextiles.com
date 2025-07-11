import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { CTA } from "@/components/CTA";
import product5168Data from '@/data/rothco/products/product-5168.json';
import product5169Data from '@/data/rothco/products/product-5169.json';
import product5170Data from '@/data/rothco/products/product-5170.json';
import product997Data from '@/data/rothco/products/product-997.json';
import product4198Data from '@/data/rothco/products/product-4198.json';
import product4446Data from '@/data/rothco/products/product-4446.json';
import product3124Data from '@/data/rothco/products/product-3124.json';
import product5131Data from '@/data/rothco/products/product-5131.json';
import product2069Data from '@/data/rothco/products/product-2069.json';
import product2463Data from '@/data/rothco/products/product-2463.json';
import product1183Data from '@/data/rothco/products/product-1183.json';
import product3554Data from '@/data/rothco/products/product-3554.json';


import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function ProductsPage() {
  var productGroups = [
    {
      supplier: "rothco",
      name: "Fully Submersible Waterproof Bags",
      products: [
        { ...product5170Data, selectedVariationItemNo: "12440" },
        { ...product5168Data, selectedVariationItemNo: "12422" },
        { ...product5169Data, selectedVariationItemNo: "12431" }
      ]
    },
    {
      supplier: "rothco",
      name: "Rain Gear",
      products: [
        { ...product3124Data, selectedVariationItemNo: "3634" },
        { ...product5131Data, selectedVariationItemNo: "40250" },
        { ...product2069Data, selectedVariationItemNo: "3749" }
      ]
    },
          {
        supplier: "rothco",
        name: "Boots",
        products: [
          { ...product997Data, selectedVariationItemNo: "12440" },
          { ...product4198Data, selectedVariationItemNo: "12422" },
          { ...product4446Data, selectedVariationItemNo: "12431" }
        ]
      },
      {
        supplier: "rothco",
        name: "First Aid Kits",
        products: [
          { ...product2463Data, selectedVariationItemNo: "2344" },
          { ...product1183Data, selectedVariationItemNo: "8329" },
          { ...product3554Data, selectedVariationItemNo: "8776" }
        ]
      }];

  return (
    <div className="min-h-screen bg-gray-50">
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
              Our Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our extensive range of tactical gear, waterproof bags, and military-grade equipment from trusted manufacturers worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButtonAccent href="/suppliers" textSize="text-base">
                View All Suppliers
              </AnimatedButtonAccent>
              <AnimatedButtonOutline href="/suppliers/rothco" textSize="text-base">
                Rothco Products
              </AnimatedButtonOutline>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Groups */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gradient-to-r from-[#1B2845] to-[#34495e] mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Top-Recommended Tactical Gear</h2>
          </div>
        </div>
        
        {productGroups.map((group, index) => (
          <FeaturedProducts
            key={index}
            supplier={group.supplier}
            title={group.name}
            products={group.products}
            sectionId={`homepage-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-products`}
          />
        ))}

          {/* Call to action */}
          <div className="text-center">
            <AnimatedButton href="/suppliers/rothco" textSize="text-lg">
              View Rothco Products
            </AnimatedButton>
          </div>
        
      </section>


      {/* CTA Section */}
      <CTA 
        title="Need Custom Products?"
        description="We specialize in custom sourcing and international shipping. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            key="contact-sales"
            href="mailto:info@kandttextiles.com?subject=Custom Product Inquiry&body=I'm interested in custom product sourcing and wholesale pricing. Please send me more information."
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