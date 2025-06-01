import Head from 'next/head'
import Link from 'next/link'

export default function Risk() {
  return (
    <>
      <Head>
        <title>Risk Management - Involv | Gaming & Compliance Risk Assessment and Mitigation</title>
        <meta name="description" content="Transform regulatory obligations into manageable risks with proper assessment, control design, and testing. Create risk heatmaps and build robust risk management frameworks for gaming venues." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Brand Strip */}
        <div className="w-full bg-[#0f1115] text-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-end gap-x-6">
            <a href="https://assure.involv.com.au">
              <img src="/logo-involve-assure-white.svg" alt="Assure" className="h-4 w-auto" />
            </a>
            <a href="https://primeedge.involv.com.au">
              <img src="/logo-involve-primeedge-white.svg" alt="PrimeEdge" className="h-4 w-auto" />
            </a>
            <a href="https://lane.involv.com.au">
              <img src="/logo-lane-white.svg" alt="Lane Consulting" className="h-4 w-auto" />
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="bg-[#0f1115] text-white border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
            <Link href="/" className="flex items-center">
              <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto" />
            </Link>
            <nav className="absolute left-1/2 transform -translate-x-1/2 text-sm flex space-x-6">
              <Link href="/services" className="text-[#66899b] font-medium">Services</Link>
              <Link href="/solutions" className="hover:text-[#66899b] transition-colors">Solutions</Link>
              <Link href="/insights" className="hover:text-[#66899b] transition-colors">Insights</Link>
            </nav>
            <div className="flex items-center text-sm">
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-[#66899b] transition-colors">About</Link>
                <Link href="/contact" className="hover:text-[#66899b] transition-colors">Contact</Link>
              </div>
              <Link href="/login" className="ml-[60px] text-sm font-medium bg-white text-black px-4 py-1.5 rounded hover:bg-gray-200 transition">
                Login
              </Link>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/risk-compliance" className="hover:text-white">Gaming Risk & Compliance</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Risk Management</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn Regulatory Obligations into Manageable Risks
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Every compliance obligation creates risk for your venue. We help you assess these risks, design effective controls to mitigate them, and create clear visual frameworks that show exactly where you stand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Get Risk Assessment
                </Link>
                <Link href="/services/risk-compliance/regulatory-compliance" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Regulatory Compliance
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center">
                <div className="bg-[#66899b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">From Obligations to Risk Control</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We map regulatory obligations to specific risks, assess their impact and likelihood, then design controls that reduce your risk to acceptable levels. Clear, visual, manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management Process */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Risk Management Process</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From complex regulatory obligations to clear, manageable risk frameworks with effective controls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riskProcess.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < riskProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 transform translate-x-4 -translate-y-1/2 z-0"></div>
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-black">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                    <div className="bg-[#1a1d21] rounded p-3">
                      <p className="text-[#66899b] text-xs font-medium">{step.output}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Categories */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Risk Categories for Gaming Venues</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Different types of risks require different approaches to assessment and control. We understand all the risk categories affecting gaming venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskCategories.map((category) => (
              <div key={category.title} className="bg-[#1a1d21] rounded-lg p-6 hover:bg-[#22252a] transition-colors">
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 ${category.colorClass} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 text-center">{category.description}</p>
                <ul className="space-y-1">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-400">
                      <span className="text-[#66899b] mr-2 mt-1">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Heatmaps Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visual Risk Management with Heatmaps</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We create clear visual representations showing your risk profile before and after implementing controls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Inherent Risk */}
              <div className="bg-[#1a1d21] rounded-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Inherent Risk Heatmap</h3>
                  <p className="text-gray-400 text-sm">Your risk exposure without controls</p>
                </div>
                
                <div className="bg-[#0f1115] rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-5 gap-1 mb-4">
                    {inherentRiskMatrix.map((cell, index) => (
                      <div 
                        key={index} 
                        className={`h-8 flex items-center justify-center text-xs font-bold ${cell.class}`}
                      >
                        {cell.value}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Low Impact</span>
                    <span>High Impact</span>
                  </div>
                  <div className="flex flex-col justify-between text-xs text-gray-400 absolute -ml-8 h-32">
                    <span className="transform -rotate-90 origin-center">High Likelihood</span>
                    <span className="transform -rotate-90 origin-center">Low Likelihood</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {inherentRiskExamples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-300">
                      <span className="text-red-400 mr-2 mt-1">■</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Residual Risk */}
              <div className="bg-[#1a1d21] rounded-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Residual Risk Heatmap</h3>
                  <p className="text-gray-400 text-sm">Your risk exposure with effective controls</p>
                </div>
                
                <div className="bg-[#0f1115] rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-5 gap-1 mb-4">
                    {residualRiskMatrix.map((cell, index) => (
                      <div 
                        key={index} 
                        className={`h-8 flex items-center justify-center text-xs font-bold ${cell.class}`}
                      >
                        {cell.value}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Low Impact</span>
                    <span>High Impact</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {residualRiskExamples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-300">
                      <span className="text-green-400 mr-2 mt-1">■</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Control Effectiveness */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Building and Testing Effective Controls</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Controls are only effective if they're properly designed, implemented, and regularly tested. We ensure your controls actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {controlTypes.map((control) => (
              <div key={control.title} className="bg-[#1a1d21] rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-[#66899b] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{control.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{control.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 text-center">{control.description}</p>
                
                <div className="space-y-3">
                  {control.examples.map((example, idx) => (
                    <div key={idx} className="bg-[#0f1115] rounded p-3">
                      <p className="text-white text-xs font-medium mb-1">{example.control}</p>
                      <p className="text-gray-400 text-xs">{example.testing}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assure Integration */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <a href="https://assure.involv.com.au" className="hover:opacity-80 transition-opacity">
                      <img src="/logo-involve-assure-white.svg" alt="Involv Assure" className="h-8 w-auto mr-4" />
                    </a>
                    <div>
                      <a href="https://assure.involv.com.au" className="hover:text-[#66899b] transition-colors">
                        <h3 className="text-2xl font-bold text-white">Risk Management Technology</h3>
                      </a>
                      <p className="text-[#66899b] italic">Complete risk visibility and control testing</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Assure provides the technology backbone for comprehensive risk management, from initial assessment through ongoing control testing and monitoring.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Risk Management Capabilities:</h4>
                    <ul className="space-y-2">
                      {assureRiskFeatures.map((feature, idx) => (
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
                      Explore Risk Management Features
                    </a>
                    <Link 
                      href="/contact" 
                      className="border border-[#66899b] text-[#66899b] px-6 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center"
                    >
                      Get Risk Assessment
                    </Link>
                  </div>
                </div>

                <div className="bg-[#0f1115] rounded-lg p-6">
                  <div className="text-center mb-6">
                    <h4 className="font-semibold text-white mb-2">Risk Dashboard Example</h4>
                    <p className="text-gray-400 text-sm">Real-time risk status and control effectiveness</p>
                  </div>
                  
                  <div className="space-y-4">
                    {dashboardMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-[#1a1d21] rounded p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white text-sm font-medium">{metric.category}</span>
                          <span className={`text-xs px-2 py-1 rounded ${metric.statusClass}`}>
                            {metric.status}
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${metric.progressClass}`} 
                            style={{ width: `${metric.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Risk Management?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every venue has unique risks based on their operations, location, and regulatory environment. Let's assess your specific risk profile and design effective controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule Risk Assessment
              </Link>
              <Link href="/services/risk-compliance" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Back to Risk & Compliance
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

// Data
const riskProcess = [
  {
    title: "Map Obligations to Risks",
    description: "Identify specific risks stemming from each regulatory obligation affecting your venue.",
    output: "Comprehensive risk register linked to obligations"
  },
  {
    title: "Assess & Rate Risks",
    description: "Evaluate impact and likelihood to create risk ratings and inherent risk heatmaps.",
    output: "Inherent risk assessment and visual heatmap"
  },
  {
    title: "Design Controls",
    description: "Create targeted controls to mitigate identified risks to acceptable levels.",
    output: "Control framework mapped to specific risks"
  },
  {
    title: "Test & Monitor",
    description: "Regular testing ensures controls remain effective, creating residual risk profiles.",
    output: "Residual risk heatmap and ongoing monitoring"
  }
]

const riskCategories = [
  {
    title: "Regulatory Compliance Risk",
    icon: "⚖️",
    colorClass: "bg-red-500",
    description: "Risk of breaching regulatory requirements and facing enforcement action.",
    examples: [
      "Gaming licence condition violations",
      "AML/CTF program deficiencies",
      "Liquor compliance breaches",
      "Safer gambling requirement failures",
      "Reporting and documentation gaps"
    ]
  },
  {
    title: "Operational Risk",
    icon: "⚙️",
    colorClass: "bg-orange-500",
    description: "Risk of operational failures affecting venue performance and compliance.",
    examples: [
      "Gaming machine malfunctions",
      "Cash handling procedure failures",
      "Staff training inadequacies",
      "System and process breakdowns",
      "Customer service failures"
    ]
  },
  {
    title: "Financial Risk",
    icon: "💰",
    colorClass: "bg-yellow-500",
    description: "Risk of financial loss through penalties, fines, or operational impacts.",
    examples: [
      "Regulatory penalties and fines",
      "Revenue loss from compliance failures",
      "Increased operational costs",
      "Legal and professional fees",
      "Reputational damage costs"
    ]
  },
  {
    title: "Reputational Risk",
    icon: "🏛️",
    colorClass: "bg-blue-500",
    description: "Risk of damage to venue reputation and stakeholder relationships.",
    examples: [
      "Public enforcement order publication",
      "Media coverage of compliance failures",
      "Community trust damage",
      "Stakeholder confidence loss",
      "Brand reputation impact"
    ]
  },
  {
    title: "Strategic Risk",
    icon: "🎯",
    colorClass: "bg-purple-500",
    description: "Risk of strategic objectives being compromised by compliance or operational issues.",
    examples: [
      "Licence suspension or cancellation",
      "Growth plan disruption",
      "Investment impact",
      "Partnership relationship damage",
      "Market position erosion"
    ]
  },
  {
    title: "Technology Risk",
    icon: "💻",
    colorClass: "bg-green-500",
    description: "Risk from technology failures affecting compliance and operations.",
    examples: [
      "Gaming system failures",
      "Data security breaches",
      "Backup and recovery failures",
      "Software compliance issues",
      "Integration system problems"
    ]
  }
]

const inherentRiskMatrix = [
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'VH', class: 'bg-red-800 text-white' },
  { value: 'VH', class: 'bg-red-800 text-white' },
  { value: 'VH', class: 'bg-red-800 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'VH', class: 'bg-red-800 text-white' },
  { value: 'VH', class: 'bg-red-800 text-white' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' }
]

const inherentRiskExamples = [
  "High risk: Gaming licence breach with material penalties",
  "Very High risk: AML program deficiency with AUSTRAC enforcement",
  "High risk: Unsafe gambling practices affecting vulnerable customers"
]

const residualRiskMatrix = [
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'H', class: 'bg-red-600 text-white' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'M', class: 'bg-orange-500 text-white' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'L', class: 'bg-green-500 text-white' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'VL', class: 'bg-green-300 text-black' },
  { value: 'L', class: 'bg-green-500 text-white' }
]

const residualRiskExamples = [
  "Low risk: Gaming licence compliance with effective monitoring controls",
  "Low risk: AML program with regular testing and documented procedures",
  "Very Low risk: Safer gambling with automated intervention systems"
]

const controlTypes = [
  {
    title: "Preventive Controls",
    icon: "🛡️",
    description: "Controls designed to prevent risks from occurring in the first place.",
    examples: [
      {
        control: "Staff training programs for gaming and liquor compliance",
        testing: "Test: Monthly competency assessments and refresher training"
      },
      {
        control: "Automated gaming machine compliance checks",
        testing: "Test: Daily system monitoring and weekly manual verification"
      },
      {
        control: "Customer due diligence procedures for AML compliance",
        testing: "Test: Random sample testing of customer files quarterly"
      }
    ]
  },
  {
    title: "Detective Controls",
    icon: "🔍",
    description: "Controls that identify when risks have materialised or controls have failed.",
    examples: [
      {
        control: "Transaction monitoring for unusual activity",
        testing: "Test: Weekly review of monitoring alerts and investigation procedures"
      },
      {
        control: "Regular compliance audits and inspections",
        testing: "Test: Annual independent review of audit findings and remediation"
      },
      {
        control: "Gaming floor surveillance and monitoring",
        testing: "Test: Monthly review of surveillance procedures and incident logs"
      }
    ]
  },
  {
    title: "Corrective Controls",
    icon: "🔧",
    description: "Controls that respond to and correct issues when they are identified.",
    examples: [
      {
        control: "Incident response procedures for compliance breaches",
        testing: "Test: Quarterly simulation exercises and response time measurement"
      },
      {
        control: "Remediation programs for control deficiencies",
        testing: "Test: Semi-annual review of remediation effectiveness and timeliness"
      },
      {
        control: "Customer complaint resolution processes",
        testing: "Test: Monthly review of complaint handling and resolution times"
      }
    ]
  }
]

const assureRiskFeatures = [
  "Interactive risk heatmaps showing inherent and residual risk profiles",
  "Control effectiveness testing with automated scheduling and reminders",
  "Risk register linking obligations to specific risks and controls",
  "Real-time risk dashboard with status indicators and alerts",
  "Control testing documentation and evidence collection",
  "Risk trend analysis and reporting for management oversight"
]

const dashboardMetrics = [
  {
    category: "Gaming Compliance",
    status: "Good",
    progress: 85,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "23 of 27 controls tested and effective this quarter"
  },
  {
    category: "AML/CTF Program",
    status: "Review Due",
    progress: 70,
    statusClass: "bg-orange-500 text-white",
    progressClass: "bg-orange-500",
    description: "4 controls require testing, 2 remediation actions open"
  },
  {
    category: "Liquor Compliance",
    status: "Excellent",
    progress: 95,
    statusClass: "bg-green-500 text-white",
    progressClass: "bg-green-500",
    description: "All controls tested effective, no open issues"
  },
  {
    category: "Staff Training",
    status: "Action Required",
    progress: 60,
    statusClass: "bg-red-500 text-white",
    progressClass: "bg-red-500",
    description: "5 staff require RSA renewal, 3 require RSG update"
  }
]