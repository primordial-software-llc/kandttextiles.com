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

// Utility function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const entities: Record<string, string> = {
    '&nbsp;': ' ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&rsquo;': "'",
    '&cent;': '¢',
    '&pound;': '£',
    '&yen;': '¥',
    '&euro;': '€',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™'
  };
  
  return text.replace(/&[a-zA-Z0-9#]+;/g, (entity) => {
    return entities[entity] || entity;
  });
};

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
  
  const [activeTab, setActiveTab] = useState<'specifications' | 'video' | 'variations'>(() => {
    // For products with many variations, default to variations tab since hero doesn't show grid
    if (productData.variations.length > 10) return 'variations';
    // For products with few variations, use normal priority (video > specs > variations)
    if (videoId) return 'video';
    return 'specifications';
  });
  const [selectedVariation, setSelectedVariation] = useState(0);

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

  // Generate product-specific email subject and body
  const getEmailSubject = () => `${productData.item_name} Quote Request`;
  const getEmailBody = () => `I'm interested in the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me pricing and availability information.`;
  const getOrderEmailSubject = () => `${productData.item_name} Order`;
  const getOrderEmailBody = () => `I'd like to place an order for the ${productData.item_name} (Item #${currentVariation.rothco_item_no}). Please send me wholesale pricing and shipping information.`;
  
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
    description: decodeHtmlEntities(productData.item_short_desc.replace(/<[^>]*>/g, '')), // Strip HTML tags and decode entities
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
    <div className="rothco-product-template min-h-screen bg-gray-50">
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
                {product.variations.length > 0 && product.variations.length <= 10 && (
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
                                width={150}
                                height={150}
                                quality={85}
                                className={`object-contain w-full h-full transition-transform duration-300 ${
                                   isAvailable ? 'group-hover:scale-110' : ''
                                }`}
                                sizes="150px"
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

                {/* Message for many variations */}
                {product.variations.length > 10 && (
                  <div className="space-y-4">
                    <h3 className="text-white font-bold">Current Selection:</h3>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                          <Image 
                            src={`/rothco/images/${currentVariation.image_filename}`}
                            alt={`${productData.item_name} selected variation`}
                            width={64}
                            height={64}
                            quality={85}
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">
                            {currentVariation.specs && Object.entries(currentVariation.specs).map(([key, value]) => String(value)).join(' / ')}
                          </p>
                          <p className="text-white/80 text-sm">Item #{currentVariation.rothco_item_no}</p>
                          <p className="text-white font-bold">${currentVariation.msrp}</p>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mt-3">
                        View all {product.variations.length} variations in the "Variations" tab below
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <AnimatedButtonAccent 
                  href={`mailto:${CONTACT.email}?subject=${getEmailSubject()}&body=${getEmailBody()}`}
                  isExternal={true}
                  textSize="text-lg"
                >
                  Get Quote
                </AnimatedButtonAccent>

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
                    width={500}
                    height={500}
                    quality={95}
                    priority
                    className="object-contain max-w-full max-h-[400px]"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
              {product.variations.length > 0 && (
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
                  Variations ({product.variations.length})
                </button>
              )}
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
           {/* Variations Panel - For all products with variations */}
           {product.variations.length > 0 && (
            <div 
              id="variations-panel"
              role="tabpanel"
              aria-labelledby="variations-tab"
              className={activeTab === 'variations' ? 'block' : 'sr-only'}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#1B2845] mb-6">All Variations</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Choose from {product.variations.length} available variations. Click any row to select that option.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-4 px-4 font-semibold text-[#1B2845]">Image</th>
                          <th className="text-left py-4 px-4 font-semibold text-[#1B2845]">Item #</th>
                          {/* Dynamic spec columns */}
                          {getVariationProperties().map(prop => (
                            <th key={prop} className="text-left py-4 px-4 font-semibold text-[#1B2845] capitalize">
                              {prop.replace(/_/g, ' ')}
                            </th>
                          ))}
                          <th className="text-left py-4 px-4 font-semibold text-[#1B2845]">Price</th>
                          <th className="text-left py-4 px-4 font-semibold text-[#1B2845]">Stock</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.variations.map((variation: any, index: number) => {
                          const isSelected = index === selectedVariation;
                          const isAvailable = variation.inventory > 0;
                          
                          return (
                            <tr 
                              key={variation.item_variation_id}
                              onClick={() => {
                                if (isAvailable) {
                                  setSelectedVariation(index);
                                }
                              }}
                              className={`border-b border-gray-200 transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-[#1B2845]/10 border-[#1B2845]' 
                                  : isAvailable 
                                    ? 'hover:bg-gray-100 cursor-pointer' 
                                    : 'opacity-50 cursor-not-allowed'
                              }`}
                            >
                              <td className="py-4 px-4">
                                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                                  <Image 
                                    src={`/rothco/images/${variation.image_filename}`}
                                    alt={`${productData.item_name} variation`}
                                    width={64}
                                    height={64}
                                    quality={85}
                                    className="object-contain"
                                    sizes="64px"
                                  />
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <span className={`font-medium ${isSelected ? 'text-[#1B2845] font-bold' : 'text-gray-900'}`}>
                                  {variation.rothco_item_no}
                                </span>
                                {isSelected && (
                                  <span className="ml-2 bg-[#1B2845] text-white text-xs px-2 py-1 rounded">
                                    Selected
                                  </span>
                                )}
                              </td>
                              {/* Dynamic spec values */}
                              {getVariationProperties().map(prop => (
                                <td key={prop} className="py-4 px-4 text-gray-600">
                                  {variation.specs?.[prop] || '-'}
                                </td>
                              ))}
                              <td className="py-4 px-4">
                                <span className={`font-bold ${isSelected ? 'text-[#1B2845]' : 'text-gray-900'}`}>
                                  ${variation.msrp}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                {isAvailable ? (
                                  <span className="text-green-600 font-medium">In Stock</span>
                                ) : (
                                  <span className="text-red-500 font-medium">Out of Stock</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <p className="text-gray-600 text-sm">
                      <strong>Note:</strong> Click any row to select that variation. The selected option will be reflected in the product image and pricing above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA 
        title="Need Custom Products?"
        description="We specialize in custom sourcing and international shipping. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            key="contact-sales"
            href={`mailto:${CONTACT.email}?subject=${getOrderEmailSubject()}&body=${getOrderEmailBody()}`}
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