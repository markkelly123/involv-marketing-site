import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'

export default function Disclaimer() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Disclaimer - Involv</title>
        <meta name="description" content="Legal disclaimer for Involv Pty Ltd. Important information about our advisory services, software, and website content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Disclaimer</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
              <p className="text-gray-400 text-sm italic">Last updated: 2 June 2025</p>
            </header>

            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 mb-8">
              <p className="text-red-400 font-medium text-sm">
                <strong>Important:</strong> This disclaimer contains important information about the limitations of our services and website content. Please read carefully before using our services or relying on any information provided.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                This disclaimer applies to all services provided by <strong>Involv Pty Ltd</strong> (ACN 685 137 660) ("Involv", "we", "our", "us"), including advisory services, software solutions, and content available on our website at{' '}
                <a href="https://www.involv.com.au" className="text-[#66899b] hover:text-white underline">
                  www.involv.com.au
                </a>{' '}
                and related microsites.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. General Information Only</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The information provided on this website and through our services is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>The completeness, accuracy, reliability, or suitability of any information</li>
                  <li>The availability of our website or services</li>
                  <li>That our services will meet your specific requirements</li>
                  <li>That any software or systems will be error-free or uninterrupted</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Not Legal or Professional Advice</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Important:</strong> Nothing on this website or provided through our services constitutes legal, financial, accounting, or other professional advice. Our advisory services are provided based on our industry experience and expertise, but:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>You should not rely solely on our advice for legal or regulatory compliance decisions</li>
                  <li>Regulatory requirements vary by jurisdiction and change frequently</li>
                  <li>You should always seek independent legal and professional advice</li>
                  <li>We are not lawyers and do not provide legal advice</li>
                </ul>
                <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>Compliance Responsibility:</strong> Ultimate responsibility for regulatory compliance rests with you and your organisation. Our services are designed to assist and guide, not replace your legal and compliance obligations.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Gaming and Regulatory Matters</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our advisory services relate to gaming, liquor, and regulatory compliance matters. Please note:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Gaming and liquor laws are complex and vary significantly between Australian states and territories</li>
                  <li>Regulatory requirements change frequently and our content may not reflect the most recent changes</li>
                  <li>Licence conditions and obligations are specific to each venue and jurisdiction</li>
                  <li>You must always verify current requirements with relevant regulatory authorities</li>
                  <li>We recommend engaging qualified legal counsel for specific compliance matters</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Software and Technology Services</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our software solutions (including Involv Assure and Involv PrimeEdge) are provided on an "as is" basis. While we strive for reliability and accuracy:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Software may contain bugs, errors, or experience downtime</li>
                  <li>Data accuracy depends on the quality of inputs and integrations</li>
                  <li>Performance recommendations are based on available data and algorithms</li>
                  <li>Results and improvements are not guaranteed</li>
                  <li>You should maintain independent records and backup systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Content and Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites or reference third-party information. We do not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party websites or services. Use of third-party links is at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the fullest extent permitted by Australian law, Involv disclaims all liability for any loss or damage, whether direct, indirect, incidental, special, or consequential, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Business interruption or lost profits</li>
                  <li>Regulatory penalties or enforcement action</li>
                  <li>Data loss or corruption</li>
                  <li>Reliance on information or advice provided</li>
                  <li>Use of our software or technology services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Industry Experience Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  While our team has extensive experience in the gaming and compliance industry, past performance and experience do not guarantee future results. Industry conditions, regulations, and best practices evolve continuously, and strategies that were effective in the past may not be suitable for current circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. No Warranty</h2>
                <p className="text-gray-300 leading-relaxed">
                  We provide our services and website content without warranty of any kind. We specifically disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Updates and Changes</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this disclaimer from time to time without notice. Continued use of our services or website after any changes constitutes acceptance of the updated disclaimer. We recommend reviewing this page periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Australian Consumer Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nothing in this disclaimer excludes, restricts, or modifies any consumer rights or remedies that cannot be excluded, restricted, or modified under the Australian Consumer Law or other applicable legislation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about this disclaimer or need clarification about our services, please contact us:
                </p>
                <div className="bg-[#0f1115] rounded-lg p-6 border border-gray-700">
                  <p className="text-white font-semibold mb-2">Involv Pty Ltd</p>
                  <p className="text-gray-300">
                    Email:{' '}
                    <a href="mailto:legal@involv.com.au" className="text-[#66899b] hover:text-white underline">
                      legal@involv.com.au
                    </a>
                  </p>
                </div>
              </section>

              <div className="bg-[#66899b] bg-opacity-10 border border-[#66899b] rounded-lg p-6 mt-8">
                <p className="text-[#66899b] text-sm">
                  <strong>Remember:</strong> This disclaimer is part of our{' '}
                  <Link href="/terms-of-use" className="underline hover:text-white">
                    Terms of Use
                  </Link>. By using our services or website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                <Link href="/disclaimer" className="text-[#66899b]">Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}