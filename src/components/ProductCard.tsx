import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  itemNumber: string;
  price: number;
  image: string;
  description: string;
  supplier: string;
  features: string[];
  specifications?: { [key: string]: string };
  layout?: 'vertical' | 'horizontal';
}

// Helper function to convert text to title case
const toTitleCase = (text: string): string => {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  itemNumber,
  price,
  image,
  description,
  supplier,
  features,
  layout = 'vertical'
}) => {
  if (layout === 'horizontal') {
    return (
      <Link href={`/products/${supplier}/${id}`} className="group">
        <div className="relative bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <Image 
                src={image}
                alt={name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1B2845] mb-2">{name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {features.slice(0, 2).join(' - ')}
              </p>
              <p className="text-lg font-bold text-[#2d4a2d]">${price}</p>
            </div>
          </div>
          
          {/* Animated lines */}
          <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
          <div className="absolute left-0 top-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
          <div className="absolute right-0 bottom-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
        </div>
      </Link>
    );
  }

  // Default vertical layout
  return (
    <Link href={`/products/${supplier}/${id}`} className="group">
      <div className="relative bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Product Image */}
        <div className="aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center">
          <Image 
            src={image}
            alt={name}
            width={300}
            height={225}
            className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{toTitleCase(supplier)}</span>
            <span className="text-sm text-gray-500">#{itemNumber}</span>
          </div>
          
          <h3 className="font-bold text-[#1B2845] mb-3 group-hover:text-[#2d4a2d] transition-colors">
            {name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2d4a2d]">
              ${price}
            </span>
            <span className="text-sm text-gray-500">
              View Details →
            </span>
          </div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
        <div className="absolute left-0 top-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
        <div className="absolute right-0 bottom-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
      </div>
    </Link>
  );
}; 