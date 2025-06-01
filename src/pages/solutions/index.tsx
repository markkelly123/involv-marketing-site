import Head from 'next/head'
import Link from 'next/link'

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Solutions - Involv | Compliance & Gaming Software for Australian Venues</title>
        <meta name="description" content="Purpose-built software solutions that support our advisory services. Assure for compliance tracking and PrimeEdge for gaming performance insights - designed specifically for Australian pubs and clubs." />
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
              <Link href="/services" className="hover:text-[#66899b] transition-colors">Services</Link>
              <Link href="/solutions" className="text-[#66899b] font-medium">Solutions</Link>
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
            <span className="text-white">Solutions</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Software That Actually Works in Venues
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our advisory expertise is enhanced by purpose-built software solutions. No generic corporate tools that aren&apos;t fit-for-purpose. Just practical systems tailored specifically to meet the needs of Australian pubs and clubs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                See Live Demos
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                View Advisory Services
              </Link>
            </div>
          </div>
        </section>

        {/* Advisory First Approach */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advisory-First, Technology-Enhanced</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We&apos;re compliance and experienced gaming practitioners who&apos;ve bottled our knowledge to develop software we know the industry needs. Our tools support our advisory work, not the other way around.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Expert Advisory</h3>
                <p className="text-gray-300 text-sm">Our team provides expert guidance on compliance and gaming performance challenges.</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#66899b] text-4xl mb-4">+</div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Smart Technology</h3>
                <p className="text-gray-300 text-sm">Purpose-built software tools that make compliance tracking and gaming insights practical and actionable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Solutions */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Two Solutions, Countless Benefits</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Each solution addresses specific venue challenges while working together to give you complete visibility and control.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={solution.name} className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <a href={solution.link} className="hover:opacity-80 transition-opacity">
                        <img src={solution.logo} alt={solution.name} className="h-8 w-auto mr-4" />
                      </a>
                      <div>
                        <a href={solution.link} className="hover:text-[#66899b] transition-colors">
                          <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                        </a>
                        <a href={solution.link} className="hover:opacity-80 transition-opacity">
                          <p className="text-[#66899b] italic">{solution.tagline}</p>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{solution.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">What This Means For You:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <svg className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={solution.link} 
                        className="bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center"
                      >
                        Explore {solution.name}
                      </a>
                      <a 
                        href={solution.loginLink} 
                        className="border border-[#66899b] text-[#66899b] px-6 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center"
                      >
                        Try {solution.name}
                      </a>
                      <a 
                        href={solution.link} 
                        className="text-[#66899b] hover:text-white transition-colors font-medium text-center py-3"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-[#0f1115] rounded-lg p-6">
                      <div className="text-center mb-6">
                        <h4 className="font-semibold text-white mb-2">{solution.useCase.title}</h4>
                        <p className="text-gray-400 text-sm">{solution.useCase.subtitle}</p>
                      </div>
                      <div className="space-y-4">
                        {solution.useCase.examples.map((example, idx) => (
                          <div key={idx} className="bg-[#1a1d21] rounded p-4">
                            <div className="flex items-start">
                              <span className="text-[#66899b] mr-2 mt-1 text-sm">•</span>
                              <div>
                                <p className="text-white text-sm font-medium">{example.scenario}</p>
                                <p className="text-gray-400 text-xs mt-1">{example.result}</p>
                              </div>
                            </div>
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

        {/* Why Our Software is Different */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Our Software Will Benefit Your Venue Operation</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We&apos;ve built software that understands gaming venues because we&apos;ve operated them. No generic solutions adapted for gaming.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff) => (
                <div key={diff.title} className="text-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{diff.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{diff.title}</h3>
                  <p className="text-gray-300 text-sm">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Story */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Advisory + Technology = Better Results</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                When expert advisory services are combined with smart technology, venues get better outcomes than either approach alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {integrationBenefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div className="bg-[#66899b] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-black">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See How Our Solutions Work?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue has different needs. Let&apos;s show you how Assure and PrimeEdge can work for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule Live Demos
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Learn About Our Advisory Services
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
const solutions = [
  {
    name: "Involv Assure",
    tagline: "A risk and compliance team in your browser.",
    logo: "/logo-involve-assure-white.svg",
    description: "Stop wondering if you&apos;re meeting your compliance obligations. Assure tracks all your regulatory requirements in one place, shows you what needs to be done and when, and keeps you audit-ready without the administrative burden.",
    benefits: [
      "Know exactly what compliance requirements apply to your venue",
      "Track all deadlines, renewals, and obligations automatically",
      "Always ready for inspections with proper documentation",
      "Staff understand their responsibilities and know what to do",
      "Spend less time on compliance admin, more time running your venue"
    ],
    link: "https://assure.involv.com.au",
    loginLink: "https://assure.involv.com.au/login",
    useCase: {
      title: "Real Venue Scenarios",
      subtitle: "How Assure helps with everyday compliance",
      examples: [
        {
          scenario: "RSA training due for 3 staff members",
          result: "Automatic reminder sent 30 days before expiry"
        },
        {
          scenario: "Gaming machine compliance audit scheduled",
          result: "All required documentation ready in one place"
        },
        {
          scenario: "New AML regulation published",
          result: "Alert sent with explanation of what you need to do"
        }
      ]
    }
  },
  {
    name: "Involv PrimeEdge",
    tagline: "The science behind high-performance gaming venues.",
    logo: "/logo-involve-primeedge-white.svg",
    description: "Stop guessing about your gaming floor performance. PrimeEdge shows you exactly which machines are working, where they should be placed, and how to improve revenue through data-driven insights from gaming industry experts.",
    benefits: [
      "See which machines are performing and which aren&apos;t",
      "Get specific recommendations for machine placement",
      "Track the revenue impact of floor changes",
      "Make gaming decisions based on data, not guesswork",
      "Improve gaming revenue through expert insights"
    ],
    link: "https://primeedge.involv.com.au",
    loginLink: "https://primeedge.involv.com.au/login",
    useCase: {
      title: "Gaming Floor Insights",
      subtitle: "How PrimeEdge improves gaming performance",
      examples: [
        {
          scenario: "Machine A underperforming in current location",
          result: "Recommendation to move to high-traffic area"
        },
        {
          scenario: "New machine purchase decision needed",
          result: "Data shows which game types work best in your venue"
        },
        {
          scenario: "Floor layout change being considered",
          result: "Simulation shows expected revenue impact before making changes"
        }
      ]
    }
  }
]

const differentiators = [
  {
    title: "Built by Operators",
    icon: "🏗️",
    description: "Created by people who&apos;ve actually run gaming venues, not generic software developers."
  },
  {
    title: "Australia-Specific",
    icon: "🇦🇺",
    description: "Designed for Australian regulations, gaming machine types, and venue operations."
  },
  {
    title: "Venue-Friendly",
    icon: "🎯",
    description: "Interfaces that busy venue staff can actually use without extensive training."
  },
  {
    title: "Expert Support",
    icon: "🤝",
    description: "Backed by our advisory team who understand both the software and your business."
  }
]

const integrationBenefits = [
  {
    title: "Expert Implementation",
    description: "Our advisory team helps you set up and configure the software to match your specific venue needs."
  },
  {
    title: "Ongoing Guidance",
    description: "Regular check-ins ensure you&apos;re getting the most value from both the software and our advisory support."
  },
  {
    title: "Continuous Improvement",
    description: "Software insights inform our advisory recommendations, creating a cycle of continuous improvement."
  }
]