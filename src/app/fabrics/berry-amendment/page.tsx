import Image from 'next/image';
import Link from 'next/link';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedButtonOutline } from '@/components/AnimatedButtonOutline';
import { AnimatedButtonAccent } from '@/components/AnimatedButtonAccent';
import { CTA } from '@/components/CTA';
import { CONTACT } from '@/constants/contact';

export const metadata = {
  title: 'Berry Amendment Compliance | K&T Textiles',
  description: 'Comprehensive guide to Berry Amendment compliance for Department of Defense contractors. Learn about requirements, benefits, and sourcing compliant textiles and materials.',
  keywords: 'Berry Amendment, DoD compliance, military textiles, government contracts, domestic sourcing, defense contractors',
};

export default function BerryAmendmentPage() {
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
            <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Government Compliance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Berry Amendment
              <span className="block text-blue-400">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Comprehensive guide to Berry Amendment requirements for Department of Defense contractors. 
              Ensure full compliance with domestic sourcing mandates for textiles and materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedButtonAccent 
                href="#requirements" 
                textSize="text-lg"
              >
                View Requirements
              </AnimatedButtonAccent>
              <AnimatedButtonOutline 
                href="#contact" 
                textSize="text-lg"
              >
                Get Compliance Help
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
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Est. 1941
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is the Berry Amendment?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Berry Amendment is a federal law requiring the Department of Defense to purchase certain items, 
                including textiles and clothing, only from domestic sources. This protects American manufacturing 
                capabilities and ensures supply chain security for critical defense materials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mandatory for DoD Contracts</h3>
                    <p className="text-gray-600">Required for all Department of Defense contracts exceeding $150,000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">100% Domestic Content</h3>
                    <p className="text-gray-600">From raw materials to finished products, everything must be US-sourced</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">National Security Priority</h3>
                    <p className="text-gray-600">Ensures reliable supply chains for critical defense materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 1941</h3>
                  <p className="text-gray-600 mb-4">Over 80 years of protecting American manufacturing</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-blue-200/50">
                      <div className="font-bold text-blue-600">$150K+</div>
                      <div className="text-gray-600">Contract Threshold</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-blue-200/50">
                      <div className="font-bold text-green-600">100%</div>
                      <div className="text-gray-600">US Content Required</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the specific requirements for Berry Amendment compliance is crucial for successful DoD contracting.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Domestic Manufacturing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% US Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                All manufacturing processes must occur within the United States, from initial fiber production 
                through final assembly and finishing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Fiber production and processing
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Yarn spinning and dyeing
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Fabric weaving or knitting
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Final product assembly
                </li>
              </ul>
            </div>

            {/* Raw Materials */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Domestic Raw Materials</h3>
              <p className="text-gray-600 mb-6">
                Every component, from base fibers to chemical treatments, must be sourced from qualified 
                domestic suppliers with verified origins.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Cotton, wool, and synthetic fibers
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Dyes and chemical treatments
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Hardware and fasteners
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Thread and trim materials
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v2h8V6H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Documentation</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive supply chain documentation is required to prove compliance at every stage 
                of production and sourcing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Supply chain certifications
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Material origin certificates
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Manufacturing process records
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Quality assurance documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berry Amendment compliance offers significant advantages for both contractors and national security.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Access to DoD Contracts</h3>
                    <p className="text-gray-600">
                      Compliance is mandatory for Department of Defense contracts exceeding $150,000, 
                      opening access to billions in government contracting opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Superior Quality Assurance</h3>
                    <p className="text-gray-600">
                      US manufacturing standards and oversight ensure consistent quality and reliability 
                      that meets or exceeds military specifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Supply Chain Security</h3>
                    <p className="text-gray-600">
                      Domestic sourcing eliminates foreign dependencies and ensures reliable access to 
                      critical materials during national emergencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                    <p className="text-gray-600">
                      Berry Amendment compliance sets contractors apart in the marketplace and demonstrates 
                      commitment to national defense priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Market Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">$400B+</div>
                    <div className="text-sm text-gray-300">Annual DoD Budget</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$150K</div>
                    <div className="text-sm text-gray-300">Minimum Contract Threshold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">80+</div>
                    <div className="text-sm text-gray-300">Years of Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                    <div className="text-sm text-gray-300">Domestic Requirement</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-sm text-gray-300">
                    The Berry Amendment protects American manufacturing capabilities while ensuring 
                    the highest quality standards for military applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Berry Amendment compliant textiles serve critical defense and security applications across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Military Uniforms</h3>
              <p className="text-gray-600 text-sm">Combat uniforms, dress uniforms, and specialized military apparel</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tactical Gear</h3>
              <p className="text-gray-600 text-sm">Body armor carriers, tactical vests, and protective equipment</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Field Equipment</h3>
              <p className="text-gray-600 text-sm">Backpacks, tents, sleeping systems, and field shelters</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specialized Applications</h3>
              <p className="text-gray-600 text-sm">Flame-resistant fabrics, chemical protection, and aerospace textiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our materials meet or exceed all relevant military specifications and industry standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Legal Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Berry Amendment (10 USC 2533a)
                </li>
                <li className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Buy American Act compliance
                </li>
                <li className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Defense Federal Acquisition Regulation
                </li>
                <li className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Trade Agreements Act conformity
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">Military Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  MIL-DTL-44436 (Cloth, Cotton, Nylon)
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  MIL-C-83429 (Camouflage patterns)
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  NFPA 2112 (Fire resistance)
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  ASTM D1230 (Flammability testing)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Quality Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-purple-800">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  ISO 9001:2015 quality management
                </li>
                <li className="flex items-center text-purple-800">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  OEKO-TEX Standard 100
                </li>
                <li className="flex items-center text-purple-800">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  CPSC compliance testing
                </li>
                <li className="flex items-center text-purple-800">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Supply chain verification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Berry Amendment Compliance Assistance?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our experts can help you navigate Berry Amendment requirements and ensure full compliance for your DoD contracts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Consulting</h3>
                <p className="text-gray-600 text-sm">Expert guidance on requirements and documentation</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v2h8V6H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Supply Chain Verification</h3>
                <p className="text-gray-600 text-sm">Complete documentation and traceability services</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Materials</h3>
                <p className="text-gray-600 text-sm">Access to pre-qualified Berry Amendment fabrics</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedButtonAccent 
                href={`mailto:${CONTACT.email}?subject=Berry Amendment Compliance Inquiry&body=I'm interested in learning more about Berry Amendment compliance for my DoD contracts. Please provide information about your consulting services and certified materials.`}
                isExternal={true}
                textSize="text-lg"
              >
                Get Compliance Help
              </AnimatedButtonAccent>
              <AnimatedButtonOutline 
                href={`tel:${CONTACT.phone}`}
                isExternal={true}
                textSize="text-lg"
              >
                Call: {CONTACT.phone}
              </AnimatedButtonOutline>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Ensure Berry Amendment Compliance?"
        description="Partner with us for complete Berry Amendment compliance solutions. From material sourcing to documentation, we'll help you meet all DoD requirements."
        buttons={[
          <AnimatedButtonAccent 
            key="start-partnership"
            href={`mailto:${CONTACT.email}?subject=Berry Amendment Partnership&body=I'm interested in partnering with K&T Textiles for Berry Amendment compliant materials and consulting services. Please send me more information about your capabilities and pricing.`}
            isExternal={true}
            textSize="text-xl"
          >
            <span className="font-bold">Start Partnership</span>
          </AnimatedButtonAccent>,
          <AnimatedButtonOutline 
            key="view-fabrics"
            href="/fabrics"
            textSize="text-xl"
          >
            <span className="font-bold">View Fabrics</span>
          </AnimatedButtonOutline>
        ]}
      />
    </div>
  );
} 