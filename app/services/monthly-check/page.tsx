import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import MonthlyCheckPack from "@/components/MonthlyCheckPack";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "月次実績チェック自動化パック | Harmonic Insight",
  description: "月次の「手作業チェック」を仕組みで終わらせます。入力ミスを月末まで放置しない、チェック自動化サービス。6〜8週間で導入可能。",
};

export default function MonthlyCheckPage() {
  return (
    <>
      {/* Service Page Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight"
            >
              Harmonic Insight
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#problems"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                よくある課題
              </a>
              <a
                href="#monthly-pack"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                パック内容
              </a>
              <a
                href="#cases"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                導入事例
              </a>
              <a
                href="#faq"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                無料相談
              </a>
            </nav>

            {/* Mobile: CTA */}
            <a
              href="#contact"
              className="lg:hidden px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
            >
              相談
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Breadcrumb */}
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-white">月次実績チェック自動化パック</span>
            </nav>
          </div>
        </div>

        <Hero />
        <Problems />
        <MonthlyCheckPack />
        <CaseStudies />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
