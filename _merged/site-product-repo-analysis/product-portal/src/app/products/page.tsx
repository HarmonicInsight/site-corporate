import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: '業務改善ツール | Harmonic Insight',
  description: 'AIの力で面倒な作業を自動化。診断レポート、タスク管理、引継ぎ資料が驚くほど簡単に作れます。',
};

export default function ProductsPage() {
  const businessTools = products.filter(p => p.category === 'saas');

  const toolDetails = [
    {
      id: 'auto-interview',
      step: '01',
      problem: 'ベテラン社員が辞めたら大変。大事なノウハウが頭の中にしかなく、引継ぎ資料を作る時間もない。',
      solution: 'ベテランに話してもらうだけ。AIが文字に起こして、整理された引継ぎ資料まで自動で作成。',
      howItWorks: [
        'ベテラン社員にスマホやPCで話してもらう（タイピングでもOK）',
        'AIが話した内容を自動で文字に変換',
        '大事なポイント、注意点、手順を自動でまとめる',
        'いつでも検索でき、PDFでダウンロードも可能',
      ],
      bestFor: '「あの人しか知らない仕事」がある会社、退職者の引継ぎに困っている方',
    },
    {
      id: 'insight-diagnosis',
      step: '02',
      problem: '「うちの会社、どこが弱いんだろう？」人によって言うことが違い、客観的な診断が難しい。',
      solution: '簡単なアンケートに答えるだけ。AIがプロ並みの診断レポートを自動で作成。A〜Dの成績表で一目瞭然。',
      howItWorks: [
        'まずは簡単なアンケートに回答（選択式）',
        '「人材」「コスト」「システム」「組織力」の4観点で自動採点',
        '結果はA〜Dの4段階で弱点が明確に',
        'Excelでレポートが完成、そのまま会議で使用可能',
      ],
      bestFor: '「うちの会社の強み・弱みを知りたい」という経営者・管理職の方',
    },
    {
      id: 'issue-management',
      step: '03',
      problem: '「やることリスト」を作るのが面倒。分類や優先度を考えるのが大変で結局続かない。',
      solution: 'メモを書くだけ。AIが勝手に整理して「やること」に変えてくれます。',
      howItWorks: [
        '思いついたことをそのまま書く（何でもOK）',
        'AIが自動で「これやったほうがいい」と提案',
        '「やる」と思ったらタップするだけでタスクに追加',
        'カレンダー形式で今週やることが一目でわかる',
      ],
      bestFor: '「タスク管理が苦手」「いつも忘れ物をする」という方、小さな会社のチーム',
    },
  ];

  const targetIndustries = [
    { title: '建設会社', desc: '「現場のことはあの人しか知らない」を解消' },
    { title: '製造業', desc: '品質トラブルを未然に防ぎたい' },
    { title: '中小企業', desc: '少人数でも効率よく仕事を回したい' },
    { title: '経営者', desc: '会社の状態を客観的に把握したい' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Business Tools
            </p>
            <h1 className="text-4xl font-light text-white sm:text-5xl mb-6 tracking-tight">
              業務改善ツール
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              レポート作成、タスク管理、引継ぎ資料。
              <br />
              今まで何時間もかかっていた作業が、AIで効率化されます。
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-slate-700 text-slate-300 text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI自動化
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-slate-700 text-slate-300 text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                3つのツール
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Credibility */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="max-w-2xl">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-medium text-slate-900 dark:text-white">AIを活用して100種類以上のアプリケーションを開発</span>してきた
                業務・ITコンサルタントが、本当に業務改善に効くツールを自ら設計・開発しました。
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                外注すると1,000万円以上かかるシステムを、AIの力で実現。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Details */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {businessTools.map((product, index) => {
              const detail = toolDetails.find(d => d.id === product.id);
              const isReversed = index % 2 === 1;

              return (
                <div key={product.id} className="scroll-mt-24" id={product.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text Content */}
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 rounded text-sm font-mono">
                          STEP {detail?.step}
                        </span>
                        {product.highlightsJa?.map((h, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-sm">
                            {h}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">
                        {product.nameJa}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 mb-6">
                        {product.taglineJa}
                      </p>

                      {/* Problem */}
                      <div className="mb-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-2 border-slate-300 dark:border-slate-600">
                        <p className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2">
                          Challenge
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {detail?.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400">
                        <p className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
                          Solution
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          {detail?.solution}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                        {product.descriptionJa}
                      </p>

                      {/* Best For */}
                      <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <p className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2">
                          Recommended For
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          {detail?.bestFor}
                        </p>
                      </div>
                    </div>

                    {/* Visual Content */}
                    <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden">
                        {/* How It Works */}
                        <div className="p-6 border-b border-slate-100 dark:border-slate-700/50">
                          <p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4">
                            How it works
                          </p>
                          <ol className="space-y-4">
                            {detail?.howItWorks.map((step, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs flex items-center justify-center font-mono">
                                  {i + 1}
                                </span>
                                <span className="text-slate-600 dark:text-slate-400 text-sm pt-0.5">
                                  {step}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Features */}
                        <div className="p-6">
                          <p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4">
                            Features
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {product.featuresJa?.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-700/30"
                              >
                                <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600 dark:text-slate-400 text-xs">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Tools Work Together */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              Workflow
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              3ステップで業務改善
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              1つだけでも便利。3つ組み合わせると、さらに効果的。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px bg-slate-300 dark:bg-slate-600 -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: '01',
                    tool: '全自動インタビュー',
                    desc: 'ベテランに話してもらうだけで、ノウハウが資料に',
                  },
                  {
                    step: '02',
                    tool: '業務診断',
                    desc: 'アンケートに答えるだけで、会社の健康状態がわかる',
                  },
                  {
                    step: '03',
                    tool: 'かんたん課題管理',
                    desc: 'メモするだけで、やることリストが自動でできる',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 text-center">
                      <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-mono">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                        {item.tool}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              こんな方に使われています
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((item, index) => (
              <div key={item.title} className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
                <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-mono">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-violet-400 dark:text-violet-500 uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            業務効率を最大化
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-2xl mx-auto mb-8">
            各製品は実際の業務課題から生まれました。導入実績多数。
          </p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </a>
        </div>
      </section>
    </div>
  );
}
