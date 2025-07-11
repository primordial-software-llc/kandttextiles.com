import Image from 'next/image';
import Link from 'next/link';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { CTA } from '@/components/CTA';
import { CONTACT } from '@/constants/contact';

export const metadata = {
  title: 'Camouflage Patterns & Military Design | K&T Textiles',
  description: 'Complete guide to military camouflage patterns - from traditional woodland to modern digital designs. Understanding OCP, MultiCam, MARPAT, and commercial licensing.',
  keywords: 'camouflage patterns, military camo, OCP, MultiCam, MARPAT, digital camouflage, woodland BDU, tactical patterns',
};

export default function CamouflagePatterns() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Military Design Evolution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Camouflage Patterns
              <span className="block text-green-400">& Military Design</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From traditional woodland to modern digital designs. Understanding the evolution, technology, 
              and business behind military camouflage patterns.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedButtonAccent 
                href="#patterns" 
                textSize="text-lg"
              >
                Explore Patterns
              </AnimatedButtonAccent>
              <AnimatedButtonOutline 
                href="#contact" 
                textSize="text-lg"
              >
                Custom Camo Solutions
              </AnimatedButtonOutline>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Pattern Evolution
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Digital Revolution in Military Camouflage
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The early 2000s marked a seismic shift from traditional organic patterns to computer-generated 
                digital camouflage. This transformation wasn't just aesthetic—it revolutionized how military 
                forces approach concealment and pattern effectiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">2002: Canadian CADPAT</h3>
                    <p className="text-gray-600">First major digital military pattern adoption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Effectiveness</h3>
                    <p className="text-gray-600">Better performance against digital sensors and optics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Environment Design</h3>
                    <p className="text-gray-600">Patterns work across diverse terrain and conditions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Era</h3>
                  <p className="text-gray-600 mb-4">Computer-generated patterns dominate modern military</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-green-200/50">
                      <div className="font-bold text-green-600">2000s+</div>
                      <div className="text-gray-600">Digital Standard</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200/50">
                      <div className="font-bold text-blue-600">5-7</div>
                      <div className="text-gray-600">Color Complexity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Types Section */}
      <section id="patterns" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Major Pattern Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the landscape of military and commercial camouflage patterns, from government-owned designs to commercial licensing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Government-Owned Patterns */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Government-Owned Patterns</h3>
              <p className="text-gray-600 mb-6">
                Official military patterns owned and controlled by government agencies, typically restricted for commercial use.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">OCP (Operational Camouflage Pattern)</h4>
                  <p className="text-sm text-gray-600">Current U.S. Army standard, adopted 2015-present</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">MARPAT</h4>
                  <p className="text-sm text-gray-600">Marine Corps digital pattern, heavily protected</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Woodland BDU</h4>
                  <p className="text-sm text-gray-600">Classic 1980s-2000s pattern, still widely copied</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">UCP (Universal Camouflage Pattern)</h4>
                  <p className="text-sm text-gray-600">Failed "digital ACU" pattern, discontinued 2019</p>
                </div>
              </div>
            </div>

            {/* Commercial Patterns */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Patterns</h3>
              <p className="text-gray-600 mb-6">
                Privately-owned patterns available for commercial licensing, used by civilian tactical and hunting markets.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">MultiCam</h4>
                  <p className="text-sm text-gray-600">Crye Precision's crown jewel, widely licensed globally</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">A-TACS</h4>
                  <p className="text-sm text-gray-600">Alternative commercial tactical pattern</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Realtree</h4>
                  <p className="text-sm text-gray-600">Hunting camouflage empire, outdoor market leader</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Mossy Oak</h4>
                  <p className="text-sm text-gray-600">Major hunting pattern competitor to Realtree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Evolution Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation from traditional organic patterns to modern digital designs.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1980s-2000s */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1980s-2000s: Woodland BDU Era</h3>
                    <p className="text-gray-600">
                      Forest green, brown, black, and tan splotches dominated. Worked great in forests, 
                      but terrible in desert environments.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2005-2019 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2005-2019: The UCP Disaster</h3>
                    <p className="text-gray-600">
                      Army tried "universal" gray-green digital pattern. Failed spectacularly in Afghanistan/Iraq. 
                      Soldiers called it the "ACU" pattern.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2010 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2010: MultiCam Emergency Fix</h3>
                    <p className="text-gray-600">
                      Army adopted Crye's MultiCam for Afghanistan deployment. Worked so well it influenced 
                      the next generation of patterns.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2015-Present */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2015-Present: OCP Takes Over</h3>
                    <p className="text-gray-600">
                      Army's modified version of the original Scorpion pattern. Similar to MultiCam but 
                      government-owned. Now standard for Army, Air Force, and Space Force.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MultiCam Dominance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">MultiCam's Market Dominance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding why MultiCam became the king of civilian tactical camouflage and the realities of pattern licensing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why MultiCam Dominates Civilian Markets</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600"><strong>Only available option:</strong> Government won't license military patterns commercially</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600"><strong>Military credibility:</strong> Battle-tested by U.S. forces in Afghanistan</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600"><strong>Actually works:</strong> Superior multi-environment performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600"><strong>Industry adoption:</strong> Gear manufacturers standardized on it</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-2">The Reality Check</h4>
                  <p className="text-gray-700">
                    MultiCam is essentially the only "real" military pattern civilians can legally buy. 
                    Government patterns like OCP, MARPAT, and UCP require official approval and are off-limits 
                    to commercial markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Civilian Market Reality</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="font-bold text-blue-600 text-lg">Licensed MultiCam</div>
                      <div className="text-gray-600 text-sm">The gold standard</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-gray-600 text-lg">MultiCam Knockoffs</div>
                      <div className="text-gray-600 text-sm">"MC-style" patterns</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-gray-600 text-lg">A-TACS</div>
                      <div className="text-gray-600 text-sm">Distant second place</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital vs Traditional Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Traditional vs Digital Patterns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the fundamental differences between pre-2000s organic patterns and modern digital designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Patterns */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Patterns (Pre-2000s)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Organic shapes mimicking leaves, branches, shadows</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">3-4 colors typically used</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Designed for specific environments (woodland, desert)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hand-drawn artistic approach</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">Example: Woodland BDU (1980s-2000s)</p>
              </div>
            </div>

            {/* Digital Patterns */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Patterns (2000s+)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Pixelated squares and rectangles</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Computer-generated designs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">5-7 colors commonly used</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Multi-environment effectiveness</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Better against digital sensors and optics</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">Example: OCP, MARPAT, MultiCam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Reality Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Licensing Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding what's actually available for commercial use versus government-restricted patterns.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Government Restricted</h3>
                <div className="space-y-2">
                  <div className="bg-red-50 p-2 rounded text-sm font-medium text-red-700">OCP</div>
                  <div className="bg-red-50 p-2 rounded text-sm font-medium text-red-700">MARPAT</div>
                  <div className="bg-red-50 p-2 rounded text-sm font-medium text-red-700">UCP</div>
                </div>
                <p className="text-gray-600 text-sm mt-4">Require official military approval</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercially Available</h3>
                <div className="space-y-2">
                  <div className="bg-green-50 p-2 rounded text-sm font-medium text-green-700">MultiCam</div>
                  <div className="bg-green-50 p-2 rounded text-sm font-medium text-green-700">A-TACS</div>
                  <div className="bg-green-50 p-2 rounded text-sm font-medium text-green-700">Realtree</div>
                </div>
                <p className="text-gray-600 text-sm mt-4">Available through licensing agreements</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knockoffs & Copies</h3>
                <div className="space-y-2">
                  <div className="bg-yellow-50 p-2 rounded text-sm font-medium text-yellow-700">"MC-Style"</div>
                  <div className="bg-yellow-50 p-2 rounded text-sm font-medium text-yellow-700">"Multi-Cam"</div>
                  <div className="bg-yellow-50 p-2 rounded text-sm font-medium text-yellow-700">"Tactical Camo"</div>
                </div>
                <p className="text-gray-600 text-sm mt-4">Usually 90% MultiCam copies</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-2">Bottom Line for Civilians:</h4>
              <p className="text-gray-700">
                If you want legitimate multi-environment military-style camouflage as a civilian, it's essentially 
                MultiCam or MultiCam knockoffs. There's really no other serious competition in the tactical space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Need Custom Camouflage Solutions?"
        description="We work with licensed patterns and custom designs for military, law enforcement, and commercial applications. Contact us for pattern licensing and fabric sourcing."
        buttons={[
          <AnimatedButtonAccent 
            key="get-custom-solutions"
            href={`mailto:${CONTACT.email}?subject=Custom Camouflage Inquiry&body=I'm interested in custom camouflage pattern solutions and fabric sourcing. Please send me more information about licensing and capabilities.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Get Custom Solutions</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            key="view-all-fabrics"
            href="/fabrics"
            textSize="text-xl"
          >
            <span className="font-bold">View All Fabrics</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
} 