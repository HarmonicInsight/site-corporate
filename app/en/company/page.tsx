import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company | Harmonic Insight LLC",
  description: "Harmonic Insight LLC company overview. We design business operations as modular components that anyone can run.",
};

export default function CompanyPageEN() {
  const businessAreas = [
    {
      title: "Construction DX",
      description: "Modular business design for construction. Diagnostics, consulting, and process optimization.",
      href: "https://const-dx-home.vercel.app/en",
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Insight Series",
      description: "Tools for structuring and automating expert knowledge. (Japanese)",
      href: "https://insight-series-site.vercel.app/",
      color: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "InsightBI",
      description: "BI dashboard service. (Japanese)",
      href: "https://insight-bi-ruby.vercel.app/",
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Apps",
      description: "Productivity and lifestyle apps. (Japanese)",
      href: "https://h-insight-apps-portal.vercel.app/",
      color: "violet",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Novels",
      description: "Multilingual fiction exploring AI and the future of work. (Japanese)",
      href: "https://novels.h-insight.jp/",
      color: "amber",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const history = [
    { date: "August 2025", event: "Harmonic Insight LLC established" },
    { date: "August 2025", event: "Harmonic Novels platform launched" },
    { date: "2025", event: "Construction DX consulting services started" },
    { date: "2025", event: "Insight Series and Apps Portal launched" },
  ];

  const colorClasses: Record<string, { bg: string; bgHover: string; text: string }> = {
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", bgHover: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40", text: "text-blue-600 dark:text-blue-400" },
    emerald: { bg: "bg-emerald-100 dark:bg-emerald-900/30", bgHover: "group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40", text: "text-emerald-600 dark:text-emerald-400" },
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-900/30", bgHover: "group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40", text: "text-cyan-600 dark:text-cyan-400" },
    violet: { bg: "bg-violet-100 dark:bg-violet-900/30", bgHover: "group-hover:bg-violet-200 dark:group-hover:bg-violet-800/40", text: "text-violet-600 dark:text-violet-400" },
    amber: { bg: "bg-amber-100 dark:bg-amber-900/30", bgHover: "group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40", text: "text-amber-600 dark:text-amber-400" },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 tracking-widest mb-4">COMPANY</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Company Overview
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We design business operations as modular components that anyone can run.
            </p>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Business Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
              Four domains where we apply our structured approach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessAreas.map((area, index) => {
                const colors = colorClasses[area.color];
                return (
                  <a
                    key={index}
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800"
                  >
                    <div className={`w-12 h-12 ${colors.bg} ${colors.bgHover} rounded-lg flex items-center justify-center mb-4 transition-colors`}>
                      <span className={colors.text}>{area.icon}</span>
                    </div>
                    <h3 className={`font-bold text-gray-900 dark:text-white mb-2 group-hover:${colors.text} transition-colors`}>
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {area.description}
                    </p>
                    <span className={`inline-flex items-center text-sm ${colors.text} mt-4 group-hover:translate-x-1 transition-transform`}>
                      Learn more →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              Our Approach
            </h2>
            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Harmonic Insight was founded by specialists in structured business design.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  We break down operations into modular components, assemble them into workflows, and create systems that run reliably without depending on specific individuals.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">~30 years</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">IT Industry</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">7 years</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Construction DX</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">200+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Domains managed in large projects</p>
                </div>
              </div>

              {/* Closing Quote */}
              <div className="border-l-4 border-primary-500 pl-6 py-2 bg-gray-50 dark:bg-gray-900 rounded-r-lg">
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  &ldquo;Design operations as components. Assemble them to run.&rdquo;
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We focus on fundamental process improvement, not just tool implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              History
            </h2>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                    {item.date}
                  </div>
                  <div className="text-gray-900 dark:text-white text-sm">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              Company Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Company Name
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  Harmonic Insight LLC
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Established
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  August 2025
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Representative
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  Ruriko Seta
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Location
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  Tokyo, Japan
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Contact
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  info@h-insight.jp
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Services
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  Construction DX / Software Development / Content Production
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Leadership
            </h2>
            <div className="space-y-6">
              {/* Representative */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="sm:w-44 flex-shrink-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider mb-0.5">
                    Representative Director
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Ruriko Seta
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    As the representative of Harmonic Insight LLC, she oversees company operations and business development.
                  </p>
                </div>
              </div>

              {/* Chief Architect / Strategist */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                <div className="sm:w-44 flex-shrink-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider mb-0.5">
                    Chief Architect / Strategist
                  </p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    Erik Arthur
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Responsible for the design philosophy of modular business operations, Insight Series product architecture, and overall strategic direction of Harmonic Insight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For inquiries about our services or potential collaborations,<br className="hidden sm:block" />
              please feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@h-insight.jp"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                info@h-insight.jp
              </a>
              <Link
                href="/company"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Japanese Page
              </Link>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
              Contact: Erik Arthur (Chief Architect / Strategist)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
