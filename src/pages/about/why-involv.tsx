import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Award, Wrench, TrendingUp, BicepsFlexed, Target, CheckCircle, Rocket, Shield, BarChart3, Handshake } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function WhyInvolv() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Head>
        <title>Why Involv - Industry Veterans Who Deliver Results That Matter</title>
        <meta name="description" content="Discover why Australian pubs and clubs choose Involv for compliance and gaming advisory. Real venue experience, practical solutions, and proven results from industry veterans." />
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
            <span className="text-white">Why Involv</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Why Australian Venues Choose Involv
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're not another consulting firm promising the world. We're venue operators, gaming regulatory legal experts, and compliance specialists who've actually solved these challenges at scale.
            </p>
          </div>
        </section>

        {/* Main Value Proposition - 3-Pane Approach */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Reasons Venues Trust Us</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                When compliance and performance matter, venue leaders choose partners who understand their reality.
              </p>
            </div>

            {/* Enhanced Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#1a1d21] rounded-xl p-2 inline-flex flex-col md:flex-row shadow-2xl">
                {valueProps.map((prop, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`group px-8 py-4 rounded-lg font-medium transition-all duration-300 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 min-w-[200px] ${
                      activeIndex === index
                        ? 'bg-[#66899b] text-white shadow-lg transform scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-[#22252a]'
                    }`}
                  >
                    <div className="text-2xl">
                      {prop.iconComponent}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="font-semibold text-sm">{prop.tabLabel}</div>
                      <div className="text-xs opacity-75">{prop.tabSubtext}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="relative">
              <div className="bg-[#1a1d21] rounded-2xl p-8 md:p-16 min-h-[500px] shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="mb-6">
                      <div className="inline-flex items-center bg-[#66899b] bg-opacity-20 rounded-full px-4 py-2 mb-4">
                        <div className="text-2xl mr-3 text-[#66899b]">
                          {valueProps[activeIndex].iconComponent}
                        </div>
                        <span className="text-[#66899b] font-medium text-sm">{valueProps[activeIndex].category}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                        {valueProps[activeIndex].title}
                      </h3>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {valueProps[activeIndex].description}
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {valueProps[activeIndex].points.map((point, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="bg-[#66899b] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-300">{point}</p>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={valueProps[activeIndex].ctaLink}
                      className="inline-flex items-center bg-[#66899b] text-white px-8 py-4 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-lg"
                    >
                      {valueProps[activeIndex].ctaText}
                      <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="bg-[#0f1115] rounded-2xl p-8 border border-gray-700">
                      <div className="text-center mb-6">
                        <div className="bg-[#66899b] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="text-4xl text-black">
                            {valueProps[activeIndex].statsIconComponent}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{valueProps[activeIndex].statsTitle}</h4>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        {valueProps[activeIndex].stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-[#66899b] mb-1">{stat.number}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <p className="text-gray-300 text-sm italic">
                          {valueProps[activeIndex].credibilityStatement}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {valueProps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-[#66899b] transform scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Involv vs. Generic Consultants</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See why venue leaders choose industry veterans over consulting firms that were not founded specifically to serve the Australia pub and club gaming industry.
            </p>
          </div>

          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-6">Typical Consultants</h3>
                <div className="space-y-4">
                  {typicalConsultants.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-red-400">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-[#66899b] bg-opacity-10 text-center">
                <h3 className="text-lg font-semibold text-[#66899b] mb-6">Involv Approach</h3>
                <div className="space-y-4">
                  {involvApproach.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-[#66899b]">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-white mb-6">The Result</h3>
                <div className="space-y-4">
                  {results.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-green-400">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Outcomes */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Achieve</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Real outcomes from venues that chose industry veterans over generic consultants.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl text-black">
                      {outcome.iconComponent}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{outcome.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Industry Veterans?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join the venues that chose expertise over generic consulting. Experience the difference industry veterans make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule a Consultation
              </Link>
              <Link href="/about/our-team" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Meet Our Team
              </Link>
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
const valueProps = [
  {
    tabLabel: "Industry Expertise",
    tabSubtext: "Real Experience",
    iconComponent: <Award className="w-6 h-6" />,
    category: "Deep Venue Knowledge",
    title: "We've Actually Run Australia's Largest Gaming Operations",
    description: "While other consultants read about venues in textbooks, our team has managed 13,000 EGMs across Australia's largest hotel group. We understand the reality of venue operations because we've lived it.",
    points: [
      "Con Nikitas led gaming operations for ALH Group's nearly 13,000 EGMs",
      "Regulatory legal expertise from gaming compliance specialists",
      "Deep relationships with manufacturers, regulators, and industry bodies",
      "Proven track record with Australia's largest venue groups"
    ],
    statsIconComponent: <BicepsFlexed className="w-8 h-8" />,
    statsTitle: "Proven Track Record",
    stats: [
      { number: "13K", label: "EGMs Managed" },
      { number: "80+", label: "Years Experience" },
      { number: "All", label: "AU Jurisdictions" },
      { number: "100%", label: "Venue Focused" }
    ],
    credibilityStatement: "The only consulting team in Australia with this level of hands-on gaming operations experience.",
    ctaText: "Explore Our Team",
    ctaLink: "/about/our-team"
  },
  {
    tabLabel: "Practical Solutions",
    tabSubtext: "Real Implementation",
    iconComponent: <Wrench className="w-6 h-6" />,
    category: "Implementation Excellence",
    title: "Solutions That Actually Work in Your Day-to-Day Operations",
    description: "We don't write policies and disappear. Our frameworks are designed by operators who understand the pressures of running a venue. Every solution is tested in real-world conditions.",
    points: [
      "Frameworks built by venue operators, not theoretical consultants",
      "Implementation support that ensures solutions stick",
      "Training programs tailored to actual venue operations",
      "Ongoing support as regulations evolve and businesses grow"
    ],
    statsIconComponent: <CheckCircle className="w-8 h-8" />,
    statsTitle: "Implementation Success",
    stats: [
      { number: "Zero", label: "Failed Audits" },
      { number: "100%", label: "Audit Ready" },
      { number: "24/7", label: "Support Available" },
      { number: "All", label: "Staff Trained" }
    ],
    credibilityStatement: "Every client remains audit-ready because our solutions work in practice, not just on paper.",
    ctaText: "See Our Approach",
    ctaLink: "/services"
  },
  {
    tabLabel: "Measurable Results",
    tabSubtext: "Proven ROI",
    iconComponent: <TrendingUp className="w-6 h-6" />,
    category: "Performance Excellence",
    title: "Transform Compliance Burdens into Competitive Advantages",
    description: "We don't just help you meet obligations - we turn regulatory requirements into strategic advantages. Our clients report improved efficiency and productivity, and stronger regulatory relationships (...we also reckon they're experiencing a lot less stress!).",
    points: [
      "Compliance frameworks that support business growth",
      "Gaming optimisation that delivers measurable revenue uplift",
      "Reduced regulatory risk and penalty exposure",
      "Enhanced staff confidence and operational efficiency"
    ],
    statsIconComponent: <Rocket className="w-8 h-8" />,
    statsTitle: "Client Outcomes",
    stats: [
      { number: "0%", label: "Penalty Rate" },
      { number: "100%", label: "Growth Enabled" },
      { number: "Always", label: "Audit Ready" },
      { number: "Ongoing", label: "Partnership" }
    ],
    credibilityStatement: "Our clients don't just survive compliance - they use it as a competitive advantage.",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
]

const typicalConsultants = [
  "Generic solutions adapted from other industries",
  "Policies written without operational understanding",
  "No ongoing support after implementation",
  "Limited real-world venue experience",
  "Cookie-cutter approaches that don't fit venues"
]

const involvApproach = [
  "Purpose-built solutions for Australian venues",
  "Frameworks designed by venue operators",
  "Hands-on implementation and ongoing support",
  "Deep gaming and compliance expertise",
  "Tailored solutions for each venue's reality"
]

const results = [
  "Audit-ready compliance that supports growth",
  "Improved gaming performance and revenue",
  "Confident staff and management teams",
  "Stronger regulatory relationships",
  "Sustainable competitive advantages"
]

const outcomes = [
  {
    iconComponent: <Shield className="w-8 h-8" />,
    title: "Compliance Confidence",
    description: "Venues achieve audit-ready status with frameworks that actually work in daily operations, reducing stress and regulatory risk."
  },
  {
    iconComponent: <BarChart3 className="w-8 h-8" />,
    title: "Performance Improvement",
    description: "Gaming floors optimised using data-driven insights deliver measurable revenue uplift and better customer experiences."
  },
  {
    iconComponent: <Handshake className="w-8 h-8" />,
    title: "Regulatory Partnership",
    description: "Stronger relationships with regulators built on consistent compliance and proactive communication."
  }
]