import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import { getNewsPress, getFeaturedNewsPress, NewsPress, buildImageUrl } from '../../../lib/sanity'

interface NewsPressPageProps {
  newsPress: NewsPress[]
  featuredNewsPress: NewsPress[]
}

export default function NewsPressReleases({ newsPress, featuredNewsPress }: NewsPressPageProps) {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [displayCount, setDisplayCount] = useState(9)

  // Filter news/press by content type
  const filteredNewsPress = selectedFilter === 'all' 
    ? newsPress 
    : newsPress.filter(item => item.contentType === selectedFilter)

  // Get content type display name
  const getContentTypeDisplay = (type: string) => {
    const types: { [key: string]: string } = {
      'news': 'Company News',
      'press-release': 'Press Release',
      'company-update': 'Company Update',
      'award': 'Award',
      'partnership': 'Partnership'
    }
    return types[type] || type
  }

  // Get content type color
  const getContentTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'news': 'bg-blue-500',
      'press-release': 'bg-[#66899b]',
      'company-update': 'bg-purple-500',
      'award': 'bg-yellow-500',
      'partnership': 'bg-green-500'
    }
    return colors[type] || 'bg-gray-500'
  }

  return (
    <>
      <Head>
        <title>News & Press Releases - Involv | Latest Company Updates</title>
        <meta name="description" content="Stay updated with the latest news and press releases from Involv. Company announcements, partnerships, awards, and industry recognition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Replace the old brand strip + header with the new Navigation component */}
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2">/</span>
            <span className="text-white">News & Press Releases</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              News & Press Releases
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest announcements from Involv, including company news, partnerships, awards, and industry recognition.
            </p>
          </div>
        </section>

        {/* Featured News Section */}
        {featuredNewsPress.length > 0 && (
          <section className="bg-[#121418] py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured News</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredNewsPress.map((item) => (
                  <article key={item._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors group">
                    {/* Featured Badge */}
                    <div className="relative">
                      {item.mainImage?.asset?.url ? (
                        <div className="aspect-video w-full bg-gray-700">
                          <img 
                            src={buildImageUrl(item.mainImage.asset.url, 400, 225, 75)} 
                            alt={item.mainImage.alt || item.title}
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#66899b] text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Content Type */}
                      <div className="flex gap-2 mb-3">
                        <span className={`${getContentTypeColor(item.contentType)} px-2 py-1 rounded text-xs font-medium text-white`}>
                          {getContentTypeDisplay(item.contentType)}
                        </span>
                      </div>
                      
                      {/* Title & Excerpt */}
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        <Link href={`/about/news-press-releases/${item.slug.current}`} className="hover:text-[#66899b] transition-colors">
                          {item.title}
                        </Link>
                      </h3>
                      
                      {item.excerpt && (
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                      )}
                      
                      {/* Date */}
                      <div className="flex items-center text-xs text-gray-400">
                        <span>{new Date(item.publishedAt).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filter and All News Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All News & Announcements</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-[#66899b] text-white'
                    : 'bg-[#1a1d21] text-gray-300 hover:bg-[#22252a]'
                }`}
              >
                All ({newsPress.length})
              </button>
              {['news', 'press-release', 'company-update', 'award', 'partnership'].map((type) => {
                const count = newsPress.filter(item => item.contentType === type).length
                if (count === 0) return null
                
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === type
                        ? 'bg-[#66899b] text-white'
                        : 'bg-[#1a1d21] text-gray-300 hover:bg-[#22252a]'
                    }`}
                  >
                    {getContentTypeDisplay(type)} ({count})
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* News Grid */}
          {filteredNewsPress.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredNewsPress.slice(0, displayCount).map((item) => (
                  <article key={item._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors">
                    {/* Article Image */}
                    {item.mainImage?.asset?.url ? (
                      <div className="aspect-video w-full bg-gray-700">
                        <img 
                          src={buildImageUrl(item.mainImage.asset.url, 400, 225, 75)} 
                          alt={item.mainImage.alt || item.title}
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
                      {/* Content Type */}
                      <div className="flex gap-2 mb-3">
                        <span className={`${getContentTypeColor(item.contentType)} px-2 py-1 rounded text-xs font-medium text-white`}>
                          {getContentTypeDisplay(item.contentType)}
                        </span>
                        {item.priority === 'high' && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      {/* Title & Excerpt */}
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        <Link href={`/about/news-press-releases/${item.slug.current}`} className="hover:text-[#66899b] transition-colors">
                          {item.title}
                        </Link>
                      </h3>
                      
                      {item.excerpt && (
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                      )}
                      
                      {/* Date and External Link */}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{new Date(item.publishedAt).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}</span>
                        {item.externalLink && (
                          <a 
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#66899b] hover:text-white transition-colors"
                          >
                            External Link →
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {filteredNewsPress.length > displayCount && (
                <div className="text-center">
                  <button
                    onClick={() => setDisplayCount(prev => prev + 9)}
                    className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No {selectedFilter === 'all' ? 'news' : getContentTypeDisplay(selectedFilter).toLowerCase()} found</h3>
                <p className="text-gray-400 text-sm">
                  {selectedFilter === 'all' 
                    ? 'Check back soon for the latest updates from Involv.'
                    : 'Try selecting a different content type or check back later.'
                  }
                </p>
              </div>
            </div>
          )}
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const newsPress = await getNewsPress('involv')
    const featuredNewsPress = await getFeaturedNewsPress('involv', 3)
    
    return {
      props: {
        newsPress,
        featuredNewsPress,
      },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching news/press for page:', error)
    return {
      props: {
        newsPress: [],
        featuredNewsPress: [],
      },
      revalidate: 300,
    }
  }
}