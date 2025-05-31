import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl } from '../../lib/sanity'

interface HomePageProps {
  insights: Post[]
}

function InsightsSection({ insights }: { insights: Post[] }) {
  if (!insights || insights.length === 0) {
    return null // Section disappears if no posts
  }

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay informed with our latest industry insights, compliance updates, and expert analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {insights.slice(0, 3).map((post) => (
            <article key={post._id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
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
                <div className="aspect-video w-full bg-gradient-to-br from-blue-800 to-gray-700 flex items-center justify-center">
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
                      <span key={category._id} className="bg-blue-600 px-2 py-1 rounded text-xs font-medium text-white">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Title & Excerpt */}
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  <Link href={`/insights/${post.slug.current}`} className="hover:text-blue-400 transition-colors">
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
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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

export default function Home({ insights }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Involv - Compliance Made Simple. Gaming Made Smarter.</title>
        <meta name="description" content="Strategic advisory and intelligent software helping Australian pubs and clubs meet compliance and optimise gaming performance." />
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

        {/* Hero Section */}
        <section className="text-center px-4 pt-24 pb-12">
          <h1 className="text-4xl font-bold mb-4">
            Compliance Made Simple. Gaming Made Smarter. Built for Pubs and Clubs.
          </h1>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Strategic advisory and intelligent software helping Australian pubs and clubs meet compliance and optimise gaming performance.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-[#66899b] text-white px-6 py-2 rounded hover:bg-opacity-80 inline-block">
              Contact Us
            </Link>
            <Link href="/services" className="border border-[#66899b] text-[#66899b] px-6 py-2 rounded hover:bg-[#66899b] hover:text-white inline-block">
              Explore Our Services
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              We are built for Australian pubs and clubs – and only for them. Our team brings over 80 years of collective experience across gaming operations, gaming regulation, and hospitality compliance. Everything we do is designed to make venues safer, smarter, and more successful.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {serviceCards.map((service) => (
              <Link key={service.title} href={service.link} className="bg-[#1a1d21] hover:bg-[#22252a] rounded-lg p-6 shadow block transition-colors">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Involv Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">Why Involv</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyInvolvCards.map((card) => (
                <div key={card.title} className="bg-[#1a1d21] rounded-lg p-6 shadow">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {solutionCards.map((solution) => (
              <a key={solution.name} href={solution.link} className="bg-[#1a1d21] hover:bg-[#22252a] rounded-lg p-6 shadow block transition-colors">
                <h3 className="text-lg font-semibold mb-1">{solution.name}</h3>
                <p className="text-[#9b7866] italic mb-2">{solution.tagline}</p>
                <p className="text-gray-400 text-sm">{solution.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* Footer */}
        <footer className="bg-[#121418] text-white py-12 px-4">
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
const serviceCards = [
  {
    title: 'AML Advisory',
    description: 'Navigate AUSTRAC obligations confidently. We implement, uplift, and independently review your AML/CTF Programs.',
    link: '/services/aml-advisory',
  },
  {
    title: 'Risk & Regulatory Compliance',
    description: 'From licensing to registers and audits, we clarify your obligations and uplift your compliance framework.',
    link: '/services/risk-compliance',
  },
  {
    title: 'Gaming Performance',
    description: 'Led by Australia\'s most experienced gaming ops leader. We optimise floors and boost revenue, data-first.',
    link: '/services/gaming-performance',
  },
]

const whyInvolvCards = [
  {
    title: 'Deep Industry Experience',
    description: 'Led by former ALH execs and gaming specialists — we know how high-performance venues actually run.',
  },
  {
    title: 'Practical + Trusted Advisory',
    description: 'We demystify compliance, streamline ops, and help you stay ahead of changing regulation.',
  },
  {
    title: 'Tech That Works in Venues',
    description: 'Involv Assure and PrimeEdge are intuitive, venue-friendly SaaS tools with clear ROI.',
  },
]

const solutionCards = [
  {
    name: 'Involv Assure',
    tagline: 'A risk and compliance team in your browser.',
    description: 'A purpose-built GRC platform tailored to licensed gaming venues. Map obligations, test controls, and stay audit-ready – without the bloat.',
    link: 'https://assure.involv.com.au',
  },
  {
    name: 'Involv PrimeEdge',
    tagline: 'The science behind high-performance gaming venues.',
    description: 'An AI-powered optimisation tool for EGM floors. Visualise performance, simulate changes, and receive data-backed recommendations.',
    link: 'https://primeedge.involv.com.au',
  },
]