import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ShieldPlus, Shield, TrendingUp, Award, Zap, Brain, Scale, Wrench, CheckCircle, ChevronDown, ChevronUp, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getPosts, Post, buildImageUrl } from '../../lib/sanity'

interface HomePageProps {
  insights: Post[]
}

function InsightsSection({ insights }: { insights: Post[] }) {
  if (!insights || insights.length === 0) {
    return null
  }

  return (
    <section className="bg-[#121418] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Latest Industry Insights</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert analysis on compliance, regulation, and gaming performance from Australia's leading industry professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.slice(0, 3).map((post) => (
            <article key={post._id} className="bg-[#1a1d21] rounded-xl overflow-hidden border border-gray-700 hover:border-[#66899b] transition-all duration-300 hover:transform hover:scale-105">
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
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {post.categories.slice(0, 2).map((category) => (
                      <span key={category._id} className="bg-[#66899b] px-3 py-1 rounded-full text-xs font-semibold text-white">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2 leading-tight">
                  <Link href={`/insights/${post.slug.current}`} className="hover:text-[#66899b] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                {post.excerpt && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center text-xs text-gray-400 pt-4 border-t border-gray-700">
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
        
        <div className="text-center">
          <Link 
            href="/insights" 
            className="inline-flex items-center bg-[#66899b] text-white px-8 py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-semibold hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Insights
            <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20">
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
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % whyInvolvData.length)
    }, 5000) // Advance every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section className="bg-[#121418] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Australian Venues Trust Involv</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges facing Australian pubs and clubs in today's complex regulatory environment.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            {whyInvolvData.map((_, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPlaying(false)
                    setTimeout(() => setIsPlaying(true), 2000) // Resume after 2 seconds
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#66899b] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#66899b] animate-ping opacity-75"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1a1d21] rounded-xl p-2 inline-flex shadow-lg">
            {whyInvolvData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setIsPlaying(false)
                  setTimeout(() => setIsPlaying(true), 2000)
                }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  activeIndex === index
                    ? 'bg-[#66899b] text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-[#22252a]'
                }`}
              >
                {index === 0 && 'Industry Expertise'}
                {index === 1 && 'Practical Approach'}
                {index === 2 && 'Purpose-Built Technology'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#1a1d21] rounded-2xl p-8 md:p-16 min-h-[400px] flex items-center shadow-2xl">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#66899b]">
                    {whyInvolvData[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {whyInvolvData[activeIndex].description}
                  </p>
                  <div className="space-y-4">
                    {whyInvolvData[activeIndex].points.map((point, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle className="w-6 h-6 text-[#66899b] mt-0.5 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-300 text-base leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#66899b] to-[#4a6b7a] w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <div className="transform transition-transform duration-500 hover:scale-110">
                      {whyInvolvData[activeIndex].iconComponent}
                    </div>
                  </div>
                  <p className="text-gray-400 text-base italic font-medium">
                    {whyInvolvData[activeIndex].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pause/Play Control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

function SuccessStoriesSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Real Results from Real Venues</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            See how Australian pubs and clubs have transformed their operations with Involv's expert guidance and purpose-built solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Success Story 1 - Compliance */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              {/* IMAGE REQUIRED HERE: Photo of a typical pub exterior or interior */}
              <div className="w-full h-48 bg-gradient-to-br from-[#66899b] to-gray-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-medium">IMAGE REQUIRED HERE: Pub/Club Photo</span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "Involv helped us understand our AML obligations completely. We went from constant worry about compliance to having a clear, manageable system that actually works."
            </blockquote>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Metro Hotel Group</h4>
                  <p className="text-gray-600 text-sm">15 venues across NSW</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#66899b]">100%</div>
                  <p className="text-sm text-gray-600">Audit compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 2 - Performance */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              {/* IMAGE REQUIRED HERE: Photo of gaming floor or club interior */}
              <div className="w-full h-48 bg-gradient-to-br from-[#66899b] to-gray-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-medium">IMAGE REQUIRED HERE: Gaming Floor Photo</span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "Con's gaming expertise transformed our floor performance. The data-driven recommendations delivered results we could see immediately."
            </blockquote>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Riverside Sports Club</h4>
                  <p className="text-gray-600 text-sm">Queensland</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#66899b]">23%</div>
                  <p className="text-sm text-gray-600">Revenue increase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 3 - Comprehensive */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              {/* IMAGE REQUIRED HERE: Photo of modern club or hospitality venue */}
              <div className="w-full h-48 bg-gradient-to-br from-[#66899b] to-gray-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-medium">IMAGE REQUIRED HERE: Modern Venue Photo</span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "Working with Involv gave us confidence across all our operations - from compliance to gaming performance. True industry experts."
            </blockquote>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">City Workers Club</h4>
                  <p className="text-gray-600 text-sm">Victoria</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#66899b]">6 months</div>
                  <p className="text-sm text-gray-600">To full compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center bg-[#66899b] text-white px-8 py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-semibold hover:transform hover:scale-105 shadow-lg"
          >
            Get Your Success Story
            <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Clear answers to common questions about compliance, gaming performance, and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#66899b]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center border-2 border-[#66899b] text-[#66899b] px-8 py-3 rounded-xl hover:bg-[#66899b] hover:text-white transition-all duration-300 font-semibold"
          >
            Get in Touch
          </Link>
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Enhanced Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Compliance Made Simple.<br />Gaming Made Smarter.<br />
                <span className="text-[#66899b]">Built for Pubs and Clubs.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Need clearer guidance on regulatory requirements? Want to optimise gaming performance but not sure where to start? We help Australian pubs and clubs understand their obligations while improving their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="bg-[#66899b] text-white px-10 py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-semibold text-center hover:transform hover:scale-105 shadow-lg">
                  Get Expert Guidance
                </Link>
                <Link href="/services" className="border-2 border-[#66899b] text-[#66899b] px-10 py-4 rounded-xl hover:bg-[#66899b] hover:text-white transition-all duration-300 font-semibold text-center">
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-2xl p-10 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center pb-6 border-b border-gray-700">
                  <h3 className="text-xl font-bold mb-3">Common Questions We Help With</h3>
                  <p className="text-gray-400 text-sm">Sound familiar? We can help you get clarity.</p>
                </div>
                {venueProblems.map((problem, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-[#66899b] w-3 h-3 rounded-full mt-2 mr-5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-gray-300 leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="bg-[#121418] py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6">How We Help You Navigate Complex Regulations</h2>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
                Three core advisory services designed to help you understand your obligations and optimise your gaming operations with confidence.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {serviceCards.map((service) => (
                <Link 
                  key={service.title} 
                  href={service.link}
                  className="group block bg-[#1a1d21] rounded-2xl p-8 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-2xl hover:shadow-[#66899b]/20 hover:border hover:border-[#66899b]/30 cursor-pointer hover:transform hover:scale-105"
                >
                  <div className="text-[#66899b] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-[#66899b] bg-opacity-20 rounded-2xl flex items-center justify-center">
                      {service.iconComponent}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66899b] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">{service.problemSolution}</p>
                  <ul className="space-y-3 mb-8">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-[#66899b] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Involv Carousel */}
        <WhyInvolvCarousel />

        {/* Success Stories Section - Light Background */}
        <SuccessStoriesSection />

        {/* Enhanced Solutions Section */}
        <section className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Purpose-Built Software That Actually Works in Venues</h2>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Our advisory expertise is enhanced by software solutions designed specifically for Australian pub and club operations. No generic tools — just systems that understand your business.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {solutionCards.map((solution) => (
              <a 
                key={solution.name} 
                href={solution.link}
                className="group block bg-[#1a1d21] rounded-2xl p-10 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-2xl hover:shadow-[#66899b]/20 hover:border hover:border-[#66899b]/30 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <img 
                      src={solution.logo} 
                      alt={solution.name}
                      className="h-8 w-auto mb-3 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <p className="text-[#66899b] italic font-medium">{solution.tagline}</p>
                  </div>
                  <div className="text-[#66899b] group-hover:scale-110 transition-transform duration-300">
                    {solution.iconComponent}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-base">{solution.problemFocus}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center text-[#66899b] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore {solution.shortName}</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* FAQ Section - Light Background */}
        <FAQSection />

        {/* Enhanced CTA Section */}
        <section className="bg-[#121418] py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Practical Guidance from Industry Experts?</h2>
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Every venue faces different requirements. Let us discuss your specific situation and how our expertise can help you understand your obligations while improving your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-10 py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-semibold hover:transform hover:scale-105 shadow-lg">
                Schedule a Consultation
              </Link>
              <Link href="/about" className="border-2 border-[#66899b] text-[#66899b] px-10 py-4 rounded-xl hover:bg-[#66899b] hover:text-white transition-all duration-300 font-semibold">
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
    const insights = await getPosts('involv', 3)
    
    return {
      props: {
        insights,
      },
      revalidate: 300,
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
    iconComponent: <Shield className="w-8 h-8" />,
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
    iconComponent: <Scale className="w-8 h-8" />,
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
    iconComponent: <TrendingUp className="w-8 h-8" />,
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
    description: "Our team includes gaming specialists who've managed Australia's largest operations. We don't just understand compliance — we know how high-performance venues actually run.",
    iconComponent: <Award className="w-20 h-20 text-white" />,
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
    description: "We don't write policies and walk away. Our hands-on approach ensures compliance frameworks actually work in your day-to-day operations, protecting your licence while supporting growth.",
    iconComponent: <Wrench className="w-20 h-20 text-white" />,
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
    description: "Involv Assure and PrimeEdge aren't generic tools adapted for gaming. They're purpose-built for Australian pub and club operations, delivering clear ROI without the complexity.",
    iconComponent: <Zap className="w-20 h-20 text-white" />,
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
    logo: '/logo-involv-assure-white2.svg',
    tagline: 'A risk and compliance team in your browser.',
    iconComponent: <ShieldPlus className="w-10 h-10" />,
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
    logo: '/logo-involv-primeedge-white2.svg',
    tagline: 'The science behind high-performance gaming venues.',
    iconComponent: <Brain className="w-10 h-10" />,
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

const faqData = [
  {
    question: "What makes Involv different from other compliance consultants?",
    answer: "We're not just consultants - we're former venue operators and industry specialists with hands-on experience managing Australia's largest gaming operations. Our team combines regulatory expertise with practical operational knowledge, ensuring our solutions actually work in real-world venue environments."
  },
  {
    question: "How quickly can we see results from your gaming performance advisory?",
    answer: "Most venues see initial insights within 2-4 weeks of engagement. Our gaming performance specialists, led by Con Nikitas with 30 years of industry experience, can quickly identify optimization opportunities. Full implementation and measurable revenue improvements typically occur within 3-6 months."
  },
  {
    question: "Do you work with venues of all sizes?",
    answer: "Yes, we work with single venues to large multi-site operations across Australia. Our approach is scalable - whether you're a local pub or a venue group with dozens of locations, we tailor our services to your specific needs and budget."
  },
  {
    question: "What's included in your AML/CTF compliance service?",
    answer: "Our AML service includes risk assessment, program development, staff training, ongoing monitoring support, and audit preparation. We help you understand AUSTRAC requirements and build practical compliance systems that work within your operational constraints."
  },
  {
    question: "Can you help with compliance across different states?",
    answer: "Absolutely. Our team has deep experience with gaming and liquor regulations across all Australian jurisdictions. We understand the nuances between state requirements and can help ensure your venues are compliant regardless of location."
  },
  {
    question: "How do your software solutions integrate with existing systems?",
    answer: "Both Involv Assure and PrimeEdge are designed to work alongside your existing systems. They don't require major infrastructure changes and can often integrate with your current gaming management systems, POS, and other operational tools."
  }
]