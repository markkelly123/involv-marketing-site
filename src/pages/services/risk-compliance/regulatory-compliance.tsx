import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Scroll, FileText, Settings, Volume2, Landmark, Gamepad2, Moon, AlertTriangle } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export default function RegulatoryCompliance() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Regulatory Compliance - Involv | Navigate Complex Gaming & Liquor Obligations</title>
        <meta name="description" content="Navigate the complex web of gaming and liquor obligations across legislation, regulations, codes of practice, and licence conditions. Expert guidance to keep you compliant in today's enforcement environment." />
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
            <Link href="/services/risk-compliance" className="hover:text-white">Gaming Risk & Compliance</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Regulatory Compliance</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Navigate the Compliance Minefield
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Gaming and liquor regulations have always been complex. What's changed is that regulators are now actively enforcing them. With inspections increasing and fines becoming material, it's never been more important to understand your obligations and have proper controls in place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Compliance Review
                </Link>
                <a href="https://assure.involv.com.au" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  See Assure Platform
                </a>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">The Enforcement Reality</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Regulators are inspecting with increased frequency and invariably finding venues in breach. Enforcement orders are published on regulator websites regularly, with fines that are multiples of what compliance would cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Compliance Challenge */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Universe of Obligations Facing Gaming Venues</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                It's not just legislation anymore. The regulatory landscape spans multiple layers of requirements across federal and state jurisdictions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {obligationTypes.map((type) => (
                <div key={type.title} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#22252a] transition-colors h-full flex flex-col">
                  <div className="text-[#66899b] mb-4">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="text-2xl">
                        {type.iconComponent}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{type.description}</p>
                  <ul className="space-y-1 mt-auto">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-400">
                        <span className="text-[#66899b] mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="leading-tight">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Changed Enforcement Environment */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Changed: From Compliance Ignored to Actively Enforced</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The obligations have always existed, but enforcement was inconsistent. The cop is on the beat, and many venues are getting caught unprepared.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before - Old Enforcement */}
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">The Old Environment</h3>
                <p className="text-gray-500 text-sm">Compliance was often overlooked</p>
              </div>
              <ul className="space-y-3">
                {oldEnforcement.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After - New Enforcement */}
            <div className="bg-[#1a1d21] rounded-lg p-8 border-2 border-red-500">
              <div className="text-center mb-6">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Today's Reality</h3>
                <p className="text-red-300 text-sm">Active enforcement and real consequences</p>
              </div>
              <ul className="space-y-3">
                {newEnforcement.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Approach - FIXED LAYOUT */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Help You Navigate This Complexity</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Because we were also operators, we understand the practical realities of running venues while meeting regulatory requirements. We turn compliance into competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourApproach.map((step, index) => (
                <div key={step.title} className="text-center flex flex-col items-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                    <span className="text-xl font-bold text-black">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{step.description}</p>
                  <div className="bg-[#1a1d21] rounded p-3 w-full mt-auto">
                    <p className="text-[#66899b] text-xs font-medium">{step.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assure Platform Integration */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <a href="https://assure.involv.com.au" className="hover:opacity-80 transition-opacity">
                    <img src="/logo-involve-assure-white.svg" alt="Involv Assure" className="h-8 w-auto mr-4" />
                  </a>
                  <div>
                    <a href="https://assure.involv.com.au" className="hover:text-[#66899b] transition-colors">
                      <h3 className="text-2xl font-bold text-white">Supporting Technology</h3>
                    </a>
                    <p className="text-[#66899b] italic">A risk and compliance team in your browser</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Involv Assure was designed specifically to support our advisory work by becoming the system of record for all compliance activities. Everything is documented in one place, exactly what regulators want to see.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">What Assure Provides:</h4>
                  <ul className="space-y-2">
                    {assureFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <svg className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://assure.involv.com.au" 
                    className="bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center"
                  >
                    Explore Assure Platform
                  </a>
                  <Link 
                    href="/contact" 
                    className="border border-[#66899b] text-[#66899b] px-6 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center"
                  >
                    Get Advisory Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-[#0f1115] rounded-lg p-6">
                <div className="text-center mb-6">
                  <h4 className="font-semibold text-white mb-2">Compliance Made Practical</h4>
                  <p className="text-gray-400 text-sm">How Assure streamlines compliance operations</p>
                </div>
                <div className="space-y-4">
                  {practicalBenefits.map((benefit, idx) => (
                    <div key={idx} className="bg-[#1a1d21] rounded p-4">
                      <div className="flex items-start">
                        <span className="text-[#66899b] mr-2 mt-1 text-sm">✓</span>
                        <div>
                          <p className="text-white text-sm font-medium">{benefit.feature}</p>
                          <p className="text-gray-400 text-xs mt-1">{benefit.benefit}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Turn Compliance into Competitive Advantage?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue's regulatory situation is unique. Let's discuss your specific obligations and show you how to manage them efficiently while improving your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule Compliance Review
              </Link>
              <Link href="/services/risk-compliance" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Back to Risk & Compliance
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

// Data
const obligationTypes = [
  {
    iconComponent: <Scroll className="w-6 h-6" />,
    title: "Legislation & Regulations",
    description: "Primary laws and associated regulations that govern gaming and liquor operations across federal and state levels.",
    examples: [
      "Gaming Machine Acts (various states)",
      "Liquor Control Acts",
      "AML/CTF Act and regulations",
      "Privacy legislation",
      "Workplace safety regulations"
    ]
  },
  {
    iconComponent: <FileText className="w-6 h-6" />,
    title: "Codes of Practice",
    description: "Industry-specific codes that define expected standards and behaviours for gaming venue operations.",
    examples: [
      "Responsible gambling codes",
      "Gaming machine standards",
      "Advertising codes",
      "Customer interaction guidelines",
      "Harm minimisation protocols"
    ]
  },
  {
    iconComponent: <Settings className="w-6 h-6" />,
    title: "Operational Standards",
    description: "Technical and operational requirements that venues must meet for ongoing compliance and safety.",
    examples: [
      "Gaming machine technical standards",
      "Cash handling procedures",
      "Security requirements",
      "Record keeping standards",
      "Reporting protocols"
    ]
  },
  {
    iconComponent: <Volume2 className="w-6 h-6" />,
    title: "Regulator Guidelines",
    description: "Official guidance from regulators on how to interpret and comply with legislative requirements.",
    examples: [
      "AUSTRAC guidance notes",
      "Gaming regulator bulletins",
      "Licensing authority guidelines",
      "Compliance checklists",
      "Best practice recommendations"
    ]
  },
  {
    iconComponent: <Landmark className="w-6 h-6" />,
    title: "Ministerial Directions",
    description: "Direct instructions from government ministers that affect how venues must operate.",
    examples: [
      "Policy direction statements",
      "Operational directives",
      "Regulatory priority announcements",
      "Compliance expectations",
      "Industry reform directions"
    ]
  },
  {
    iconComponent: <Gamepad2 className="w-6 h-6" />,
    title: "LMO Rules & Licences",
    description: "Specific conditions attached to your gaming machine operator agreements and venue licences.",
    examples: [
      "Gaming machine allocation rules",
      "Revenue sharing arrangements",
      "Operational restrictions",
      "Specific licence conditions",
      "Site-specific requirements"
    ]
  }
]

const oldEnforcement = [
  "Inspections were infrequent and often announced",
  "Non-compliance rarely resulted in penalties",
  "Venues could operate informally without detailed records",
  "Regulators focused on serious breaches only",
  "Compliance was seen as a box-ticking exercise"
]

const newEnforcement = [
  "Regular, unannounced inspections across all venues",
  "Enforcement orders published on regulator websites",
  "Material fines that significantly impact venue profitability",
  "Detailed documentation and evidence required",
  "Proactive compliance programs expected, not optional"
]

const ourApproach = [
  {
    title: "Map Your Universe",
    description: "Identify all obligations that apply to your specific venue type, location, and operations.",
    outcome: "Complete clarity on what you must comply with"
  },
  {
    title: "Design Controls",
    description: "Create practical control systems that effectively meet or mitigate compliance risks.",
    outcome: "Robust frameworks that work in real operations"
  },
  {
    title: "Implement Systems",
    description: "Put controls in place with proper documentation and staff training for sustainable compliance.",
    outcome: "Operational compliance that becomes routine"
  },
  {
    title: "Test & Improve",
    description: "Regular testing and refinement ensures controls remain effective as requirements evolve.",
    outcome: "Continuous improvement and competitive advantage"
  }
]

const assureFeatures = [
  "System of record for all compliance activities and documentation",
  "Automated reminders for staff retraining and licence renewals",
  "Digital checklists with companion tablet app for venue operations",
  "Immediate fault logging and remediation action triggers",
  "Comprehensive regulatory record storage and retrieval",
  "Real-time compliance status tracking and reporting"
]

const practicalBenefits = [
  {
    feature: "Digital compliance checklists",
    benefit: "Staff complete tasks consistently with automatic documentation"
  },
  {
    feature: "Automated training reminders",
    benefit: "Never miss RSA, RSG, or other mandatory training deadlines"
  },
  {
    feature: "Fault condition logging",
    benefit: "Issues trigger immediate remediation actions and create audit trails"
  },
  {
    feature: "Regulatory document storage",
    benefit: "All compliance records organised and instantly accessible for inspections"
  }
]