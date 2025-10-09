// Configuration for shooting accessories page
// This file defines the curated products that appear on the shooting accessories page

export const shootingAccessoriesConfig = {
  meta: {
    title: "Shooting Accessories & Range Equipment | K&T Textiles",
    description: "Quality shooting accessories and range equipment. Professional holsters, gun cleaning supplies, weapon slings, and tactical gear for shooting sports enthusiasts and professionals.",
    h1: "Shooting Accessories & Range Equipment",
    subheadline: "Quality gear for training, practice, and professional use."
  },
  
  categories: [
    {
      id: "cleaning-maintenance",
      name: "Cleaning & Maintenance",
      description: "Essential gun cleaning supplies, maintenance tools, and safety equipment for proper firearm care",
      productIds: ["3553", "3330", "4045", "784", "4010", "3809", "4715"]
    },
    {
      id: "weapon-slings",
      name: "Weapon Slings",
      description: "Professional rifle and weapon slings for secure carry and quick access",
      productIds: ["4656", "4651", "4007", "4067"]
    },
    {
      id: "concealed-carry-jackets",
      name: "Concealed Carry Jackets",
      description: "Tactical jackets and vests designed for concealed carry and professional use",
      productIds: ["52630", "86672", "5244", "9745"]
    },
    {
      id: "holsters-carry",
      name: "Holsters & Carry",
      description: "Professional holsters for concealed carry, tactical use, and law enforcement",
      productIds: ["3471", "3860", "4054", "3574", "1835", "4067", "4890", "776", "4000", "1843", "3582", "4882", "773", "1845", "1844", "1847", "3513"]
    },
  ],


  // Disclaimer text
  disclaimer: {
    title: "Important Notice",
    content: "K&T Textiles is NOT a Federal Firearms Licensee (FFL). We do not sell, ship, store, or handle firearms, ammunition, body armor, explosives, or ITAR-controlled items. We specialize in accessories, gear, and equipment only. None of our suppliers are firearms or ammunition manufacturers."
  }
};

// Helper function to get products by category
export function getProductsByCategory(categoryId: string) {
  const category = shootingAccessoriesConfig.categories.find(cat => cat.id === categoryId);
  return category ? category.productIds : [];
}

// Helper function to get all product IDs
export function getAllShootingAccessoryProductIds() {
  return shootingAccessoriesConfig.categories.flatMap(category => category.productIds);
}
