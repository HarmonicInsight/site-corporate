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

export const metadata: Metadata = {
  title: "月次実績チェック自動化パック | Harmonic Insight",
  description: "月次の「手作業チェック」を仕組みで終わらせます。入力ミスを月末まで放置しない、チェック自動化サービス。6〜8週間で導入可能。",
};

export default function MonthlyCheckPage() {
  return (
      <main>
        {/* Breadcrumb */}
        <div className="pt-4 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
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
  );
}
