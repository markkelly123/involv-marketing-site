import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Involv | Transform Compliance & Gaming Challenges into Competitive Advantages</title>
        <meta name="description" content="Expert advisory services solving the biggest challenges facing Australian pubs and clubs. AML compliance, gaming risk management, and performance optimisation from industry veterans." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Brand Strip */}
        <div className="w-full bg-[#0f1115] text-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-end gap-x-6">
            <a href="https://assure.involv.com.au">
              <img src="/logo-involve-assure-white.svg" alt="Assure" className="h-4 w-auto" />
            </a>
            <a href="https://primeedge.involv.com.au">
              <img src="/logo-involve-primeedge-white.svg" alt="PrimeEdge" className="h-4 w-auto" />
            </a>
            <a href="https://lane.involv.com.au">
              <img src="/logo-lane-white.svg" alt="Lane Consulting" className="h-4 w-auto" />
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="bg-[#0f1115] text-white border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
            <Link href="/" className="flex items-center">
              <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto" />
            </Link>
            <nav className="absolute left-1/2 transform -translate-x-1/2 text-sm flex space-x-6">
              <Link href="/services" className="text-[#66899b] font-medium">Services</Link>
              <Link href="/solutions" className="hover:text-[#66899b] transition-colors">Solutions</Link>
              <Link href="/insights" className="hover:text-[#66899b] transition-colors">Insights</Link>
            </nav>
            <div className="flex items-center text-sm">
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-[#66899b] transition-colors">About</Link>
                <Link href="/contact" className="hover:text-[#66899b] transition-colors">Contact</Link>
              </div>
              <Link href="/login" className="ml-[60px] text-sm font-medium bg-white text-black px-4 py-1.5 rounded hover:bg-gray-200 transition">
                Login
              </Link>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
        </div>

        {/* Hero Section - Problem-Focused */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expert Guidance for Your Compliance and Gaming Challenges
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Australian pubs and clubs face complex regulatory requirements and increasing performance pressures. We provide expert advisory services to help you navigate these challenges with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Expert Guidance
                </Link>
                <Link href="#services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4 text-[#66899b]">Industry Expertise</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">80+</div>
                    <div className="text-gray-400 text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">13K</div>
                    <div className="text-gray-400 text-sm">EGMs Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-sm">Venue Focus</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">All</div>
                    <div className="text-gray-400 text-sm">Australian Jurisdictions</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm text-center">
                Built by former ALH executives, gaming regulators, and compliance specialists who've solved these challenges at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Challenges Facing Today's Venues</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Regulatory requirements are getting more complex while performance expectations increase. These are the challenges we help venues navigate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <div key={challenge.title} className="bg-[#1a1d21] rounded-lg p-6">
                  <div className="text-red-500 mb-4">
                    <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{challenge.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{challenge.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{challenge.description}</p>
                  <ul className="space-y-1">
                    {challenge.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Solutions Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Three Expert Advisory Services That Solve Your Problems</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We've structured our services around the three biggest challenges facing venues today. Each service transforms a burden into a competitive advantage.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.title} className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-start mb-4">
                      <div className="bg-[#66899b] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                        <p className="text-[#66899b] font-medium text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.problemSolution}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <svg className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={service.link} 
                      className="inline-flex items-center bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium"
                    >
                      Solve This Challenge
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-[#0f1115] rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <h4 className="font-semibold text-white">{service.expertiseTitle}</h4>
                      </div>
                      <div className="space-y-3">
                        {service.expertise.map((point, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="text-[#66899b] mr-2 mt-1 font-bold">•</span>
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Proven Implementation Approach</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Every engagement follows our proven methodology, developed through decades of successful venue partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-700 transform translate-x-4 -translate-y-1/2 z-0"></div>
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-black">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Involv Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Venues Trust Involv</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're not just consultants — we're former venue operators, gaming regulators, and compliance specialists who understand your challenges from the inside.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">{reason.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Expert Guidance?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue faces different challenges. Let's discuss your specific situation and how our expertise can help you navigate your compliance and performance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule a Consultation
              </Link>
              <Link href="/insights" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Read Our Insights
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
                  <li><a href="https://assure.involv.com.au" className="hover:text-white">Involv Assure</a></li>
                  <li><a href="https://primeedge.involv.com.au" className="hover:text-white">Involv PrimeEdge</a></li>
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

// Data
const challenges = [
  {
    title: "AUSTRAC & AML Requirements",
    icon: "📋",
    description: "Understanding and implementing AML/CTF obligations can be complex and time-consuming.",
    problems: [
      "Understanding what AML/CTF program requirements mean for your venue",
      "Ensuring staff know their obligations and responsibilities",
      "Keeping up with regulatory changes and updates",
      "Maintaining proper documentation and procedures",
      "Preparing for potential regulatory reviews"
    ]
  },
  {
    title: "Gaming Compliance Obligations",
    icon: "⚖️",
    description: "Keeping up with gaming regulations across different jurisdictions while maintaining operations.",
    problems: [
      "Different regulatory requirements in each state and territory",
      "Understanding licence conditions and what they mean in practice",
      "Implementing safer gambling obligations effectively",
      "Staying current with regulatory changes",
      "Ensuring staff training meets current standards"
    ]
  },
  {
    title: "Gaming Performance Optimisation",
    icon: "📊",
    description: "Getting the best return from gaming operations while meeting compliance requirements.",
    problems: [
      "Gaming floors not performing to their potential",
      "Difficulty measuring ROI on gaming investments",
      "Balancing performance optimisation with compliance",
      "Understanding what drives gaming revenue",
      "Making informed decisions about gaming floor changes"
    ]
  }
]

const services = [
  {
    title: "AML Advisory",
    subtitle: "AUSTRAC Compliance Made Simple",
    icon: "🛡️",
    problemSolution: "Stop fearing AUSTRAC audits. We transform your complex AML obligations into clear, manageable processes that protect your licence and give you confidence. Our team includes former AUSTRAC professionals who understand both regulatory expectations and practical venue operations.",
    outcomes: [
      "AUSTRAC-ready programs that pass scrutiny",
      "Staff who understand their AML responsibilities",
      "Automated compliance monitoring and reporting",
      "Reduced audit stress and regulatory risk",
      "Clear escalation processes and incident management"
    ],
    expertiseTitle: "AUSTRAC Expertise",
    expertise: [
      "Former AUSTRAC professionals on our team",
      "Hundreds of successful AML implementations",
      "Deep understanding of gaming venue operations",
      "Proven track record with regulatory audits"
    ],
    link: "/services/aml-advisory"
  },
  {
    title: "Gaming Risk & Compliance",
    subtitle: "Regulatory Complexity Simplified",
    icon: "⚖️",
    problemSolution: "Turn regulatory complexity into competitive advantage. We simplify licence obligations across all Australian jurisdictions so you can focus on running your venue. Our frameworks ensure you're always audit-ready while supporting sustainable growth.",
    outcomes: [
      "Clear obligations mapping and tracking",
      "Robust safer gambling frameworks that work",
      "Confident regulatory relationship management",
      "Sustainable compliance supporting business growth",
      "Reduced regulatory risk and penalty exposure"
    ],
    expertiseTitle: "Regulatory Expertise",
    expertise: [
      "Former gaming regulators and venue operators",
      "Expertise across all Australian jurisdictions",
      "Deep understanding of licence conditions",
      "Proven compliance frameworks and processes"
    ],
    link: "/services/risk-compliance"
  },
  {
    title: "Gaming Performance Advisory",
    subtitle: "Revenue Optimisation Through Expertise",
    icon: "📈",
    problemSolution: "Unlock your gaming revenue potential with data-driven insights from Australia's most experienced gaming professionals. Led by Con Nikitas, who managed nearly 13,000 EGMs at ALH Group, we turn guesswork into strategic advantage.",
    outcomes: [
      "Strategic gaming floor optimisation",
      "Data-backed machine placement decisions",
      "Improved player engagement and retention",
      "Measurable revenue uplift and ROI",
      "Competitive advantage through expert insights"
    ],
    expertiseTitle: "Gaming Operations Expertise",
    expertise: [
      "30+ years managing Australia's largest gaming operations",
      "Deep relationships with all major manufacturers",
      "Proven track record optimising 13,000+ EGMs",
      "Data-driven methodologies and insights"
    ],
    link: "/services/gaming-performance"
  }
]

const whyChooseUs = [
  {
    icon: "80+",
    title: "Years of Experience",
    description: "Collective expertise from ALH executives, gaming regulators, and compliance specialists."
  },
  {
    icon: "🎯",
    title: "Venue-Focused",
    description: "Built exclusively for Australian pubs and clubs — we understand your unique challenges."
  },
  {
    icon: "📈",
    title: "Proven Results",
    description: "Track record of helping venues achieve compliance while improving performance."
  },
  {
    icon: "🤝",
    title: "Partnership Approach",
    description: "We work alongside your team, not above it. Your success is our success."
  }
]

const process = [
  {
    title: "Understand",
    description: "Deep dive into your specific challenges, obligations, and operational realities."
  },
  {
    title: "Design", 
    description: "Create tailored solutions that address your problems while supporting business goals."
  },
  {
    title: "Implement",
    description: "Hands-on support implementing solutions with minimal disruption to operations."
  },
  {
    title: "Sustain",
    description: "Ongoing partnership ensuring long-term success and continuous improvement."
  }
]