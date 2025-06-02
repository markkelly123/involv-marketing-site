import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Navigation from '../../../components/Navigation'
import { getNewsPress, getNewsPressItem, NewsPress, buildImageUrl } from '../../../../lib/sanity'
import { PortableText } from '@portabletext/react'

interface NewsPressArticleProps {
  article: NewsPress
}

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({value}: any) => {
      return (
        <div className="my-8">
          <img
            src={buildImageUrl(value.asset.url, 800, 450, 80)}
            alt={value.alt || ''}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <p className="text-gray-400 text-sm mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({children}: any) => <h1 className="text-3xl font-bold mb-4 text-white">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl font-bold mb-4 text-white mt-8">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-semibold mb-3 text-white mt-6">{children}</h3>,
    normal: ({children}: any) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-[#66899b] pl-6 my-6 italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#66899b] hover:text-white transition-colors underline"
      >
        {children}
      </a>
    ),
    strong: ({children}: any) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="mb-1">{children}</li>,
    number: ({children}: any) => <li className="mb-1">{children}</li>,
  },
}

export default function NewsPressArticle({ article }: NewsPressArticleProps) {
  const router = useRouter()

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
        <title>{article.title} - Involv News</title>
        <meta name="description" content={article.excerpt || `Latest ${getContentTypeDisplay(article.contentType).toLowerCase()} from Involv`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt || `Latest ${getContentTypeDisplay(article.contentType).toLowerCase()} from Involv`} />
        <meta property="og:type" content="article" />
        {article.mainImage?.asset?.url && (
          <meta property="og:image" content={buildImageUrl(article.mainImage.asset.url, 1200, 630, 80)} />
        )}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt || `Latest ${getContentTypeDisplay(article.contentType).toLowerCase()} from Involv`} />
        {article.mainImage?.asset?.url && (
          <meta name="twitter:image" content={buildImageUrl(article.mainImage.asset.url, 1200, 630, 80)} />
        )}
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Replace the old brand strip + header with the new Navigation component */}
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2">/</span>
            <Link href="/about/news-press-releases" className="hover:text-white">News & Press</Link>
            <span className="mx-2">/</span>
            <span className="text-white line-clamp-1">{article.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <section className="max-w-4xl mx-auto px-4 pt-8 pb-12">
          {/* Content Type and Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`${getContentTypeColor(article.contentType)} px-3 py-1 rounded-full text-sm font-medium text-white`}>
              {getContentTypeDisplay(article.contentType)}
            </span>
            {article.priority === 'high' && (
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
            <span className="text-gray-400 text-sm">
              {new Date(article.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* External Link */}
          {article.externalLink && (
            <div className="mb-8">
              <a 
                href={article.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#66899b] hover:text-white transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                View External Coverage
              </a>
            </div>
          )}

          {/* Main Image */}
          {article.mainImage?.asset?.url && (
            <div className="mb-12">
              <img 
                src={buildImageUrl(article.mainImage.asset.url, 800, 450, 80)} 
                alt={article.mainImage.alt || article.title}
                className="w-full rounded-lg shadow-2xl"
              />
              {article.mainImage.alt && (
                <p className="text-gray-400 text-sm mt-3 text-center italic">
                  {article.mainImage.alt}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="prose prose-lg max-w-none">
            {article.body && (
              <PortableText 
                value={article.body} 
                components={portableTextComponents}
              />
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-[#1a1d21] text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Downloadable Assets */}
          {article.downloadableAssets && article.downloadableAssets.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Downloads</h3>
              <div className="space-y-3">
                {article.downloadableAssets.map((asset: any, index: number) => (
                  <div key={index} className="bg-[#1a1d21] rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">{asset.title}</h4>
                      {asset.description && (
                        <p className="text-gray-400 text-sm mt-1">{asset.description}</p>
                      )}
                    </div>
                    <a
                      href={asset.file.asset.url}
                      download={asset.file.asset.originalFilename}
                      className="bg-[#66899b] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-sm"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Navigation */}
        <section className="bg-[#121418] py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/about/news-press-releases"
              className="inline-flex items-center bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to News & Press Releases
            </Link>
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all news/press slugs for involv site
  const newsPress = await getNewsPress('involv')
  
  const paths = newsPress.map((item: NewsPress) => ({
    params: { slug: item.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  try {
    const article = await getNewsPressItem(params.slug, 'involv')

    if (!article) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        article,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching news/press article:', error)
    return {
      notFound: true,
    }
  }
}