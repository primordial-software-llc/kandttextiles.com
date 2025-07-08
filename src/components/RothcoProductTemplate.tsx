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

// Custom CSS animations
const buttonStyles = `
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 5px rgba(45, 74, 45, 0.5), 0 0 10px rgba(45, 74, 45, 0.3), 0 0 15px rgba(45, 74, 45, 0.1); }
    50% { box-shadow: 0 0 10px rgba(45, 74, 45, 0.8), 0 0 20px rgba(45, 74, 45, 0.6), 0 0 30px rgba(45, 74, 45, 0.4); }
  }
  
  @keyframes rotate-border {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes click-ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animate-rotate-border {
    animation: rotate-border 3s linear infinite;
  }
  
  .animate-click-ripple {
    animation: click-ripple 0.6s ease-out;
  }
`;

interface RothcoProductTemplateProps {
  productId: string;
  productData: any;
  relatedProducts?: any[];
}

export function RothcoProductTemplate({ productId, productData, relatedProducts = [] }: RothcoProductTemplateProps) {
  // Extract YouTube video ID from the URL
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  
  const videoId = getYouTubeVideoId(productData.video_link || '');
  
  const [activeTab, setActiveTab] = useState<'specifications' | 'video'>(videoId ? 'video' : 'specifications');
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  // Get the selected variation for pricing and image data
  const currentVariation = productData.variations[selectedVariation];
  
  // Get primary category (first category or fallback)
  const primaryCategory = productData.categories[0] || { category_name: "Tactical Gear" };
  
  // Get all categories for the product
  const productCategories = productData.categories.map((cat: any) => cat.category_name);
  
  // Analyze what properties make variations different
  const getVariationProperties = () => {
    if (!productData.variations?.length) return [];
    
    // Get all unique spec keys across all variations
    const allSpecKeys = new Set();
    productData.variations.forEach((variation: any) => {
      if (variation.specs) {
        Object.keys(variation.specs).forEach(key => allSpecKeys.add(key));
      }
    });
    
    return Array.from(allSpecKeys) as string[];
  };
  
  // Get unique values for each variation property
  const getVariationOptions = (property: string) => {
    const values = new Set();
    productData.variations.forEach((variation: any) => {
      if (variation.specs?.[property]) {
        values.add(variation.specs[property]);
      }
    });
    return Array.from(values) as string[];
  };
  
  const variationProperties = getVariationProperties();

  // Generate product-specific email subject and body
  const getEmailSubject = () => `${productData.item_name} Quote Request`;
  const getEmailBody = () => `I'm interested in the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me pricing and availability information.`;
  const getOrderEmailSubject = () => `${productData.item_name} Order`;
  const getOrderEmailBody = () => `I'd like to place an order for the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me wholesale pricing and shipping information.`;
  
  // Handle button click animation
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickPosition({ x, y });
    setIsClicked(true);
    
    // Reset animation after it completes
    setTimeout(() => setIsClicked(false), 600);
  };
  
  // Format variation specs for display
  const getVariationDisplayName = () => {
    if (!currentVariation.specs) return '';
    
    return Object.entries(currentVariation.specs)
      .map(([key, value]) => {
        // Convert snake_case to Title Case
        const titleKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return `${titleKey} ${value}`;
      })
      .join(' - ');
  };
  
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
      {/* Inject custom animations */}
      <style jsx>{buttonStyles}</style>
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

                {/* Variation Selectors with Thumbnails */}
                {product.variations.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-white font-bold">Choose Your Option:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {product.variations.map((variation: any, index: number) => {
                        const isSelected = index === selectedVariation;
                        const isAvailable = variation.inventory > 0;
                        const isOutOfStock = variation.inventory === 0;
                        
                        return (
                          <div
                            key={variation.item_variation_id}
                            onClick={() => {
                              if (isAvailable) {
                                setSelectedVariation(index);
                              }
                            }}
                            className={`group relative bg-white rounded-lg p-3 transition-all duration-500 border-2 overflow-hidden ${
                              isSelected 
                                ? 'border-[#1B2845] shadow-lg transform scale-105 cursor-default' 
                                : isAvailable
                                  ? 'border-gray-200 hover:border-[#1B2845] hover:shadow-md cursor-pointer'
                                  : 'border-gray-300 cursor-not-allowed opacity-60 grayscale'
                            }`}
                          >
                            {/* Selected state borders */}
                            {isSelected && (
                              <>
                                <div className="absolute top-0 left-0 w-full h-px bg-[#1B2845]"></div>
                                <div className="absolute bottom-0 left-0 w-full h-px bg-[#1B2845]"></div>
                                <div className="absolute left-0 top-0 w-px h-full bg-[#1B2845]"></div>
                                <div className="absolute right-0 top-0 w-px h-full bg-[#1B2845]"></div>
                              </>
                            )}
                            
                            {/* Selection checkmark */}
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-[#1B2845] text-white rounded-full p-1 z-10">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                            
                            {/* Image container */}
                            <div className={`aspect-square rounded-md mb-2 flex items-center justify-center ${
                              isSelected ? '' : 'group-hover:bg-gray-100'
                            }`}>
                              <Image 
                                src={`/rothco/images/${variation.image_filename}`}
                                alt={`${productData.item_name} variation`}
                                width={200}
                                height={200}
                                className={`object-contain w-full h-full transition-transform duration-300 ${
                                   isAvailable ? 'group-hover:scale-110' : ''
                                }`}
                              />
                            </div>
                            
                            {/* Text content */}
                            <div className="text-center space-y-1">
                              <p className={`text-sm font-medium transition-colors duration-300 ${
                                isSelected 
                                  ? 'text-[#1B2845] font-bold' 
                                  : isAvailable 
                                    ? 'text-gray-900 group-hover:text-[#1B2845]' 
                                    : 'text-gray-400'
                              }`}>
                                {variation.specs && Object.entries(variation.specs).map(([key, value]) => String(value)).join(' / ')}
                              </p>
                              <p className={`text-xs font-semibold transition-colors duration-300 ${
                                isSelected 
                                  ? 'text-[#1B2845]' 
                                  : isAvailable 
                                    ? 'text-gray-600 group-hover:text-[#1B2845]' 
                                    : 'text-gray-400'
                              }`}>
                                ${variation.msrp}
                              </p>
                              {isOutOfStock && (
                                <p className="text-xs text-red-500 font-medium">Out of Stock</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <div className="group inline-block transform transition-transform duration-300 hover:scale-105">
                  <a href={`mailto:${CONTACT.email}?subject=${getEmailSubject()}&body=${getEmailBody()}`} 
                     onClick={handleButtonClick}
                     className={`relative inline-flex items-center w-44 justify-center py-4 px-6 text-white font-semibold transition-all duration-500 ease-out bg-gradient-to-r from-[#2d4a2d] to-[#1f3a1f] hover:from-[#3a5a3a] hover:to-[#2d4a2d] shadow-lg hover:shadow-2xl hover:shadow-[#2d4a2d]/40 rounded-lg border border-[#2d4a2d]/20 hover:border-[#3a5a3a]/40 overflow-hidden backdrop-blur-sm hover:animate-pulse-glow ${isClicked ? 'scale-95' : ''}`}>
                    
                    {/* Rotating border on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2d4a2d] via-[#4a6a4a] to-[#2d4a2d] rounded-lg opacity-0 group-hover:opacity-20 group-hover:animate-rotate-border transition-opacity duration-500"></div>
                    
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d4a2d]/20 to-[#1f3a1f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                    
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 ease-out rounded-lg"></div>
                    
                    {/* Click ripple animation */}
                    {isClicked && (
                      <div 
                        className="absolute bg-white/30 rounded-full animate-click-ripple pointer-events-none"
                        style={{
                          left: clickPosition.x - 8,
                          top: clickPosition.y - 8,
                          width: 16,
                          height: 16,
                        }}
                      />
                    )}
                    
                    <span className="relative z-20 flex items-center transform transition-transform duration-300 group-hover:translate-y-[-1px]">
                      <span className="mr-2 transition-all duration-300 group-hover:tracking-wide">Get Quote</span>
                      <svg className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    
                    {/* Bottom border accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </a>
                </div>

                <AnimatedButtonOutline href="/suppliers/rothco" textSize="text-lg">
                  View More Rothco
                </AnimatedButtonOutline>
              </div>
            </div>
            
            {/* Right Content - Product Image */}
            <div className="relative">
              {/* Variation Name Display */}
              {getVariationDisplayName() && (
                <div className="absolute -top-8 left-0 right-0 z-20 pb-4">
                  <h2 className="text-2xl font-bold text-white text-center drop-shadow-lg">
                    {getVariationDisplayName()}
                  </h2>
                </div>
              )}
              
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