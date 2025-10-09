import { CONTACT } from '@/constants/contact';

export const oakleyData = {
  hero: {
    title: "Oakley Eyewear & Apparel",
    subtitle: "Authorized dealer of Oakley's performance eyewear and tactical gear with worldwide shipping. Serving military, law enforcement, and outdoor professionals.",
    logo: {
      src: "/oakley/oakley-logo.svg",
      alt: "Oakley Logo"
    },
    website: "https://www.oakley.com",
    catalog: "https://www.oakley.com/en-us"
  },
  spotlight: {
    title: "Performance Eyewear & Tactical Gear",
    description: `Oakley has been the gold standard in performance eyewear and tactical equipment for over four decades. Trusted by elite military units, law enforcement, and professional athletes worldwide, Oakley combines cutting-edge technology with battle-proven durability.

From their legendary M Frame ballistic eyewear used by special forces to their SI (Standard Issue) tactical line, every product is engineered for extreme conditions. Oakley's High Definition Optics® (HDO®) technology and PRIZM™ lens innovations deliver unmatched clarity and protection.

We supply Oakley's full tactical and performance line including ballistic-rated eyewear, tactical gloves, apparel, and accessories. Whether you're outfitting a unit or need individual gear, we provide authentic Oakley products with competitive pricing and expert international shipping.`,
    logo: {
      src: "/oakley/oakley-logo.svg",
      alt: "Oakley Logo"
    },
    links: [
      {
        text: "Visit Oakley",
        href: "https://www.oakley.com",
        isExternal: true,
        variant: "primary"
      },
      {
        text: "Contact for Pricing",
        href: `mailto:${CONTACT.email}?subject=Oakley%20Products%20Inquiry`,
        isExternal: true,
        variant: "secondary"
      }
    ],
    slideshow: {
      productName: "M Frame Ballistic",
      images: [
        {
          src: '/oakley/oakley-oo9146-si-ballistic-m-frame-3-0-shield-sunglasses-for-men.jpg',
          alt: 'Oakley M Frame Ballistic Eyewear',
          description: 'Ballistic-rated protection meeting MIL-PRF-32432 standards'
        },
        {
          src: '/oakley/oakley-mens-factory-pilot-2-0-glove-touchscreen-compatible-black.jpg',
          alt: 'Oakley Factory Pilot 2.0 Gloves',
          description: 'Touchscreen compatible tactical gloves'
        },
        {
          src: '/oakley/standard-issue-ballistic-goggles-2-0.avif',
          alt: 'Oakley SI Ballistic Goggles',
          description: 'Maximum eye protection for extreme environments'
        }
      ]
    }
  },
  cta: {
    title: "Gear Up with Oakley",
    description: "Contact us for wholesale pricing on Oakley's tactical and performance line. We specialize in bulk orders and international shipping for military, law enforcement, and professional teams.",
    buttons: [
      {
        text: "Contact Sales",
        href: `mailto:${CONTACT.email}?subject=Oakley%20Products%20Inquiry`,
        variant: "primary" as const,
        isExternal: true
      },
      {
        text: "Visit Oakley.com",
        href: "https://www.oakley.com",
        variant: "secondary" as const,
        isExternal: true
      }
    ]
  }
};

