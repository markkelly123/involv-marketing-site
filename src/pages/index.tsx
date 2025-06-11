import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ShieldPlus, Shield, TrendingUp, Award, Zap, Brain, Scale, Wrench } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#1a1d21] rounded-lg p-1 inline-flex">
            {whyInvolvData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-sm ${
                  activeIndex === index
                    ? 'bg-[#66899b] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-[#22252a]'
                }`}
              >
                {index === 0 && 'Expertise'}
                {index === 1 && 'Approach'}
                {index === 2 && 'Technology'}
              </button>
            ))}
          </div>
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
                    {whyInvolvData[activeIndex].iconComponent}
                  </div>
                  <p className="text-gray-400 text-sm italic">
                    {whyInvolvData[activeIndex].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots - Still included but less prominent */}
          <div className="flex justify-center mt-6 space-x-2">
            {whyInvolvData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#66899b]' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ insights }: HomePageProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Involv - Compliance Made Simple. Gaming Made Smarter.</title>
        <meta name="description" content="Transform regulatory burdens into competitive advantages. Expert advisory and intelligent software for Australian pubs and clubs facing compliance and gaming performance challenges." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Replace the old brand strip + header with the new Navigation component */}
        <Navigation currentPath={router.pathname} />

        {/* Hero Section - Problem-Focused */}
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Compliance Made Simple.<br></br>Gaming Made Smarter.<br></br>Built for Pubs and Clubs.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Need clearer guidance on regulatory requirements? Want to optimise gaming performance but not sure where to start? We help Australian pubs and clubs understand their obligations while improving their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Expert Guidance
                </Link>
                <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold mb-2">Common Questions We Help With</h3>
                </div>
                {venueProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#66899b] w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{problem}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700 text-center">
                  <p className="text-[#66899b] text-sm font-medium">Sound familiar? We can help you get clarity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Solution-Focused */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Help You Navigate Your Regulatory Requirements</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Three core advisory services designed to help you understand your obligations and optimise your gaming operations.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {serviceCards.map((service) => (
                <Link 
                  key={service.title} 
                  href={service.link}
                  className="group block bg-[#1a1d21] rounded-lg p-6 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-xl hover:shadow-[#66899b]/10 hover:border hover:border-[#66899b]/30 cursor-pointer"
                >
                  <div className="text-[#66899b] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      {service.iconComponent}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#66899b] transition-colors duration-300">{service.title}</h3>
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
                  <div className="flex items-center text-[#66899b] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Involv Carousel */}
        <WhyInvolvCarousel />

        {/* Solutions Section - Software as Support */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Purpose-Built Software That Actually Works in Venues</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our advisory expertise is enhanced by software solutions designed specifically for Australian pub and club operations. No generic tools — just systems that understand your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {solutionCards.map((solution) => (
              <a 
                key={solution.name} 
                href={solution.link}
                className="group block bg-[#1a1d21] rounded-lg p-8 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-xl hover:shadow-[#66899b]/10 hover:border hover:border-[#66899b]/30 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {/* Logo instead of text name */}
                    <img 
                      src={solution.logo} 
                      alt={solution.name}
                      className="h-6 w-auto mb-2 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <p className="text-[#66899b] italic text-sm">{solution.tagline}</p>
                  </div>
                  <div className="text-[#66899b] group-hover:scale-110 transition-transform duration-300">
                    {solution.iconComponent}
                  </div>
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
                <div className="flex items-center text-[#66899b] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore {solution.shortName}</span>
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Practical Guidance from Industry Experts?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue faces different requirements. Let us discuss your specific situation and how our expertise can help you understand your obligations while improving your operations.
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

        <Footer />
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
  "What are all our regulatory obligations across different jurisdictions?",
  "How do we know if we are meeting our AML/CTF requirements properly?",
  "Are our staff training and procedures up to current standards?",
  "How can we be confident we are audit-ready?",
  "Could our gaming floor be performing better with the right guidance?", 
  "How do we balance compliance requirements with operational efficiency?"
]

const serviceCards = [
  {
    title: 'AML Advisory',
    iconComponent: <Shield className="w-6 h-6" />,
    problemSolution: 'Get clear on your AML obligations. We help you understand AUSTRAC requirements and build programs that work in practice, giving you confidence you\'re meeting your obligations properly.',
    outcomes: [
      'Clear understanding of your AML/CTF obligations',
      'Staff who know their responsibilities',
      'Practical compliance monitoring',
      'Audit-ready documentation',
      'Peace of mind with regulatory requirements'
    ],
    link: '/services/aml-advisory',
  },
  {
    title: 'Gaming Risk & Compliance',
    iconComponent: <Scale className="w-6 h-6" />,
    problemSolution: 'Understand your regulatory obligations across all jurisdictions. We help you navigate licence requirements and build compliance frameworks that support your business operations.',
    outcomes: [
      'Clear understanding of licence obligations',
      'Practical safer gambling frameworks',
      'Confident regulatory relationships',
      'Compliance that supports business growth',
      'Reduced regulatory uncertainty'
    ],
    link: '/services/risk-compliance',
  },
  {
    title: 'Gaming Performance',
    iconComponent: <TrendingUp className="w-6 h-6" />,
    problemSolution: 'Optimise your gaming revenue with guidance from Australia\'s most experienced gaming professionals. Get data-driven insights that help you make informed decisions about your gaming floor.',
    outcomes: [
      'Expert gaming floor guidance',
      'Data-backed decision making',
      'Improved player engagement',
      'Better return on gaming investments',
      'Insights from industry experts'
    ],
    link: '/services/gaming-performance',
  },
]

const whyInvolvData = [
  {
    title: "Deep Industry Expertise",
    subtitle: "Built by venue operators, for venue operators",
    description: "Our team includes gaming specialists who\'ve managed Australia\'s largest operations. We don\'t just understand compliance — we know how high-performance venues actually run.",
    iconComponent: <Award className="w-16 h-16 text-white" />,
    points: [
      "80+ years combined gaming experience",
      "A regulatory lawyer and venue operators on our team",
      "Deep manufacturer relationships and industry connections",
      "Proven track record with Australia's largest venue groups"
    ]
  },
  {
    title: "Practical Advisory Approach",
    subtitle: "Solutions that work in the real world",
    description: "We don\'t write policies and walk away. Our hands-on approach ensures compliance frameworks actually work in your day-to-day operations, protecting your licence while supporting growth.",
    iconComponent: <Wrench className="w-16 h-16 text-white" />,
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
    description: "Involv Assure and PrimeEdge aren\'t generic tools adapted for gaming. They\'re purpose-built for Australian pub and club operations, delivering clear ROI without the complexity.",
    iconComponent: <Zap className="w-16 h-16 text-white" />,
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
    name: 'Involv|Assure',
    shortName: 'Assure',
    logo: '/logo-involv-assure-white.svg',
    tagline: 'A risk and compliance team in your browser.',
    iconComponent: <ShieldPlus className="w-8 h-8" />,
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
    name: 'Involv|PrimeEdge',
    shortName: 'PrimeEdge',
    logo: '/logo-involv-primeedge-white.svg',
    tagline: 'The science behind high-performance gaming venues.',
    iconComponent: <Brain className="w-8 h-8" />,
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