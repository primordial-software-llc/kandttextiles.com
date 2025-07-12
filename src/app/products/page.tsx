"use client";

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { CTA } from '@/components/CTA';
import { CONTACT } from '@/constants/contact';

// Import all product data dynamically
import { getAllProducts } from '@/data/rothco/products';

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
  
  // Get first available variation for display with null safety
  const firstVariation = product.variations && product.variations.length > 0 ? product.variations[0] : null;
  const hasVideo = product.video_link && getYouTubeVideoId(product.video_link);
  
  // If no variations available, don't render this product
  if (!firstVariation || !firstVariation.image_filename) {
    return null;
  }
  
  return (
    <Link href={`/products/rothco/${product.item_index}`} className="block h-full">
      <div 
        className="product-card group animate-fade-in-up stagger-animation h-full"
        style={{ '--stagger': index } as React.CSSProperties}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1B2845]/10 transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex flex-col h-full">
        
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
          {/* Title */}
          <h3 className="text-xl font-bold text-[#1B2845] mb-2 line-clamp-2 group-hover:text-[#2d4a2d] transition-colors duration-300">
            {product.item_name}
          </h3>
          
          {/* Description - grows to fill available space */}
          <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
            {(() => {
              const cleanDesc = decodeHtmlEntities(product.item_short_desc.replace(/<[^>]*>/g, ''));
              return cleanDesc.length > 120 ? cleanDesc.substring(0, 120) + '...' : cleanDesc;
            })()}
          </p>
          
          {/* Bottom section - fixed at bottom */}
          <div className="space-y-3 mt-auto">
            {/* Variations info */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {product.variations?.length || 0} variation{(product.variations?.length || 0) !== 1 ? 's' : ''}
              </span>
              <span className="text-[#1B2845] font-semibold">
                From ${Math.min(...(product.variations?.map((v: any) => v.msrp) || [0]))}
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
        </div>
      </div>
    </div>
    </Link>
  );
};

