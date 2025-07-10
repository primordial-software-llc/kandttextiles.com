// This file dynamically imports all product JSON files in this directory
// Files are discovered at runtime by reading the directory

let allProductsCache: any[] | null = null;

export async function getAllProducts() {
  if (allProductsCache) {
    return allProductsCache;
  }
  
  try {
    // Fetch the list of product files from our API
    const response = await fetch('/api/products/list');
    const data = await response.json();
    
    if (!data.success || !data.files) {
      console.error('Failed to get product file list:', data.error);
      return [];
    }
    
    // Dynamically import all product files
    const productModules = await Promise.all(
      data.files.map((file: string) => import(`./${file}`))
    );
    
    allProductsCache = productModules.map(module => module.default);
    return allProductsCache;
    
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

// For backward compatibility, export individual products if needed
export async function getProductData(itemIndex: string) {
  const products = await getAllProducts();
  return products.find(product => product.item_index.toString() === itemIndex);
}
