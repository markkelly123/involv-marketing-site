import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Rocket, Award, Lightbulb, Target, Handshake, BookOpen, Zap, Scale, Shield, Monitor, BarChart3, TrendingUp, DollarSign, Home, Star } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function Careers() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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

        {/* Current Status */}
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

        {/* Why Work at Involv */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at Involv</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're building a company where industry expertise meets innovation, and where every team member has the opportunity to make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyInvolv.map((reason, index) => (
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
              {cultureValues.map((value, index) => (
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
                        {value.examples.map((example, idx) => (
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
            {roleTypes.map((role, index) => (
              <div key={index} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#1f2328] transition-colors">
                <div className="text-[#66899b] mb-4">
                  <div className="text-2xl">
                    {role.iconComponent}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{role.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{role.description}</p>
                <div className="space-y-1">
                  {role.skills.map((skill, idx) => (
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
              {benefits.map((benefit, index) => (
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium"
                >
                  Send Your Message
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  We'll review your message and get back to you within a few business days.
                </p>
              </div>
            </form>
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