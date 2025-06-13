import Link from 'next/link'
import { Linkedin, Youtube, Facebook } from 'lucide-react'

// Footer component to replace all your existing footer sections
export default function Footer() {
  return (
    <footer className="bg-[#121418] text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto" />
            </div>
            <div className="text-gray-400 text-sm mb-6">
              <p>Compliance made simple.</p>
              <p>Gaming made smarter.</p>
              <p>Built for Australian pubs and clubs.</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/involvgroup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-[#66899b] transition-colors group"
                aria-label="Follow Involv on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.youtube.com/@InvolvGroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-[#66899b] transition-colors group"
                aria-label="Subscribe to Involv on YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/InvolvGroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-[#66899b] transition-colors group"
                aria-label="Follow Involv on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/aml-advisory" className="hover:text-white transition-colors">AML Advisory</Link></li>
              <li><Link href="/services/risk-compliance" className="hover:text-white transition-colors">Risk & Compliance</Link></li>
              <li><Link href="/services/gaming-performance" className="hover:text-white transition-colors">Gaming Performance</Link></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://assure.involv.com.au" className="hover:text-white transition-colors">Assure</a></li>
              <li><a href="https://primeedge.involv.com.au" className="hover:text-white transition-colors">PrimeEdge</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Involv. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}