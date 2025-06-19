import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { 
  FileText, 
  BookOpen, 
  Video, 
  Users,
  Download,
  Calendar,
  Clock,
  ExternalLink
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { 
  getAllInsightsContent, 
  Post, 
  CaseStudy, 
  Whitepaper, 
  Webinar,
  buildImageUrl, 
  calculateReadingTime 
} from '../../../lib/sanity'

interface InsightsPageProps {
  articles: Post[]
  caseStudies: CaseStudy[]
  whitepapers: Whitepaper[]
  webinars: Webinar[]
}

type ContentType = 'articles' | 'case-studies' | 'whitepapers' | 'webinars'

export default function Insights({ articles, caseStudies, whitepapers, webinars }: InsightsPageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ContentType>('articles')

  const contentTabs = [
    {
      id: 'articles' as ContentType,
      label: 'Articles',
      icon: <FileText className="w-5 h-5" />,
      count: articles.length
    },
    {
      id: 'case-studies' as ContentType,
      label: 'Case Studies',
      icon: <BookOpen className="w-5 h-5" />,
      count: caseStudies.length
    },
    {
      id: 'whitepapers' as ContentType,
      label: 'Whitepapers',
      icon: <Download className="w-5 h-5" />,
      count: whitepapers.length
    },
    {
      id: 'webinars' as ContentType,
      label: 'Webinars & Events',
      icon: <Video className="w-5 h-5" />,
      count: webinars.length
    }
  ]

  const renderArticles = () => {
    if (articles.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles available yet</h3>
            <p className="text-gray-400 text-sm">
              We're working on bringing you the latest industry insights and expert analysis.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((post) => {
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
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] to-gray-700 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-gray-400" />
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
                
                {/* Author and Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center">
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
                  
                  <div className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {readingTime} min read
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    )
  }

  const renderCaseStudies = () => {
    if (caseStudies.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No case studies available yet</h3>
            <p className="text-gray-400 text-sm">
              We're developing case studies showcasing our client successes and industry expertise.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy) => (
          <article key={caseStudy._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors group">
            {caseStudy.mainImage?.asset?.url ? (
              <div className="aspect-video w-full bg-gray-700">
                <img 
                  src={buildImageUrl(caseStudy.mainImage.asset.url, 600, 340, 75)} 
                  alt={caseStudy.mainImage.alt || caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] to-gray-700 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-gray-400" />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#66899b] px-2 py-1 rounded text-xs font-medium text-white">
                  Case Study
                </span>
                <span className="bg-gray-600 px-2 py-1 rounded text-xs font-medium text-white">
                  {caseStudy.industry}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                <Link href={`/insights/case-studies/${caseStudy.slug.current}`} className="hover:text-[#66899b] transition-colors">
                  {caseStudy.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                {caseStudy.excerpt}
              </p>
              
              <div className="text-xs text-gray-400">
                Published {new Date(caseStudy.publishedAt).toLocaleDateString('en-AU')}
              </div>
            </div>
          </article>
        ))}
      </div>
    )
  }

  const renderWhitepapers = () => {
    if (whitepapers.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
            <Download className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No whitepapers available yet</h3>
            <p className="text-gray-400 text-sm">
              We're preparing comprehensive whitepapers on key compliance and gaming topics.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whitepapers.map((whitepaper) => (
          <article key={whitepaper._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors group">
            {whitepaper.mainImage?.asset?.url ? (
              <div className="aspect-video w-full bg-gray-700">
                <img 
                  src={buildImageUrl(whitepaper.mainImage.asset.url, 600, 340, 75)} 
                  alt={whitepaper.mainImage.alt || whitepaper.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] to-gray-700 flex items-center justify-center">
                <Download className="w-10 h-10 text-gray-400" />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#66899b] px-2 py-1 rounded text-xs font-medium text-white">
                  Whitepaper
                </span>
                {whitepaper.fileSize && (
                  <span className="text-xs text-gray-400">
                    {whitepaper.fileSize}
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                <Link href={`/insights/whitepapers/${whitepaper.slug.current}`} className="hover:text-[#66899b] transition-colors">
                  {whitepaper.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                {whitepaper.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center">
                  {whitepaper.author?.image?.asset?.url ? (
                    <img 
                      src={buildImageUrl(whitepaper.author.image.asset.url, 32, 32, 80)} 
                      alt={whitepaper.author.name}
                      className="w-6 h-6 rounded-full object-cover mr-2"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#66899b] flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-white">
                        {whitepaper.author?.name?.charAt(0).toUpperCase() || '?'}
                      </span>
                    </div>
                  )}
                  <span className="text-xs text-gray-400">
                    {whitepaper.author?.name || 'Involv Team'}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-gray-400">
                  <Download className="w-3 h-3 mr-1" />
                  PDF
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    )
  }

  const renderWebinars = () => {
    if (webinars.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 max-w-md mx-auto">
            <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No webinars available yet</h3>
            <p className="text-gray-400 text-sm">
              We're planning educational webinars and industry events. Stay tuned for upcoming sessions.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webinars.map((webinar) => {
          const eventDate = new Date(webinar.scheduledDateTime)
          const isUpcoming = webinar.status === 'upcoming'
          const isLive = webinar.status === 'live'
          
          return (
            <article key={webinar._id} className="bg-[#1a1d21] rounded-lg overflow-hidden border border-gray-700 hover:border-[#66899b] transition-colors group">
              {webinar.mainImage?.asset?.url ? (
                <div className="aspect-video w-full bg-gray-700 relative">
                  <img 
                    src={buildImageUrl(webinar.mainImage.asset.url, 600, 340, 75)} 
                    alt={webinar.mainImage.alt || webinar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {isLive && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                      LIVE
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] to-gray-700 flex items-center justify-center relative">
                  <Video className="w-10 h-10 text-gray-400" />
                  {isLive && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                      LIVE
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isUpcoming ? 'bg-blue-500 text-white' :
                    isLive ? 'bg-red-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {webinar.eventType}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isUpcoming ? 'bg-yellow-500 text-black' :
                    isLive ? 'bg-red-500 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {webinar.status}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  <Link href={`/insights/webinars/${webinar.slug.current}`} className="hover:text-[#66899b] transition-colors">
                    {webinar.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {webinar.excerpt}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {eventDate.toLocaleDateString('en-AU', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {eventDate.toLocaleTimeString('en-AU', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })} • {webinar.duration} mins
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center">
                    {webinar.presenter?.image?.asset?.url ? (
                      <img 
                        src={buildImageUrl(webinar.presenter.image.asset.url, 32, 32, 80)} 
                        alt={webinar.presenter.name}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#66899b] flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-white">
                          {webinar.presenter?.name?.charAt(0).toUpperCase() || '?'}
                        </span>
                      </div>
                    )}
                    <span className="text-xs text-gray-400">
                      {webinar.presenter?.name || 'Involv Team'}
                    </span>
                  </div>
                  
                  {webinar.registrationLink && isUpcoming && (
                    <a 
                      href={webinar.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-[#66899b] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Register
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'articles':
        return renderArticles()
      case 'case-studies':
        return renderCaseStudies()
      case 'whitepapers':
        return renderWhitepapers()
      case 'webinars':
        return renderWebinars()
      default:
        return renderArticles()
    }
  }

  return (
    <>
      <Head>
        <title>Insights - Expert Analysis & Industry Updates | Involv</title>
        <meta name="description" content="Stay informed with the latest industry insights, compliance updates, and expert analysis from Involv's team of gaming and compliance specialists." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
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
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Industry Insights & Expert Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest compliance updates, gaming industry trends, and expert analysis from Australia's leading venue specialists.
            </p>
          </div>
        </section>

        {/* Content Type Selector */}
        <section className="max-w-7xl mx-auto px-4 pb-8">
          <div className="bg-[#1a1d21] rounded-lg p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {contentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#66899b] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#22252a]'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium text-sm lg:text-base">{tab.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeTab === tab.id 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          {renderContent()}
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
       <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch all content types for the 'involv' site
    const content = await getAllInsightsContent('involv', 20)
    
    return {
      props: {
        articles: content.articles,
        caseStudies: content.caseStudies,
        whitepapers: content.whitepapers,
        webinars: content.webinars,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching insights content:', error)
    return {
      props: {
        articles: [],
        caseStudies: [],
        whitepapers: [],
        webinars: [],
      },
      revalidate: 300,
    }
  }
}