// Main products component that uses useSearchParams
function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(24); // Fixed items per page
  
  // Get all URL parameters
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const filter = (searchParams.get('filter') as 'all' | 'video' | 'popular') || 'all';
  const sortBy = (searchParams.get('sort') as 'name' | 'price' | 'rating') || 'name';
  const searchTerm = searchParams.get('search') || '';
  
  // Function to update URL with new parameters
  const updateURL = (updates: Partial<{
    page: number;
    filter: 'all' | 'video' | 'popular';
    sort: 'name' | 'price' | 'rating';
    search: string;
  }>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update or remove parameters
    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null || 
          (key === 'page' && value === 1) ||
          (key === 'filter' && value === 'all') ||
          (key === 'sort' && value === 'name') ||
          (key === 'search' && value === '')) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }
    });
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/products';
    router.push(newUrl, { scroll: false });
  };

  // Helper function to build URL with preserved parameters
  const buildURL = useCallback((page: number) => {
    const params = new URLSearchParams();
    
    // Add non-default parameters
    if (page > 1) params.set('page', page.toString());
    if (filter !== 'all') params.set('filter', filter);
    if (sortBy !== 'name') params.set('sort', sortBy);
    if (searchTerm) params.set('search', searchTerm);
    
    return params.toString() ? `/products?${params.toString()}` : '/products';
  }, [filter, sortBy, searchTerm]);
  
  // Load all products dynamically
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await getAllProducts();
        setAllProducts(products || []);
      } catch (error) {
        console.error('Failed to load products:', error);
        setAllProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      // Filter out products without variations
      if (!product.variations || product.variations.length === 0) {
        return false;
      }
      
      // Search filter
      if (searchTerm && !product.item_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filter === 'video' && !product.video_link) return false;
      if (filter === 'popular' && parseFloat(product.rating || '0') < 4.5) return false;
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.item_name.localeCompare(b.item_name);
        case 'price':
          const aPrices = a.variations?.map((v: any) => v.msrp) || [0];
          const bPrices = b.variations?.map((v: any) => v.msrp) || [0];
          return Math.min(...aPrices) - Math.min(...bPrices);
        case 'rating':
          return parseFloat(b.rating || '0') - parseFloat(a.rating || '0');
        default:
          return 0;
      }
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProducts = filteredProducts.slice(startIndex, endIndex);

  // This will be handled by the URL changes automatically

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Add pagination SEO meta tags
  useEffect(() => {
    // Remove existing pagination link tags
    const existingTags = document.querySelectorAll('link[rel="prev"], link[rel="next"]');
    existingTags.forEach(tag => tag.remove());

    if (totalPages > 1) {
      const head = document.head;
      
      // Add previous page link
      if (currentPage > 1) {
        const prevLink = document.createElement('link');
        prevLink.rel = 'prev';
        prevLink.href = buildURL(currentPage - 1);
        head.appendChild(prevLink);
      }
      
      // Add next page link
      if (currentPage < totalPages) {
        const nextLink = document.createElement('link');
        nextLink.rel = 'next';
        nextLink.href = buildURL(currentPage + 1);
        head.appendChild(nextLink);
      }
    }
  }, [currentPage, totalPages, buildURL]);
  
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore our complete catalog of {isLoading ? '90+' : allProducts.filter(p => p.variations && p.variations.length > 0).length} professional-grade tactical gear and military equipment from Rothco.
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
                onChange={(e) => updateURL({ search: e.target.value, page: 1 })}
                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2845]/20 focus:border-[#1B2845] transition-all duration-300"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => updateURL({ filter: 'all', page: 1 })}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({allProducts.filter(p => p.variations && p.variations.length > 0).length})
              </button>
              <button
                onClick={() => updateURL({ filter: 'video', page: 1 })}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'video' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                With Video ({isLoading ? '...' : allProducts.filter(p => p.variations && p.variations.length > 0 && p.video_link).length})
              </button>
              <button
                onClick={() => updateURL({ filter: 'popular', page: 1 })}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'popular' 
                    ? 'bg-[#1B2845] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Popular ({isLoading ? '...' : allProducts.filter(p => p.variations && p.variations.length > 0 && parseFloat(p.rating || '0') >= 4.5).length})
              </button>
            </div>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => updateURL({ sort: e.target.value as 'name' | 'price' | 'rating', page: 1 })}
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-gray-600">
              {isLoading ? (
                'Loading products...'
              ) : (
                <>
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                  {searchTerm && ` matching "${searchTerm}"`}
                </>
              )}
            </p>
            
            {!isLoading && totalPages > 1 && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Items per page:</span>
                <span className="font-semibold">{itemsPerPage}</span>
                <span>•</span>
                <span>Page {currentPage} of {totalPages}</span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          {isLoading ? (
            // Loading state
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-20 w-20 border-b-2 border-[#1B2845] mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Loading Products...</h3>
              <p className="text-gray-500">Fetching the latest product catalog</p>
            </div>
          ) : currentPageProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPageProducts.map((product, index) => (
                <ProductCard key={product.item_index} product={product} index={index} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.935-6.086-2.455A8.006 8.006 0 014 12c0-2.21.896-4.21 2.343-5.657A7.962 7.962 0 0112 4c2.34 0 4.5.935 6.086 2.455A8.006 8.006 0 0120 12c0 2.21-.896 4.21-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => updateURL({ search: '', filter: 'all', sort: 'name', page: 1 })}
                className="px-6 py-3 bg-[#1B2845] text-white rounded-lg hover:bg-[#2d4a2d] transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : null}
          
          {/* Pagination Controls */}
          {!isLoading && totalPages > 1 && (
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous/Next Navigation */}
              <div className="flex items-center gap-2">
                {currentPage > 1 ? (
                  <Link
                    href={buildURL(currentPage - 1)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </span>
                )}
                
                {currentPage < totalPages ? (
                  <Link
                    href={buildURL(currentPage + 1)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </div>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {/* First page */}
                                 {currentPage > 3 && (
                   <>
                     <Link href={buildURL(1)} className="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                       1
                     </Link>
                     {currentPage > 4 && (
                       <span className="px-2 text-gray-500">...</span>
                     )}
                   </>
                 )}

                 {/* Current page and surrounding pages */}
                 {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                   let pageNumber;
                   if (totalPages <= 5) {
                     pageNumber = i + 1;
                   } else if (currentPage <= 3) {
                     pageNumber = i + 1;
                   } else if (currentPage >= totalPages - 2) {
                     pageNumber = totalPages - 4 + i;
                   } else {
                     pageNumber = currentPage - 2 + i;
                   }
                   
                   if (pageNumber < 1 || pageNumber > totalPages) return null;
                   
                   const isCurrentPage = currentPage === pageNumber;
                   
                   return isCurrentPage ? (
                     <span
                       key={pageNumber}
                       className="w-10 h-10 text-sm font-medium rounded-lg bg-[#1B2845] text-white shadow-lg flex items-center justify-center"
                     >
                       {pageNumber}
                     </span>
                   ) : (
                     <Link
                       key={pageNumber}
                       href={buildURL(pageNumber)}
                       className="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                     >
                       {pageNumber}
                     </Link>
                   );
                 })}

                 {/* Last page */}
                 {currentPage < totalPages - 2 && (
                   <>
                     {currentPage < totalPages - 3 && (
                       <span className="px-2 text-gray-500">...</span>
                     )}
                     <Link href={buildURL(totalPages)} className="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                       {totalPages}
                     </Link>
                   </>
                 )}
              </div>

              {/* Page Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Page {currentPage} of {totalPages}</span>
              </div>
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
            key="contact-sales"
            href={`mailto:${CONTACT.email}?subject=Custom Product Inquiry&body=I'm interested in custom product sourcing and wholesale pricing. Please send me more information.`}
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

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-20 w-20 border-b-2 border-[#1B2845] mb-4"></div>
        <h3 className="text-2xl font-bold text-gray-600 mb-2">Loading Products...</h3>
        <p className="text-gray-500">Fetching the latest product catalog</p>
      </div>
    </div>
  );
}

// Main export with Suspense boundary
export default function AllProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}