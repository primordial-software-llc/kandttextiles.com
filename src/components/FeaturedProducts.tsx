import { ProductCard } from "./ProductCard";

// Function to strip HTML tags and decode HTML entities
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&rsquo;/g, "'") // Replace &rsquo; with apostrophe
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .trim(); // Remove leading/trailing whitespace
}

interface ProductVariation {
  item_variation_id: string;
  item_index: string;
  rothco_item_no: string;
  upc: string;
  inventory: string;
  created_date: null;
  weight: string;
  image_filename: string;
  catalog_page_no: null;
  msrp: number;
  ship_length: string;
  ship_width: string;
  ship_height: string;
  eta_date: string;
  specs: {
    color: string;
  };
  color: string;
  price: number;
  case_price: number;
  case_quantity: number;
  statuses: string;
}

interface Product {
  item_index: string;
  item_name: string;
  has_restrictions: string;
  controlled_by_map: string;
  video_link: string;
  rating: string;
  item_short_desc: string;
  no_ratings: null;
  sort_order: string | null;
  description: string;
  selection_groups: string[];
  statuses: string;
  categories: string[];
  variations: ProductVariation[];
  selectedVariationItemNo?: string;
}

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  sectionId: string;
  supplier: string;
}

export function FeaturedProducts({ title, products, sectionId, supplier }: FeaturedProductsProps) {
  return (
    <section className="featured-products bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div id={sectionId}>
          <h3 className="text-2xl font-bold text-[#1a237e] mb-8">
            {title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const selectedVariation = product.selectedVariationItemNo 
                ? product.variations.find(v => v.rothco_item_no === product.selectedVariationItemNo) || product.variations[0]
                : product.variations[0];
              return (
                <ProductCard
                  key={product.item_index || index}
                  id={product.item_index || `product-${index}`}
                  name={product.item_name}
                  itemNumber={selectedVariation.rothco_item_no}
                  price={selectedVariation.price}
                  image={`/${supplier}/images/${selectedVariation.image_filename}`}
                  description={stripHtml(product.item_short_desc)}
                  supplier={supplier}
                  features={[]}
                  layout="vertical"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 