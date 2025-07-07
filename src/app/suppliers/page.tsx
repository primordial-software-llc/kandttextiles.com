import Image from "next/image";
import Link from "next/link";
import { BaseStructuredData } from '@/components/BaseStructuredData';
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { Footer } from '@/components/Footer';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';

export const metadata = {
  title: "Our Trusted Suppliers | K&T Textiles - Premium Textile Partners",
  description: "Discover our network of trusted suppliers including Rothco, Harken, 1947 LLC, and Kingform Cap Company. Industry-leading manufacturers for military, tactical, and marine textiles.",
  keywords: [
    'textile suppliers',
    'Rothco dealer',
    'Harken marine textiles',
    '1947 LLC military textiles',
    'Kingform Cap Company',
    'military gear suppliers',
    'tactical equipment suppliers',
    'marine hardware suppliers',
    'textile manufacturing partners'
  ],
  openGraph: {
    title: "Our Trusted Suppliers | K&T Textiles",
    description: "Partnering with industry-leading manufacturers to deliver premium tactical and military-grade textiles worldwide",
    images: [
      {
        url: "/Rothco_Logo_2-color_8x8-R.jpg",
        width: 1200,
        height: 630,
        alt: "K&T Textiles Trusted Suppliers"
      }
    ]
  }
};

export default function Suppliers() {
  const suppliers = [
    {
      name: "Rothco",
      specialty: "Military & Tactical Gear",
      description: "Leading manufacturer of military and tactical equipment, providing high-quality gear for over 60 years.",
      logo: "/Rothco_Logo_2-color_8x8-R.jpg",
      link: "/suppliers/rothco"
    },
    {
      name: "Harken",
      specialty: "Marine Hardware & Textiles",
      description: "Global leader in marine hardware and performance textiles, providing innovative solutions for sailing and marine applications.",
      logo: "/harken/harken.webp",
      link: "/suppliers/harken"
    },
    {
      name: "1947 LLC",
      specialty: "Military & Tactical Textiles",
      description: "Full-service textile solution provider specializing in military, tactical, and industrial products, with expertise in MULTICAM® fabric development and distribution.",
      logo: "/1947llc/1947llc-logo-black.svg",
      link: "https://1947llc.com/",
      isExternal: true
    },
    {
      name: "Kingform Cap Company",
      specialty: "Military Uniform Headwear",
      description: "Premium manufacturer of military uniform caps since 1960, producing high-quality headwear for all branches of the U.S. Armed Forces.",
      logo: "/kingformcap/kflogowhite.jpg",
      link: "https://www.kingformcap.com/",
      isExternal: true
    }
  ];

  return (
    <>
      <BaseStructuredData />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-[#0f172a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-5">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Trusted Suppliers
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light">
              Partnering with industry-leading manufacturers to deliver premium tactical and military-grade textiles worldwide.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Suppliers Grid Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-8">
              {suppliers.map((supplier, index) => (
                                 supplier.isExternal ? (
                   <a 
                     href={supplier.link} 
                     key={index}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block h-full"
                   >
                     <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                       {supplier.logo && (
                         <div className="mb-6">
                           <Image 
                             src={supplier.logo}
                             alt={`${supplier.name} logo`}
                             width={200}
                             height={60}
                             className="object-contain"
                           />
                         </div>
                       )}
                       <div className="flex-grow">
                         <h3 className="text-xl font-bold text-[#1a237e] mb-2">
                           {supplier.name}
                         </h3>
                         <div className="text-gray-600 font-medium mb-4">{supplier.specialty}</div>
                         <p className="text-[#34495e] mb-4">{supplier.description}</p>
                       </div>
                       <div className="mt-auto">
                         <span className="inline-flex items-center px-6 py-2.5 bg-[#1a237e] text-white rounded-lg font-medium group hover:bg-[#1a237e]/90 transition-all duration-300 shadow-md hover:shadow-lg">
                           Visit {supplier.name}
                           <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                           </svg>
                         </span>
                       </div>
                     </div>
                   </a>
                 ) : (
                   <Link 
                     href={supplier.link} 
                     key={index}
                     className="block h-full"
                   >
                     <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                       {supplier.logo && (
                         <div className="mb-6">
                           <Image 
                             src={supplier.logo}
                             alt={`${supplier.name} logo`}
                             width={200}
                             height={60}
                             className="object-contain"
                           />
                         </div>
                       )}
                       <div className="flex-grow">
                         <h3 className="text-xl font-bold text-[#1a237e] mb-2">
                           {supplier.name}
                         </h3>
                         <div className="text-gray-600 font-medium mb-4">{supplier.specialty}</div>
                         <p className="text-[#34495e] mb-4">{supplier.description}</p>
                       </div>
                       <div className="mt-auto">
                         <span className="inline-flex items-center px-6 py-2.5 bg-[#1a237e] text-white rounded-lg font-medium group hover:bg-[#1a237e]/90 transition-all duration-300 shadow-md hover:shadow-lg">
                           Explore {supplier.name}
                           <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </span>
                       </div>
                     </div>
                   </Link>
                 )
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us Section */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Why Partner With Our Suppliers?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our carefully selected supplier network ensures you receive the highest quality products with reliable delivery and competitive pricing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1a237e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Quality Assured</h3>
                <p className="text-gray-600">Every supplier meets our strict quality standards and certification requirements.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a237e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Reliable Delivery</h3>
                <p className="text-gray-600">Established logistics networks ensure timely delivery of your orders worldwide.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a237e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-2">Expert Support</h3>
                <p className="text-gray-600">Dedicated support teams help you navigate product specifications and requirements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>


      <CTA 
        title="Ready to Enhance Your Logistics Security?"
        description="Contact us to learn more about implementing advanced tracking solutions for your valuable cargo."
        buttons={[
          <AnimatedButtonOutline
            href={`mailto:${CONTACT.email}`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Us</span>
          </AnimatedButtonOutline>
        ]}
      />
    </>
  );
} 