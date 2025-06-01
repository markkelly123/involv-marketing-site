import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { getPosts, Post, buildImageUrl } from '../../lib/sanity'

interface HomePageProps {
  insights: Post[]
}

function InsightsSection({ insights }: { insights: Post[] }) {
  if (!insights || insights.length === 0) {
    return null // Section disappears if no posts
  }

  return (
    <section className="bg-[#121418] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay ahead with expert analysis on compliance, regulation, and gaming performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {insights.slice(0, 3).map((post) => (
            <article key={post._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors">
              {/* Article Image */}
              {post.mainImage?.asset?.url ? (
                <div className="aspect-video w-full bg-gray-700">
                  <img 
                    src={buildImageUrl(post.mainImage.asset.url, 400, 225, 75)} 
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] to-gray-700 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span key={category._id} className="bg-[#66899b] px-2 py-1 rounded text-xs font-medium text-white">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Title & Excerpt */}
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  <Link href={`/insights/${post.slug.current}`} className="hover:text-[#66899b] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                {post.excerpt && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                {/* Author & Date */}
                <div className="flex items-center text-xs text-gray-400">
                  <span>{post.author?.name || 'Involv Team'}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/insights" 
            className="inline-flex items-center bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium"
          >
            View All Insights
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyInvolvCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-[#121418] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Venues Choose Involv</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We understand the unique challenges facing Australian pubs and clubs today.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Content */}
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12 min-h-[300px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#66899b]">
                    {whyInvolvData[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {whyInvolvData[activeIndex].description}
                  </p>
                  <div className="space-y-2">
                    {whyInvolvData[activeIndex].points.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#66899b] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl">{whyInvolvData[activeIndex].icon}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic">
                    {whyInvolvData[activeIndex].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {whyInvolvData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#66899b]' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-advance (optional) */}
          <div className="hidden">
            {/* Could add auto-advance timer here if desired */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ insights }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Involv - Compliance Made Simple. Gaming Made Smarter.</title>
        <meta name="description" content="Transform regulatory burdens into competitive advantages. Expert advisory and intelligent software for Australian pubs and clubs facing compliance and gaming performance challenges." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Brand Strip with Assure, PrimeEdge, Lane Consulting */}
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

        {/* Main Header */}
        <header className="bg-[#0f1115] text-white border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo-involv-white.svg"
                alt="Involv"
                className="h-6 w-auto"
              />
            </Link>

            {/* Centered Nav Group */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 text-sm flex space-x-6">
              <Link href="/services" className="hover:text-[#66899b] transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="hover:text-[#66899b] transition-colors">
                Solutions
              </Link>
              <Link href="/insights" className="hover:text-[#66899b] transition-colors">
                Insights
              </Link>
            </nav>

            {/* Right-Aligned Section: About/Contact + Login */}
            <div className="flex items-center text-sm">
              {/* Grouped About + Contact */}
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-[#66899b] transition-colors">
                  About
                </Link>
                <Link href="/contact" className="hover:text-[#66899b] transition-colors">
                  Contact
                </Link>
              </div>

              {/* Separated Login Button */}
              <Link
                href="/login"
                className="ml-[60px] text-sm font-medium bg-white text-black px-4 py-1.5 rounded hover:bg-gray-200 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section - Problem-Focused */}
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Compliance Made Simple. Gaming Made Smarter. Built for Pubs and Clubs.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Regulatory requirements getting more complex? Want to optimise gaming performance but not sure where to start? We help Australian pubs and clubs stay compliant while improving their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Expert Guidance
                </Link>
                <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold mb-2">Common Venue Challenges</h3>
                </div>
                {venueProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{problem}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700 text-center">
                  <p className="text-[#66899b] text-sm font-medium">Sound familiar? We can help.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Solution-Focused */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Help You Navigate Your Biggest Challenges</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Three core advisory services designed to help you meet your compliance obligations while optimising your gaming operations.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {serviceCards.map((service) => (
                <div key={service.title} className="bg-[#1a1d21] hover:bg-[#22252a] rounded-lg p-6 transition-colors group">
                  <div className="text-[#66899b] mb-4">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.problemSolution}</p>
                  <ul className="space-y-1 mb-6">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <svg className="w-3 h-3 text-[#66899b] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="text-[#66899b] text-sm font-medium group-hover:text-white transition-colors">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Involv Carousel */}
        <WhyInvolvCarousel />

        {/* Solutions Section - Software as Support */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Software That Actually Works in Venues</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our advisory expertise is enhanced by purpose-built software solutions. No generic tools — just intelligent systems tailored specifically for Australian pub and club operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {solutionCards.map((solution) => (
              <div key={solution.name} className="bg-[#1a1d21] hover:bg-[#22252a] rounded-lg p-8 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{solution.name}</h3>
                    <p className="text-[#66899b] italic text-sm">{solution.tagline}</p>
                  </div>
                  <div className="text-3xl">{solution.icon}</div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{solution.problemFocus}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <svg className="w-3 h-3 text-[#66899b] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={solution.link} className="text-[#66899b] text-sm font-medium group-hover:text-white transition-colors">
                  Explore {solution.name} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Finally. Straight talking Guidance from Industry Doers</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue faces different challenges. Let&apos;s discuss your specific situation and how our expertise can help you stay compliant while improving your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule a Consultation
              </Link>
              <Link href="/about" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Learn About Our Team
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
                  <img 
                    src="/logo-involv-white.svg" 
                    alt="Involv" 
                    className="h-6 w-auto"
                  />
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch recent insights for the homepage
    const insights = await getPosts('involv', 3)
    
    return {
      props: {
        insights,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching insights for homepage:', error)
    return {
      props: {
        insights: [],
      },
      revalidate: 300,
    }
  }
}

// Data
const venueProblems = [
  "Keeping up with regulatory changes across different jurisdictions",
  "Gaming floors not performing as well as they could be", 
  "Understanding AML/CTF requirements and what they mean for daily operations",
  "Ensuring staff are properly trained and up to date with their obligations",
  "Making sure policies and procedures meet current standards",
  "Balancing compliance requirements with operational efficiency"
]

const serviceCards = [
  {
    title: 'AML Advisory',
    icon: '🛡️',
    problemSolution: 'Never fear an AUSTRAC audits. We transform complex AML obligations into clear, manageable processes that protect your licence and reputation.',
    outcomes: [
      'AUSTRAC-ready programs that pass scrutiny',
      'Staff who understand their AML responsibilities',
      'Automated compliance monitoring and reporting',
      'Reduced audit stress and regulatory risk'
    ],
    link: '/services/aml-advisory',
  },
  {
    title: 'Gaming Risk & Compliance',
    icon: '⚖️',
    problemSolution: 'Turn regulatory complexity into competitive advantage. We simplify licence obligations across all jurisdictions so you focus on running your venue.',
    outcomes: [
      'Clear obligations mapping and tracking',
      'Robust safer gambling frameworks',
      'Confident regulatory relationship management',
      'Sustainable compliance that supports growth'
    ],
    link: '/services/risk-compliance',
  },
  {
    title: 'Gaming Performance',
    icon: '📈',
    problemSolution: 'Unlock gaming revenue potential with data-driven insights from Australia&apos;s most experienced gaming professionals.',
    outcomes: [
      'Strategic gaming floor optimisation',
      'Data-backed machine placement decisions',
      'Improved player engagement and retention',
      'Measurable revenue uplift and ROI'
    ],
    link: '/services/gaming-performance',
  },
]

const whyInvolvData = [
  {
    title: "Deep Industry Expertise",
    subtitle: "Built by venue operators, for venue operators",
    description: "Our team includes gaming specialists who&apos;ve managed Australia&apos;s largest operations. We don&apos;t just understand compliance — we know how high-performance venues actually run.",
    icon: "🏆",
    points: [
      "80+ years combined gaming experience",
      "Former regulators and venue operators on our team",
      "Deep manufacturer relationships and industry connections",
      "Proven track record with Australia's largest venue groups"
    ]
  },
  {
    title: "Practical Advisory Approach",
    subtitle: "Solutions that work in the real world",
    description: "We don&apos;t write policies and walk away. Our hands-on approach ensures compliance frameworks actually work in your day-to-day operations, protecting your licence while supporting growth.",
    icon: "🔧",
    points: [
      "Implementation support, not just documentation",
      "Training programs that stick",
      "Ongoing support as regulations evolve",
      "Commercial solutions aligned to venue realities"
    ]
  },
  {
    title: "Technology That Works",
    subtitle: "Software designed for venues, not corporates",
    description: "Involv Assure and PrimeEdge aren&apos;t generic tools adapted for gaming. They&apos;re purpose-built for Australian pub and club operations, delivering clear ROI without the complexity.",
    icon: "⚡",
    points: [
      "Intuitive interfaces staff actually use",
      "Built specifically for Australian gaming venues",
      "Clear ROI tracking and performance metrics",
      "Seamless integration with venue operations"
    ]
  }
]

const solutionCards = [
  {
    name: 'Involv Assure',
    tagline: 'A risk and compliance team in your browser.',
    icon: '🛡️',
    problemFocus: 'Know ALL your obligations, get compliant. Assure transforms regulatory obligations into clear, trackable systems that keep you audit-ready without the administrative burden.',
    benefits: [
      'Centralised obligations tracking across all jurisdictions',
      'Automated compliance monitoring and alerts',
      'Audit trail documentation and reporting',
      'Staff training tracking and competency management'
    ],
    link: 'https://assure.involv.com.au',
  },
  {
    name: 'Involv PrimeEdge',
    tagline: 'The science behind high-performance gaming venues.',
    icon: '🎯',
    problemFocus: 'Remove guess work from your gaming floor optimisation decisions. PrimeEdge uses AI and industry data to recommend machine placements and floor changes that actually drive revenue.',
    benefits: [
      'Data-driven gaming floor optimisation recommendations',
      'Performance visualisation and trend analysis',
      'ROI tracking for all gaming investments',
      'Predictive analytics for revenue optimisation'
    ],
    link: 'https://primeedge.involv.com.au',
  },
]