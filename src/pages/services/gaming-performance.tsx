import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'

export default function GamingPerformance() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Gaming Performance Advisory - Involv | EGM Optimisation & Strategic Gaming Consulting</title>
        <meta name="description" content="Maximise gaming revenue with expert advisory from industry leaders. Strategic gaming plans, performance analysis, and operational excellence for Australian pubs and clubs." />
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
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gaming Performance</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gaming Performance Advisory
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Unlock your venue&apos;s gaming potential with strategic insights from Australia&apos;s most experienced gaming professionals. Maximise revenue, optimise operations, and stay ahead of market trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Performance Assessment
                </Link>
                <Link href="/solutions/primeedge" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore PrimeEdge
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry-Leading Expertise</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team includes Con Nikitas, with 30 years managing Australia&apos;s largest gaming operations. Deep manufacturer relationships and proven track record optimising nearly 13,000 EGMs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Gaming Performance Solutions</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From strategic planning to operational excellence, we help venues maximise gaming performance while maintaining compliance and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performanceServices.map((service) => (
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

        {/* Market Challenges */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Navigating Today&apos;s Gaming Challenges</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The gaming landscape is rapidly evolving. Stay ahead with strategic insights that address current market realities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketChallenges.map((challenge) => (
              <div key={challenge.title} className="bg-[#1a1d21] rounded-lg p-6 text-center hover:bg-[#22252a] transition-colors">
                <div className="text-3xl mb-4">{challenge.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{challenge.title}</h3>
                <p className="text-gray-300 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Performance Optimisation Process</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Data-driven methodology that delivers measurable improvements in gaming revenue and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceProcess.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < performanceProcess.length - 1 && (
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

        {/* Team Expertise */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Unmatched Industry Experience</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our gaming performance team brings decades of hands-on experience from Australia&apos;s largest gaming operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#66899b]">Con Nikitas - Director, Gaming Performance</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Con brings 30 years of unparalleled expertise to his Director role at Involv, having established himself as a cornerstone figure in Australia&apos;s gaming industry. His distinguished career spans leadership positions with premier gaming and hospitality organisations, where he navigated regulatory frameworks while optimising venue operations.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Con&apos;s strategic vision, comprehensive industry knowledge, and ability to balance compliance with business growth make his counsel some of the most valuable in the industry. His proven track record in gaming asset management and operational excellence continues to drive innovation and sustainable success.
                </p>
              </div>
              
              <div className="space-y-4">
                {teamHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#66899b] w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-black font-bold text-sm">{highlight.number}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{highlight.title}</h4>
                      <p className="text-gray-300 text-xs">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimise Your Gaming Performance?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every venue has unique opportunities for improvement. Let&apos;s discuss how our proven strategies can unlock your gaming floor&apos;s full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                  Schedule Performance Consultation
                </Link>
                <Link href="/solutions/primeedge" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                  Explore PrimeEdge Technology
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
                  <li><Link href="/services/risk-compliance" className="hover:text-white">Risk & Compliance</Link></li>
                  <li><Link href="/services/gaming-performance" className="text-[#66899b]">Gaming Performance</Link></li>
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
const performanceServices = [
  {
    icon: "📊",
    title: "Strategic Gaming Plans",
    description: "Comprehensive gaming strategies that balance revenue optimisation with compliance requirements and customer experience.",
    features: [
      "Long-term gaming floor strategy development",
      "Market analysis and competitive positioning",
      "Revenue forecasting and target setting",
      "Compliance-aligned growth planning"
    ]
  },
  {
    icon: "📈",
    title: "Performance Analytics & Reporting",
    description: "Data-driven insights that identify opportunities and track performance improvements across your gaming operations.",
    features: [
      "Gaming machine performance analysis",
      "Customer behaviour and trend analysis",
      "Revenue optimisation reporting",
      "Competitive benchmarking studies"
    ]
  },
  {
    icon: "🎯",
    title: "Gaming Floor Optimisation",
    description: "Strategic placement and configuration recommendations that maximise player engagement and revenue per machine.",
    features: [
      "Floor layout design and optimisation",
      "Machine placement strategies",
      "Traffic flow analysis and improvements",
      "Environmental factors assessment"
    ]
  },
  {
    icon: "🎰",
    title: "EGM Selection & Management",
    description: "Expert guidance on machine selection, deployment, and lifecycle management based on deep manufacturer relationships.",
    features: [
      "New machine evaluation and selection",
      "Portfolio balancing and mix optimisation",
      "Manufacturer relationship management",
      "Lifecycle planning and replacement strategies"
    ]
  },
  {
    icon: "🔄",
    title: "Operational Excellence",
    description: "Process improvements and operational strategies that enhance efficiency while maintaining regulatory compliance.",
    features: [
      "Gaming operations process review",
      "Staff training and development programs",
      "Customer service enhancement strategies",
      "Compliance-aligned operational procedures"
    ]
  },
  {
    icon: "🎲",
    title: "Innovation & Technology",
    description: "Guidance on emerging gaming technologies and innovations that can drive competitive advantage.",
    features: [
      "Cashless gaming implementation strategies",
      "New technology evaluation and adoption",
      "Digital engagement platform integration",
      "Future-proofing gaming operations"
    ]
  }
]

const marketChallenges = [
  {
    icon: "📉",
    title: "Economic Pressures",
    description: "Navigate macroeconomic conditions affecting customer spending and venue performance."
  },
  {
    icon: "👥",
    title: "Changing Preferences",
    description: "Adapt to evolving player preferences and demographic shifts in gaming behaviour."
  },
  {
    icon: "⚖️",
    title: "Regulatory Evolution",
    description: "Stay compliant with increasing regulatory scrutiny and evolving compliance requirements."
  },
  {
    icon: "🏪",
    title: "Competitive Pressure",
    description: "Maintain market position against growing competition and alternative entertainment options."
  }
]

const performanceProcess = [
  {
    title: "Analysis",
    description: "Comprehensive assessment of current gaming performance, market position, and improvement opportunities."
  },
  {
    title: "Strategy",
    description: "Development of customised gaming strategy aligned with venue goals, compliance requirements, and market conditions."
  },
  {
    title: "Implementation", 
    description: "Hands-on support implementing strategic recommendations with minimal operational disruption."
  },
  {
    title: "Optimisation",
    description: "Ongoing performance monitoring, fine-tuning, and continuous improvement to maximise results."
  }
]

const teamHighlights = [
  {
    number: "30",
    title: "Years Industry Experience",
    description: "Three decades leading gaming operations across Australia&apos;s largest venues"
  },
  {
    number: "13K",
    title: "EGMs Managed",
    description: "Proven track record optimising performance across nearly 13,000 electronic gaming machines"
  },
  {
    number: "100%",
    title: "Manufacturer Relationships",
    description: "Direct relationships with all major gaming manufacturers ensuring best access to products and insights"
  },
  {
    number: "1st",
    title: "Industry Recognition", 
    description: "Recognised as one of Australia&apos;s most experienced and respected gaming professionals"
  }
]