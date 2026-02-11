import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction DX Consulting | Harmonic Insight",
  description:
    "Construction DX is not about tools. It's about designing operations that anyone can run. We help construction companies transform through componentization and assembly design.",
};

export default function EnglishHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-mincho text-2xl md:text-4xl font-medium text-[var(--gray-900)] mb-4 leading-tight tracking-wide">
              Construction DX is not about tools.
            </h1>
            <p className="font-mincho text-2xl md:text-4xl font-medium text-[var(--accent)] mb-8 leading-tight tracking-wide">
              It&apos;s about designing operations
              <br />
              that anyone can run.
            </p>
            <p className="text-[var(--gray-600)] leading-relaxed mb-10 max-w-xl">
              We eliminate dependency on individual expertise through systematic design.
              <br />
              Zero wasted time. Zero errors. Zero confusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/en#method" className="btn-accent">
                Our Approach
              </Link>
              <Link href="/en#contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One-line Flow */}
      <section className="py-6 bg-[var(--gray-100)] border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-center text-sm text-[var(--gray-600)] tracking-wide">
            <span className="text-[var(--gray-900)] font-medium">Componentize</span>
            <span className="mx-3 text-[var(--gray-400)]">→</span>
            <span className="text-[var(--gray-900)] font-medium">Assembly Design</span>
            <span className="mx-3 text-[var(--gray-400)]">→</span>
            <span className="text-[var(--gray-900)] font-medium">Implement</span>
            <span className="text-[var(--gray-500)] ml-2">(AI / RPA / BPO / Systems)</span>
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
              The Construction Industry Challenge
            </h2>
            <p className="text-[var(--gray-600)] leading-relaxed mb-8">
              Fewer people. More complex projects. Tighter deadlines.
              The industry demands more output from fewer hands,
              yet operations still depend on individual expertise and manual processes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-[var(--border)] p-4 text-center">
                <p className="font-mincho text-2xl text-[var(--gray-900)]">71%</p>
                <p className="text-xs text-[var(--gray-500)]">Labor shortage</p>
              </div>
              <div className="border border-[var(--border)] p-4 text-center">
                <p className="font-mincho text-2xl text-[var(--gray-900)]">36%</p>
                <p className="text-xs text-[var(--gray-500)]">Workers over 55</p>
              </div>
              <div className="border border-[var(--border)] p-4 text-center">
                <p className="font-mincho text-2xl text-[var(--gray-900)]">12%</p>
                <p className="text-xs text-[var(--gray-500)]">Workers under 30</p>
              </div>
              <div className="border border-[var(--border)] p-4 text-center">
                <p className="font-mincho text-2xl text-[var(--gray-900)]">2035</p>
                <p className="text-xs text-[var(--gray-500)]">Crisis point</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Method */}
      <section id="method" className="py-16 md:py-24 bg-[var(--gray-900)] text-white scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-mincho text-2xl md:text-4xl mb-6">
              Componentization + Assembly Design
            </h2>
            <p className="text-[var(--gray-300)] leading-relaxed">
              We don&apos;t just introduce tools. We redesign how work flows
              so that operations run smoothly regardless of who performs them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-[var(--gray-700)] p-6">
              <p className="text-[var(--accent)] text-sm mb-3">01</p>
              <h3 className="font-medium text-lg mb-3">Componentize</h3>
              <p className="text-sm text-[var(--gray-400)]">
                Break down operations into reusable blocks:
                notifications, approvals, aggregations, checks.
              </p>
            </div>
            <div className="border border-[var(--gray-700)] p-6">
              <p className="text-[var(--accent)] text-sm mb-3">02</p>
              <h3 className="font-medium text-lg mb-3">Assembly Design</h3>
              <p className="text-sm text-[var(--gray-400)]">
                Define inputs and outputs first.
                The internal process can be changed later.
              </p>
            </div>
            <div className="border border-[var(--gray-700)] p-6">
              <p className="text-[var(--accent)] text-sm mb-3">03</p>
              <h3 className="font-medium text-lg mb-3">Implement</h3>
              <p className="text-sm text-[var(--gray-400)]">
                Hand off to AI, RPA, BPO, or systems
                in a format that&apos;s ready to deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">Two Goals for Every Improvement</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            <div className="border border-[var(--border)] p-8 text-center">
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                Eliminate Waste
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                Standardize. Remove exceptions.
                <br />
                Separate responsibilities.
              </p>
            </div>
            <div className="border-2 border-[var(--accent)] p-8 text-center">
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                Achieve Three Zeros
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                <span className="text-[var(--accent)] font-medium">Zero time wasted</span> /
                <span className="text-[var(--accent)] font-medium"> Zero manual effort</span> /
                <span className="text-[var(--accent)] font-medium"> Zero errors</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <h2 className="section-title">What We Deliver</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white border border-[var(--border)] p-6">
              <p className="text-sm text-[var(--accent)] mb-3">01</p>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Profit Visibility
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Know if you&apos;re profitable by project and by month.
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <p className="text-sm text-[var(--accent)] mb-3">02</p>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Early Warning
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Detect problems before they become crises.
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <p className="text-sm text-[var(--accent)] mb-3">03</p>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Systematic Decisions
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Anyone can make the same judgment given the same data.
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <p className="text-sm text-[var(--accent)] mb-3">04</p>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Investment Clarity
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Know what&apos;s worth investing in with clear ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">Why Us</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Construction
                <br />
                Expertise
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Deep understanding of construction accounting and operations.
              </p>
            </div>
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                IT & AI
                <br />
                Capability
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                End-to-end implementation from design to deployment.
              </p>
            </div>
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Global
                <br />
                Reach
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                ASEAN expansion support and cross-border operations.
              </p>
            </div>
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                Consulting
                <br />
                Bridge
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                Connect management, operations, and field teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-6">About Harmonic Insight</h2>
            <p className="text-[var(--gray-600)] mb-8">
              We are a consulting firm specializing in operational design for the construction industry.
              Our mission: transform decisions from intuition-based to system-based.
            </p>
            <Link
              href="https://harmonic-insight-corporate.vercel.app/en/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--gray-900)] border-b border-[var(--gray-900)] pb-1 hover:text-[var(--gray-600)] hover:border-[var(--gray-600)] transition-colors"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 md:py-24 bg-[var(--gray-900)] scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mincho text-2xl md:text-3xl text-white mb-6 tracking-wide">
              Ready to transform your operations?
            </h2>
            <p className="text-[var(--gray-400)] mb-10">
              Start with a 30-minute consultation.
              <br />
              We&apos;ll help you identify where to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[var(--accent)] text-white px-8 py-4 text-sm tracking-wider hover:bg-[var(--accent-light)] transition-colors"
              >
                Schedule Consultation
              </Link>
              <a
                href="mailto:info@h-insight.jp"
                className="border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-[var(--gray-900)] transition-colors"
              >
                info@h-insight.jp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
