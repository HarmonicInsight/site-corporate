import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | HarmonicInsight',
  description: 'HarmonicInsightへのお問い合わせ。製品デモ、コンサルティング相談、その他のご質問など、お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pt-40 lg:px-8 lg:pt-44">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-6">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              お問い合わせ
            </h1>
            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              製品のデモ、コンサルティングのご相談、その他のご質問など、
              お気軽にご連絡ください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                連絡先
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">メール</h3>
                    <a href="mailto:info@h-insight.jp" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">info@h-insight.jp</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">ウェブサイト</h3>
                    <a href="https://h-insight.jp" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">h-insight.jp</a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="font-medium text-slate-900 dark:text-white mb-4">よくあるお問い合わせ</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      製品デモのリクエスト
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      価格・見積もりについて
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      パートナーシップについて
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      採用情報
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  お問い合わせフォーム
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        姓 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                        placeholder="山田"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                        placeholder="太郎"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                      placeholder="taro@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      お問い合わせの種類 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="demo">製品デモのリクエスト</option>
                      <option value="pricing">価格・見積もり</option>
                      <option value="consulting">コンサルティング相談</option>
                      <option value="support">技術サポート</option>
                      <option value="partnership">パートナーシップ</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      関心のある製品・サービス
                    </label>
                    <select
                      id="product"
                      name="product"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <optgroup label="業務改善ツール群">
                        <option value="insight-diagnosis">インサイト診断</option>
                        <option value="issue-management">課題管理</option>
                        <option value="auto-interview">オートインタビュー</option>
                      </optgroup>
                      <optgroup label="Insight Series">
                        <option value="insight-py-pro">InsightPy Pro</option>
                        <option value="insight-slide">InsightSlide</option>
                        <option value="insight-movie">InsightMovie</option>
                        <option value="insight-image">InsightImage</option>
                        <option value="insight-bi">InsightBI</option>
                      </optgroup>
                      <optgroup label="ハードウェア">
                        <option value="minpaku-iot">民泊IoT</option>
                        <option value="manual-snap">ManualSnap</option>
                      </optgroup>
                      <optgroup label="コンサルティング">
                        <option value="construction-dx">建設業DXコンサルティング</option>
                        <option value="business-improvement">AI業務改善コンサルティング</option>
                        <option value="ai-development">AI時代のシステム開発</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400">
                      <a href="https://h-insight.jp/privacy" className="text-slate-900 dark:text-white hover:underline">プライバシーポリシー</a>
                      に同意します
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-900 dark:bg-white px-8 py-4 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
