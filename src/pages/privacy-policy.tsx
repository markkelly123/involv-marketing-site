import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'

export default function PrivacyPolicy() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Privacy Policy - Involv</title>
        <meta name="description" content="Privacy Policy for Involv Pty Ltd. Learn how we collect, use, and protect your personal information in accordance with Australian privacy laws." />
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
            <span className="text-white">Privacy Policy</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-400 text-sm italic">Last updated: 2 June 2025</p>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Involv Pty Ltd (ACN 685 137 660) ("Involv", "we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose and manage your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                This policy applies to the <strong>Involv corporate website</strong> at{' '}
                <a href="https://www.involv.com.au" className="text-[#66899b] hover:text-white underline">
                  https://www.involv.com.au
                </a>{' '}
                and to all personal information we collect through our services, including from clients, prospective clients, subscribers, and visitors to our site.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Involv Pty Ltd also operates other branded services, including:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-300 space-y-1">
                <li><strong>Involv | Assure</strong> (assure.involv.com.au)</li>
                <li><strong>Involv | PrimeEdge</strong> (primeedge.involv.com.au)</li>
                <li><strong>Lane Consulting</strong> (lane.involv.com.au)</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-8">
                While these are all part of Involv Pty Ltd, they may operate separate websites or applications with their own privacy practices. If you interact directly with those sites, we encourage you to review their respective privacy policies.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. What Personal Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Contact information</strong>: your name, business name, email address, phone number.</li>
                  <li><strong>Professional details</strong>: your job title, company, and business interests.</li>
                  <li><strong>Website interaction data</strong>: pages visited, time spent, IP address, browser type (via cookies and analytics tools).</li>
                  <li><strong>Information submitted via forms</strong>: enquiries, demo bookings, newsletter subscriptions, feedback.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We do not collect sensitive information unless it is necessary for our business activities and you have consented.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Collect Personal Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We collect personal information when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Fill out a form on our website (e.g. contact, newsletter subscription);</li>
                  <li>Engage with us by email, phone, or at events;</li>
                  <li>Use our services or become a client;</li>
                  <li>Browse our website, where data may be collected via cookies and third-party analytics tools.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Why We Collect Your Personal Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We collect, hold, and use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and improve our services;</li>
                  <li>Respond to your enquiries and manage our relationship with you;</li>
                  <li>Send you relevant updates, marketing, and thought-leadership content (you can opt out anytime via clearly identifiable unsubscribe mechanisms);</li>
                  <li>Conduct market research and improve our website experience;</li>
                  <li>Comply with our legal obligations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. How We Store and Secure Personal Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your personal information is stored in secure systems and is accessible only to authorised personnel. We take reasonable steps to protect it from misuse, loss, unauthorised access, modification, or disclosure.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We may store data using reputable third-party providers, some of whom may be located overseas (e.g. cloud service providers). Where this occurs, we take reasonable steps to ensure your information is handled in accordance with the APPs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Disclosure of Personal Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may disclose your personal information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Our employees, contractors, and service providers;</li>
                  <li>Third-party service providers used to support our website and communications (e.g. email services, analytics platforms);</li>
                  <li>Legal, accounting, or professional advisors (only where required);</li>
                  <li>Law enforcement or government bodies when legally required.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We do not sell your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Analytics</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and analytics tools (such as Google Analytics) to improve your experience and analyse website usage. Cookies do not identify you personally but help us understand behaviour patterns.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can manage or disable cookies in your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Accessing and Correcting Your Personal Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  You may request access to, or correction of, your personal information at any time. Contact us at{' '}
                  <a href="mailto:privacy@involv.com.au" className="text-[#66899b] hover:text-white underline">
                    privacy@involv.com.au
                  </a>{' '}
                  and we will respond within a reasonable timeframe.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Complaints</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you believe we have breached your privacy, please contact us at{' '}
                  <a href="mailto:privacy@involv.com.au" className="text-[#66899b] hover:text-white underline">
                    privacy@involv.com.au
                  </a>. We take complaints seriously and will investigate. If you are not satisfied with our response, you can contact the{' '}
                  <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
                  <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#66899b] hover:text-white underline">
                    www.oaic.gov.au
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For any questions or concerns regarding your privacy or this policy, contact us at:
                </p>
                <div className="bg-[#0f1115] rounded-lg p-6 border border-gray-700">
                  <p className="text-white font-semibold mb-2">Privacy Officer</p>
                  <p className="text-gray-300 mb-1">Involv Pty Ltd</p>
                  <p className="text-gray-300">
                    Email:{' '}
                    <a href="mailto:privacy@involv.com.au" className="text-[#66899b] hover:text-white underline">
                      privacy@involv.com.au
                    </a>
                  </p>
                </div>
              </section>
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
                <Link href="/privacy-policy" className="text-[#66899b]">Privacy Policy</Link>
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