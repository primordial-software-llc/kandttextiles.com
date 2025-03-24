export function BaseStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "K&T Textiles",
          "description": "Specializing in premium fabric and apparel exports since 2020. Your trusted partner for quality textile logistics.",
          "url": "https://kandttextiles.com",
          "email": "contact@k-and-t-textiles.com",
          "foundingDate": "2020",
          "areaServed": "Worldwide",
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Export Logistics",
                "description": "End-to-end export management with proven reliability. We ensure your goods arrive at their destination efficiently and as expected."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Quality Control",
                "description": "Our rigorous quality control process ensures all exported textiles meet international standards and client specifications."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Global Distribution",
                "description": "Professional handling of your shipments through our established international distribution network, with reliability you can count on."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logistics Technology",
                "description": "Advanced shipment monitoring and security solutions to ensure reliable delivery of your valuable cargo."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Specialty Fabrics Export",
                "description": "Export services for high-performance ripstop fabrics, weatherproof materials, and specialty textiles."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tactical Apparel Export",
                "description": "Export services for professional-grade protective wear and gear designed for high-stakes operational environments."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bulk Textiles Export",
                "description": "Export services for large-volume fabric exports, including specialized prints and patterns."
              }
            }
          ]
        })
      }}
    />
  );
} 