import Head from 'next/head'
import Link from 'next/link'

export default function GamingRiskCompliance() {
  return (
    <>
      <Head>
        <title>Gaming Risk & Compliance - Involv | Regulatory Compliance for Australian Gaming Venues</title>
        <meta name="description" content="Navigate complex gaming regulations across all Australian jurisdictions. Expert compliance frameworks, risk management, and regulatory support for pubs and clubs." />
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
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gaming Risk & Compliance</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gaming Risk & Compliance Advisory
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform complex regulatory requirements into operational advantages. We help pubs and clubs navigate Australia&apos;s gaming compliance landscape with confidence and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Compliance Assessment
                </Link>
                <Link href="/insights" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Compliance Insights
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance Simplified</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your licence is a privilege, not a right. Our team ensures you understand responsibilities and have robust measures in place to maintain compliance across all jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Gaming Compliance Services</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From licence obligations to safer gambling frameworks, we provide end-to-end compliance support across all aspects of gaming regulation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceServices.map((service) => (
                <div key={service.title} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#22252a] transition-colors">
                  <div className="text-[#66899b] mb-4">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <svg className="w-3 h-3 text-[#66899b] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jurisdiction Coverage */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Australia-Wide Regulatory Expertise</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Deep understanding of gaming and liquor regulations across all Australian states and territories, ensuring compliance wherever you operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jurisdictions.map((jurisdiction) => (
              <div key={jurisdiction.state} className="bg-[#1a1d21] rounded-lg p-6 text-center hover:bg-[#22252a] transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-white">{jurisdiction.state}</h3>
                <div className="space-y-1">
                  {jurisdiction.regulators.map((regulator, idx) => (
                    <p key={idx} className="text-xs text-gray-400">{regulator}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Compliance Implementation Approach</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Proven methodology that transforms regulatory challenges into operational advantages for sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceProcess.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < complianceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 transform translate-x-4 -translate-y-1/2 z-0"></div>
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

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Venues Trust Our Compliance Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCompliance.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Compliance into Competitive Advantage</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every venue&apos;s compliance requirements are unique. Let&apos;s discuss how we can help you navigate your regulatory obligations while optimising your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                  Schedule A Compliance Consultation
                </Link>
                <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                  View All Services
                </Link>
              </div>
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
                  <li><Link href="/services/risk-compliance" className="text-[#66899b]">Risk & Compliance</Link></li>
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
const complianceServices = [
  {
    icon: "📋",
    title: "Regulatory Frameworks & Policies",
    description: "Comprehensive frameworks, policies and procedures tailored to your venue\'s specific gaming and liquor licence conditions.",
    features: [
      "Gaming licence compliance frameworks",
      "Liquor licence obligation mapping",
      "Safer gambling policy development",
      "Staff training and implementation support"
    ]
  },
  {
    icon: "🔍",
    title: "Independent Reviews & Audits",
    description: "Objective assessment of your compliance frameworks, identifying gaps and recommending improvements for sustained compliance.",
    features: [
      "Comprehensive compliance health checks",
      "Regulatory readiness assessments",
      "Gap analysis and remediation planning",
      "Ongoing compliance monitoring programs"
    ]
  },
  {
    icon: "⚖️",
    title: "Obligations Registers",
    description: "Central repository of all legal and regulatory obligations with clear ownership, controls, and compliance tracking.",
    features: [
      "Complete obligations mapping",
      "Responsibility assignment and tracking",
      "Compliance status monitoring",
      "Regular review and update processes"
    ]
  },
  {
    icon: "🛡️",
    title: "Risk Management Frameworks",
    description: "Robust risk identification, assessment and mitigation frameworks that protect your licence and reputation.",
    features: [
      "Gaming-specific risk assessments",
      "Control system design and implementation",
      "Risk monitoring and reporting",
      "Incident management procedures"
    ]
  },
  {
    icon: "🎯",
    title: "Safer Gambling Compliance",
    description: "Comprehensive safer gambling frameworks that protect vulnerable customers while maintaining commercial viability.",
    features: [
      "Responsible Service of Gambling (RSG) programs",
      "Customer intervention protocols",
      "Self-exclusion system implementation",
      "Harm minimisation strategy development"
    ]
  },
  {
    icon: "📞",
    title: "Regulatory Liaison & Support",
    description: "Expert representation and communication with gaming and liquor regulators across all Australian jurisdictions.",
    features: [
      "Regulator correspondence management",
      "Compliance inquiry response",
      "Breach remediation support",
      "Ongoing regulatory relationship management"
    ]
  }
]

const jurisdictions = [
  {
    state: "NSW",
    regulators: ["L&GNSW", "ILGA"]
  },
  {
    state: "VIC",
    regulators: ["VGCCC", "Liquor Control Victoria"]
  },
  {
    state: "QLD",
    regulators: ["OLGR"]
  },
  {
    state: "SA",
    regulators: ["CBS"]
  },
  {
    state: "WA",
    regulators: ["Department of Local Government", "Racing, Gaming & Liquor"]
  },
  {
    state: "TAS",
    regulators: ["Department of Treasury & Finance", "Liquor & Gaming"]
  },
  {
    state: "NT",
    regulators: ["Gambling & Racing", "Liquor Commission"]
  },
  {
    state: "ACT",
    regulators: ["Access Canberra", "Gambling & Racing Commission"]
  }
]

const complianceProcess = [
  {
    title: "Discovery",
    description: "Comprehensive review of your current compliance position, licence conditions, and regulatory obligations."
  },
  {
    title: "Framework Design",
    description: "Custom compliance framework design based on your specific operations, risks, and regulatory requirements."
  },
  {
    title: "Implementation", 
    description: "Hands-on implementation support with comprehensive training and change management processes."
  },
  {
    title: "Monitoring",
    description: "Ongoing compliance monitoring, regular reviews, and continuous improvement to maintain regulatory standards."
  }
]

const whyChooseCompliance = [
  {
    icon: "🏛️",
    title: "Regulatory Expertise",
    description: "Deep understanding of gaming and liquor regulations across all Australian jurisdictions with proven track record."
  },
  {
    icon: "🎰",
    title: "Industry Specialists",
    description: "Dedicated focus on pubs and clubs with comprehensive understanding of venue operations and customer flows."
  },
  {
    icon: "🔧",
    title: "Practical Solutions",
    description: "Commercial, sustainable compliance solutions that work in real venues with real operational constraints."
  },
  {
    icon: "🔄",
    title: "Ongoing Partnership",
    description: "Continued support as regulations evolve, ensuring sustained compliance and competitive advantage."
  },
  {
    icon: "💰",
    title: "Cost-Effective Approach",
    description: "Efficient, modular solutions that maximise compliance outcomes while minimising operational disruption."
  },
  {
    icon: "🎯",
    title: "Risk-Based Focus",
    description: "Targeted approach that prioritises highest-risk areas while ensuring comprehensive coverage of all obligations."
  }
]