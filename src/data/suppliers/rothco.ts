import { CONTACT } from '@/constants/contact';

export const rothcoData = {
  hero: {
    title: "Rothco Tactical & Outdoor Gear",
    subtitle: "Need Rothco gear? We've got you covered worldwide. As an authorized dealer, we specialize in international shipping while serving customers everywhere with guaranteed authentic products.",
    logo: {
      src: "/Rothco_Traditional_Logo.jpg",
      alt: "Rothco Logo"
    },
    website: "https://www.rothco.com",
    catalog: "https://catalog.rothco.com/2025/"
  },
  spotlight: {
    title: "Rothco",
    description: `Rothco leads the military and tactical gear industry, trusted by armed forces and law enforcement worldwide. From their iconic MA-1 Flight Jacket to combat boots, each piece delivers military-grade quality.

Get authentic Rothco gear below MSRP, with bulk discounts and expert international shipping. Single item or full container - we'll handle your order efficiently.`,
    logo: {
      src: "/Rothco_Logo_2-color_8x8-R.jpg",
      alt: "Rothco Logo"
    },
    links: [
      {
        text: "Visit Rothco",
        href: "https://www.rothco.com",
        isExternal: true,
        variant: "primary"
      },
      {
        text: "2025 Catalog",
        href: "https://catalog.rothco.com/2025/",
        isExternal: true,
        variant: "secondary"
      },
      {
        text: "Featured Products",
        href: "#rothco-products",
        isExternal: false,
        variant: "outline"
      }
    ],
    slideshow: {
      productName: "Medium Transport Pack",
      images: [
        {
          src: '/rothco/medium-transport-pack/2287-A-amazon1.jpg',
          alt: 'Rothco Medium Transport Pack - Front View',
          description: 'Featured: Medium Transport Pack in Black - Professional Grade Tactical Backpack'
        },
        {
          src: '/rothco/medium-transport-pack/2287-B-amazon1.jpg',
          alt: 'Rothco Medium Transport Pack - Side View',
          description: 'MOLLE Compatible System for Customizable Storage'
        },
        {
          src: '/rothco/medium-transport-pack/2287-Black-Opened.jpg',
          alt: 'Rothco Medium Transport Pack - Interior View',
          description: 'Multiple Compartments for Organized Storage'
        },
        {
          src: '/rothco/medium-transport-pack/2287-C-amazon1.jpg',
          alt: 'Rothco Medium Transport Pack - Back View',
          description: 'Padded Back Panel and Adjustable Straps'
        },
        {
          src: '/rothco/medium-transport-pack/2287-D-amazon1.jpg',
          alt: 'Rothco Medium Transport Pack - Top View',
          description: 'Heavy-Duty Construction with Reinforced Stitching'
        },
        {
          src: '/rothco/medium-transport-pack/2287-F-amazon1.jpg',
          alt: 'Rothco Medium Transport Pack - Detail View',
          description: 'Tactical Features for Military, Outdoor & EDC Use'
        }
      ]
    }
  },
  featuredProducts: [
    {
        name: "Tactical Desert Shemagh",
        image: "/rothco/shemagh/4537/4537-OD-A-amazon.jpg",
        video: "https://www.youtube.com/watch?v=4OhaakkbDFc",
        description: "Military-grade tactical desert scarf, perfect for protection against sun, sand, and wind. A versatile piece of gear with multiple wear configurations.",
        features: [
          "100% Cotton Construction",
          "Multiple Wear Configurations",
          "Dust & Sun Protection",
          "Traditional 42\" x 42\" Size",
          "Available in Multiple Patterns"
        ],
        rank: "Top 30 Seller",
        price: 10.99
      },
      {
        name: "MA-1 Flight Jacket",
        image: "/rothco/ma1-fligh-jacket/77555-INNER-B.jpg",
        description: "Classic military flight jacket with high-visibility orange lining",
        features: [
          "Reversible design",
          "Water-resistant nylon shell",
          "Iconic military styling"
        ],
        rank: "Top 5 Seller",
        price: 53.99
      },
      {
        name: "Medium Transport Pack",
        image: "/rothco/medium-transport-pack/2289-Opened.jpg",
        video: "https://www.youtube.com/watch?v=9x3wh1EBUNs",
        description: "MOLLE compatible tactical backpack with 2,285 cubic inch capacity. Perfect for tactical operations or bug-out scenarios.",
        features: ["MOLLE Compatible", "Hydration Compatible", "Heavy-Duty Carry Handle", "Multiple Compartments", "Compression Straps"],
        rank: "Best Seller",
        price: 61.99
      },
      {
        name: "BDU Tactical Pants",
        image: "/rothco/tactical-bdu-pants/7971-CC1.jpg",
        description: "Rothco's #1 best-selling tactical pants. Available in multiple colors including Black, Olive Drab, and Woodland Camo.",
        features: ["6-Pocket Design", "Reinforced Seat & Knees", "Adjustable Waist Tabs", "Heavy Duty Construction"],
        price: 39.99
      },
      {
        name: "GI Type Jungle Boot",
        image: "/rothco/jungle-boots-8-in/5081-A-amazon2.jpg",
        video: "https://www.youtube.com/watch?v=QCeGbE7JqEM",
        description: "Classic military-style 8\" jungle boot. Rothco's #3 best-selling product, trusted by military and law enforcement.",
        features: [
          "8\" Height Design",
          "Steel Shank Support",
          "Speed Lace System",
          "Vulcanized Construction",
          "Available in Black & OD"
        ],
        price: 49.99
      },
      {
        name: "Military Web Belt 3-Pack",
        image: "/rothco/military-web-belts/LE-Web_Belts_In_3_Pack_Item4709-13.jpg",
        description: "Premium 54-inch military web belts with flip-top buckles. Perfect for tactical, uniform, or everyday wear.",
        features: [
          "Durable Cotton Canvas Construction",
          "Adjustable 54\" Length",
          "Metal Flip-Top Buckle",
          "3 Belts Per Pack",
          "Available in Multiple Colors"
        ],
        price: 16.90
      }
  ],
  cta: {
    title: "Ready to Order Rothco Products?",
    description: "Contact us today to discuss your wholesale needs and international shipping requirements.",
    buttons: [
      {
        text: "Contact Sales",
        href: `mailto:${CONTACT.email}`,
        variant: "primary" as const,
        isExternal: true
      },
      {
        text: "View Catalog",
        href: "https://www.rothco.com/catalog",
        variant: "secondary" as const,
        isExternal: true
      }
    ]
  }
}; 