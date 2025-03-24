import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
  price: number;
  video?: string;
  rank?: string;
}

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  sectionId: string;
}

export function FeaturedProducts({ title, products, sectionId }: FeaturedProductsProps) {
  return (
    <section className="featured-products bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div id={sectionId}>
          <h3 className="text-2xl font-bold text-[#1a237e] mb-8">
            Featured {title} Products
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                <div className="h-64 bg-gray-50 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {product.video && (
                    <Link 
                      href={product.video}
                      target="_blank"
                      className="absolute bottom-4 right-4 bg-gray-800/80 text-white px-3 py-1.5 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      Watch Video
                    </Link>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-gray-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-right pt-2 border-t border-gray-100">
                    <span className="text-lg font-medium text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 