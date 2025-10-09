import Image from "next/image";
import Link from "next/link";

interface SimpleProduct {
  name: string;
  image: string;
  description: string;
  features: string[];
  price: number;
  video?: string;
  rank?: string;
}

interface SimpleFeaturedProductsProps {
  title: string;
  products: SimpleProduct[];
  sectionId: string;
  supplier?: string;
  productIds?: string[];
}

export function SimpleFeaturedProducts({ title, products, sectionId, supplier, productIds }: SimpleFeaturedProductsProps) {
  return (
    <section className="featured-products bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div id={sectionId}>
          <h3 className="text-2xl font-bold text-[#1a237e] mb-8">
            {title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const productLink = supplier && productIds?.[index] 
                ? `/products/${supplier}/${productIds[index]}`
                : null;
              
              const CardWrapper = productLink 
                ? ({ children }: { children: React.ReactNode }) => (
                    <Link href={productLink} className="block h-full group">
                      {children}
                    </Link>
                  )
                : ({ children }: { children: React.ReactNode }) => <div className="h-full">{children}</div>;

              return (
                <CardWrapper key={index}>
                  <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden h-full flex flex-col ${productLink ? 'hover:shadow-lg hover:border-[#1B2845] transition-all duration-300' : ''}`}>
                    <div className="h-64 bg-gray-50 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={`object-contain ${productLink ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {product.video && (
                        <Link 
                          href={product.video}
                          target="_blank"
                          className="absolute bottom-4 right-4 bg-gray-800/80 text-white px-3 py-1.5 rounded text-sm hover:bg-gray-800 transition-colors z-10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Watch Video
                        </Link>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className={`text-xl font-semibold text-gray-900 mb-3 ${productLink ? 'group-hover:text-[#1B2845] transition-colors' : ''}`}>
                        {product.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <span className="text-gray-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">MSRP</span>
                          <span className="text-2xl font-bold text-[#2d4a2d]">${product.price.toFixed(2)}</span>
                        </div>
                        {productLink && (
                          <span className="text-sm text-gray-500 group-hover:text-[#1B2845] transition-colors">
                            View Details →
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 