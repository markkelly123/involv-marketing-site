import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'

interface InsightsPageProps {
  posts: Post[]
}

export default function Insights({ posts }: InsightsPageProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Insights - Expert Analysis & Industry Updates | Involv</title>
        <meta name="description" content="Stay informed with the latest industry insights, compliance updates, and expert analysis from Involv's team of gaming and compliance specialists." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Replace with new Navigation component */}
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Insights</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Industry Insights & Expert Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest compliance updates, gaming industry trends, and expert analysis from Australia's leading venue specialists.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No insights available yet</h3>
                <p className="text-gray-400 text-sm mb-4">
                  We're working on bringing you the latest industry insights and expert analysis.
                </p>
                <p className="text-gray-400 text-xs">
                  Content managed through{' '}
                  <Link href="http://localhost:3333" className="text-[#66899b] hover:text-white transition-colors">
                    Sanity Studio
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)
                
                return (
                  <article key={post._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors group">
                    {/* Main Image */}
                    {post.mainImage?.asset?.url ? (
                      <div className="aspect-video w-full bg-gray-700">
                        <img 
                          src={buildImageUrl(post.mainImage.asset.url, 600, 340, 75)} 
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            console.log('Image failed to load:', post.mainImage?.asset?.url)
                            e.currentTarget.style.display = 'none'
                          }}
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
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.slice(0, 2).map((category) => (
                            <span key={category._id} className="bg-[#66899b] px-2 py-1 rounded text-xs font-medium text-white">
                              {category.title}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="text-gray-400 text-xs">+{post.categories.length - 2} more</span>
                          )}
                        </div>
                      )}
                      
                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                        <Link href={`/insights/${post.slug.current}`} className="hover:text-[#66899b] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-[#1a1d21] border border-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-gray-500 text-xs">+{post.tags.length - 3}</span>
                          )}
                        </div>
                      )}

                      {/* Jurisdictions */}
                      {post.jurisdictions && post.jurisdictions.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.jurisdictions.slice(0, 3).map((jurisdiction) => (
                            <span key={jurisdiction} className="bg-[#66899b] bg-opacity-20 text-[#66899b] px-2 py-1 rounded text-xs font-medium">
                              {jurisdiction.toUpperCase()}
                            </span>
                          ))}
                          {post.jurisdictions.length > 3 && (
                            <span className="text-gray-500 text-xs">+{post.jurisdictions.length - 3}</span>
                          )}
                        </div>
                      )}
                      
                      {/* Author and Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex items-center">
                          {/* Author Avatar */}
                          {post.author?.image?.asset?.url ? (
                            <img 
                              src={buildImageUrl(post.author.image.asset.url, 40, 40, 80)} 
                              alt={post.author.image.alt || post.author.name}
                              className="w-8 h-8 rounded-full object-cover mr-3"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#66899b] flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-white">
                                {post.author?.name?.charAt(0).toUpperCase() || '?'}
                              </span>
                            </div>
                          )}
                          
                          <div>
                            <p className="text-sm font-medium text-gray-200">
                              {post.author?.name || 'Involv Team'}
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        
                        {/* Reading Time */}
                        <div className="text-xs text-gray-400 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {readingTime} min read
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights and updates delivered directly from our team of industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Contact Our Experts
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Explore Our Services
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch posts for the 'involv' site
    const posts = await getPosts('involv', 20)
    
    return {
      props: {
        posts,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: {
        posts: [],
      },
      revalidate: 300,
    }
  }
}