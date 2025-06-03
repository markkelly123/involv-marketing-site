import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'

export default function OurTeam() {
    const router = useRouter()
  const [selectedFounder, setSelectedFounder] = useState(0)

  return (
    <>
      <Head>
        <title>Our Team - Meet the Industry Veterans Behind Involv</title>
        <meta name="description" content="Meet the Involv team - Tim Barnett, Louise Lane, Con Nikitas, and Mark Kelly. Industry veterans with 80+ years combined experience in gaming, compliance, and venue operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
{/* Favicon */}
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our Team</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Meet the Industry Veterans Behind Involv
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our founders are not typical consultants. They are venue operators, gaming regulatory legal experts, and compliance specialists who have solved these challenges at the highest levels.
            </p>
            <div className="bg-[#1a1d21] rounded-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#66899b]">80+</div>
                  <div className="text-gray-400 text-sm">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#66899b]">13K</div>
                  <div className="text-gray-400 text-sm">EGMs Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#66899b]">All</div>
                  <div className="text-gray-400 text-sm">AU Jurisdictions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#66899b]">100%</div>
                  <div className="text-gray-400 text-sm">Venue Focused</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section - Interactive Profiles */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founding Team</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Four industry veterans who brought together the exact expertise needed to solve venue challenges.
              </p>
            </div>

            {/* Founder Selection */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#1a1d21] rounded-xl p-2 inline-flex flex-wrap gap-2 shadow-2xl">
                {founders.map((founder, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFounder(index)}
                    className={`group px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${
                      selectedFounder === index
                        ? 'bg-[#66899b] text-white shadow-lg transform scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-[#22252a]'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      selectedFounder === index ? 'bg-white text-[#66899b]' : 'bg-[#66899b] text-white'
                    }`}>
                      {founder.initials}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{founder.name}</div>
                      <div className="text-sm opacity-75">{founder.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Founder Profile */}
            <div className="bg-[#1a1d21] rounded-2xl p-8 md:p-16 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center bg-[#66899b] bg-opacity-20 rounded-full px-4 py-2 mb-4">
                      <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center mr-3">
                        <span className="text-black font-bold text-sm">{founders[selectedFounder].initials}</span>
                      </div>
                      <span className="text-[#66899b] font-medium text-sm">{founders[selectedFounder].title}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {founders[selectedFounder].name}
                    </h3>
                    <p className="text-xl text-[#66899b] mb-6 font-medium">
                      {founders[selectedFounder].role}
                    </p>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    {founders[selectedFounder].bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Expertise</h4>
                    <div className="space-y-3">
                      {founders[selectedFounder].expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="bg-[#66899b] w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {founders[selectedFounder].linkedIn && (
                    <a 
                      href={founders[selectedFounder].linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#66899b] hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  )}
                </div>

                <div>
                  <div className="text-center mb-6">
                    <ProfileImage 
                      founder={founders[selectedFounder]}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold text-white mb-2">{founders[selectedFounder].speciality}</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-medium text-[#66899b] mb-3">Career Highlights</h5>
                      <div className="space-y-2">
                        {founders[selectedFounder].highlights.map((highlight, idx) => (
                          <div key={idx} className="text-sm text-gray-300">
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-[#66899b] mb-3">What They Bring to Involv</h5>
                      <p className="text-sm text-gray-300 italic">
                        {founders[selectedFounder].value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Expertise Overview */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Collective Expertise</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Together, our founding team covers every aspect of venue operations, compliance, and performance optimisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-[#1a1d21] rounded-lg p-6 text-center hover:bg-[#1f2328] transition-colors">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{area.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                <div className="text-xs text-[#66899b]">{area.teamMember}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Team Works */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why This Combination Works</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Most consultants specialise in one area. Our team combines all the expertise needed to solve venue challenges completely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teamAdvantages.map((advantage, index) => (
                <div key={index} className="bg-[#1a1d21] rounded-lg p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-[#66899b] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">{advantage.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board / Extended Team Teaser */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Backed by Industry Leaders</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our founding team is supported by advisors and specialists across the Australian gaming and compliance landscape.
            </p>
          </div>

          <div className="bg-[#1a1d21] rounded-lg p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {advisoryAreas.map((area, index) => (
                <div key={index}>
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Our extended network includes regulatory legal practitioners, venue operators, technology specialists, and compliance experts across Australia.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Industry Veterans?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference that comes from working with a team that has actually solved these challenges at the highest levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#121418] text-white py-12 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto" />
                </div>
                <p className="text-gray-400 text-sm">
                  Compliance made simple. Gaming made smarter. Built for Australian pubs and clubs.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/services/aml-advisory" className="hover:text-white">AML Advisory</Link></li>
                  <li><Link href="/services/risk-compliance" className="hover:text-white">Risk & Compliance</Link></li>
                  <li><Link href="/services/gaming-performance" className="hover:text-white">Gaming Performance</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://assure.involv.com.au" className="hover:text-white">Involv|Assure</a></li>
                  <li><a href="https://primeedge.involv.com.au" className="hover:text-white">Involv|PrimeEdge</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/insights" className="hover:text-white">Insights</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2025 Involv. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
                <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

// Profile Image Component with Error Handling
function ProfileImage({ founder, className }: { founder: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-[#66899b] flex items-center justify-center relative`}>
      <img 
        src={`/images/team/${founder.slug}.jpg`}
        alt={founder.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 bg-[#66899b] text-black text-4xl font-bold hidden items-center justify-center">
        {founder.initials}
      </div>
    </div>
  );
}

// Data
const founders = [
  {
    name: "Tim Barnett",
    slug: "tim-barnett",
    title: "Co-Founder",
    initials: "TB",
    role: "Hospitality & Gaming Leadership Expert",
    speciality: "Transformation & Leadership",
    bio: "Tim Barnett brings over two decades of leadership excellence in hospitality and gaming across Australia and international markets. His proven expertise in business transformation, regulatory navigation, and team leadership creates substantial value for organisations.\n\nTim excels at developing robust risk management frameworks and control systems that satisfy stringent compliance requirements. His passion for building sustainable gaming businesses is fundamentally supported by effective safer gaming practices.\n\nTim's deep understanding of regulatory obligations enables him to deliver strategic solutions that skilfully balance commercial objectives with safer gaming principles.",
    expertise: [
      "Business transformation and turnaround leadership",
      "Regulatory relationship management across jurisdictions",
      "Risk management framework development",
      "Team leadership and organisational development",
      "International hospitality and gaming operations"
    ],
    highlights: [
      "20+ years hospitality & gaming leadership",
      "International market experience",
      "Proven business transformation track record",
      "Expert in regulatory navigation"
    ],
    value: "Tim brings the strategic leadership and transformation expertise needed to help venues navigate complex change while building sustainable competitive advantages.",
    linkedIn: "https://www.linkedin.com/in/tim-barnett-52258126"
  },
  {
    name: "Louise Lane",
    slug: "louise-lane",
    title: "Co-Founder",
    initials: "LL",
    role: "Gaming Regulatory Legal Expert",
    speciality: "Compliance & Regulatory Law",
    bio: "Louise Lane brings decades of specialised governance, risk, and compliance expertise across multiple regulated industries including gaming, liquor, media, wagering, and sporting administration. Her extensive in-house experience informs her pragmatic approach to navigating evolving regulatory landscapes and meeting growing stakeholder expectations.\n\nLouise excels at developing tailored frameworks and sustainable compliance solutions that protect business interests while satisfying stringent obligations. With particular insight into Australia's changing AML laws and fluid gaming environment, she delivers strategic guidance that transforms regulatory challenges into operational advantages.\n\nHer deep understanding ensures clients understand that licenses remain privileges requiring diligent management.",
    expertise: [
      "Gaming and liquor regulatory compliance",
      "AML/CTF legal frameworks and implementation",
      "Governance and risk management systems",
      "Regulatory relationship management",
      "Multi-jurisdictional compliance strategies"
    ],
    highlights: [
      "Decades of regulatory legal expertise",
      "Multi-industry compliance experience",
      "AML/CTF legal specialisation",
      "Strategic regulatory guidance"
    ],
    value: "Louise provides the regulatory legal expertise that ensures compliance solutions are not just practical, but legally robust and defensible under scrutiny.",
    linkedIn: "https://www.linkedin.com/in/louise-l-56078b112"
  },
  {
    name: "Con Nikitas",
    slug: "con-nikitas",
    title: "Director",
    initials: "CN",
    role: "Gaming Operations Expert",
    speciality: "Gaming Performance & Operations",
    bio: "Con brings 30 years of unparalleled expertise to his Co-Founder and Director role at Involv, having established himself as a cornerstone figure in Australia's gaming industry. His distinguished career spans leadership positions with premier gaming and hospitality organisations, where he navigated regulatory frameworks while optimising venue operations.\n\nMost notably, Con managed gaming operations for ALH Group's nearly 13,000 EGMs across Australia, giving him unique insight into large-scale gaming management. His strategic vision, comprehensive industry knowledge, and ability to balance compliance with business growth make his counsel some of the most valuable in the industry.\n\nCon's proven track record in gaming asset management and operational excellence continues to drive innovation and sustainable success.",
    expertise: [
      "Large-scale gaming operations management",
      "EGM optimisation and floor management",
      "Gaming manufacturer relationships",
      "Performance analytics and reporting",
      "Regulatory compliance in gaming operations"
    ],
    highlights: [
      "30 years gaming industry experience",
      "Managed 13,000 EGMs at ALH Group",
      "Deep manufacturer relationships",
      "Proven operational excellence track record"
    ],
    value: "Con's unmatched operational experience provides the practical insights needed to optimise gaming performance while maintaining strict compliance standards.",
    linkedIn: "https://www.linkedin.com/in/con-nikitas-19200122"
  },
  {
    name: "Mark Kelly",
    slug: "mark-kelly",
    title: "Co-Founder",
    initials: "MK",
    role: "Transformation & Technology Expert",
    speciality: "Digital Innovation & Change",
    bio: "Mark is a seasoned executive with 30 years of experience driving transformational change across industries. For the past six years, he has specialised in compliance-led growth within casino, pub, and club gaming environments.\n\nMark's expertise encompasses gaming systems enhancement, rewards program development, and EGM optimisation that increases yield while maintaining regulatory compliance. His unique ability to blend product expertise with responsible gaming practices allows him to translate complex compliance requirements into commercially viable, guest-focused strategies.\n\nHis experience future-proofs venues in today's scrutinised gaming landscape, ensuring they can grow sustainably while meeting evolving regulatory expectations.",
    expertise: [
      "Digital transformation and systems integration",
      "Product development and innovation",
      "Gaming technology and optimisation",
      "Compliance-led growth strategies",
      "Change management and implementation"
    ],
    highlights: [
      "30 years transformational change experience",
      "6 years gaming operations and loyalty",
      "2 years gaming product and compliance specialisation",
      "Product and technology expertise",
      "Compliance-led growth strategies"
    ],
    value: "Mark brings the technology and innovation expertise needed to transform traditional compliance approaches into competitive advantages through smart systems and processes.",
    linkedIn: "https://linkedin.com/in/mpkelly"
  }
]

const expertiseAreas = [
  {
    icon: "🏢",
    title: "Gaming Operations",
    description: "Large-scale gaming management and optimisation from Australia's biggest operations.",
    teamMember: "Led by Con Nikitas"
  },
  {
    icon: "⚖️",
    title: "Regulatory Legal",
    description: "Gaming and AML compliance legal expertise across all Australian jurisdictions.",
    teamMember: "Led by Louise Lane"
  },
  {
    icon: "🚀",
    title: "Transformation",
    description: "Business transformation and leadership across hospitality and gaming sectors.",
    teamMember: "Led by Tim Barnett"
  },
  {
    icon: "💻",
    title: "Technology Innovation",
    description: "Digital transformation and technology solutions for venue operations.",
    teamMember: "Led by Mark Kelly"
  }
]

const teamAdvantages = [
  {
    icon: "🎯",
    title: "Complete Solution Coverage",
    description: "Other consultants specialise in one area. Our team covers gaming operations, regulatory compliance, business transformation, and technology innovation - everything venues need."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    description: "We have managed the largest gaming operations in Australia, navigated complex regulatory environments, and led successful business transformations at scale."
  },
  {
    icon: "🤝",
    title: "Industry Relationships",
    description: "Decades of experience means deep relationships with regulators, manufacturers, and industry bodies that benefit our clients."
  },
  {
    icon: "⚡",
    title: "Implementation Excellence",
    description: "We do not just advise - we implement. Our hands-on approach ensures solutions work in real venue operations, not just on paper."
  }
]

const advisoryAreas = [
  {
    icon: "🏛️",
    title: "Regulatory Network",
    description: "Former gaming regulators and compliance specialists across Australian jurisdictions."
  },
  {
    icon: "🎰",
    title: "Operations Experts",
    description: "Venue operators and gaming managers with hands-on experience across venue types."
  },
  {
    icon: "🔧",
    title: "Technology Specialists",
    description: "Gaming technology experts and system integrators who understand venue operations."
  }
]