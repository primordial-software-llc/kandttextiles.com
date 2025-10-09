import { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Tampa Bay Shooting Ranges - Complete Guide 2025 | K&T Textiles",
  description: "Comprehensive guide to shooting ranges in Tampa Bay. Find beginner-friendly facilities, indoor/outdoor ranges, costs, and what to expect. Updated October 2025.",
  keywords: [
    'tampa shooting ranges',
    'shooting ranges near tampa', 
    'gun ranges tampa bay',
    'indoor shooting range tampa',
    'outdoor shooting range tampa',
    'shooting ranges brandon',
    'shooting ranges lutz',
    'tampa bay shooting range guide',
    'best shooting ranges tampa',
    'beginner shooting ranges tampa'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Complete Guide to Tampa Bay Shooting Ranges",
    description: "Find the best shooting range in Tampa Bay for your skill level. Indoor/outdoor options, costs, beginner tips, and honest reviews.",
    type: "article",
    url: "https://kandttextiles.com/ranges/tampa-bay/",
    siteName: "K&T Textiles",
    images: [
      {
        url: "https://kandttextiles.com/images/tampa-bay-ranges-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Tampa Bay Shooting Ranges Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Tampa Bay Shooting Ranges",
    description: "Find the best shooting range in Tampa Bay for your skill level. Indoor/outdoor options, costs, beginner tips, and honest reviews.",
    images: ["https://kandttextiles.com/images/tampa-bay-ranges-guide.jpg"],
  },
  alternates: {
    canonical: "https://kandttextiles.com/ranges/tampa-bay/",
  },
};

// Sample range data - in a real implementation, this would come from a database or CMS
const ranges = [
  {
    id: "shooters-world",
    name: "Shooters World",
    location: "Tampa",
    type: "Indoor",
    beginnerFriendly: 5,
    priceRange: "$$",
    ourRating: 4.5,
    lanes: "Multiple indoor lanes",
    maxDistance: "100 yards",
    hours: "Mon-Sat: 9am-9pm, Sun: 10am-6pm",
    phone: "(813) 931-1800",
    website: "https://shootersworld.com",
    distanceFromDowntown: "15 miles"
  },
  {
    id: "manatee-gun-club",
    name: "Manatee Gun & Archery Club",
    location: "Myakka City",
    type: "Outdoor",
    beginnerFriendly: 5,
    priceRange: "$",
    ourRating: 4.8,
    lanes: "82 covered benches, multiple ranges",
    maxDistance: "1,000 yards",
    hours: "Thu-Sun: 8:30am-4pm",
    phone: "(941) 322-1193",
    website: "https://manateegac.com",
    distanceFromDowntown: "45 miles"
  },
  {
    id: "shoot-straight-tampa",
    name: "Shoot Straight Tampa",
    location: "Tampa",
    type: "Indoor",
    beginnerFriendly: 5,
    priceRange: "$$",
    ourRating: "TBD",
    lanes: "20 pistol, 5 rifle",
    maxDistance: "25 yards",
    hours: "Mon-Fri: 10am-8pm, Sat: 9am-6pm, Sun: 11am-6pm",
    phone: "(813) 623-1111",
    website: "https://shootstraight.com",
    distanceFromDowntown: "12 miles"
  },
  {
    id: "wyoming-antelope-club",
    name: "Wyoming Antelope Club",
    location: "Lutz",
    type: "Outdoor",
    beginnerFriendly: 3,
    priceRange: "$$$",
    ourRating: "TBD",
    lanes: "Multiple outdoor bays",
    maxDistance: "300 yards",
    hours: "Wed-Sun: 8am-5pm (members only)",
    phone: "(813) 961-6888",
    website: "https://wyomingantelopeclub.org",
    distanceFromDowntown: "18 miles"
  },
  {
    id: "tenoroc-fish-management",
    name: "Tenoroc Fish Management Area",
    location: "Lakeland",
    type: "Outdoor",
    beginnerFriendly: 4,
    priceRange: "$",
    ourRating: "TBD",
    lanes: "Multiple outdoor lanes",
    maxDistance: "100 yards",
    hours: "Daily: 8am-6pm",
    phone: "(863) 499-2422",
    website: "https://myfwc.com",
    distanceFromDowntown: "35 miles"
  }
];

export default function TampaBayRangesPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Tampa Bay Shooting Ranges",
    "author": {
      "@type": "Organization",
      "name": "K&T Textiles"
    },
    "publisher": {
      "@type": "Organization",
      "name": "K&T Textiles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kandttextiles.com/logo.png"
      }
    },
    "datePublished": "2025-10-05",
    "dateModified": "2025-10-05",
    "description": "Comprehensive guide to shooting ranges in Tampa Bay. Find beginner-friendly facilities, indoor/outdoor ranges, costs, and what to expect.",
    "image": "https://kandttextiles.com/images/tampa-bay-ranges-guide.jpg",
    "mainEntityOfPage": "https://kandttextiles.com/ranges/tampa-bay/"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#1B2845] transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">Range Guides</span>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-[#1B2845] font-medium">Tampa Bay</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0f172a] text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Complete Guide to Shooting Ranges in Tampa Bay
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Whether you're new to shooting or looking for a new facility, we've visited and reviewed the top ranges across Tampa, Brandon, Lutz, and surrounding areas. Find the right range for your skill level and training goals.
            </p>
            
            {/* Quick Stats Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-gray-300">Ranges Reviewed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Indoor & Outdoor</div>
                  <div className="text-sm text-gray-300">Options Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Beginner to Advanced</div>
                  <div className="text-sm text-gray-300">All Skill Levels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Updated</div>
                  <div className="text-sm text-gray-300">October 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
          {/* Introduction Section */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Finding the right shooting range in Tampa Bay can be overwhelming. Some ranges are perfect for beginners with patient staff and comprehensive safety briefings. Others cater to experienced shooters who want autonomy and advanced training options.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've visited facilities across the Tampa Bay area to help you find the best fit based on your experience level, budget, and what you're looking to practice. Whether you're taking your first shot or training for competition, this guide breaks down what each range offers and who they're best for.
              </p>
            </div>
          </section>

          {/* Quick Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Range Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Range Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Max Distance</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Our Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ranges.map((range) => (
                    <tr key={range.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <a 
                          href={`#${range.id}`} 
                          className="text-[#1B2845] hover:text-[#34495e] font-medium transition-colors"
                        >
                          {range.name}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{range.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{range.maxDistance}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{range.priceRange}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="flex items-center">
                          <span className="font-medium">{range.ourRating}</span>
                          {range.ourRating !== "TBD" && <span className="text-gray-400 ml-1">/5</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{range.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Individual Range Reviews */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Detailed Range Reviews</h2>
            
            {ranges.map((range) => (
              <article key={range.id} id={range.id} className="mb-12 bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1B2845] mb-4">
                  {range.name} - {range.location}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      <strong>Location:</strong> {range.location}<br />
                      <strong>Type:</strong> {range.type}<br />
                      <strong>Distance from downtown Tampa:</strong> {range.distanceFromDowntown}
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-[#1B2845] mb-3">Quick Stats</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Type:</strong> {range.type}</li>
                        <li><strong>Lanes:</strong> {range.lanes}</li>
                        <li><strong>Max Distance:</strong> {range.maxDistance}</li>
                        <li><strong>Hours:</strong> {range.hours}</li>
                        <li><strong>Phone:</strong> <a href={`tel:${range.phone}`} className="text-[#1B2845] hover:underline">{range.phone}</a></li>
                        <li><strong>Website:</strong> <a href={range.website} target="_blank" rel="nofollow noopener" className="text-[#1B2845] hover:underline">Visit Site</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1B2845] mb-2">Overview</h4>
                    {range.id === 'shooters-world' && (
                      <div className="text-gray-700 leading-relaxed space-y-3">
                        <p>
                          Shooters World is a large, clean facility that handles everything from first-time shooters to experienced competitors. The waiting area features complimentary beverages and a viewing window where you can watch the range - helpful if you've never been to a range before and want to see what happens.
                        </p>
                        <p>
                          The facility includes a small museum in the hallway leading to the range, showcasing historical firearms. The attached gun store is well-organized with separate sections for handguns, shotguns, and tactical rifles/SMGs. Staff can answer questions about equipment, and they carry a good selection of accessories and ammunition.
                        </p>
                        <p>
                          The atmosphere is relaxed without sacrificing safety. They use a text-based notification system when your lane is ready during busy times, and provide de-lead hand washing stations. With 100-yard capability, it accommodates both pistol and rifle shooters. The range works well for families, groups, or individuals at any skill level.
                        </p>
                      </div>
                    )}
                    {range.id === 'manatee-gun-club' && (
                      <div className="text-gray-700 leading-relaxed space-y-3">
                        <p>
                          Manatee Gun & Archery Club is located in Myakka City, about 45 miles from downtown Tampa. The facility works well if you want to make a day of shooting and need serious distance capabilities or multiple shooting disciplines in one location.
                        </p>
                        <p>
                          The main firing line features 82 covered concrete benches with distances from 25 yards out to 1,000 yards with steel gong targets. They operate on 30-minute shooting sequences - the range goes cold for target setup, then hot for shooting. This creates a methodical rhythm that some shooters appreciate.
                        </p>
                        <p>
                          There's a dedicated 600-yard range with approximately 16 benchrest tables and both paper and steel targets. To access it, you'll need to qualify on the main line first (5 consecutive shots maintaining 2 MOA at 300 yards) - this ensures everyone shooting at distance has demonstrated basic competence.
                        </p>
                        <p>
                          The Pistol Challenge Course offers an alternative to static target shooting - 6 shooting positions engaging 25 paper and steel targets from varying angles and distances (7-45 yards). It works for CCW practice, IDPA training, or just mixing up your pistol work. Available Saturday-Sunday 8:30am-2pm for $7/round (members) or $9 (guests).
                        </p>
                        <p>
                          Additional facilities include a .22 rimfire steel gallery, 5-stand shotgun range, archery ranges with a 3D hunting course, Cowboy Action bays, and an air-conditioned clubhouse. The covered ranges handle Florida weather well - outdoor shooting without direct sun and rain exposure.
                        </p>
                      </div>
                    )}
                    {range.id === 'shoot-straight-tampa' && (
                      <p className="text-gray-700 leading-relaxed">
                        Shoot Straight Tampa is one of the most beginner-friendly ranges in the area. The staff is patient and knowledgeable, making it perfect for first-time shooters. The facility is clean, well-lit, and air-conditioned - a welcome relief from Florida's heat. They offer comprehensive safety briefings and have experienced instructors available for lessons.
                      </p>
                    )}
                    {range.id === 'wyoming-antelope-club' && (
                      <p className="text-gray-700 leading-relaxed">
                        The Wyoming Antelope Club is a premier outdoor shooting facility that caters to serious shooters and competitors. The club maintains multiple outdoor bays with varying distances up to 300 yards. The natural setting provides an authentic shooting experience, though membership is required. The facilities are well-maintained and the range safety officers are experienced but expect shooters to follow protocols independently.
                      </p>
                    )}
                    {range.id === 'tenoroc-fish-management' && (
                      <p className="text-gray-700 leading-relaxed">
                        Tenoroc Fish Management Area offers an affordable outdoor shooting experience on public land. The range is managed by the Florida Fish and Wildlife Conservation Commission and provides a no-frills but safe environment for rifle practice. It's perfect for those who want to shoot outdoors without the cost of private club membership. The facility is basic but functional, with covered shooting positions and target frames at various distances.
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1B2845] mb-2">Range Management</h4>
                    {range.id === 'shooters-world' && (
                      <p className="text-gray-700 leading-relaxed">
                        Staff maintain safety standards while letting you shoot at your own pace. They'll step in when necessary but generally aren't hovering. The environment is relaxed, and staff are approachable if you have questions.
                      </p>
                    )}
                    {range.id === 'manatee-gun-club' && (
                      <p className="text-gray-700 leading-relaxed">
                        Range officers provide guidance ahead of time rather than correcting after the fact. New shooters get polite advice that builds confidence, and experienced shooters appreciate the professional approach. They're knowledgeable and willing to help you improve your technique.
                      </p>
                    )}
                    {range.id === 'shoot-straight-tampa' && (
                      <p className="text-gray-700 leading-relaxed">
                        Range Safety Officers are hands-on with beginners, providing clear instructions and monitoring safety closely. The atmosphere is supportive, making it comfortable for new shooters to ask questions.
                      </p>
                    )}
                    {range.id === 'wyoming-antelope-club' && (
                      <p className="text-gray-700 leading-relaxed">
                        RSOs operate with a hands-off approach, assuming members know what they're doing. They're available when needed but expect shooters to follow range rules independently.
                      </p>
                    )}
                    {range.id === 'tenoroc-fish-management' && (
                      <p className="text-gray-700 leading-relaxed">
                        Range officers ensure basic safety protocols are followed but don't provide extensive instruction. Shooters are expected to know basic range etiquette and safety procedures.
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#1B2845] mb-2">Costs</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        {range.id === 'shooters-world' && (
                          <>
                            <li>• Lane Rental: $20-30/hour (varies by day)</li>
                            <li>• Gun Rentals: $15-30 (extensive selection)</li>
                            <li>• Eye/Ear Protection: $5 rental or included with some packages</li>
                            <li>• Targets: $2-5 (various types available)</li>
                            <li>• Ammunition: Competitive pricing in store</li>
                            <li>• Free beverages in waiting area</li>
                            <li><em>Note: Hourly pricing typical of indoor ranges</em></li>
                          </>
                        )}
                        {range.id === 'manatee-gun-club' && (
                          <>
                            <li>• Guest Daily Fee: $27 (rifle/pistol) - <strong>All Day Access</strong></li>
                            <li>• Member Daily Fee: $7 (excellent value!)</li>
                            <li>• Junior Guest: $11</li>
                            <li>• Free for Active Duty Military & Local LEOs</li>
                            <li>• Pistol Challenge Course: $7 members / $9 guests (2 flights)</li>
                            <li>• 5-Stand Shotgun: $8.25 members / $10.75 guests (25 birds)</li>
                            <li>• Archery Range: $7 members / $10 guests</li>
                            <li>• 3D Archery Course: $10 members / $20 guests</li>
                            <li>• 600-yard range requires qualification (free)</li>
                            <li>• Annual Membership: Available (contact for rates)</li>
                            <li>• No gun rentals (bring your own)</li>
                            <li><em>Note: Much better value than hourly indoor pricing</em></li>
                          </>
                        )}
                        {range.id === 'shoot-straight-tampa' && (
                          <>
                            <li>• Lane Rental: $25/hour</li>
                            <li>• Gun Rentals: $15-25 (various models)</li>
                            <li>• Eye/Ear Protection: $5 rental</li>
                            <li>• Targets: $2-5</li>
                          </>
                        )}
                        {range.id === 'wyoming-antelope-club' && (
                          <>
                            <li>• Membership: $300/year</li>
                            <li>• Daily Guest Fee: $25</li>
                            <li>• No equipment rentals</li>
                            <li>• Bring your own targets</li>
                          </>
                        )}
                        {range.id === 'tenoroc-fish-management' && (
                          <>
                            <li>• Daily Fee: $5 per person</li>
                            <li>• Annual Pass: $30</li>
                            <li>• No equipment rentals</li>
                            <li>• Targets: Bring your own</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1B2845] mb-2">What to Bring</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Valid ID (required)</li>
                        <li>• Eye protection</li>
                        <li>• Ear protection</li>
                        <li>• Closed-toe shoes</li>
                        {range.id === 'shooters-world' && (
                          <>
                            <li>• Firearm and ammunition (or rent on-site)</li>
                            <li>• Range bag for organization</li>
                            <li>• Phone for text notifications during busy times</li>
                            <li>• Water bottle (though beverages provided)</li>
                          </>
                        )}
                        {range.id === 'manatee-gun-club' && (
                          <>
                            <li>• Your own firearm and ammunition</li>
                            <li>• Targets (or purchase on-site)</li>
                            <li>• Cleaning supplies</li>
                            <li>• Sunscreen and hat (covered but still outdoors)</li>
                            <li>• Water and snacks (make a day of it)</li>
                          </>
                        )}
                        {range.id === 'shoot-straight-tampa' && (
                          <>
                            <li>• Firearm and ammunition (if you have them)</li>
                            <li>• Range bag for organization</li>
                          </>
                        )}
                        {(range.id === 'wyoming-antelope-club' || range.id === 'tenoroc-fish-management') && (
                          <>
                            <li>• Your own firearm and ammunition</li>
                            <li>• Targets and target stands</li>
                            <li>• Cleaning supplies (optional)</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1B2845] mb-2">Our Take</h4>
                    {range.id === 'shooters-world' && (
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Rating: 4.5/5</strong> - Strong all-around facility that handles diverse needs well. The combination of a clean range, museum, well-stocked store, and relaxed atmosphere makes it accessible for various shooter types. The free beverages, text-based wait system, and de-lead stations show attention to the complete experience. With 100-yard capability, it covers most indoor shooting needs. Note that like most indoor ranges, pricing is hourly - plan your visit accordingly if you want extended practice time.
                      </p>
                    )}
                    {range.id === 'manatee-gun-club' && (
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Rating: 4.8/5</strong> - Comprehensive outdoor facility with rare long-range capabilities (up to 1,000 yards). At $27 for guests ($7 for members), you get all-day access to 82 covered benches across multiple distance options (25/50/100/200/300/600/1000 yards) - significantly better value than hourly indoor range pricing. The range officers provide helpful guidance, particularly for newer shooters. The Pistol Challenge Course offers dynamic training beyond static paper targets. Additional disciplines (5-stand shotgun, archery with 3D course, .22 rimfire steel) let you vary your day. The covered ranges handle Florida weather well, and the 30-minute cold/hot sequences create a methodical pace. The 600-yard range requires qualification (2 MOA at 300 yards) to ensure competence at distance. Free admission for active military and local LEOs. The drive from Tampa means it's not ideal for quick visits, but the all-day access makes it perfect when you want serious distance or a full day of shooting across multiple disciplines.
                      </p>
                    )}
                    {range.id === 'shoot-straight-tampa' && (
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Review To Come</strong> - We're working on visiting every shooting range in the Tampa Bay area to provide honest, first-hand reviews. Check back soon for our personal take on this facility.
                      </p>
                    )}
                    {range.id === 'wyoming-antelope-club' && (
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Review To Come</strong> - We're working on visiting every shooting range in the Tampa Bay area to provide honest, first-hand reviews. Check back soon for our personal take on this facility.
                      </p>
                    )}
                    {range.id === 'tenoroc-fish-management' && (
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Review To Come</strong> - We're working on visiting every shooting range in the Tampa Bay area to provide honest, first-hand reviews. Check back soon for our personal take on this facility.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Brand CTA Section */}
          <section className="mb-16 bg-gradient-to-r from-[#1B2845] to-[#34495e] text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Quality Gear for Your Range Visits?</h2>
            <p className="text-lg mb-6 opacity-90">
              K&T Textiles supplies professional-grade equipment for shooting sports enthusiasts and professionals. From range bags to safety equipment, we carry gear tested in Florida conditions.
            </p>
            <Link 
              href="/products/shooting-accessories" 
              className="inline-block bg-white text-[#1B2845] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse our shooting accessories
            </Link>
          </section>

          {/* Beginner's Guide Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">First Time at a Tampa Bay Shooting Range? Here's What to Expect</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1B2845] mb-4">Before You Go</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-[#1B2845] mb-3">What to Wear</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Required:</strong> Closed-toe shoes (no sandals or flip-flops)</li>
                      <li><strong>Strongly Recommended:</strong> Long pants, higher neckline shirt, long sleeves</li>
                      <li><strong>Florida Reality:</strong> Indoor ranges are air conditioned, outdoor ranges are hot but safety matters</li>
                      <li><strong>Hat tips:</strong> Baseball cap backwards for rifle shooting</li>
                      <li><strong>What to avoid:</strong> Tank tops, low-cut tops, loose clothing, dangly jewelry</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      Looking for range-appropriate clothing? We carry tactical pants and moisture-wicking shirts designed for Florida conditions. <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">Browse our tactical apparel</Link>.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-[#1B2845] mb-3">What to Bring</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Valid ID (required)</li>
                      <li>• Eye protection (shooting glasses or safety glasses)</li>
                      <li>• Ear protection (foam plugs, earmuffs, or electronic)</li>
                      <li>• Range bag for organizing gear</li>
                      <li>• Water bottle</li>
                      <li>• Firearm and ammunition (if you have them)</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      Most ranges rent eye and ear protection if needed, but having your own ensures better fit and hygiene. A quality range bag keeps everything organized. <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">View our range bags and safety equipment</Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1B2845] mb-4">The Check-In Process</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you arrive, you'll typically need to fill out a waiver, show your ID, and receive a safety briefing. The staff will explain range rules, assign you a lane, and may provide a quick orientation to the facility. Don't hesitate to ask questions - they're there to help ensure your safety and enjoyment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1B2845] mb-4">Range Commands to Know</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[#1B2845] mb-2">"Range is Hot"</h4>
                    <p className="text-gray-700 text-sm">Shooting is allowed. You may handle firearms and shoot targets.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1B2845] mb-2">"Range is Cold"</h4>
                    <p className="text-gray-700 text-sm">No shooting allowed. All firearms must be unloaded and actions open.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1B2845] mb-2">"Cease Fire"</h4>
                    <p className="text-gray-700 text-sm">Stop shooting immediately. Keep firearm pointed downrange and step back.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1B2845] mb-2">"All Clear"</h4>
                    <p className="text-gray-700 text-sm">Safe to go downrange to check or change targets.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1B2845] mb-4">Basic Etiquette</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Always follow RSO instructions immediately</li>
                  <li>• Keep firearms pointed downrange at all times</li>
                  <li>• Don't handle firearms when others are downrange</li>
                  <li>• Clean up your brass (spent shell casings) when finished</li>
                  <li>• Be respectful of other shooters' space and concentration</li>
                  <li>• Ask before touching someone else's equipment</li>
                  <li>• Keep conversations at a reasonable volume</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1B2845] mb-4">Common Beginner Mistakes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Sweeping:</strong> Accidentally pointing a firearm at someone (even unloaded)</li>
                  <li>• <strong>Finger on trigger:</strong> Resting finger on trigger when not ready to shoot</li>
                  <li>• <strong>Improper stance:</strong> Not maintaining proper shooting position</li>
                  <li>• <strong>Overconfidence:</strong> Trying advanced techniques before mastering basics</li>
                  <li>• <strong>Not asking questions:</strong> Hesitating to ask for help when unsure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Essential Gear Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Essential Gear for Florida Shooting Ranges</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Eye Protection</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Safety from brass, ricochets, and debris. Essential for all shooting activities.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>What to get:</strong> Impact-rated (ANSI Z87.1), clear or yellow-tinted, side shields for better protection.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">Browse our selection of shooting glasses and eye protection</Link>.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Ear Protection</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Permanent hearing damage prevention. Florida's outdoor ranges can be especially loud.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Options:</strong> Foam plugs (budget), passive earmuffs (comfortable), electronic earmuffs (best for communication).
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">View ear protection options</Link>.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Range Bag</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Organization, transport convenience, and protection from Florida's humidity.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>What to look for:</strong> Durable construction, multiple compartments, easy to clean, handles heat/humidity well.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">Explore range bags and cases</Link>.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Proper Clothing</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Safety protection and comfort in Florida's climate conditions.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Florida considerations:</strong> Moisture-wicking fabrics, sun protection, long sleeves for brass protection.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline">Shop tactical apparel suitable for range use</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Do I need a permit to visit a shooting range in Florida?</h3>
                <p className="text-gray-700">
                  No permit is required to visit or shoot at a range in Florida. However, you must be at least 18 years old (or accompanied by a parent/guardian) and cannot be a convicted felon or have certain restraining orders.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Can I rent a gun if I've never shot before?</h3>
                <p className="text-gray-700">
                  Most indoor ranges like Shoot Straight offer gun rentals and welcome first-time shooters. They typically require you to shoot their ammunition and may provide a brief safety orientation. Some ranges require you to bring a shooting partner for safety.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">How much does it typically cost?</h3>
                <p className="text-gray-700">
                  Costs vary widely. Indoor ranges typically charge $20-30 per hour for lane rental, plus equipment rentals. Outdoor public ranges like Tenoroc charge as little as $5 per day. Private clubs may require annual memberships starting around $300.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">What's the difference between indoor and outdoor ranges?</h3>
                <p className="text-gray-700">
                  Indoor ranges offer climate control, consistent lighting, and protection from weather, but are typically limited to 25-50 yards. Outdoor ranges allow longer distances (up to 300+ yards) and more natural shooting conditions, but you're exposed to Florida's heat, humidity, and weather.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Which ranges are best for beginners?</h3>
                <p className="text-gray-700">
                  Shoot Straight Tampa is our top recommendation for beginners due to their patient staff, comprehensive safety briefings, and equipment rentals. They're specifically designed to welcome new shooters and make the experience comfortable and educational.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Can I bring my own ammunition?</h3>
                <p className="text-gray-700">
                  Most ranges allow you to bring your own ammunition, but some indoor ranges (especially those with gun rentals) may require you to use their ammunition for safety and liability reasons. Always call ahead to confirm their ammunition policy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Are ranges crowded?</h3>
                <p className="text-gray-700">
                  It depends on the day and time. Weekday mornings are typically quietest, while weekends and evenings tend to be busier. Holiday weekends and special events can be very crowded. Call ahead or check online for current availability.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">What if I make a mistake?</h3>
                <p className="text-gray-700">
                  Don't panic. Range Safety Officers are trained to handle mistakes safely. If you make a safety error, follow their instructions immediately. Most mistakes are common and easily corrected. The important thing is to learn from them and ask questions to prevent future issues.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2845] mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">Shooting Accessories</h3>
                <p className="text-gray-700 mb-4">Essential gear for your range visits, from safety equipment to range bags.</p>
                <Link href="/products/shooting-accessories" className="text-[#1B2845] hover:underline font-medium">
                  Browse Shooting Accessories →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#1B2845] mb-3">ITAR & EAR Guide</h3>
                <p className="text-gray-700 mb-4">Understanding export restrictions and regulations for tactical equipment.</p>
                <Link href="/logistics/itar-ear-restrictions" className="text-[#1B2845] hover:underline font-medium">
                  View ITAR Guide →
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-16">
            <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#1B2845] mb-4">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>K&T Textiles is NOT a Federal Firearms Licensee (FFL).</strong> We do not sell, ship, store, or handle firearms, ammunition, body armor, explosives, or ITAR-controlled items. We specialize in accessories, gear, and equipment only.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This guide is provided as a community resource to support safe and responsible shooting sports in Florida. All information is based on our experiences and is current as of October 2025. Range policies, hours, and pricing may change. Always call ahead to confirm details before visiting.
              </p>
              <h4 className="font-semibold text-[#1B2845] mb-2">About Our Reviews</h4>
              <p className="text-gray-700 leading-relaxed">
                Our review team visits facilities and tests products in real-world Florida conditions. We have backgrounds in military and law enforcement procurement and focus on quality, safety, and value. Reviews reflect our honest experiences and opinions.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
