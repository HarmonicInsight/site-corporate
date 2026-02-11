'use client';

import Link from 'next/link';
import { useT } from '@/i18n';

export default function Home() {
  const { t, tArray } = useT();

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pt-40 lg:px-8 lg:pt-44">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-6">
              {t('hero', 'credential')}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {t('hero', 'titleLine1')}
              <br />
              <span className="text-slate-600 dark:text-slate-300">{t('hero', 'titleLine2')}</span>
            </h1>

            <p className="mt-6 inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-sm font-medium text-blue-700 dark:text-blue-300">
              {t('hero', 'tags')}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {t('hero', 'description')}
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/insight-office"
                className="rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                {t('hero', 'ctaPrimary')}
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {t('common', 'freeConsultation')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              {t('solutions', 'heading')}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {t('solutions', 'subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card 1: Excel */}
            <Link href="/insight-office" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                {t('solutions', 'popular')}
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t('solutions', 'excelTitle')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t('solutions', 'excelDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 rounded text-xs text-blue-600 dark:text-blue-300">InsightOffice</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 rounded text-xs text-blue-600 dark:text-blue-300">¥5,000〜/mo</span>
              </div>
              <span className="text-sm text-blue-500 group-hover:text-blue-600 transition-colors font-medium">
                {t('solutions', 'excelCta')}
              </span>
            </Link>

            {/* Card 2: RPA */}
            <Link href="/rpa" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t('solutions', 'rpaTitle')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t('solutions', 'rpaDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded text-xs text-emerald-600 dark:text-emerald-300">InsightBot RPA</span>
                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded text-xs text-emerald-600 dark:text-emerald-300">{t('solutions', 'rpaTag1')}</span>
                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded text-xs text-emerald-600 dark:text-emerald-300">{t('solutions', 'rpaTag2')}</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {t('common', 'learnMore')}
              </span>
            </Link>

            {/* Card 3: Knowledge */}
            <Link href="/products" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t('solutions', 'knowledgeTitle')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t('solutions', 'knowledgeDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-amber-50 dark:bg-amber-500/10 rounded text-xs text-amber-600 dark:text-amber-300">{t('solutions', 'knowledgeTag1')}</span>
                <span className="px-2 py-1 bg-amber-50 dark:bg-amber-500/10 rounded text-xs text-amber-600 dark:text-amber-300">{t('solutions', 'knowledgeTag2')}</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {t('common', 'learnMore')}
              </span>
            </Link>

            {/* Card 4: Consulting */}
            <Link href="/consulting" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t('solutions', 'consultingTitle')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t('solutions', 'consultingDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-50 dark:bg-purple-500/10 rounded text-xs text-purple-600 dark:text-purple-300">{t('solutions', 'consultingTag1')}</span>
                <span className="px-2 py-1 bg-purple-50 dark:bg-purple-500/10 rounded text-xs text-purple-600 dark:text-purple-300">{t('solutions', 'consultingTag2')}</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {t('solutions', 'consultingCta')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* RPA Authority Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">
              {t('rpaAuthority', 'sectionLabel')}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-6">
              {t('rpaAuthority', 'headingLine1')}
              <br />
              <span className="text-slate-600 dark:text-slate-400">{t('rpaAuthority', 'headingLine2')}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('rpaAuthority', 'description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* UiPath Migration */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-4">
                {t('rpaAuthority', 'uipathLabel')}
              </p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {t('rpaAuthority', 'uipathTitle')}
              </h3>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <p>{t('rpaAuthority', 'uipathDesc1')}</p>
                <p>{t('rpaAuthority', 'uipathDesc2')}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {t('rpaAuthority', 'uipathSolutionLabel')}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t('rpaAuthority', 'uipathSolution')}
                </p>
              </div>
            </div>

            {/* BPO AI */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-4">
                {t('rpaAuthority', 'bpoLabel')}
              </p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {t('rpaAuthority', 'bpoTitle')}
              </h3>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <p>{t('rpaAuthority', 'bpoDesc1')}</p>
                <p>
                  {t('rpaAuthority', 'bpoDesc2Prefix')}
                  <span className="text-slate-900 dark:text-white font-medium">{t('rpaAuthority', 'bpoDesc2Key')}</span>
                  {t('rpaAuthority', 'bpoDesc2Suffix')}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {t('rpaAuthority', 'bpoSolutionLabel')}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t('rpaAuthority', 'bpoSolution')}
                </p>
              </div>
            </div>
          </div>

          {/* Task tags */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-widest">
              {t('rpaAuthority', 'tasksLabel')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tArray('tasks', 'items').map(task => (
                <span key={task} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {task}
                </span>
              ))}
            </div>
            <Link
              href="/rpa"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              {t('rpaAuthority', 'rpaCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section id="case-studies" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              {t('outcomes', 'sectionLabel')}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              {t('outcomes', 'heading')}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {t('outcomes', 'subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 rounded text-xs text-blue-600 dark:text-blue-300 font-medium">
                  {t('outcomes', 'card1Tag')}
                </span>
              </div>
              <p className="text-slate-900 dark:text-white font-medium mb-3">{t('outcomes', 'card1Title')}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{t('outcomes', 'card1Desc')}</p>
              <p className="text-xs text-slate-400 italic">{t('outcomes', 'card1Note')}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded text-xs text-emerald-600 dark:text-emerald-300 font-medium">
                  {t('outcomes', 'card2Tag')}
                </span>
              </div>
              <p className="text-slate-900 dark:text-white font-medium mb-3">{t('outcomes', 'card2Title')}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{t('outcomes', 'card2Desc')}</p>
              <p className="text-xs text-slate-400 italic">{t('outcomes', 'card2Note')}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-amber-50 dark:bg-amber-500/10 rounded text-xs text-amber-600 dark:text-amber-300 font-medium">
                  {t('outcomes', 'card3Tag')}
                </span>
              </div>
              <p className="text-slate-900 dark:text-white font-medium mb-3">{t('outcomes', 'card3Title')}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{t('outcomes', 'card3Desc')}</p>
              <p className="text-xs text-slate-400 italic">{t('outcomes', 'card3Note')}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{t('outcomes', 'ctaText')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              {t('outcomes', 'ctaButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting (compact) */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              {t('consultingSection', 'heading')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('consultingSection', 'subheading')}
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/consulting"
              className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {t('consultingSection', 'linkText')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            {t('cta', 'heading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-xl mx-auto mb-8">
            {t('cta', 'subheading')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-500 px-8 py-4 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              {t('cta', 'button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
