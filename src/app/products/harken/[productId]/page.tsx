import { HarkenProductTemplate } from "@/components/HarkenProductTemplate";
import { notFound } from "next/navigation";
import { harkenData } from "@/data/suppliers/harken";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

// Map of product IDs to array indices
const productIdMap: Record<string, number> = {
  "reflex-gloves-3-4-finger": 0,
  "reflex-gloves-full-finger": 1,
  "classic-gloves-3-4-finger": 2,
};

// Generate static params for all available products
export async function generateStaticParams() {
  return Object.keys(productIdMap).map((productId) => ({
    productId,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const productIndex = productIdMap[productId];
  
  if (productIndex === undefined) {
    return {
      title: "Product Not Found | K&T Textiles"
    };
  }

  const product = harkenData.featuredProducts[productIndex];

  return {
    title: `${product.name} | Harken Performance Gloves | K&T Textiles`,
    description: product.description,
    keywords: [
      'Harken gloves',
      'sailing gloves',
      'tactical gloves',
      'performance gloves',
      'Black Magic palm',
      product.name,
      'rope handling gloves',
      'shooting gloves'
    ],
    openGraph: {
      title: `${product.name} | Harken`,
      description: product.description,
      images: [
        {
          url: `https://kandttextiles.com${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `https://kandttextiles.com/products/harken/${productId}`,
    },
  };
}

export default async function HarkenProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const productIndex = productIdMap[productId];

  if (productIndex === undefined) {
    notFound();
  }

  const product = harkenData.featuredProducts[productIndex];

  if (!product) {
    notFound();
  }

  return <HarkenProductTemplate product={product} productId={productId} />;
}

