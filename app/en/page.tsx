import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Harmonic Insight | Design operations that anyone can run",
  description: "We design business operations as modular components. Break down, assemble, and run with structure—not reliance on individuals.",
};

export default function HomeEN() {
  const sites = [
    {
      title: "Construction DX",
      description: "Modular business design for construction industry.",
      url: "https://const-dx-home.vercel.app/en",
    },
    {
      title: "Insight Series",
      description: "Tools for structuring expert knowledge. (Japanese)",
      url: "https://insight-series-site.vercel.app/",
    },
    {
      title: "TokoBi",
      description: "BI dashboard service. (Japanese)",
      url: "https://insight-bi-ruby.vercel.app/",
    },
    {
      title: "Apps Portal",
      description: "Productivity and lifestyle apps. (Japanese)",
      url: "https://h-insight-apps-portal.vercel.app/",
    },
    {
      title: "Harmonic Novels",
      description: "Fiction exploring AI and the future. (Japanese)",
      url: "https://novels.h-insight.jp/",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative px-4 sm:px-6 overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Operations that anyone can run.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Break down. Assemble. Run with structure.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="pt-8 pb-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["Structure first", "Reproducible", "Low burden"].map((principle, index) => (
                <span
                  key={index}
                  className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What We Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We design business processes as modular components that can be assembled and run by anyone.
              Our approach eliminates dependency on specific individuals and reduces operational burden on frontline teams.
            </p>
            <Link
              href="/en/company"
              className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Learn more about us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Sites */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Our Platforms
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore our domain-specific sites and tools
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {sites.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {site.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {site.description}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For inquiries about our services or potential collaborations.
            </p>
            <a
              href="mailto:info@h-insight.jp"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              info@h-insight.jp
            </a>
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
