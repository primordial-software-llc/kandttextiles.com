import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/constants/contact";

export default function TrackiProPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-[#1B2845] to-[#2C3E50]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="max-w-3xl">
            <Link 
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Track Smarter,<br />Not Harder
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Meet the Tracki Pro: The revolutionary GPS tracker that combines 
              military-grade durability with intelligent tracking technology. 
              Perfect for businesses that demand reliability.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">$38.88</div>
                <div className="text-white/60 text-sm">One-time purchase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">$20</div>
                <div className="text-white/60 text-sm">Monthly service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-3 md:col-span-1">
              <h2 className="text-3xl font-bold text-[#1B2845] mb-3">Why Tracki Pro?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Modern GPS tracking has evolved far beyond simple satellite positioning. The Tracki Pro 
                  combines GPS, cellular networks, and WiFi positioning to create a seamless tracking 
                  system that works everywhere – from dense urban environments to remote locations.
                </p>

                <p>
                  Unlike traditional trackers that rely solely on GPS, this device uses 4G cellular 
                  networks like your smartphone, with WiFi positioning for indoor accuracy. The result? 
                  Continuous tracking whether your assets are in a warehouse, on the road, or crossing 
                  borders.
                </p>

                <p>
                  With a smart 10,000mAh battery that hibernates when stationary, IP67 waterproof rating, 
                  and strong magnetic mount, it's built for real-world use. At just $38.88 plus $20 monthly 
                  for global service, enterprise-grade tracking is now accessible for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🔋",
                  title: "12-Month Battery",
                  description: "Industry-leading 10,000mAh battery with intelligent power modes. Hibernates automatically when stationary to extend life, wakes instantly on movement. Configurable check-in intervals from 1 minute to 24 hours to balance battery life with tracking needs. Receives low-battery alerts with recommendations to optimize intervals."
                },
                {
                  icon: "🌊",
                  title: "Military-Grade Durability",
                  description: "IP67 waterproof rating survives full submersion up to 1 meter for 30 minutes. Rugged industrial-grade construction withstands extreme temperatures, shock, and vibration. Strong magnetic mount with 3M adhesive options for permanent installation. Perfect for outdoor and industrial environments."
                },
                {
                  icon: "📡",
                  title: "Multi-Network Tracking",
                  description: "Seamless integration of GPS, 4G cellular (with 3G/2G fallback), WiFi positioning, and Bluetooth. Uses cellular networks like a phone for global coverage, WiFi for indoor accuracy within 10 meters, and GPS for outdoor precision. Automatically switches between networks for uninterrupted tracking."
                },
                {
                  icon: "⚡",
                  title: "Real-Time Updates",
                  description: "Fully customizable tracking intervals to match your needs. Set 1-minute updates for high-value cargo, longer intervals for static assets. Movement-triggered alerts notify instantly when assets start moving. Geofencing capabilities with entry/exit notifications. Historical route tracking with speed monitoring."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#1B2845] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1B2845] mb-4">
                Intelligent Tracking for the Modern World
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Smart Power Management</h3>
                    <p className="text-gray-600">
                      Automatically adjusts power consumption based on movement, 
                      extending battery life when stationary.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Geofencing Alerts</h3>
                    <p className="text-gray-600">
                      Create virtual boundaries and receive instant notifications 
                      when your assets enter or exit designated areas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2845] mb-2">Magnetic Mounting</h3>
                    <p className="text-gray-600">
                      Strong magnetic mount for quick and secure attachment to any metal surface,
                      making installation and removal effortless.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1B2845] to-[#2C3E50] rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Perfect For:</h3>
                <div className="space-y-3">
                  {[
                    "Fleet Management",
                    "Asset Protection",
                    "Equipment Monitoring",
                    "Supply Chain Tracking",
                    "Vehicle Security"
                  ].map((use, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Tracking?"
        description="Join thousands of businesses that trust Tracki Pro for their most valuable assets. Experience the perfect blend of durability, reliability, and intelligent tracking."
        buttons={[
          {
            text: "Contact Sales",
            href: `mailto:${CONTACT.email}`,
            variant: "secondary",
            isExternal: true
          }
        ]}
      />
    </div>
  );
} 