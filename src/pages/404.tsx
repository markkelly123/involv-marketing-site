// src/pages/404.tsx
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Home, Search, Mail } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Custom404: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Page Not Found | Involv</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Involv's homepage or explore our services." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        {/* Navigation */}
        <Navigation currentPath={router.pathname} />

        {/* Main 404 Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-16 min-h-[70vh]">
          <div className="max-w-2xl mx-auto text-center">
            {/* Large 404 */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-[#66899b] opacity-20 leading-none">
                404
              </h1>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-[#66899b] text-white font-semibold rounded-lg hover:bg-[#5a7a8a] transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>

              <Link 
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-[#66899b] text-[#66899b] font-semibold rounded-lg hover:bg-[#66899b] hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>

            {/* Quick links */}
            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400 mb-4">
                Popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/services/aml-advisory" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  AML Advisory
                </Link>
                <Link 
                  href="/services/risk-compliance" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  Risk & Compliance
                </Link>
                <Link 
                  href="/services/gaming-performance" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  Gaming Performance
                </Link>
                <Link 
                  href="/solutions" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  Solutions
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/insights" 
                  className="text-gray-300 hover:text-[#66899b] transition-colors"
                >
                  Insights
                </Link>
              </div>
            </div>

            {/* Contact option */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-3">
                Still can't find what you're looking for?
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-[#66899b] hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in touch with our team
              </Link>
            </div>

            {/* Back to previous page */}
            <div className="mt-6">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center text-gray-400 hover:text-[#66899b] transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back to previous page
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default Custom404