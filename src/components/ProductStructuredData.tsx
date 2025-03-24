interface ProductOffer {
  "@type": "Offer";
  availability: string;
  price: string;
  priceCurrency: string;
  seller: {
    "@type": "Organization";
    name: string;
  };
}

interface ProductBrand {
  "@type": "Brand";
  name: string;
}

interface Product {
  "@type": "Product";
  name: string;
  description: string;
  image: string;
  brand: ProductBrand;
  offers: ProductOffer;
}

interface ProductListItem {
  "@type": "ListItem";
  position: number;
  item: Product;
}

interface ProductListSchema {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: ProductListItem[];
}

interface ProductStructuredDataProps {
  products: Array<{
    name: string;
    description: string;
    image: string;
    brandName: string;
    sellerName: string;
    price: number;
  }>;
}

export function ProductStructuredData({ products }: ProductStructuredDataProps) {
  const schema: ProductListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
          "@type": "Brand",
          name: product.brandName
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: product.price.toFixed(2),
          priceCurrency: "USD",
          seller: {
            "@type": "Organization",
            name: product.sellerName
          }
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
} 