import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsOfUse() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Terms of Use - Involv</title>
        <meta name="description" content="Terms of Use for Involv Pty Ltd website. Legal terms and conditions for using our website and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
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
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Terms of Use</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-[#1a1d21] rounded-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
              <p className="text-gray-400 text-sm italic">Last updated: 02 June 2025</p>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                These Terms of Use ("Terms") apply to your use of the website located at{' '}
                <a href="https://www.involv.com.au" className="text-[#66899b] hover:text-white underline">
                  www.involv.com.au
                </a>{' '}
                ("Site"), operated by <strong>Involv Pty Ltd</strong> (ABN [insert]) ("Involv", "we", "our" or "us"). By accessing or using this Site, you agree to be bound by these Terms.
              </p>

              <div className="bg-[#66899b] bg-opacity-10 border border-[#66899b] rounded-lg p-4 mb-8">
                <p className="text-[#66899b] font-medium">
                  If you do not agree with these Terms, you must not use the Site.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Use of the Site</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This Site is provided for general informational purposes regarding our services and products. You may browse, view, and use the content solely for your own business or informational purposes, subject to these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You must not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Use the Site for any unlawful, misleading, or malicious purpose;</li>
                  <li>Interfere with the operation of the Site or any server or network connected to it;</li>
                  <li>Attempt to gain unauthorised access to any part of the Site;</li>
                  <li>Use the Site to transmit or post any spam, viruses, or harmful code.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content on the Site, including text, graphics, logos, icons, images, videos, and software, is owned or licensed by Involv and is protected under Australian intellectual property laws.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Except as expressly permitted under these Terms or applicable law, you must not reproduce, distribute, modify, publish, or create derivative works from any content without our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Links to Other Sites</h2>
                <p className="text-gray-300 leading-relaxed">
                  This Site may contain links to external websites, including microsites operated by Involv brands such as <strong>Assure</strong>, <strong>PrimeEdge</strong>, or <strong>Lane Consulting</strong>. These sites may be subject to their own terms and policies. We are not responsible for the content or practices of any third-party or linked websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. No Warranty</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>The Site and its content are provided "as is" and "as available";</li>
                  <li>We make no warranties or representations (express or implied) about the accuracy, completeness, reliability, or suitability of the content;</li>
                  <li>We do not guarantee uninterrupted access to the Site or that the Site will be free from viruses or defects.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the fullest extent permitted by law, Involv disclaims all liability for any direct, indirect, incidental, or consequential loss or damage (including loss of data or business interruption) arising from your use of, or reliance on, this Site or its content.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our collection and use of personal information is governed by our{' '}
                  <Link href="/privacy-policy" className="text-[#66899b] hover:text-white underline font-semibold">
                    Privacy Policy
                  </Link>. By using the Site, you consent to our handling of your information in accordance with that policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to These Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update these Terms at any time by posting the revised version on this page. Your continued use of the Site after any changes indicates your acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms are governed by the laws of <strong>Victoria, Australia</strong>, and any disputes will be subject to the non-exclusive jurisdiction of the courts of that State.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For questions about these Terms, please contact:
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
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}