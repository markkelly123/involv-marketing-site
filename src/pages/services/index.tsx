import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'

export default function Services() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Services - Involv | Expert Guidance for Compliance & Gaming Requirements</title>
        <meta name="description" content="Expert advisory services helping Australian pubs and clubs understand their regulatory obligations. AML compliance, gaming risk management, and performance guidance from industry veterans." />
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
            <span className="text-white">Services</span>
          </nav>
        </div>

        {/* Hero Section - Problem-Focused */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expert Guidance for Your Compliance and Gaming Requirements
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Australian pubs and clubs navigate complex regulatory requirements and want to optimise their gaming operations. We provide expert advisory services to help you understand your obligations with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Expert Guidance
                </Link>
                <Link href="#services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore Our Services
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
                Built by former ALH executives, gaming regulatory legal experts, and compliance specialists who have solved these challenges at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement Section with Clickable Cards */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Questions We Help Venues Answer</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Understanding regulatory requirements can be complex. These are the questions we help venues answer every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <Link 
                  key={challenge.title} 
                  href={challenge.link}
                  className="group block bg-[#1a1d21] rounded-lg p-6 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-xl hover:shadow-[#66899b]/10 hover:border hover:border-[#66899b]/30 cursor-pointer"
                >
                  <div className="text-[#66899b] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{challenge.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#66899b] transition-colors duration-300">{challenge.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{challenge.description}</p>
                  <ul className="space-y-1">
                    {challenge.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <span className="text-[#66899b] mr-2 mt-1">•</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center mt-4 text-[#66899b] text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>Get guidance</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Solutions Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Three Expert Advisory Services That Provide Clear Guidance</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We've structured our services around the three most common areas where venues need expert guidance. Each service helps you understand your obligations while supporting your business operations.
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
                        <Link 
                          href={service.link}
                          className="hover:text-[#66899b] transition-colors duration-300"
                        >
                          <h3 className="text-2xl font-bold mb-2 text-white hover:text-[#66899b] transition-colors duration-300 cursor-pointer">{service.title}</h3>
                        </Link>
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
                      Get This Guidance
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
              <h2 className="text-3xl font-bold mb-4">Our Practical Implementation Approach</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Every engagement follows our proven methodology, developed through decades of successful venue partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 z-0"></div>
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
              We're not just consultants — we're former venue operators, gaming regulatory legal experts, and compliance specialists who understand your challenges from the inside.
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
              Every venue has different requirements. Let's discuss your specific situation and how our expertise can help you understand your obligations while improving your operations.
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

// Data - Updated with more supportive tone
const challenges = [
  {
    title: "AUSTRAC & AML Requirements",
    icon: "📋",
    description: "Understanding and implementing AML/CTF obligations properly for your venue.",
    problems: [
      "What do AML/CTF program requirements mean for our venue?",
      "How do we ensure staff understand their obligations?",
      "Are we keeping up with regulatory changes and updates?",
      "Is our documentation and procedures adequate?",
      "How do we prepare for potential regulatory reviews?"
    ],
    link: "/services/aml-advisory"
  },
  {
    title: "Gaming Compliance Obligations",
    icon: "⚖️",
    description: "Understanding gaming regulations across different jurisdictions while maintaining operations.",
    problems: [
      "What are our regulatory requirements in each state and territory?",
      "How do licence conditions apply to our day-to-day operations?",
      "Are we implementing safer gambling obligations effectively?",
      "How do we stay current with regulatory changes?",
      "Does our staff training meet current standards?"
    ],
    link: "/services/risk-compliance"
  },
  {
    title: "Gaming Performance Optimisation",
    icon: "📊",
    description: "Getting better returns from gaming operations while meeting compliance requirements.",
    problems: [
      "Could our gaming floor be performing better?",
      "How do we measure ROI on gaming investments?",
      "How do we balance performance optimisation with compliance?",
      "What actually drives gaming revenue?",
      "How do we make informed decisions about gaming floor changes?"
    ],
    link: "/services/gaming-performance"
  }
]

const services = [
  {
    title: "AML Advisory",
    subtitle: "AUSTRAC Compliance Made Clear",
    icon: "🛡️",
    problemSolution: "Get clear on your AML obligations. We help you understand AUSTRAC requirements and build programs that work in practice, giving you confidence you're meeting your obligations properly. Our team have hands-on experience working with AUSTRAC and understand both regulatory expectations and practical venue operations.",
    outcomes: [
      "Clear understanding of your AUSTRAC obligations",
      "Staff who understand their AML responsibilities",
      "Practical compliance monitoring and reporting",
      "Audit-ready documentation and processes",
      "Peace of mind with regulatory requirements"
    ],
    expertiseTitle: "AUSTRAC Expertise",
    expertise: [
      "AML legal professionals on our team",
      "Many successful AML implementations",
      "Deep understanding of gaming venue operations",
      "Proven track record with regulatory audits"
    ],
    link: "/services/aml-advisory"
  },
  {
    title: "Gaming Risk & Compliance",
    subtitle: "Regulatory Requirements Simplified",
    icon: "⚖️",
    problemSolution: "Understand your regulatory obligations across all Australian jurisdictions. We help you navigate licence requirements and build compliance frameworks that work in your venue while supporting your business operations.",
    outcomes: [
      "Clear understanding of your licence obligations",
      "Practical safer gambling frameworks that work",
      "Confident regulatory relationship management",
      "Compliance that supports business operations",
      "Reduced regulatory uncertainty"
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
    subtitle: "Revenue Optimisation Through Expert Guidance",
    icon: "📈",
    problemSolution: "Optimise your gaming revenue with guidance from Australia's most experienced gaming professionals. Led by Con Nikitas, who managed nearly 13,000 EGMs at ALH Group, we provide data-driven insights that help you make informed decisions.",
    outcomes: [
      "Expert gaming floor guidance and recommendations",
      "Data-backed machine placement decisions",
      "Improved player engagement and retention",
      "Better returns on gaming investments",
      "Insights from Australia's most experienced gaming professionals"
    ],
    expertiseTitle: "Gaming Operations Expertise",
    expertise: [
      "50+ years managing Australia's largest gaming operations",
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
    description: "Collective expertise from gaming operators, gaming regulatory legal, and compliance specialists."
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