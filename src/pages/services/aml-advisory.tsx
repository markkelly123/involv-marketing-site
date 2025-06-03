import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FileText, Users, Search, File, Volume2, BarChart3, Shield, Target, Club, GraduationCap, RefreshCw, MessageSquare, Diamond, Heart } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function AMLAdvisory() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>AML Advisory - Involv | Stop Fearing AUSTRAC Audits</title>
        <meta name="description" content="Transform AUSTRAC compliance from burden to confidence. Expert AML/CTF Program implementation and review from gaming AML legal professionals who understand gaming venues." />
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
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">AML Advisory</span>
          </nav>
        </div>

        {/* Hero Section - Problem-Focused */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Clear on Your AML Obligations
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Lingering doubt as to what your AUSTRAC obligations mean for your venue? Need help implementing AML programs that meet regulatory standards? We help you understand your requirements and build compliance that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get AML Guidance
                </Link>
                <Link href="/insights" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  AML Insights
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AUSTRAC Expertise</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team includes AML legal professionals who have worked with AUSTRAC and know exactly what regulators look for. We understand both regulatory expectations and the practical realities of venue operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AML Problems Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common AML Questions from Venue Operators</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                AML compliance can be complex to understand and implement. These are the questions and concerns we help venues address.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {amlProblems.map((problem) => (
                <div key={problem.title} className="bg-[#1a1d21] rounded-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-start mb-4">
                    <div className="text-red-500 mr-3 mt-1">
                      <div className="text-2xl">
                        {problem.iconComponent}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{problem.description}</p>
                  <p className="text-red-400 text-xs italic">"{problem.quote}"</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-[#66899b] text-lg font-medium mb-4">Sound familiar? You&apos;re not alone.</p>
              <p className="text-gray-300">We&apos;ve helped many venues transform these fears into confidence.</p>
            </div>
          </div>
        </section>

        {/* How We Solve These Problems */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Transform AML Compliance from Burden to Confidence</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We don&apos;t just write policies and walk away. Our proven approach ensures your AML program actually works in your day-to-day operations while keeping you audit-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amlSolutions.map((solution) => (
              <div key={solution.title} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#22252a] transition-colors">
                <div className="text-[#66899b] mb-4">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl">
                      {solution.iconComponent}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                <p className="text-[#66899b] text-sm font-medium mb-3">{solution.outcome}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.description}</p>
                <ul className="space-y-1">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-400">
                      <svg className="w-3 h-3 text-[#66899b] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AUSTRAC Expertise Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">An Approach Respected by AUSTRAC</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our team includes gaming AML legal professionals who are expert in this space. We know exactly what regulators look for because we have hands-on experience working with AUSTRAC.
                  </p>
                  <div className="space-y-4">
                    {austraExpertise.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#66899b] w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-black font-bold text-xs">✓</span>
                        </div>
                        <p className="text-gray-300 text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#0f1115] rounded-lg p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#66899b]">Proven Track Record</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">Dozens</div>
                      <div className="text-gray-400 text-xs">AML Programs Implemented</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-gray-400 text-xs">Audit Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">Zero</div>
                      <div className="text-gray-400 text-xs">AUSTRAC Penalties</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-gray-400 text-xs">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Proven AML Implementation Process</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Four steps that take you from AML anxiety to audit confidence. Developed through hundreds of successful implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amlProcess.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index < amlProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20">
                    <span className="text-xl font-bold text-black">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                  <p className="text-[#66899b] text-xs italic">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Teasers */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">From Anxiety to Audit Confidence</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Real results from venues who went from fearing AUSTRAC to welcoming audits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-[#1a1d21] rounded-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2 text-[#66899b] flex justify-center">
                      {story.iconComponent}
                    </div>
                    <h3 className="font-semibold text-white">{story.venue}</h3>
                    <p className="text-gray-400 text-sm">{story.type}</p>
                  </div>
                  <blockquote className="text-gray-300 text-sm italic mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-[#66899b] text-xs font-medium">
                    Result: {story.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Clear on Your AML Requirements?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue's AML situation is different. Let&apos;s discuss your specific circumstances and how we can help you understand your obligations and build effective compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Get AML Guidance
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                View All Services
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
                  <li><Link href="/services/aml-advisory" className="text-[#66899b]">AML Advisory</Link></li>
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
const amlProblems = [
  {
    title: "Program Requirements",
    iconComponent: <FileText className="w-6 h-6" />,
    description: "Understanding what an AML/CTF program needs to include and how it applies to your venue.",
    quote: "What exactly do we need in our AML program and how detailed does it have to be?"
  },
  {
    title: "Staff Responsibilities",
    iconComponent: <Users className="w-6 h-6" />,
    description: "Making sure staff understand their AML obligations and know what to do in different situations.",
    quote: "How do we make sure our staff know what they&apos;re supposed to do for AML compliance?"
  },
  {
    title: "Customer Due Diligence",
    iconComponent: <Search className="w-6 h-6" />,
    description: "Understanding when and how to conduct customer identification and verification.",
    quote: "When do we need to ask for ID and what information do we actually need to collect?"
  },
  {
    title: "Documentation Requirements",
    iconComponent: <File className="w-6 h-6" />,
    description: "Keeping proper records and documentation that meet AUSTRAC standards.",
    quote: "What records do we need to keep and for how long? How should we organise everything?"
  },
  {
    title: "Regulatory Updates",
    iconComponent: <Volume2 className="w-6 h-6" />,
    description: "Staying current with changes to AML requirements and understanding what they mean.",
    quote: "How do we keep up with changes to AML rules and know what we need to update?"
  },
  {
    title: "Reporting Obligations",
    iconComponent: <BarChart3 className="w-6 h-6" />,
    description: "Understanding when and how to submit required reports to AUSTRAC.",
    quote: "What reports do we need to submit and how do we know if we&apos;re doing it correctly?"
  }
]

const amlSolutions = [
  {
    iconComponent: <Shield className="w-6 h-6" />,
    title: "AUSTRAC-Ready Programs",
    outcome: "→ Audit confidence, not anxiety",
    description: "Complete AML/CTF programs designed by gaming AML legal professionals who know exactly what regulators expect to see.",
    benefits: [
      "Programs that pass regulatory scrutiny every time",
      "Clear documentation that auditors understand",
      "Staff confidence in their AML responsibilities",
      "24/7 support when questions arise"
    ]
  },
  {
    iconComponent: <FileText className="w-6 h-6" />,
    title: "Independent Reviews & Health Checks",
    outcome: "→ Know exactly where you stand",
    description: "Comprehensive assessment of your current AML position, identifying gaps before regulators do.",
    benefits: [
      "Clear compliance health score and action plan",
      "Gap identification and remediation roadmap",
      "AUSTRAC readiness assessment",
      "Ongoing monitoring and improvement"
    ]
  },
  {
    iconComponent: <Target className="w-6 h-6" />,
    title: "Risk Assessment & Profiling",
    outcome: "→ Targeted, efficient compliance",
    description: "Sophisticated risk assessment methodologies that focus your compliance efforts where they matter most.",
    benefits: [
      "Tailored risk profiles for your specific operations",
      "Efficient resource allocation for compliance",
      "Clear customer due diligence procedures",
      "Defensible risk-based approach"
    ]
  },
  {
    iconComponent: <GraduationCap className="w-6 h-6" />,
    title: "Staff Training That Sticks",
    outcome: "→ Confident, capable team",
    description: "Role-specific training programs that ensure every team member understands their AML obligations and can implement them correctly.",
    benefits: [
      "Training tailored to specific venue roles",
      "Scenario-based learning that sticks",
      "Regular refresher training programs",
      "Compliance culture development"
    ]
  },
  {
    iconComponent: <RefreshCw className="w-6 h-6" />,
    title: "Ongoing Compliance Support",
    outcome: "→ Stay compliant as regulations evolve",
    description: "Continuous support to maintain compliance as regulations change and your business grows.",
    benefits: [
      "Regular compliance check-ins and updates",
      "Immediate support when issues arise",
      "Regulatory change notifications and guidance",
      "Program evolution as your business grows"
    ]
  },
  {
    iconComponent: <MessageSquare className="w-6 h-6" />,
    title: "AUSTRAC Liaison & Representation",
    outcome: "→ Professional regulatory relationship",
    description: "Expert representation and communication with AUSTRAC when you need it most.",
    benefits: [
      "Professional AUSTRAC correspondence",
      "Expert guidance during regulatory inquiries",
      "Breach remediation and response",
      "Industry advocacy and representation"
    ]
  }
]

const austraExpertise = [
  "Gaming AML legal professionals that are specialist in the needs of pub and club venue operators",
  "Hundreds of successful AML implementations with zero AUSTRAC penalties for our clients",
  "Deep understanding of gaming venue operations and customer flow patterns",
  "Proven track record of turning compliance anxiety into audit confidence",
  "24/7 support availability for urgent compliance questions",
  "Ongoing regulatory change monitoring and client notifications"
]

const amlProcess = [
  {
    title: "Audit Your Position",
    description: "Comprehensive review of your current AML compliance status and risk exposure.",
    outcome: "Know exactly where you stand"
  },
  {
    title: "Design Your Solution",
    description: "Custom AML/CTF program tailored to your venue&apos;s specific operations and risks.",
    outcome: "AUSTRAC-ready program"
  },
  {
    title: "Implement & Train",
    description: "Hands-on implementation with comprehensive staff training and documentation.",
    outcome: "Confident, capable team"
  },
  {
    title: "Monitor & Support",
    description: "Ongoing compliance monitoring and support to ensure sustained regulatory confidence.",
    outcome: "Peace of mind"
  }
]

const successStories = [
  {
    venue: "Regional Club",
    type: "Gaming & Hospitality",
    iconComponent: <Club className="w-8 h-8" />,
    quote: "We went from dreading AUSTRAC contact to actually welcoming their visit. The confidence Involv gave us was life-changing.",
    result: "Perfect AUSTRAC audit score"
  },
  {
    venue: "Metropolitan Hotel",
    type: "Gaming Venue",
    iconComponent: <Diamond className="w-8 h-8" />,
    quote: "Finally, our staff know exactly what to do for AML compliance. No more guessing or anxiety about getting it wrong.",
    result: "100% staff confidence rating"
  },
  {
    venue: "Family-owned Group of Hotels",
    type: "Multi-venue Operation",
    iconComponent: <Heart className="w-8 h-8" />,
    quote: "Involv's program scales perfectly across all our venues. Consistent compliance without the complexity.",
    result: "Streamlined 3-venue operation"
  }
]