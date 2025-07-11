import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";

export default function NYCO5050Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-5">
          <div className="text-center">
            <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm mb-4 border border-green-200">
              Premium Blend Fabric
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              NYCO 50/50<br />Cotton-Nylon Blend
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              The gold standard for tactical and military applications. Perfectly balanced 50% cotton and 50% nylon blend delivers unmatched comfort, durability, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fabrics" 
                 className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Fabrics
              </Link>
              <Link href="/fabrics/ripstop" 
                 className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                Compare with Ripstop
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">The Perfect Balance</h2>
              <p className="text-gray-600 mb-6 text-lg">
                NYCO 50/50 represents the pinnacle of fabric engineering, combining the natural comfort of cotton with the synthetic durability of nylon. This carefully balanced blend has become the industry standard for military and tactical applications worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Comfort First</h3>
                    <p className="text-gray-600">Cotton fibers provide natural breathability, moisture absorption, and all-day comfort against the skin.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Built to Last</h3>
                    <p className="text-gray-600">Nylon fibers add exceptional strength, abrasion resistance, and longevity to withstand the most demanding conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Proven Performance</h3>
                    <p className="text-gray-600">Meets or exceeds military specifications for tactical uniforms and equipment worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl transform -rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#1B2845] mb-8">NYCO 50/50 Composition</h3>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold text-[#1B2845] mb-2">50%</div>
                      <div className="text-lg font-semibold text-amber-600">Cotton</div>
                      <div className="text-sm text-gray-600">Natural comfort</div>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold text-[#1B2845] mb-2">50%</div>
                      <div className="text-lg font-semibold text-blue-600">Nylon</div>
                      <div className="text-sm text-gray-600">Synthetic strength</div>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Perfect balance of natural and synthetic fibers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Technical Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed technical data and performance characteristics of our NYCO 50/50 fabric.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Physical Properties */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Physical Properties</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-medium">6.5 oz/sq yd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thickness:</span>
                  <span className="font-medium">0.56 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weave:</span>
                  <span className="font-medium">Plain</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thread Count:</span>
                  <span className="font-medium">88 x 64</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Width:</span>
                  <span className="font-medium">58/60 inches</span>
                </div>
              </div>
            </div>

            {/* Strength Properties */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Strength Properties</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tensile Strength:</span>
                  <span className="font-medium">200 lbs/in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tear Strength:</span>
                  <span className="font-medium">75 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seam Strength:</span>
                  <span className="font-medium">150 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Abrasion Cycles:</span>
                  <span className="font-medium">25,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pilling Rating:</span>
                  <span className="font-medium">Grade 4</span>
                </div>
              </div>
            </div>

            {/* Care & Maintenance */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Care & Maintenance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Wash Temperature:</span>
                  <span className="font-medium">40°C / 104°F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shrinkage:</span>
                  <span className="font-medium">&lt;3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color Fastness:</span>
                  <span className="font-medium">Grade 4-5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dry Cleaning:</span>
                  <span className="font-medium">Safe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ironing:</span>
                  <span className="font-medium">Medium Heat</span>
                </div>
              </div>
            </div>

            {/* Performance Features */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Performance Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Moisture wicking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Breathable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Quick dry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Wrinkle resistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Fade resistant</span>
                </div>
              </div>
            </div>

            {/* Fire Retardant Properties */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-2 border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Fire Retardant (FR) Treatment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">MIL Standard:</span>
                  <span className="font-medium">MIL-DTL-44436</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NFPA Rating:</span>
                  <span className="font-medium">NFPA 2112</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Char Length:</span>
                  <span className="font-medium">&lt; 4 inches</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">After-flame:</span>
                  <span className="font-medium">&lt; 2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wash Cycles:</span>
                  <span className="font-medium">50+ cycles</span>
                </div>
              </div>
            </div>

            {/* Available Finishes */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Available Finishes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Standard finish</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">IR signature reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Flame retardant (FR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Water repellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Anti-microbial</span>
                </div>
              </div>
            </div>

            {/* Color Options */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Standard Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-700 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">OD Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-700 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Coyote Brown</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-900 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Black</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">ACU Gray</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-900 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Navy Blue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NYCO 50/50 is the preferred choice for professionals worldwide across multiple industries and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Military */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Military</h3>
              <p className="text-gray-600">Combat uniforms, field gear, and tactical equipment</p>
            </div>

            {/* Law Enforcement */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Law Enforcement</h3>
              <p className="text-gray-600">Police uniforms, tactical gear, and duty equipment</p>
            </div>

            {/* Emergency Services */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Emergency Services</h3>
              <p className="text-gray-600">Fire department, EMS, and rescue team uniforms</p>
            </div>

            {/* Security */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Security</h3>
              <p className="text-gray-600">Private security, corporate, and protective services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">NYCO 50/50 vs Other Fabrics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how NYCO 50/50 compares to other common tactical fabric options.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-[#1B2845]">Property</th>
                  <th className="text-center p-6 font-semibold text-green-600">NYCO 50/50</th>
                  <th className="text-center p-6 font-semibold text-gray-600">100% Cotton</th>
                  <th className="text-center p-6 font-semibold text-gray-600">100% Polyester</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Poly/Cotton</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Durability</td>
                  <td className="p-6 text-center text-green-600 font-bold">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Very Good</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Comfort</td>
                  <td className="p-6 text-center text-green-600 font-bold">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Fair</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Moisture Management</td>
                  <td className="p-6 text-center text-green-600 font-bold">Very Good</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Very Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Quick Dry</td>
                  <td className="p-6 text-center text-green-600 font-bold">Good</td>
                  <td className="p-6 text-center text-gray-600">Poor</td>
                  <td className="p-6 text-center text-gray-600">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Very Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Wrinkle Resistance</td>
                  <td className="p-6 text-center text-green-600 font-bold">Good</td>
                  <td className="p-6 text-center text-gray-600">Poor</td>
                  <td className="p-6 text-center text-gray-600">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Very Good</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-800">Overall Rating</td>
                  <td className="p-6 text-center text-green-600 font-bold">★★★★★</td>
                  <td className="p-6 text-center text-gray-600">★★★☆☆</td>
                  <td className="p-6 text-center text-gray-600">★★★★☆</td>
                  <td className="p-6 text-center text-gray-600">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Source NYCO 50/50?"
        description="Contact us for pricing, samples, and custom specifications for your NYCO 50/50 fabric requirements."
        buttons={[
          <AnimatedButtonAccent 
            href={`mailto:${CONTACT.email}?subject=NYCO 50/50 Fabric Inquiry&body=I'm interested in NYCO 50/50 fabric sourcing. Please send me pricing and samples.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Request Quote</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            href="/fabrics/ripstop"
            textSize="text-xl"
          >
            <span className="font-bold">Compare with Ripstop</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
} 