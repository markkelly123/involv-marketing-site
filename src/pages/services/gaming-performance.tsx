import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Gamepad2, 
  Cog, 
  Zap, 
  TrendingDown, 
  Users, 
  Scale, 
  Store 
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

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
                Unlock your venue's gaming potential with strategic insights from Australia's most experienced gaming professionals. Maximise revenue, optimise operations, and stay ahead of market trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get a Performance Assessment
                </Link>
                <a href="https://primeedge.involv.com.au" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore PrimeEdge
                </a>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry-Leading Expertise</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team includes Con Nikitas, with 30 years managing Australia's largest gaming operations. Deep manufacturer relationships and proven track record optimising nearly 13,000 EGMs.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceServices.map((service) => (
                <div key={service.title} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#22252a] transition-colors h-full flex flex-col">
                  <div className="text-[#66899b] mb-4">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-1 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <svg className="w-3 h-3 text-[#66899b] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-tight">{feature}</span>
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
            <h2 className="text-3xl font-bold mb-4">Navigating Today's Gaming Challenges</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The gaming landscape is rapidly evolving. Stay ahead with strategic insights that address current market realities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketChallenges.map((challenge) => (
              <div key={challenge.title} className="bg-[#1a1d21] rounded-lg p-6 text-center hover:bg-[#22252a] transition-colors h-full flex flex-col">
                <div className="text-[#66899b] mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                    {challenge.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white flex-grow">{challenge.title}</h3>
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
                <div key={step.title} className="text-center flex flex-col items-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                    <span className="text-xl font-bold text-black">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
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
                Our gaming performance team brings decades of hands-on experience from Australia's largest gaming operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#66899b]">Con Nikitas - Chief Commercial Officer</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Con brings 30 years of unparalleled expertise to his Director role at Involv, having established himself as a cornerstone figure in Australia's gaming industry. His distinguished career spans leadership positions with premier gaming and hospitality organisations, where he navigated regulatory frameworks while optimising venue operations.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Con's strategic vision, comprehensive industry knowledge, and ability to balance compliance with business growth make his counsel some of the most valuable in the industry. His proven track record in gaming asset management and operational excellence continues to drive innovation and sustainable success.
                </p>
              </div>
              
              <div className="space-y-4">
                {teamHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#66899b] w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
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

        {/* PrimeEdge Integration */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <a href="https://primeedge.involv.com.au" className="hover:opacity-80 transition-opacity">
                    <img src="/logo-involve-primeedge-white.svg" alt="Involv PrimeEdge" className="h-8 w-auto mr-4" />
                  </a>
                  <div>
                    <a href="https://primeedge.involv.com.au" className="hover:text-[#66899b] transition-colors">
                    </a>
                    <p className="text-[#66899b] italic">The science behind high-performance gaming venues</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  PrimeEdge combines our advisory expertise with cutting-edge AI to deliver data-driven EGM optimisation recommendations that maximise revenue while simplifying operations.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">PrimeEdge Capabilities:</h4>
                  <ul className="space-y-2">
                    {primeEdgeFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <svg className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://primeedge.involv.com.au" 
                    className="bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center"
                  >
                    Explore PrimeEdge Platform
                  </a>
                  <Link 
                    href="/contact" 
                    className="border border-[#66899b] text-[#66899b] px-6 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center"
                  >
                    Get a Performance Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-[#0f1115] rounded-lg p-6">
                <div className="text-center mb-6">
                  <h4 className="font-semibold text-white mb-2">Performance Impact</h4>
                  <p className="text-gray-400 text-sm">Measurable improvements from our optimisation approach</p>
                </div>
                
                <div className="space-y-4">
                  {performanceMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#1a1d21] rounded p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">{metric.category}</span>
                        <span className={`text-xs px-2 py-1 rounded ${metric.statusClass} font-medium`}>
                          {metric.improvement}
                        </span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${metric.progressClass}`} 
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">{metric.description}</p>
                    </div>
                  ))}
                </div>
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
                Every venue has unique opportunities for improvement. Let's discuss how our proven strategies can unlock your gaming floor's full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                  Schedule Performance Consultation
                </Link>
                <a href="https://primeedge.involv.com.au" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                  Explore PrimeEdge Technology
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

// Data
const performanceServices = [
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
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
    icon: <TrendingUp className="w-6 h-6 text-white" />,
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
    icon: <Target className="w-6 h-6 text-white" />,
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
    icon: <Gamepad2 className="w-6 h-6 text-white" />,
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
    icon: <Cog className="w-6 h-6 text-white" />,
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
    icon: <Zap className="w-6 h-6 text-white" />,
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
    icon: <TrendingDown className="w-6 h-6 text-white" />,
    title: "Economic Pressures",
    description: "Navigate macroeconomic conditions affecting customer spending and venue performance."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Changing Preferences",
    description: "Adapt to evolving player preferences and demographic shifts in gaming behaviour."
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: "Regulatory Evolution",
    description: "Stay compliant with increasing regulatory scrutiny and evolving compliance requirements."
  },
  {
    icon: <Store className="w-6 h-6 text-white" />,
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
    description: "Three decades leading gaming operations across Australia's largest venues"
  },
  {
    number: "13K",
    title: "EGMs Managed",
    description: "Proven track record optimising performance across nearly 13,000 electronic gaming machines"
  },
  {
    number: "All",
    title: "Manufacturer Relationships",
    description: "Direct relationships with all major gaming manufacturers ensuring best access to products and insights"
  },
  {
    number: "1st",
    title: "Industry Recognition", 
    description: "Recognised as one of Australia's most experienced and respected gaming professionals"
  }
]

const primeEdgeFeatures = [
  "AI-driven EGM performance analysis and recommendations",
  "Venue game floor mapping and visualisation tools",
  "Revenue uplift forecasting and impact measurement",
  "Automated recommendations for game changes and placements",
  "Integration with gaming management systems and data sources",
  "Real-time performance tracking and optimisation alerts"
]

const performanceMetrics = [
  {
    category: "Revenue per EGM",
    improvement: "+15%",
    progress: 85,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "Average improvement in revenue per machine through strategic optimisation"
  },
  {
    category: "Floor Utilisation",
    improvement: "+22%",
    progress: 92,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "Increased gaming floor efficiency through layout and placement optimisation"
  },
  {
    category: "Player Engagement",
    improvement: "+18%",
    progress: 78,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "Enhanced player experience and session duration through strategic improvements"
  },
  {
    category: "Operational Efficiency",
    improvement: "+25%",
    progress: 95,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "Streamlined operations and reduced costs through process optimisation"
  }
]