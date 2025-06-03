import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Target, Handshake, Waypoints, TrendingUp, Search, Wrench, BarChart3, Rocket } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function About() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>About Involv - Industry Veterans Solving Real Venue Challenges</title>
        <meta name="description" content="Meet the team behind Involv - former ALH executives, gaming regulatory legal experts, and compliance specialists who understand the unique challenges facing Australian pubs and clubs." />
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
            <span className="text-white">About</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built by Industry Veterans Who Actually Understand Your Challenges
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are not consultants who lack hands-on, coal-face experience. We are former gaming operators, gaming regulatory legal experts, and compliance specialists who have lived the reality of managing compliance at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about/our-team" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium text-center">
                  Meet Our Team
                </Link>
                <Link href="/about/why-involv" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium text-center">
                  Why Choose Involv
                </Link>
              </div>
            </div>
            <div className="bg-[#1a1d21] rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4 text-[#66899b]">Industry Credibility</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">13K</div>
                    <div className="text-gray-400 text-sm">EGMs Previously Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">80+</div>
                    <div className="text-gray-400 text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">All</div>
                    <div className="text-gray-400 text-sm">Australian Jurisdictions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-sm">Venue Focused</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm text-center">
                A team of gaming industry experts: gaming operators, regulatory legal and compliance experts who have lived and absolutely appreciate your operational realities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Involv was founded by a team of seasoned gaming professionals who recognised a gap in the market: no one was supporting venue operators with a true understanding of the day-to-day realities of running pubs and clubs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#66899b]">The Problem We Saw</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Too many compliance consultants were developing policies without a practical understanding of how venues operate. As regulatory requirements became more complex, the guidance remained theoretical and disconnected from day-to-day realities.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At the same time, venue managers are overwhelmed by gaming compliance paperwork, juggling countless SOPs, relying on calendar reminders to track deadlines, and operating without purpose-built technology. Many are also expected to optimise their gaming floors - without access to data or expert support.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We had a unique view of the market and we knew there was a better way - one that combined deep industry experience with practical, implementable solutions.
                </p>
              </div>
              <div className="bg-[#1a1d21] rounded-lg p-8">
                <h4 className="text-lg font-semibold mb-4 text-white">What Makes Us Different</h4>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#66899b] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-black text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">{item.title}</h5>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              To transform compliance burdens into competitive advantages for Australian pubs and clubs, delivering practical solutions that actually work in the real world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.iconComponent}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Highlight */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Led by Industry Veterans</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our leadership team brings together the exact expertise needed to navigate today's complex venue challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#1a1d21] rounded-lg p-6 mb-4">
                    <ProfileImage 
                      leader={leader}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-white mb-1">{leader.name}</h3>
                    <p className="text-[#66899b] text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{leader.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/about/our-team" className="inline-flex items-center bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Meet the Full Team
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We do not just write policies and walk away. Our hands-on approach ensures solutions actually work in your venue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-[#1a1d21] rounded-lg p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-[#66899b] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {item.iconComponent}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Industry Veterans?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Stop dealing with consultants who do not understand venues. Work with the team that has actually solved these challenges at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors font-medium">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="border border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-colors font-medium">
                Explore Our Services
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

// Profile Image Component with Error Handling
function ProfileImage({ leader, className }: { leader: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-[#66899b] flex items-center justify-center relative`}>
      <img 
        src={`/images/team/${leader.slug}.jpg`}
        alt={leader.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 bg-[#66899b] text-black text-2xl font-bold hidden items-center justify-center">
        {leader.initials}
      </div>
    </div>
  );
}

// Data
const differentiators = [
  {
    title: "Real Venue Experience",
    description: "Our team has managed Australia's largest gaming operations, not just read about them."
  },
  {
    title: "Regulatory Legal Expertise",
    description: "We have gaming regulatory legal professionals who understand both law and practical implementation."
  },
  {
    title: "Implementation Focus",
    description: "We do not just write policies - we ensure they work in your day-to-day operations."
  },
  {
    title: "Ongoing Partnership",
    description: "We stick around to support you as regulations evolve and your business grows."
  }
]

const values = [
  {
    iconComponent: <Waypoints className="w-8 h-8 text-black" />,
    title: "Practical Solutions",
    description: "Every recommendation must work in the real world of venue operations, not just on paper."
  },
  {
    iconComponent: <Handshake className="w-8 h-8 text-black" />,
    title: "Partnership Approach",
    description: "We work alongside your team as trusted advisors, not as distant consultants."
  },
  {
    iconComponent: <TrendingUp className="w-8 h-8 text-black" />,
    title: "Business Growth",
    description: "Compliance should enable growth, not hinder it. We align solutions with your commercial goals."
  }
]

const leadership = [
  {
    name: "Tim Barnett",
    slug: "tim-barnett",
    role: "Co-Founder",
    initials: "TB",
    highlight: "20+ years hospitality & gaming leadership across Australia and international markets."
  },
  {
    name: "Louise Lane",
    slug: "louise-lane",
    role: "Co-Founder",
    initials: "LL",
    highlight: "Regulatory legal expert specialising in gaming, liquor, AML, and compliance frameworks."
  },
  {
    name: "Con Nikitas",
    slug: "con-nikitas",
    role: "Director",
    initials: "CN",
    highlight: "30 years gaming industry experience, former ALH Group executive managing 13,000 EGMs."
  },
  {
    name: "Mark Kelly",
    slug: "mark-kelly",
    role: "Co-Founder",
    initials: "MK",
    highlight: "30 years transformational change experience, 6 years specialising in gaming compliance."
  }
]

const approach = [
  {
    iconComponent: <Search className="w-6 h-6 text-black" />,
    title: "Deep Venue Understanding",
    description: "We start by understanding your specific operational challenges, regulatory environment, and business goals.",
    points: [
      "Comprehensive compliance and performance assessment",
      "Analysis of your current systems and processes",
      "Identification of improvement opportunities",
      "Clear roadmap for implementation"
    ]
  },
  {
    iconComponent: <Wrench className="w-6 h-6 text-black" />,
    title: "Hands-On Implementation",
    description: "We do not just deliver reports - we work with your team to implement solutions that stick.",
    points: [
      "Training programs tailored to your staff roles",
      "Step-by-step implementation support",
      "Regular progress reviews and adjustments",
      "Knowledge transfer to ensure sustainability"
    ]
  },
  {
    iconComponent: <BarChart3 className="w-6 h-6 text-black" />,
    title: "Measurable Results",
    description: "Every engagement delivers clear, measurable outcomes that improve your compliance and performance.",
    points: [
      "Audit-ready compliance frameworks",
      "Improved gaming performance metrics",
      "Reduced regulatory risk exposure",
      "Enhanced staff confidence and capability"
    ]
  },
  {
    iconComponent: <Rocket className="w-6 h-6 text-black" />,
    title: "Ongoing Support",
    description: "Regulations evolve and businesses grow. We provide ongoing support to ensure you stay ahead.",
    points: [
      "Regular compliance health checks",
      "Updates on regulatory changes",
      "Performance optimisation reviews",
      "Strategic advice as your business evolves"
    ]
  }
]