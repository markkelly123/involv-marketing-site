import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
})

// Helper function to calculate reading time from body content
export function calculateReadingTime(body: any[]): number {
  if (!body || !Array.isArray(body)) return 1
  
  const text = body
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((span: any) => span.text)
        ?.join('') || ''
    )
    .join(' ')
  
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return readingTime || 1
}

// Helper function to build Sanity image URLs with transformations
export function buildImageUrl(imageUrl: string, width?: number, height?: number, quality?: number): string {
  if (!imageUrl) return ''
  
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (quality) params.append('q', quality.toString())
  params.append('fit', 'crop')
  params.append('auto', 'format')
  
  const queryString = params.toString()
  return queryString ? `${imageUrl}?${queryString}` : imageUrl
}

// Types for our CMS content
export interface Author {
  _id: string
  name: string
  role: string
  bio?: string
  image?: {
    asset: {
      url: string
    }
    alt?: string
  }
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any // Portable Text
  publishedAt: string
  author: Author
  sites: string[] // ['involv', 'assure', 'primeedge', 'lane']
  categories: { _id: string; title: string }[] // Resolved category objects
  tags: string[] // Your comprehensive tag list
  jurisdictions: string[] // ['VIC', 'NSW', 'QLD', 'SA', 'TAS']
  featured: boolean
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  postType: 'article' | 'whitepaper' | 'report'
  estimatedReadingTime?: number
}

export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any // Portable Text
  client: string
  industry: string
  challenge: string
  solution: string
  results: string
  publishedAt: string
  sites: string[]
  categories: { _id: string; title: string }[] // Resolved category objects
  tags: string[]
  jurisdictions: string[]
  mainImage?: {
    asset: {
      url: string
    }
    alt: string
  }
}

export interface Whitepaper {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any // Portable Text
  publishedAt: string
  author: Author
  sites: string[]
  categories: { _id: string; title: string }[]
  tags: string[]
  jurisdictions: string[]
  featured: boolean
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  downloadFile?: {
    asset: {
      _id: string
      url: string
      originalFilename: string
    }
  }
  downloadCount?: number
  fileSize?: string
  pageCount?: number
}

export interface Webinar {
  _id: string
  title: string
  slug: { current: string }
  eventType: 'webinar' | 'workshop' | 'conference' | 'training' | 'panel' | 'industry-event'
  status: 'upcoming' | 'live' | 'completed' | 'cancelled'
  excerpt: string
  body: any // Portable Text
  publishedAt: string
  scheduledDateTime: string
  duration: number
  timezone: string
  youtubeVideoId?: string
  registrationLink?: string
  meetingLink?: string
  presenter: Author
  additionalPresenters?: Author[]
  sites: string[]
  categories: { _id: string; title: string }[]
  tags: string[]
  jurisdictions: string[]
  featured: boolean
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  maxAttendees?: number
  registrationCount?: number
  resources?: Array<{
    title: string
    file: {
      asset: {
        _id: string
        url: string
        originalFilename: string
      }
    }
    description?: string
  }>
}

export interface NewsPress {
  _id: string
  title: string
  slug: {
    current: string
  }
  contentType: 'news' | 'press-release' | 'company-update' | 'award' | 'partnership'
  excerpt?: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  publishedAt: string
  priority: 'high' | 'medium' | 'low'
  sites: string[]
  body: any
  tags?: string[]
  externalLink?: string
  downloadableAssets?: Array<{
    title: string
    file: {
      asset: {
        _id: string
        url: string
        originalFilename: string
      }
    }
    description?: string
  }>
}

