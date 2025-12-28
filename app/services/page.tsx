import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "サービス一覧 | Harmonic Insight",
  description: "Harmonic Insight が提供する業務プロセス設計・改善サービスの一覧。月次チェック自動化、入力品質設計、帳票改善、業務ヒアリングなど。",
};

export default function ServicesPage() {
  const services = [
    {
      title: "月次実績チェック自動化パック",
      description: "入力ミスを月末まで放置しない。「人がチェックしなくていい状態」を6〜8週間で作ります。",
      target: "建設業の管理部門・経理の方",
      period: "6〜8週間",
      price: "300〜600万円",
      href: "/services/monthly-check",
      isPrimary: true,
    },
    {
      title: "月次・原価の入力品質設計",
      description: "入力ルールの整理、チェックロジックの設計、差し戻しフローの構築まで。基幹システムを変えずに入力品質を上げます。",
      target: "「毎月の確認作業を減らしたい」管理部門・経理向け",
      period: "6〜10週間",
      href: "/services/input-quality",
      isPrimary: false,
    },
    {
      title: "現場の報告・帳票を「集めなくていい形」にする",
      description: "報告フォーマットの統一、入力導線の簡素化、自動集計の仕組みを作ります。現場の手間を減らしながら、必要な情報が集まる状態に。",
      target: "「報告が上がってこない」「Excelが乱立している」現場向け",
      period: "4〜8週間",
      href: "/services/report-automation",
      isPrimary: false,
    },
    {
      title: "業務ヒアリングを「会議しない」方式に置き換える",
      description: "動画・テキスト回答・非同期レビューで業務整理を進めます。忙しい現場に負担をかけず、必要な情報を集めます。",
      target: "「ヒアリングで時間が取られすぎる」DX担当・企画向け",
      period: "2〜4週間",
      href: "/services/async-interview",
      isPrimary: false,
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight"
            >
              Harmonic Insight
            </Link>
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                href="/company"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                Company
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Breadcrumb */}
        <div className="pt-20 sm:pt-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-white">Services</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              サービス一覧
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              業務プロセスの設計・改善を支援します。
              <br className="hidden sm:block" />
              基幹システムを変えずに、現場に負担をかけない形で。
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`block rounded-2xl p-6 sm:p-8 transition-all hover:shadow-lg ${
                    service.isPrimary
                      ? "bg-primary-50 dark:bg-primary-950/30 border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600"
                      : "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-grow">
                      {service.isPrimary && (
                        <span className="inline-block text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                          主力サービス
                        </span>
                      )}
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                        {service.target}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>期間目安：{service.period}</span>
                        {service.price && <span>費用目安：{service.price}</span>}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
                        詳細を見る
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              どのサービスが合うかわからない場合
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              30分のオンライン相談で、貴社の状況をお聞きし最適なアプローチをご提案します。
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              無料相談を申し込む
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
