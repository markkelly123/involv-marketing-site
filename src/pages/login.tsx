import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShieldPlus, Brain, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Login() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Login - Involv</title>
        <meta name="description" content="Access your Involv software solutions - Assure for compliance management and PrimeEdge for gaming optimisation." />
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

        {/* Login Page Content */}
        <section className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-4xl mx-auto w-full">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Access Your Involv Software
              </h1>
            </div>

            {/* Login Cards */}
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              
              {/* Assure Card */}
              <a 
                href="https://assure.involv.com.au/login"
                className="group block bg-[#1a1d21] rounded-lg p-8 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-xl hover:shadow-[#66899b]/20 hover:border hover:border-[#66899b]/30 cursor-pointer transform hover:scale-105"
              >
                <div className="text-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <img 
                      src="/logo-involv-assure-white2.svg" 
                      alt="Involv Assure"
                      className="h-8 w-auto mx-auto group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-[#66899b] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <ShieldPlus className="w-8 h-8 text-[#66899b]" />
                  </div>
                  
                  {/* Content */}
                  <p className="text-[#66899b] italic text-sm mb-4">
                    A risk and compliance team in your browser.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#66899b] transition-colors duration-300">
                    Governance, Risk & Compliance Management
                  </h3>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-center text-[#66899b] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Login to Assure</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>

              {/* PrimeEdge Card */}
              <a 
                href="https://primeedge.involv.com.au/login"
                className="group block bg-[#1a1d21] rounded-lg p-8 hover:bg-[#1f2328] transition-all duration-300 hover:shadow-xl hover:shadow-[#66899b]/20 hover:border hover:border-[#66899b]/30 cursor-pointer transform hover:scale-105"
              >
                <div className="text-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <img 
                      src="/logo-involv-primeedge-white2.svg" 
                      alt="Involv PrimeEdge"
                      className="h-8 w-auto mx-auto group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-[#66899b] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <Brain className="w-8 h-8 text-[#66899b]" />
                  </div>
                  
                  {/* Content */}
                  <p className="text-[#66899b] italic text-sm mb-4">
                    The science behind high-performance gaming venues.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#66899b] transition-colors duration-300">
                    Gaming Optimisation
                  </h3>
                                    
                  {/* CTA */}
                  <div className="flex items-center justify-center text-[#66899b] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Login to PrimeEdge</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <div className="bg-[#1a1d21] rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-3">Need Help Getting Started?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  If you need assistance accessing your account or would like to learn more about our software solutions, our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-[#66899b] text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-sm"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="border border-[#66899b] text-[#66899b] px-6 py-2 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-sm"
                  >
                    Learn About Our Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}