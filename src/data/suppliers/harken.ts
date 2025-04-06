import { CONTACT } from '@/constants/contact';

export const harkenData = {
  hero: {
    title: "Harken Gloves Worldwide",
    subtitle: "We supply Harken's premium sailing gloves with professional international shipping and fulfillment services.",
    logo: {
      src: "/harken/harken.webp",
      alt: "Harken Logo"
    },
    website: "https://www.harken.com",
    catalog: "https://www.harken.com/catalog"
  },
  spotlight: {
    title: "Premium Performance Gloves",
    description: `While renowned in the sailing world, Harken's performance gloves excel in numerous demanding environments. Their innovative Black Magic® palm material delivers exceptional grip and durability for any rope handling or technical work.

The 3/4 finger design, particularly popular among professionals, offers the perfect balance of protection and dexterity. This design allows for enhanced finger sensitivity and fine motor control while maintaining robust palm and knuckle protection. Whether you're handling lines, operating equipment, or performing technical work, these gloves deliver outstanding performance in wet or dry conditions.`,
    logo: {
      src: "/harken/harken.webp",
      alt: "Harken Logo"
    },
    links: [
      {
        text: "Visit Harken",
        href: "https://www.harken.com",
        isExternal: true,
        variant: "primary"
      },
      {
        text: "Featured Products",
        href: "#sailing-gloves-products",
        isExternal: false,
        variant: "outline"
      }
    ],
    slideshow: {
      productName: "Reflex Gloves — 3/4 Finger",
      images: [
        {
          src: '/harken/reflex-glove-3-4-finger.webp',
          alt: 'Harken Reflex 3/4 Finger Gloves - Red',
          description: 'Professional Grade Sailing Gloves with Black Magic® Palm'
        },
        {
          src: '/harken/reflex-glove-full-finger.webp',
          alt: 'Harken Reflex Full Finger Gloves - Red',
          description: 'Full Coverage Protection with Black Magic® Palm Technology'
        },
        {
          src: '/harken/classic-glove-3-4-finger.webp',
          alt: 'Harken Classic 3/4 Finger Gloves - Grey',
          description: 'Perfect All-Purpose Sailing Gloves with Black Magic® Palm'
        }
      ]
    }
  },
  featuredProducts: [
    {
      name: "Reflex Gloves — 3/4 Finger",
      image: "/harken/reflex-glove-3-4-finger.webp",
      description: "Responsive performance gloves for active line handling, featuring double-thick Black Magic® palm material for superior grip. Minimal stretch when wet, dries soft.",
      features: [
        "Double-thick Black Magic® palm",
        "Superior wet/dry grip",
        "Durable nylon spandex",
        "Rubber guard strips",
        "Minimal stretch when wet"
      ],
      price: 47.90
    },
    {
      name: "Reflex Gloves — Full Finger",
      image: "/harken/reflex-glove-full-finger.webp",
      description: "Responsive performance gloves for active line handling. The double-thick Black Magic® palm material provides superior grip. Minimal stretch when wet, dries soft.",
      features: [
        "Double-thick Black Magic® palm",
        "Superior wet/dry grip",
        "Durable nylon spandex",
        "Rubber guard strips",
        "Full finger protection"
      ],
      price: 51.55
    },
    {
      name: "Classic Gloves — 3/4 Finger",
      image: "/harken/classic-glove-3-4-finger.webp",
      description: "The perfect all-purpose glove. Double-thick Black Magic® material for superior grip. Minimal stretch when wet, dries soft. Durable nylon spandex mesh.",
      features: [
        "Double-thick Black Magic® palm",
        "Superior wet/dry grip",
        "Durable nylon spandex mesh",
        "Tab lock closure",
        "Junior size available"
      ],
      price: 39.35
    }
  ],
  cta: {
    title: "Professional-Grade Hand Protection",
    description: "From maritime operations to technical work, Harken gloves deliver exceptional grip and durability. Contact us about bulk orders and professional pricing for these versatile performance gloves.",
    buttons: [
      {
        text: "Contact Sales",
        href: `mailto:${CONTACT.email}`,
        variant: "primary",
        isExternal: false
      }
    ]
  }
}; 