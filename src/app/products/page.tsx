"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { CTA } from '@/components/CTA';
import { CONTACT } from '@/constants/contact';

// Import all product data
import product2064Data from '@/data/rothco/products/product-2064.json';
import product2065Data from '@/data/rothco/products/product-2065.json';
import product2067Data from '@/data/rothco/products/product-2067.json';
import product2069Data from '@/data/rothco/products/product-2069.json';
import product2072Data from '@/data/rothco/products/product-2072.json';
import product3123Data from '@/data/rothco/products/product-3123.json';
import product3124Data from '@/data/rothco/products/product-3124.json';
import product4198Data from '@/data/rothco/products/product-4198.json';
import product4446Data from '@/data/rothco/products/product-4446.json';
import product5131Data from '@/data/rothco/products/product-5131.json';
import product5168Data from '@/data/rothco/products/product-5168.json';
import product5169Data from '@/data/rothco/products/product-5169.json';
import product5170Data from '@/data/rothco/products/product-5170.json';
import product997Data from '@/data/rothco/products/product-997.json';

// Custom CSS animations
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% { 
      box-shadow: 0 0 5px rgba(27, 40, 69, 0.3), 0 0 10px rgba(27, 40, 69, 0.2); 
    }
    50% { 
      box-shadow: 0 0 15px rgba(27, 40, 69, 0.5), 0 0 30px rgba(27, 40, 69, 0.3); 
    }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  
  @keyframes rotate-border {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-rotate-border {
    animation: rotate-border 3s linear infinite;
  }
  
  .stagger-animation {
    animation-delay: calc(var(--stagger) * 0.1s);
  }
`;

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

// Get YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Product Card Component
interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  
  // Get first available variation for display
  const firstVariation = product.variations[0];
  const hasVideo = product.video_link && getYouTubeVideoId(product.video_link);
  
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };
  
  return (
    <div 
      className="group animate-fade-in-up stagger-animation"
      style={{ '--stagger': index } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1B2845]/10 transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex flex-col h-full">
        
        {/* Click ripple effect */}
        {isClicked && (
          <div 
            className="absolute bg-[#1B2845]/20 rounded-full pointer-events-none z-10"
            style={{
              left: clickPosition.x - 25,
              top: clickPosition.y - 25,
              width: 50,
              height: 50,
              animation: 'click-ripple 0.6s ease-out'
            }}
          />
        )}
        
        {/* Product Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-[#1B2845] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            #{product.item_index}
          </div>
        </div>
        
        {/* Video Badge */}
        {hasVideo && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Video
            </div>
          </div>
        )}
        
        {/* Image Container */}
        <div className="relative h-64 bg-gray-50/30 overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer transition-opacity duration-500"></div>
          
          <Image
            src={`/rothco/images/${firstVariation.image_filename}`}
            alt={product.item_name}
            width={400}
            height={400}
            quality={85}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 relative z-10 flex flex-col flex-grow">
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2 line-clamp-2 group-hover:text-[#2d4a2d] transition-colors duration-300">
                {product.item_name}
              </h3>
              
              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                {decodeHtmlEntities(product.item_short_desc.replace(/<[^>]*>/g, ''))}
              </p>
            </div>
            
            {/* Variations info */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {product.variations.length} variation{product.variations.length !== 1 ? 's' : ''}
              </span>
              <span className="text-[#1B2845] font-semibold">
                From ${Math.min(...product.variations.map((v: any) => v.msrp))}
              </span>
            </div>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">{product.rating}</span>
              </div>
            )}
          </div>
          
          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link href={`/products/rothco/${product.item_index}`}>
              <div className="group/btn relative w-full py-3 px-4 text-center text-white font-semibold bg-gradient-to-r from-[#1B2845] to-[#34495e] rounded-lg transition-all duration-300 hover:from-[#2d4a2d] hover:to-[#1B2845] hover:shadow-lg hover:shadow-[#1B2845]/30 overflow-hidden">
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center justify-center">
                  View Details
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AllProductsPage() {
  const [filter, setFilter] = useState<'all' | 'video' | 'popular'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Combine all product data
  const allProducts = [
    product2064Data, product2065Data, product2067Data, product2069Data, product2072Data,
    product3123Data, product3124Data, product4198Data, product4446Data, product5131Data,
    product5168Data, product5169Data, product5170Data, product997Data
  ];
  
  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      // Search filter
      if (searchTerm && !product.item_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filter === 'video' && !product.video_link) return false;
      if (filter === 'popular' && parseFloat(product.rating) < 4.5) return false;
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.item_name.localeCompare(b.item_name);
        case 'price':
          return Math.min(...a.variations.map((v: any) => v.msrp)) - Math.min(...b.variations.map((v: any) => v.msrp));
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        default:
          return 0;
      }
    });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Inject custom animations */}
      <style jsx>{animationStyles}</style>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">

            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              All Rothco Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore our complete catalog of {allProducts.length} professional-grade tactical gear and military equipment from Rothco.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters and Search */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2845]/20 focus:border-[#1B2845] transition-all duration-300"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({allProducts.length})
              </button>
              <button
                onClick={() => setFilter('video')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'video' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                With Video ({allProducts.filter(p => p.video_link).length})
              </button>
              <button
                onClick={() => setFilter('popular')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'popular' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Popular ({allProducts.filter(p => parseFloat(p.rating) >= 4.5).length})
              </button>
            </div>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2845]/20 focus:border-[#1B2845] transition-all duration-300"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>
      </section>
      
      {/* Results Info */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.item_index} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.935-6.086-2.455A8.006 8.006 0 014 12c0-2.21.896-4.21 2.343-5.657A7.962 7.962 0 0112 4c2.34 0 4.5.935 6.086 2.455A8.006 8.006 0 0120 12c0 2.21-.896 4.21-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                className="px-6 py-3 bg-[#1B2845] text-white rounded-lg hover:bg-[#2d4a2d] transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title="Need Custom Products?"
        description="We specialize in custom sourcing and international shipping. Contact us for wholesale pricing and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            href={`mailto:${CONTACT.email}?subject=Custom Product Inquiry&body=I'm interested in custom product sourcing and wholesale pricing. Please send me more information.`}
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