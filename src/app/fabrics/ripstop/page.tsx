import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";
import { AnimatedButtonOutline } from "@/components/AnimatedButtonOutline";
import { AnimatedButtonAccent } from "@/components/AnimatedButtonAccent";

export default function RipstopPage() {
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
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm mb-4 border border-blue-200">
              Advanced Weave Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ripstop Fabric<br />Technology
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Revolutionary weave construction that prevents tears from spreading. Lightweight yet incredibly strong, ripstop fabric is the ultimate choice for high-performance applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fabrics" 
                 className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Fabrics
              </Link>
              <Link href="/fabrics/nyco-50-50" 
                 className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                Compare with NYCO 50/50
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
              <h2 className="text-4xl font-bold text-[#1B2845] mb-6">Revolutionary Weave Technology</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Ripstop fabric features a unique grid pattern woven into the fabric structure that prevents small tears from becoming catastrophic failures. This innovative construction delivers maximum strength with minimal weight.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Tear Resistance</h3>
                    <p className="text-gray-600">Grid pattern stops tears from propagating, preventing small damage from becoming large failures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Lightweight Design</h3>
                    <p className="text-gray-600">Delivers maximum protection without bulk, making it perfect for applications where weight matters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Versatile Applications</h3>
                    <p className="text-gray-600">From tactical gear to outdoor equipment, ripstop fabric excels in demanding environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform -rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#1B2845] mb-8">Ripstop Grid Pattern</h3>
                  <div className="grid grid-cols-4 gap-1 mb-8 max-w-48 mx-auto">
                    {/* Grid Pattern Visualization */}
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square border-2 ${
                          i % 5 === 0 || Math.floor(i / 4) % 5 === 0
                            ? 'border-blue-600 bg-blue-100'
                            : 'border-gray-300 bg-gray-50'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Reinforcement Grid</p>
                      <p className="text-2xl font-bold text-[#1B2845]">Every 1/4 inch</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Tear Strength</p>
                      <p className="text-2xl font-bold text-[#1B2845]">95 lbs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">How Ripstop Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the science behind ripstop fabric's superior tear resistance and durability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-600">1</div>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Grid Integration</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty threads are woven into the fabric in a precise grid pattern, typically spaced 1/4 inch apart.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square border ${
                        i % 3 === 1 || Math.floor(i / 3) === 1
                          ? 'border-blue-600 bg-blue-100'
                          : 'border-gray-300 bg-gray-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-green-600">2</div>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Tear Initiation</h3>
              <p className="text-gray-600 mb-4">
                When fabric experiences a tear, the damage begins to spread through the weave structure.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square border ${
                        i === 4
                          ? 'border-red-600 bg-red-100'
                          : i % 3 === 1 || Math.floor(i / 3) === 1
                          ? 'border-blue-600 bg-blue-100'
                          : 'border-gray-300 bg-gray-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-purple-600">3</div>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Tear Arrest</h3>
              <p className="text-gray-600 mb-4">
                The reinforcement grid stops the tear from spreading, containing the damage to a small area.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square border ${
                        i === 4
                          ? 'border-red-600 bg-red-100'
                          : i % 3 === 1 || Math.floor(i / 3) === 1
                          ? 'border-blue-600 bg-blue-200'
                          : 'border-gray-300 bg-gray-50'
                      }`}
                    />
                  ))}
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
              Detailed technical data and performance characteristics of our ripstop fabric options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Physical Properties */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Physical Properties</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-medium">3.5 oz/sq yd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thickness:</span>
                  <span className="font-medium">0.35 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weave:</span>
                  <span className="font-medium">Ripstop Grid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Grid Spacing:</span>
                  <span className="font-medium">1/4 inch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Width:</span>
                  <span className="font-medium">58/60 inches</span>
                </div>
              </div>
            </div>

            {/* Strength Properties */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Strength Properties</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tensile Strength:</span>
                  <span className="font-medium">150 lbs/in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tear Strength:</span>
                  <span className="font-medium">95 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seam Strength:</span>
                  <span className="font-medium">120 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Abrasion Cycles:</span>
                  <span className="font-medium">30,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Puncture Resistance:</span>
                  <span className="font-medium">85 lbs</span>
                </div>
              </div>
            </div>

            {/* Performance Features */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Performance Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Quick drying</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Lightweight</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Packable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">UV resistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Mildew resistant</span>
                </div>
              </div>
            </div>

            {/* Material Options */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Material Options</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">100% Nylon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Nylon/Cotton blend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Polyester</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Poly/Cotton blend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Canvas weight</span>
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
                  <span className="text-gray-600">CPAI-84 Standard:</span>
                  <span className="font-medium">Certified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Flame Spread:</span>
                  <span className="font-medium">Self-extinguishing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">After-flame:</span>
                  <span className="font-medium">&lt; 2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Char Length:</span>
                  <span className="font-medium">&lt; 4 inches</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Treatment Type:</span>
                  <span className="font-medium">Permanent</span>
                </div>
              </div>
            </div>

            {/* Coatings & Finishes */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Coatings & Finishes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">DWR water repellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">PU waterproof</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Silicone coating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Flame retardant (FR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">IR signature reduction</span>
                </div>
              </div>
            </div>

            {/* Color Options */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Standard Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Black</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-700 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">OD Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-700 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Coyote Brown</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full border border-gray-300"></div>
                  <span className="text-gray-700">Wolf Gray</span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ripstop fabric's unique properties make it the ideal choice for demanding applications across multiple industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tactical Gear */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Tactical Gear</h3>
              <p className="text-gray-600">Pouches, vests, packs, and field equipment</p>
            </div>

            {/* Outdoor Equipment */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Outdoor Equipment</h3>
              <p className="text-gray-600">Tents, tarps, sleeping bags, and backpacks</p>
            </div>

            {/* Aviation */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Aviation</h3>
              <p className="text-gray-600">Parachutes, aircraft interiors, and covers</p>
            </div>

            {/* Marine */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1a4 4 0 014-4 4 4 0 014 4v1m0 6H8m13 0a23.982 23.982 0 00-4.901-9.08A23.982 23.982 0 0016 2c-2.236 0-4.368.517-6.239 1.44A23.982 23.982 0 005.901 12H1m0 0h5.901m13.099 0H21m-8 6V9a5.99 5.99 0 00-.176-1.425M12 19l3-3 3 3-3 3-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2845] mb-2">Marine</h3>
              <p className="text-gray-600">Sails, boat covers, and marine equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2845] mb-4">Ripstop vs Standard Fabrics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how ripstop technology compares to traditional fabric constructions.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-[#1B2845]">Property</th>
                  <th className="text-center p-6 font-semibold text-blue-600">Ripstop</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Standard Weave</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Canvas</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Oxford</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Tear Resistance</td>
                  <td className="p-6 text-center text-blue-600 font-bold">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Fair</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Weight</td>
                  <td className="p-6 text-center text-blue-600 font-bold">Lightweight</td>
                  <td className="p-6 text-center text-gray-600">Medium</td>
                  <td className="p-6 text-center text-gray-600">Heavy</td>
                  <td className="p-6 text-center text-gray-600">Medium</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Packability</td>
                  <td className="p-6 text-center text-blue-600 font-bold">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Poor</td>
                  <td className="p-6 text-center text-gray-600">Fair</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Durability</td>
                  <td className="p-6 text-center text-blue-600 font-bold">Very Good</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Very Good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium text-gray-800">Water Resistance</td>
                  <td className="p-6 text-center text-blue-600 font-bold">Excellent</td>
                  <td className="p-6 text-center text-gray-600">Variable</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                  <td className="p-6 text-center text-gray-600">Good</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-800">Overall Rating</td>
                  <td className="p-6 text-center text-blue-600 font-bold">★★★★★</td>
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
        title="Ready to Source Ripstop Fabrics?"
        description="Contact us for pricing, samples, and custom specifications for your ripstop fabric requirements."
        buttons={[
          <AnimatedButtonAccent 
            key="request-quote"
            href={`mailto:${CONTACT.email}?subject=Ripstop Fabric Inquiry&body=I'm interested in ripstop fabric sourcing. Please send me pricing and samples.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Request Quote</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            key="compare-nyco"
            href="/fabrics/nyco-50-50"
            textSize="text-xl"
          >
            <span className="font-bold">Compare with NYCO 50/50</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
} 