import { RothcoProductTemplate } from "@/components/RothcoProductTemplate";
import { notFound } from "next/navigation";
import { rothcoData } from "@/data/suppliers/rothco";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

// Generate static params for all available products
export async function generateStaticParams() {
  return rothcoData.products.map((product) => ({
    productId: product.item_index,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: ProductPageProps) {
  const { productId } = await params;
  
  const product = require(`@/data/rothco/products/product-${productId}.json`);

  if (!product) {
    return {
      title: "Product Not Found | K&T Textiles",
    };
  }

  const firstVariation = product.variations[0];
  const cleanDescription = product.item_short_desc.replace(/<[^>]*>/g, '').trim();

  return {
    title: `${product.item_name} | Rothco ${firstVariation.rothco_item_no} | K&T Textiles`,
    description: cleanDescription.length > 160 
      ? cleanDescription.substring(0, 157) + "..." 
      : cleanDescription,
    keywords: [
      product.item_name,
      `Rothco ${firstVariation.rothco_item_no}`,
      'tactical gear',
      'military equipment',
      'Rothco products',
      'K&T Textiles'
    ],
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  
  // Import specific product data from JSON file
  const productData = require(`@/data/rothco/products/product-${productId}.json`)

  if (!productData) {
    notFound();
  }

  // Get related products from the same collection or similar categories
  const getRelatedProducts = () => {
    const allProducts = rothcoData.products.filter(p => p.item_index !== productId);
    const relatedProductsData = allProducts.slice(0, 2); // Get first 2 different products
    
    return relatedProductsData.map(relatedProduct => {
      const firstVariation = relatedProduct.variations[0];
      return {
        id: `rothco-product-${relatedProduct.item_index}`,
        name: relatedProduct.item_name,
        itemNumber: firstVariation.rothco_item_no,
        price: firstVariation.msrp,
        image: `/rothco/${firstVariation.image_filename}`,
        description: relatedProduct.item_short_desc.replace(/<[^>]*>/g, ''),
        supplier: "Rothco",
        features: ["Premium Quality", "Military Grade", "Durable Construction"],
        specifications: {
          "Item Number": firstVariation.rothco_item_no,
          "MSRP": `$${firstVariation.msrp}`,
          "Weight": `${firstVariation.weight} lbs`
        }
      };
    });
  };

  const relatedProducts = getRelatedProducts();

  return <RothcoProductTemplate productId={productId} productData={productData} relatedProducts={relatedProducts} />;
} 