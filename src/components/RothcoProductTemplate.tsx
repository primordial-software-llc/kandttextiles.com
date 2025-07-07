"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";
import { ProductCard } from "@/components/ProductCard";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";

interface RothcoProductTemplateProps {
  productId: string;
  productData: any;
  relatedProducts?: any[];
}

export function RothcoProductTemplate({ productId, productData, relatedProducts = [] }: RothcoProductTemplateProps) {
  const [activeTab, setActiveTab] = useState<'specifications' | 'variations' | 'video'>('variations');
  const [selectedVariation, setSelectedVariation] = useState(0);

  // Get the selected variation for pricing and image data
  const currentVariation = productData.variations[selectedVariation];
  
  // Get primary category (first category or fallback)
  const primaryCategory = productData.categories[0] || { category_name: "Tactical Gear" };
  
  // Get all categories for the product
  const productCategories = productData.categories.map((cat: any) => cat.category_name);
  
  // Extract YouTube video ID from the URL
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  
  const videoId = getYouTubeVideoId(productData.video_link || '');

  // Color mapping for visual representation
  const getColorClass = (color: string) => {
    switch ((color || '').toLowerCase()) {
      case 'black': return 'bg-black';
      case 'olive drab': return 'bg-green-700';
      case 'desert sand': return 'bg-yellow-600';
      default: return 'bg-gray-500';
    }
  };

  // Generate product-specific email subject and body
  const getEmailSubject = () => `${productData.item_name} Quote Request`;
  const getEmailBody = () => `I'm interested in the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me pricing and availability information.`;
  const getOrderEmailSubject = () => `${productData.item_name} Order`;
  const getOrderEmailBody = () => `I'd like to place an order for the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me wholesale pricing and shipping information.`;
  
  const product = {
    name: productData.item_name,
    itemNumber: currentVariation.rothco_item_no,
    price: currentVariation.msrp,
    image: `/rothco/images/${currentVariation.image_filename}`,
    description: productData.item_short_desc.replace(/<[^>]*>/g, ''), // Strip HTML tags
    category: primaryCategory.category_name,
    categories: productCategories,
    videoUrl: productData.video_link,
    variations: productData.variations,
    selectedColor: currentVariation.color,
    specifications: {
      "Item Number": currentVariation.rothco_item_no,
      "UPC": currentVariation.upc,
      "Weight": `${currentVariation.weight} lbs`,
      "Dimensions (Ship)": `${currentVariation.ship_length}" x ${currentVariation.ship_width}" x ${currentVariation.ship_height}"`,
      "MSRP": `$${currentVariation.msrp}`,
      "Inventory": currentVariation.inventory,
      "Status": currentVariation.eta_date,
      "Color": currentVariation.color,
      "Case Quantity": currentVariation.case_quantity,
      "Catalog Page": currentVariation.catalog_page_no || "N/A",
      "Item Variation ID": currentVariation.item_variation_id,
      "Item Index": currentVariation.item_index,
      "Statuses": currentVariation.statuses || "N/A"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white min-h-[60vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <Link href="/suppliers/rothco" className="text-sm text-gray-300 hover:text-white transition-colors">
                    ← Back to Rothco Products
                  </Link>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 text-lg">
                  <span className="text-gray-300">Item #{product.itemNumber}</span>
                  <span className="text-2xl font-bold text-white">MSRP ${product.price}</span>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Variations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 font-medium">Color:</span>
                    <span className="text-white font-semibold">{product.selectedColor}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    {product.variations.map((variation: any, index: number) => (
                      <button
                        key={variation.item_variation_id}
                        onClick={() => setSelectedVariation(index)}
                        className={`relative w-12 h-12 rounded-lg border-2 transition-all duration-200 ${
                          selectedVariation === index 
                            ? 'border-white scale-110' 
                            : 'border-gray-400 hover:border-gray-300'
                        }`}
                        title={variation.color}
                      >
                        <div className={`w-full h-full rounded-md ${getColorClass(variation.color)}`}></div>
                        {selectedVariation === index && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <div className="group inline-block">
                  <a href={`mailto:${CONTACT.email}?subject=${getEmailSubject()}&body=${getEmailBody()}`} 
                     className="relative inline-flex items-center w-44 justify-center py-4 text-white font-semibold transition-all duration-500 bg-gradient-to-r from-[#2d4a2d] to-[#1f3a1f] hover:from-[#3a5a3a] hover:to-[#2d4a2d] shadow-lg hover:shadow-2xl hover:shadow-[#2d4a2d]/25 overflow-hidden">
                    
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Pulse animation overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d4a2d]/50 to-[#1f3a1f]/50 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                    
                    <span className="relative z-20 flex items-center">
                      Get Quote
                      <svg className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>

                <AnimatedButtonOutline href="/suppliers/rothco" textSize="text-lg">
                  View More Rothco
                </AnimatedButtonOutline>
              </div>
            </div>
            
            {/* Right Content - Product Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 border border-white/10 overflow-hidden">
                <div className="relative z-10 flex items-center justify-center">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain max-w-full max-h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Product Information Section */}
      <section className="pt-8 bg-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Tab Headers */}
          <div className="flex justify-center border-b border-gray-200 mb-16">
            <div className="flex space-x-8" role="tablist" aria-label="Product information">
              <button
                onClick={() => setActiveTab('variations')}
                role="tab"
                aria-selected={activeTab === 'variations'}
                aria-controls="variations-panel"
                className={`px-6 py-4 text-lg font-semibold transition-colors border-b-2 ${
                  activeTab === 'variations'
                    ? 'text-[#1B2845] border-[#1B2845]'
                    : 'text-gray-500 border-transparent hover:text-[#1B2845]'
                }`}
              >
                Variations
              </button>
              {videoId && (
                <button
                  onClick={() => setActiveTab('video')}
                  role="tab"
                  aria-selected={activeTab === 'video'}
                  aria-controls="video-panel"
                  className={`px-6 py-4 text-lg font-semibold transition-colors border-b-2 ${
                    activeTab === 'video'
                      ? 'text-[#1B2845] border-[#1B2845]'
                      : 'text-gray-500 border-transparent hover:text-[#1B2845]'
                  }`}
                >
                  Video Demo
                </button>
              )}
              <button
                onClick={() => setActiveTab('specifications')}
                role="tab"
                aria-selected={activeTab === 'specifications'}
                aria-controls="specifications-panel"
                className={`px-6 py-4 text-lg font-semibold transition-colors border-b-2 ${
                  activeTab === 'specifications'
                    ? 'text-[#1B2845] border-[#1B2845]'
                    : 'text-gray-500 border-transparent hover:text-[#1B2845]'
                }`}
              >
                Specifications
              </button>
            </div>
          </div>

          {/* Specifications Panel - Always visible to crawlers */}
          <div 
            id="specifications-panel"
            role="tabpanel"
            aria-labelledby="specifications-tab"
            className={activeTab === 'specifications' ? 'block' : 'sr-only'}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Specifications</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <span className="font-semibold text-[#1B2845] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Variations Panel - Always visible to crawlers */}
          <div 
            id="variations-panel"
            role="tabpanel"
            aria-labelledby="variations-tab"
            className={activeTab === 'variations' ? 'block' : 'sr-only'}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Available Variations</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Choose from multiple color options, each with unique item numbers and specifications.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {product.variations.map((variation: any, index: number) => (
                  <button 
                    key={variation.item_variation_id} 
                    onClick={() => setSelectedVariation(index)}
                    className={`bg-gray-50 p-6 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
                      selectedVariation === index 
                        ? 'border-[#1B2845] shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Product Image */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative bg-white rounded-lg p-4 border border-gray-200">
                        <Image 
                          src={`/rothco/images/${variation.image_filename}`}
                          alt={`${productData.item_name} - ${variation.color}`}
                          width={120}
                          height={120}
                          className="object-contain max-w-full max-h-[120px]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full ${getColorClass(variation.color)} border border-gray-300`}></div>
                        <h3 className="font-semibold text-[#1B2845]">{variation.color}</h3>
                      </div>
                      {selectedVariation === index && (
                        <span className="bg-[#1B2845] text-white text-xs px-2 py-1 rounded">Selected</span>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Item #:</span>
                        <span className="font-medium">{variation.rothco_item_no}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">UPC:</span>
                        <span className="font-medium">{variation.upc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{variation.weight} lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="text-green-600 font-medium">{variation.eta_date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">MSRP:</span>
                        <span className="font-semibold text-[#1B2845]">${variation.msrp}</span>
                      </div>
                      
                      {/* Display variation specs if they exist */}
                      {variation.specs && Object.entries(variation.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}:</span>
                          <span className="font-medium">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`w-full mt-4 py-2 px-4 rounded-lg font-medium text-center ${
                      selectedVariation === index
                        ? 'bg-[#1B2845] text-white'
                        : 'bg-white text-[#1B2845] border border-[#1B2845]'
                    }`}>
                      {selectedVariation === index ? 'Selected' : 'Select This Color'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Panel - Always visible to crawlers */}
          {videoId && (
            <div 
              id="video-panel"
              role="tabpanel"
              aria-labelledby="video-tab"
              className={activeTab === 'video' ? 'block' : 'sr-only'}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Product Video Demo</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Watch the {product.name} in action to see its features and capabilities.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${product.name} Demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      style={{ border: 'none' }}
                    />
                  </div>
                  
                  {/* Video Details */}
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <h3 className="font-semibold text-[#1B2845] mb-2">About This Video</h3>
                    <p className="text-gray-600 text-sm">
                      This official Rothco demonstration showcases the features and practical applications of this product.
                    </p>
                    <div className="mt-3">
                      <a 
                        href={product.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#2d4a2d] hover:text-[#1B2845] font-medium text-sm transition-colors"
                      >
                        Watch on YouTube ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Related Rothco Products</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                itemNumber={product.itemNumber}
                price={product.price}
                image={product.image}
                description={product.description}
                supplier={product.supplier}
                features={product.features}
                specifications={product.specifications}
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Need Custom Products?"
        description="We specialize in custom sourcing and international shipping. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            href={`mailto:${CONTACT.email}?subject=${getOrderEmailSubject()}&body=${getOrderEmailBody()}`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Sales</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
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