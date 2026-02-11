import Link from "next/link";

const relatedSites = [
  {
    href: "https://harmonic-insight-corporate.vercel.app/",
    label: "思想・アプローチを見る",
    description: "なぜ「判断の仕組み化」にこだわるのか",
    site: "Corporate",
  },
  {
    href: "https://insight-series-site.vercel.app/",
    label: "ツールを見る",
    description: "業務自動化・構造化のためのプロダクト群",
    site: "Insight Series",
  },
  {
    href: "https://toko-bi.vercel.app/",
    label: "UIサンプルを見る",
    description: "データ運用設計のプロトタイプ（参考用）",
    site: "Dashboard Samples",
  },
];

export default function RelatedSites() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[var(--border)]">
      <div className="container-custom">
        <p className="text-xs tracking-widest text-[var(--gray-500)] text-center mb-6">
          RELATED SITES
        </p>
        <h3 className="font-mincho text-xl text-center text-[var(--gray-900)] mb-8">
          関連サイト
        </h3>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {relatedSites.map((site) => (
            <Link
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border)] p-5 hover:border-[var(--accent)] transition-colors group"
            >
              <p className="text-xs text-[var(--gray-500)] mb-2">{site.site}</p>
              <p className="font-medium text-[var(--gray-900)] group-hover:text-[var(--accent)] transition-colors mb-2">
                {site.label}
              </p>
              <p className="text-sm text-[var(--gray-600)]">{site.description}</p>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--gray-500)] mt-6">
          ※ Dashboard Samples はデータ運用設計の起点として使うプロトタイプです。そのまま利用するものではありません。
        </p>
      </div>
    </section>
  );
}
