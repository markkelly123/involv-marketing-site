import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xgvyelyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          serviceInterest: formData.serviceInterest,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Involv Enquiry from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          serviceInterest: '',
          message: '',
          consent: false
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - Schedule a Consultation | Involv</title>
        <meta name="description" content="Ready to discuss your compliance and gaming performance challenges? Contact Involv's team of industry experts for a consultation tailored to your venue's needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Simplify Your Compliance?
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Every venue faces different challenges. Let's discuss your specific situation and how our team of industry experts can help you understand the breadth of your obligations, how you can effectively meet them, all while improving your operations.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a1d21] rounded-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Schedule a Consultation</h2>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours to schedule a time to discuss how we can help your business.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-medium">
                      Thank you for your enquiry! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 mb-6">
                    <p className="text-red-400 font-medium">
                      Sorry, there was an error submitting your form. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b]"
                        placeholder="your.email@venue.com.au"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Venue/Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b]"
                        placeholder="Your pub, club, or organisation"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b]"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-300 mb-2">
                      What are you most interested in?
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b]"
                    >
                      <option value="">Select a service area</option>
                      <option value="aml-advisory">AML Advisory - Understanding AUSTRAC requirements</option>
                      <option value="risk-compliance">Gaming Risk & Compliance - Regulatory obligations</option>
                      <option value="gaming-performance">Gaming Performance - EGM reporting and optimisation</option>
                      <option value="assure-software">Involv|Assure - Compliance management software</option>
                      <option value="primeedge-software">Involv|PrimeEdge - Gaming AI optimisation software</option>
                      <option value="general-enquiry">General enquiry</option>
                      <option value="not-sure">Not sure - help me understand my options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your situation *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0f1115] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#66899b] focus:outline-none focus:ring-1 focus:ring-[#66899b] resize-vertical"
                      placeholder="What challenges are you facing? What questions do you have about compliance or gaming performance? The more detail you can provide, the better we can help."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 mt-1 bg-[#0f1115] border border-gray-600 rounded focus:ring-[#66899b] focus:ring-2 text-[#66899b]"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-300">
                      I consent to Involv collecting and using my information to respond to this enquiry and provide relevant updates about services. View our{' '}
                      <Link href="/privacy-policy" className="text-[#66899b] hover:text-white underline">
                        Privacy Policy
                      </Link>. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full bg-[#66899b] text-white px-8 py-4 rounded-lg hover:bg-opacity-80 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-[#1a1d21] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">General Enquiries</p>
                    <a href="mailto:hello@involv.com.au" className="text-[#66899b] hover:text-white transition-colors">
                      hello@involv.com.au
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+61400000000" className="text-[#66899b] hover:text-white transition-colors">
                      1 800 INVOLV
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white">Monday - Friday, 8:30 AM - 6:00 PM AEST</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Involv */}
              <div className="bg-[#1a1d21] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Venues Choose Involv</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#66899b] w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{reason.title}</h4>
                        <p className="text-gray-400 text-xs mt-1">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-[#1a1d21] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Useful Resources</h3>
                <div className="space-y-3">
                  <Link href="/services" className="block text-[#66899b] hover:text-white transition-colors text-sm">
                    → Explore All Services
                  </Link>
                  <Link href="/about/our-team" className="block text-[#66899b] hover:text-white transition-colors text-sm">
                    → Meet Our Expert Team
                  </Link>
                  <Link href="/insights" className="block text-[#66899b] hover:text-white transition-colors text-sm">
                    → Latest Industry Insights
                  </Link>
                  <a href="https://assure.involv.com.au" className="block text-[#66899b] hover:text-white transition-colors text-sm">
                    → Involv|Assure Demo
                  </a>
                  <a href="https://primeedge.involv.com.au" className="block text-[#66899b] hover:text-white transition-colors text-sm">
                    → Involv|PrimeEdge Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-gray-300 text-lg">
                Quick answers to help you understand how we can assist your venue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1a1d21] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Have other questions?{' '}
                <a href="mailto:hello@involv.com.au" className="text-[#66899b] hover:text-white underline">
                  Email us directly
                </a>{' '}
                and we'll get back to you promptly.
              </p>
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
                  <li><Link href="/contact" className="text-[#66899b]">Contact</Link></li>
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

// Data
const reasons = [
  {
    title: "Industry Veterans",
    description: "80+ years combined experience managing Australia's largest gaming operations"
  },
  {
    title: "Practical Solutions",
    description: "We implement solutions that work in real venue operations, not just on paper"
  },
  {
    title: "Complete Coverage",
    description: "AML, gaming compliance, and performance optimisation all in one team"
  },
  {
    title: "Ongoing Support",
    description: "We stick around to help as regulations evolve and your business grows"
  }
]

const faqs = [
  {
    question: "How quickly can you help us?",
    answer: "We typically respond to enquiries within 24 hours and can start most engagements within one to two week depending on your needs. For urgent compliance matters, we can often provide immediate guidance."
  },
  {
    question: "Do you work with all types of venues?",
    answer: "Yes, we work with pubs, clubs, hotels, and other licensed gaming venues across Australia. Our experience spans single venues to large multi-site operations."
  },
  {
    question: "What makes you different from other consultants?",
    answer: "Our team has actually managed large-scale gaming operations. We're not theoretical consultants - we've lived the challenges you're facing and know what actually works."
  },
  {
    question: "Can you help with software implementation?",
    answer: "Absolutely. Our Involv Assure and PrimeEdge solutions include full implementation support, training, and ongoing assistance to ensure you get maximum value."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various ongoing support options from regular compliance health checks to continuous advisory relationships as your trusted compliance partner."
  },
  {
    question: "What jurisdictions do you cover?",
    answer: "We work across all Australian states and territories. Our team understands the specific requirements for each jurisdiction and can help you navigate multi-state compliance."
  }
]