import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";

export default function FabricsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#0f172a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-5">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Technical Fabrics<br />& Materials
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Discover our comprehensive range of high-performance fabrics engineered for durability, comfort, and tactical applications.
            </p>
          </div>
        </div>
      </section>

      {/* NYCO 50/50 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-50 text-[#1B2845] px-4 py-2 rounded-full text-sm mb-4 border border-green-100">
                Premium Blend Fabric
              </div>
              <h3 className="text-4xl font-bold text-[#1B2845] mb-6">NYCO 50/50 Cotton-Nylon</h3>
              <p className="text-gray-600 mb-6">
                The gold standard for tactical apparel. Our NYCO 50/50 blend combines the comfort of cotton with the durability of nylon, delivering exceptional performance in demanding environments.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Superior Durability</h3>
                    <p className="text-gray-600">Nylon fibers provide exceptional tear and abrasion resistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Comfort & Breathability</h3>
                    <p className="text-gray-600">Cotton component ensures comfort and moisture management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Proven Performance</h3>
                    <p className="text-gray-600">Military-grade specifications for professional applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Color Retention</h3>
                    <p className="text-gray-600">Fade-resistant dyes maintain appearance through extensive use</p>
                  </div>
                </div>
              </div>
              <Link href="/fabrics/nyco-50-50" 
                 className="inline-flex items-center px-6 py-3 bg-[#1B2845] text-white rounded-lg font-medium hover:bg-[#34495e] transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More About NYCO 50/50
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl transform -rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#1B2845] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#1B2845] mb-4">NYCO 50/50</h4>
                  <p className="text-gray-600 mb-6">The perfect balance of comfort and durability</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-[#1B2845] text-lg">50%</div>
                      <div className="text-gray-600">Cotton</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#1B2845] text-lg">50%</div>
                      <div className="text-gray-600">Nylon</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-3 border border-gray-100">
                <div className="bg-[#1B2845] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ripstop Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#1B2845] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#1B2845] mb-4">Ripstop Technology</h4>
                  <p className="text-gray-600 mb-6">Advanced weave pattern for ultimate tear resistance</p>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-[#1B2845] text-lg">Grid Pattern</div>
                      <div className="text-gray-600">Reinforced every 1/4 inch</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3 border border-gray-100">
                <div className="bg-[#1B2845] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-blue-50 text-[#1B2845] px-4 py-2 rounded-full text-sm mb-4 border border-blue-100">
                Advanced Weave Technology
              </div>
              <h3 className="text-4xl font-bold text-[#1B2845] mb-6">Ripstop Fabric Construction</h3>
              <p className="text-gray-600 mb-6">
                Our ripstop fabrics feature a specialized weave pattern that prevents tears from spreading, ensuring your gear remains functional even under extreme conditions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Tear Resistance</h3>
                    <p className="text-gray-600">Grid pattern stops tears from propagating across the fabric</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Lightweight Design</h3>
                    <p className="text-gray-600">Maximum protection without adding bulk or weight</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Versatile Applications</h3>
                    <p className="text-gray-600">Perfect for tactical gear, outdoor equipment, and protective clothing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Quick Drying</h3>
                    <p className="text-gray-600">Synthetic fibers provide rapid moisture wicking and drying</p>
                  </div>
                </div>
              </div>
              <Link href="/fabrics/ripstop" 
                 className="inline-flex items-center px-6 py-3 bg-[#1B2845] text-white rounded-lg font-medium hover:bg-[#34495e] transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Ripstop Fabrics
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Retardant Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm mb-4 border border-red-200">
                Safety & Protection
              </div>
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Fire Retardant Treatments</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Critical for military and industrial applications, our fire retardant (FR) fabric treatments provide essential protection against heat and flame hazards while maintaining fabric performance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Self-Extinguishing Properties</h3>
                    <p className="text-gray-600">Fabric automatically stops burning when flame source is removed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Reduced Heat Release</h3>
                    <p className="text-gray-600">Lower heat and smoke generation for safer evacuation conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Military Standards</h3>
                    <p className="text-gray-600">Meets MIL-DTL-44436 and NFPA 2112 specifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1B2845]">Wash Durability</h3>
                    <p className="text-gray-600">Permanent treatments withstand 50+ industrial laundry cycles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-red-50 to-orange-50 p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#1B2845] mb-4">FR Standards</h4>
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Flame Spread Rating</p>
                      <p className="text-xl font-bold text-[#1B2845]">Class A</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Char Length</p>
                      <p className="text-xl font-bold text-[#1B2845]">&lt; 4 inches</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">After-flame Time</p>
                      <p className="text-xl font-bold text-[#1B2845]">&lt; 2 seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3 border border-gray-100">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Technical Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare the key characteristics of our premium fabric options to find the perfect match for your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* NYCO 50/50 Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-4">NYCO 50/50</h3>
                <p className="text-gray-600 mb-6">
                  Balanced cotton-nylon blend for comfort and durability:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">6.5 oz/sq yd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weave:</span>
                    <span className="font-medium">Plain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tear Strength:</span>
                    <span className="font-medium">75 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shrinkage:</span>
                    <span className="font-medium">&lt;3%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ripstop Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-4">Ripstop</h3>
                <p className="text-gray-600 mb-6">
                  Advanced tear-resistant construction:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">3.5 oz/sq yd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weave:</span>
                    <span className="font-medium">Ripstop Grid</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tear Strength:</span>
                    <span className="font-medium">95 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Water Resistance:</span>
                    <span className="font-medium">DWR Coated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-2"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B2845] mb-4">Applications</h3>
                <p className="text-gray-600 mb-6">
                  Common uses for our technical fabrics:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Military uniforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Tactical gear</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Outdoor equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Protective clothing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Compliance CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-4 border border-blue-200">
            Government Compliance
          </div>
          <h2 className="text-3xl font-bold text-[#1B2845] mb-4">Berry Amendment Compliance</h2>
          <p className="text-gray-600 mb-8 text-lg">
            All our military-grade fabrics meet strict Berry Amendment requirements for Department of Defense contracts.
          </p>
          <Link href="/fabrics/berry-amendment" 
             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Learn About Berry Amendment Compliance
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Fabrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-[#1B2845] mb-8 text-center">Featured Fabric Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* NYCO 50/50 Detail Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2845]/5 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
              <div className="relative p-8 rounded-2xl border border-[#1B2845]/10 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B2845]">NYCO 50/50</h3>
                  <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Premium Blend</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">50% Cotton for comfort and breathability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">50% Nylon for durability and strength</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">IR signature reduction available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Fade-resistant dye systems</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weight: 6.5 oz/sq yd</span>
                    <Link href="/fabrics/nyco-50-50" 
                       className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Ripstop Detail Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2845]/5 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
              <div className="relative p-8 rounded-2xl border border-[#1B2845]/10 bg-white/50 backdrop-blur-sm h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-[#1B2845]">Ripstop</h3>
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Tear Resistant</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Grid pattern prevents tear propagation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Lightweight construction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Quick-drying synthetic fibers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">DWR water-resistant coating</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weight: 3.5 oz/sq yd</span>
                    <Link href="/fabrics/ripstop" 
                       className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Need Custom Fabrics?"
        description="We specialize in custom fabric sourcing and technical textiles. Contact us for specialized materials and bulk orders."
        buttons={[
          <AnimatedButtonAccent 
            href={`mailto:${CONTACT.email}?subject=Custom Fabric Inquiry&body=I'm interested in custom fabric sourcing and technical textiles. Please send me more information.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Contact Sales</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            href="/suppliers"
            textSize="text-xl"
          >
            <span className="font-bold">View Suppliers</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
} 