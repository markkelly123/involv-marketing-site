import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Rocket, Award, Lightbulb, Target, Handshake, BookOpen, Zap, Scale, Shield, Monitor, BarChart3, TrendingUp, DollarSign, Home, Star, CheckCircle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getJobPostings, JobPosting } from '../../../lib/sanity'

interface CareersPageProps {
  jobPostings: JobPosting[]
}

interface FormData {
  name: string
  email: string
  phone: string
  position: string
  message: string
}

export default function Careers({ jobPostings }: CareersPageProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/xjkroley', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatSalaryRange = (salaryRange?: { min?: number; max?: number; displayPublicly?: boolean }) => {
    if (!salaryRange || !salaryRange.displayPublicly) return null
    if (salaryRange.min && salaryRange.max) {
      return `$${salaryRange.min.toLocaleString()} - $${salaryRange.max.toLocaleString()}`
    }
    if (salaryRange.min) {
      return `From $${salaryRange.min.toLocaleString()}`
    }
    return null
  }

  const formatEmploymentType = (type: string) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('-')
  }

  return (
    <>
      <Head>
        <title>Careers - Join the Involv Team of Industry Veterans</title>
        <meta name="description" content="Join Involv and help transform compliance and gaming challenges for Australian pubs and clubs. Work with industry veterans who are building the future of venue operations." />
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
            <span className="text-white">Careers</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Build the Future of Venue Operations with Industry Veterans
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join us in transforming how Australian pubs and clubs manage AML, risk, and compliance - while also driving smarter, data-led gaming performance.
            </p>
          </div>
        </section>

        {/* Current Opportunities Section */}
        {jobPostings && jobPostings.length > 0 ? (
          <section className="bg-[#121418] py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Current Opportunities
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our open positions and find your next career opportunity with Australia's premier compliance and gaming optimisation consultancy.
                </p>
              </div>

              <div className="grid gap-8 lg:gap-12">
                {jobPostings.map((job) => (
                  <div key={job._id} className="bg-[#1a1d21] rounded-2xl p-8 border border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                          {job.urgent && (
                            <span className="px-3 py-1 bg-red-900/30 text-red-400 text-sm font-medium rounded-full border border-red-500/30">
                              Urgent
                            </span>
                          )}
                          {job.featured && (
                            <span className="px-3 py-1 bg-[#66899b]/20 text-[#66899b] text-sm font-medium rounded-full border border-[#66899b]/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {job.location}
                          </span>
                          <span>{formatEmploymentType(job.employmentType)}</span>
                          {job.experienceLevel && (
                            <span className="capitalize">{job.experienceLevel} Level</span>
                          )}
                        </div>
                      </div>
                      {formatSalaryRange(job.salaryRange) && (
                        <div className="text-right">
                          <div className="text-lg font-semibold text-white">
                            {formatSalaryRange(job.salaryRange)}
                          </div>
                          <div className="text-sm text-gray-400">per annum</div>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{job.summary}</p>

                    {job.skills && job.skills.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 6).map((skill: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-[#66899b]/20 text-[#66899b] text-sm rounded-full border border-[#66899b]/30">
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 6 && (
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                              +{job.skills.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}&body=Dear Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0A`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-[#66899b] hover:bg-[#5a7a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66899b] transition-colors"
                      >
                        Apply Now
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66899b] transition-colors">
                        Learn More
                      </button>
                    </div>

                    {job.applicationDeadline && (
                      <div className="mt-4 text-sm text-gray-400">
                        Application deadline: {new Date(job.applicationDeadline).toLocaleDateString('en-AU')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Current Status - No Openings */
          <section className="bg-[#121418] py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-[#1a1d21] rounded-lg p-8 border border-[#66899b]/30">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Building Something Special</h2>
                <p className="text-gray-300 text-lg mb-6">
                  We don't currently have any open positions, but we're always interested in connecting with exceptional people who share our vision of helping venues thrive.
                </p>
                <p className="text-gray-400 text-sm">
                  If you're passionate about the gaming and hospitality industry and believe you could contribute to our mission, we'd love to hear from you.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Why Work at Involv */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at Involv</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're building a company where industry expertise meets innovation, and where every team member has the opportunity to make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyInvolv.map((reason: any, index: number) => (
              <div key={index} className="bg-[#1a1d21] rounded-lg p-8 text-center hover:bg-[#1f2328] transition-colors">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-black">
                    {reason.iconComponent}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Culture */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We're industry veterans who believe in practical solutions, continuous learning, and supporting each other's success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cultureValues.map((value: any, index: number) => (
                <div key={index} className="bg-[#1a1d21] rounded-lg p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-[#66899b] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-2xl text-black">
                        {value.iconComponent}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{value.description}</p>
                      <div className="space-y-2">
                        {value.examples.map((example: string, idx: number) => (
                          <div key={idx} className="flex items-start text-sm text-gray-400">
                            <span className="text-[#66899b] mr-2 mt-1">•</span>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Roles */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Types of People We Look For</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              As we grow, we'll be looking for exceptional people across these key areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleTypes.map((role: any, index: number) => (
              <div key={index} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#1f2328] transition-colors">
                <div className="text-[#66899b] mb-4">
                  <div className="text-2xl">
                    {role.iconComponent}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{role.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{role.description}</p>
                <div className="space-y-1">
                  {role.skills.map((skill: string, idx: number) => (
                    <div key={idx} className="text-xs text-gray-400">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We believe in supporting our team members' success both professionally and personally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl text-black">
                      {benefit.iconComponent}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interested in Joining Our Team?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Even if we don't have current openings, we'd love to connect with exceptional people who share our vision.
            </p>
          </div>

          <div className="bg-[#1a1d21] rounded-lg p-8">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-1">Thank you for your interest!</h3>
                    <p className="text-green-300 text-sm">We've received your message and will be in touch soon.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-8 p-6 bg-red-900/30 border border-red-500/30 rounded-lg">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-red-400 mr-3">⚠</div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-1">Something went wrong</h3>
                    <p className="text-red-300 text-sm">Please try again or contact us directly at careers@involv.com.au</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="Career Interest - Involv" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="_cc" value="careers@involv.com.au" />
              <input type="hidden" name="site" value="Involv" />
              <input type="hidden" name="form_type" value="Career Interest" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none"
                    placeholder="04XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-white mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none"
                  >
                    <option value="">Select an area</option>
                    <option value="advisory">Advisory & Consulting</option>
                    <option value="compliance">Compliance & Legal</option>
                    <option value="technology">Technology & Product</option>
                    <option value="operations">Operations & Support</option>
                    <option value="sales">Sales & Business Development</option>
                    <option value="data-analytics">Data & Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Tell us about yourself and your interest in Involv *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your background, experience, and what interests you about working with Involv..."
                  className="w-full px-4 py-2 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Your Message'}
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  We'll review your message and get back to you within a few business days.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

// Data
const whyInvolv = [
  {
    iconComponent: <Rocket className="w-8 h-8" />,
    title: "Impact & Growth",
    description: "Be part of a team that's transforming how Australian venues manage compliance and performance. Your work directly impacts venue success across the country."
  },
  {
    iconComponent: <Award className="w-8 h-8" />,
    title: "Industry Leadership",
    description: "Work alongside recognised industry veterans with decades of experience in gaming, compliance, and venue operations at the highest levels."
  },
  {
    iconComponent: <Lightbulb className="w-8 h-8" />,
    title: "Innovation & Technology",
    description: "Help build cutting-edge solutions that solve real problems for venues. We're pioneering purpose-built compliance and gaming optimisation tools."
  }
]

const cultureValues = [
  {
    iconComponent: <Target className="w-6 h-6" />,
    title: "Practical Excellence",
    description: "We believe in solutions that work in the real world, not just on paper. Everything we build must deliver genuine value to venue operators.",
    examples: [
      "Solutions tested in actual venue environments",
      "Feedback loops with real operators",
      "Continuous improvement based on practical results"
    ]
  },
  {
    iconComponent: <Handshake className="w-6 h-6" />,
    title: "Collaborative Partnership",
    description: "We work together as a team and with our clients as trusted partners, not distant consultants.",
    examples: [
      "Cross-functional collaboration on all projects",
      "Direct client engagement and feedback",
      "Shared responsibility for client success"
    ]
  },
  {
    iconComponent: <BookOpen className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "The regulatory and technology landscape is always evolving. We're committed to staying ahead and growing together.",
    examples: [
      "Regular industry training and development",
      "Conference attendance and knowledge sharing",
      "Cross-training across different specialties"
    ]
  },
  {
    iconComponent: <Zap className="w-6 h-6" />,
    title: "Agile & Responsive",
    description: "We move quickly to solve problems and adapt to changing client needs while maintaining the highest quality standards.",
    examples: [
      "Rapid response to client needs",
      "Iterative development and improvement",
      "Flexible working arrangements that support productivity"
    ]
  }
]

const roleTypes = [
  {
    iconComponent: <Scale className="w-6 h-6" />,
    title: "Advisory & Consulting",
    description: "Help venues navigate complex compliance requirements and optimise their operations.",
    skills: ["Gaming compliance expertise", "AML/regulatory knowledge", "Implementation experience"]
  },
  {
    iconComponent: <Shield className="w-6 h-6" />,
    title: "Compliance & Legal",
    description: "Provide regulatory expertise and ensure our solutions meet the highest compliance standards.",
    skills: ["Legal/regulatory background", "Gaming or AML experience", "Risk assessment"]
  },
  {
    iconComponent: <Monitor className="w-6 h-6" />,
    title: "Technology & Product",
    description: "Build and enhance our Assure and PrimeEdge platforms to deliver exceptional user experiences.",
    skills: ["Product management", "UX/UI design", "Data science"]
  },
  {
    iconComponent: <BarChart3 className="w-6 h-6" />,
    title: "Operations & Support",
    description: "Ensure smooth delivery of our services and provide exceptional support to our clients.",
    skills: ["Project management", "Client support", "Process optimisation"]
  },
  {
    iconComponent: <Target className="w-6 h-6" />,
    title: "Sales & Business Development",
    description: "Help grow our client base and build relationships within the venue community.",
    skills: ["B2B sales experience", "Gaming industry knowledge", "Relationship building"]
  },
  {
    iconComponent: <TrendingUp className="w-6 h-6" />,
    title: "Data & Analytics",
    description: "Turn gaming and compliance data into actionable insights that drive venue performance.",
    skills: ["Data science", "Gaming analytics", "Reporting and visualisation"]
  }
]

const benefits = [
  {
    iconComponent: <DollarSign className="w-6 h-6" />,
    title: "Competitive Package",
    description: "Competitive salary and performance bonuses as we grow."
  },
  {
    iconComponent: <Home className="w-6 h-6" />,
    title: "Flexible Working",
    description: "Remote-first culture...we don't actually have an office! (...but we rent some seats in shared working spaces) Flexible hours that work for you."
  },
  {
    iconComponent: <BookOpen className="w-6 h-6" />,
    title: "Learning & Development",
    description: "Professional development budget, conference attendance, and continuous learning opportunities."
  },
  {
    iconComponent: <Star className="w-6 h-6" />,
    title: "Industry Recognition",
    description: "Work with recognised industry leaders and build your reputation in the gaming and compliance sector."
  }
]

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch open job postings for the Involv site
    const jobPostings = await getJobPostings('involv', undefined, 'open')
    
    return {
      props: {
        jobPostings: jobPostings || [],
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching job postings:', error)
    
    return {
      props: {
        jobPostings: [],
      },
      revalidate: 300,
    }
  }
}