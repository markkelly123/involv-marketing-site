import Link from 'next/link'
import { useState } from 'react'

interface NavigationProps {
  currentPath?: string
}

export default function Navigation({ currentPath = '' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileRiskComplianceOpen, setMobileRiskComplianceOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const isActiveLink = (href: string) => {
    if (href === '/' && currentPath === '/') return true
    if (href !== '/' && currentPath.startsWith(href)) return true
    return false
  }

  const getLinkClasses = (href: string, isDropdownItem = false) => {
    const baseClasses = isDropdownItem 
      ? "block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors"
      : "hover:text-[#66899b] transition-colors"
    
    const activeClasses = isActiveLink(href) 
      ? isDropdownItem 
        ? "text-[#66899b] bg-gray-700" 
        : "text-[#66899b] font-medium"
      : isDropdownItem 
        ? "text-gray-300 hover:text-white" 
        : "text-white"
    
    return `${baseClasses} ${activeClasses}`
  }

  return (
    <>
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 text-sm space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={getLinkClasses('/services')}>
                Services
                <svg className="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Services Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-[#1a1d21] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/services/aml-advisory" className={getLinkClasses('/services/aml-advisory', true)}>
                    AML Advisory
                  </Link>
                  
                  {/* Gaming Risk & Compliance with Nested Menu */}
                  <div className="relative group/nested">
                    <Link href="/services/risk-compliance" className={`${getLinkClasses('/services/risk-compliance', true)} flex items-center justify-between`}>
                      Gaming Risk & Compliance
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    
                    {/* Nested Flyout Menu */}
                    <div className="absolute left-full top-0 ml-1 w-48 bg-[#1a1d21] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                      <div className="py-2">
                        <Link href="/services/risk-compliance/regulatory-compliance" className={getLinkClasses('/services/risk-compliance/regulatory-compliance', true)}>
                          Regulatory Compliance
                        </Link>
                        <Link href="/services/risk-compliance/risk" className={getLinkClasses('/services/risk-compliance/risk', true)}>
                          Risk
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/services/gaming-performance" className={getLinkClasses('/services/gaming-performance', true)}>
                    Gaming Performance
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <Link href="/solutions" className={getLinkClasses('/solutions')}>
              Solutions
            </Link>

            {/* Insights */}
            <Link href="/insights" className={getLinkClasses('/insights')}>
              Insights
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link href="/about" className={getLinkClasses('/about')}>
                About
                <svg className="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* About Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-[#1a1d21] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/about/why-involv" className={getLinkClasses('/about/why-involv', true)}>
                    Why Involv
                  </Link>
                  <Link href="/about/our-team" className={getLinkClasses('/about/our-team', true)}>
                    Our Team
                  </Link>
                  <Link href="/about/careers" className={getLinkClasses('/about/careers', true)}>
                    Careers
                  </Link>
                  <Link href="/about/news-press-releases" className={getLinkClasses('/about/news-press-releases', true)}>
                    News & Press
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side - Contact and Login */}
          <div className="flex items-center text-sm">
            <div className="hidden lg:flex space-x-6">
              <Link href="/contact" className={getLinkClasses('/contact')}>
                Contact
              </Link>
            </div>
            <Link href="/login" className="ml-[60px] text-sm font-medium bg-white text-black px-4 py-1.5 rounded hover:bg-gray-200 transition">
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-4 p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a1d21] border-t border-gray-700">
            <div className="px-4 py-4 space-y-2">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-white hover:text-[#66899b] transition-colors"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/services/aml-advisory" className={getLinkClasses('/services/aml-advisory', true)}>
                      AML Advisory
                    </Link>
                    
                    {/* Gaming Risk & Compliance Nested Accordion */}
                    <div>
                      <button
                        onClick={() => setMobileRiskComplianceOpen(!mobileRiskComplianceOpen)}
                        className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-white transition-colors"
                      >
                        Gaming Risk & Compliance
                        <svg className={`w-4 h-4 transition-transform ${mobileRiskComplianceOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {mobileRiskComplianceOpen && (
                        <div className="pl-4 space-y-2">
                          <Link href="/services/risk-compliance/regulatory-compliance" className={getLinkClasses('/services/risk-compliance/regulatory-compliance', true)}>
                            Regulatory Compliance
                          </Link>
                          <Link href="/services/risk-compliance/risk" className={getLinkClasses('/services/risk-compliance/risk', true)}>
                            Risk
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    <Link href="/services/gaming-performance" className={getLinkClasses('/services/gaming-performance', true)}>
                      Gaming Performance
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <Link href="/solutions" className={`block py-2 ${getLinkClasses('/solutions')}`}>
                Solutions
              </Link>

              {/* Insights */}
              <Link href="/insights" className={`block py-2 ${getLinkClasses('/insights')}`}>
                Insights
              </Link>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between py-2 text-white hover:text-[#66899b] transition-colors"
                >
                  About
                  <svg className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/about/why-involv" className={getLinkClasses('/about/why-involv', true)}>
                      Why Involv
                    </Link>
                    <Link href="/about/our-team" className={getLinkClasses('/about/our-team', true)}>
                      Our Team
                    </Link>
                    <Link href="/about/careers" className={getLinkClasses('/about/careers', true)}>
                      Careers
                    </Link>
                    <Link href="/about/news-press-releases" className={getLinkClasses('/about/news-press-releases', true)}>
                      News & Press
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link href="/contact" className={`block py-2 ${getLinkClasses('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}