// Fetch functions
export async function getPosts(site?: string, limit?: number, postType?: string): Promise<Post[]> {
  let query = `*[_type == "post"`
  
  const conditions = []
  if (site) conditions.push(`"${site}" in sites`)
  if (postType) conditions.push(`postType == "${postType}"`)
  
  if (conditions.length > 0) {
    query += ` && (${conditions.join(' && ')})`
  }
  
  query += `] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    author->{_id, name, role, bio, image{asset->{_id, url}, alt}},
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    featured,
    mainImage{asset->{_id, url}, alt},
    postType,
    estimatedReadingTime
  }`
  
  return await sanity.fetch(query)
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      author->{name, role, bio},
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      featured,
      mainImage{asset->{url}, alt},
      postType
    }
  `
  
  return await sanity.fetch(query)
}

export async function getCaseStudies(site?: string, limit?: number): Promise<CaseStudy[]> {
  let query = `*[_type == "caseStudy"`
  
  if (site) {
    query += ` && "${site}" in sites`
  }
  
  query += `] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    body,
    client,
    industry,
    challenge,
    solution,
    results,
    publishedAt,
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    mainImage{asset->{url}, alt}
  }`
  
  return await sanity.fetch(query)
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const query = `
    *[_type == "caseStudy" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      client,
      industry,
      challenge,
      solution,
      results,
      publishedAt,
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      mainImage{asset->{url}, alt}
    }
  `
  
  return await sanity.fetch(query)
}

// NEW: Whitepaper functions
export async function getWhitepapers(site?: string, limit?: number): Promise<Whitepaper[]> {
  let query = `*[_type == "whitepaper"`
  
  if (site) {
    query += ` && "${site}" in sites`
  }
  
  query += `] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    author->{_id, name, role, bio, image{asset->{_id, url}, alt}},
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    featured,
    mainImage{asset->{_id, url}, alt},
    downloadFile{asset->{_id, url, originalFilename}},
    downloadCount,
    fileSize,
    pageCount
  }`
  
  return await sanity.fetch(query)
}

export async function getWhitepaper(slug: string): Promise<Whitepaper | null> {
  const query = `
    *[_type == "whitepaper" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      author->{_id, name, role, bio, image{asset->{_id, url}, alt}},
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      featured,
      mainImage{asset->{_id, url}, alt},
      downloadFile{asset->{_id, url, originalFilename}},
      downloadCount,
      fileSize,
      pageCount
    }
  `
  
  return await sanity.fetch(query)
}

// NEW: Webinar functions
export async function getWebinars(site?: string, limit?: number, status?: string): Promise<Webinar[]> {
  let query = `*[_type == "webinar"`
  
  const conditions = []
  if (site) conditions.push(`"${site}" in sites`)
  if (status) conditions.push(`status == "${status}"`)
  
  if (conditions.length > 0) {
    query += ` && (${conditions.join(' && ')})`
  }
  
  query += `] | order(scheduledDateTime desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    eventType,
    status,
    excerpt,
    publishedAt,
    scheduledDateTime,
    duration,
    timezone,
    youtubeVideoId,
    registrationLink,
    meetingLink,
    presenter->{_id, name, role, bio, image{asset->{_id, url}, alt}},
    additionalPresenters[]->{_id, name, role, bio, image{asset->{_id, url}, alt}},
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    featured,
    mainImage{asset->{_id, url}, alt},
    maxAttendees,
    registrationCount
  }`
  
  return await sanity.fetch(query)
}

export async function getWebinar(slug: string): Promise<Webinar | null> {
  const query = `
    *[_type == "webinar" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      eventType,
      status,
      excerpt,
      body,
      publishedAt,
      scheduledDateTime,
      duration,
      timezone,
      youtubeVideoId,
      registrationLink,
      meetingLink,
      presenter->{_id, name, role, bio, image{asset->{_id, url}, alt}},
      additionalPresenters[]->{_id, name, role, bio, image{asset->{_id, url}, alt}},
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      featured,
      mainImage{asset->{_id, url}, alt},
      maxAttendees,
      registrationCount,
      resources[]{
        title,
        file{asset->{_id, url, originalFilename}},
        description
      }
    }
  `
  
  return await sanity.fetch(query)
}

// Get news and press releases for a specific site
export async function getNewsPress(siteName: string, limit?: number): Promise<NewsPress[]> {
  const limitClause = limit ? `[0...${limit}]` : ''
  
  const query = `*[_type == "newsPress" && "${siteName}" in sites] | order(publishedAt desc)${limitClause} {
    _id,
    title,
    slug,
    contentType,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    priority,
    sites,
    tags,
    externalLink
  }`

  return await sanity.fetch(query)
}

// Get a single news/press item by slug
export async function getNewsPressItem(slug: string, siteName: string): Promise<NewsPress | null> {
  const query = `*[_type == "newsPress" && slug.current == "${slug}" && "${siteName}" in sites][0] {
    _id,
    title,
    slug,
    contentType,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    priority,
    sites,
    body,
    tags,
    externalLink,
    downloadableAssets[]{
      title,
      file{
        asset->{
          _id,
          url,
          originalFilename
        }
      },
      description
    }
  }`

  return await sanity.fetch(query)
}

// Get featured news/press items (high priority)
export async function getFeaturedNewsPress(siteName: string, limit: number = 3): Promise<NewsPress[]> {
  const query = `*[_type == "newsPress" && "${siteName}" in sites && priority == "high"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    contentType,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    priority,
    sites,
    tags,
    externalLink
  }`

  return await sanity.fetch(query)
}

// Get news/press by content type
export async function getNewsPressbyType(siteName: string, contentType: string, limit?: number): Promise<NewsPress[]> {
  const limitClause = limit ? `[0...${limit}]` : ''
  
  const query = `*[_type == "newsPress" && "${siteName}" in sites && contentType == "${contentType}"] | order(publishedAt desc)${limitClause} {
    _id,
    title,
    slug,
    contentType,
    excerpt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    priority,
    sites,
    tags,
    externalLink
  }`

  return await sanity.fetch(query)
}

// Helper function to get featured content for any site
export async function getFeaturedContent(site: string) {
  const [featuredPosts, recentArticles, whitepapers, caseStudies, upcomingWebinars] = await Promise.all([
    getPosts(site, 3).then(posts => posts.filter(p => p.featured)),
    getPosts(site, 6, 'article'),
    getWhitepapers(site, 3),
    getCaseStudies(site, 3),
    getWebinars(site, 3, 'upcoming')
  ])

  return {
    featuredPosts,
    recentArticles,
    whitepapers,
    caseStudies,
    upcomingWebinars
  }
}

// Helper to get posts by category
export async function getPostsByCategory(site: string, category: string, limit?: number): Promise<Post[]> {
  let query = `*[_type == "post" && "${site}" in sites && "${category}" in categories[]->title] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{name, role},
    categories[]->{title, _id},
    tags,
    mainImage{asset->{url}, alt},
    postType
  }`
  
  return await sanity.fetch(query)
}

// Helper to get posts by jurisdiction
export async function getPostsByJurisdiction(site: string, jurisdiction: string, limit?: number): Promise<Post[]> {
  let query = `*[_type == "post" && "${site}" in sites && "${jurisdiction}" in jurisdictions] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{name, role},
    jurisdictions,
    categories[]->{title, _id},
    tags,
    mainImage{asset->{url}, alt},
    postType
  }`
  
  return await sanity.fetch(query)
}

// NEW: Combined content fetcher for insights page
export async function getAllInsightsContent(site: string, limit?: number) {
  const [articles, caseStudies, whitepapers, webinars] = await Promise.all([
    getPosts(site, limit, 'article'),
    getCaseStudies(site, limit),
    getWhitepapers(site, limit),
    getWebinars(site, limit)
  ])

  return {
    articles,
    caseStudies,
    whitepapers,
    webinars
  }
}