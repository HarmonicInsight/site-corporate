import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InsightBot RPA | UiPath移行・BPO AI化 | HARMONIC insight',
  description: 'UiPathからの移行でライセンスコスト削減、BPO業務のAI化で定型処理を自動化。業務分析から設計・導入まで、28年の実績でサポート。',
};

export default function RPAPage() {
  const steps = [
    {
      step: '01',
      title: 'AIに伝える',
      description: '「毎朝、売上データをExcelからまとめてメールしたい」日本語で、やりたいことを伝えるだけ。専門用語は不要です。',
    },
    {
      step: '02',
      title: 'AIが作る',
      description: 'AIがあなたの言葉を理解し、自動化プログラムを生成。数秒で完成します。',
    },
    {
      step: '03',
      title: 'ワンクリックで実行',
      description: 'ファイルを選んで、実行ボタンを押すだけ。毎日の面倒な作業から解放されます。',
    },
  ];

  const beforeAfter = {
    before: [
      '用意されたブロックしか使えない',
      '複雑な処理は結局プログラミングが必要',
      'IT部門に依頼して数ヶ月待ち',
      '高額なライセンス費用',
      'ベンダーの機能追加を待つしかない',
    ],
    after: [
      'AIに頼めば何でも作れる',
      '複雑でも日本語で説明するだけ',
      '思いついたその日に完成',
      '無料から始められる',
      '欲しい機能を自分で追加できる',
    ],
  };

  const personas = [
    {
      title: '業務担当者',
      problem: '「毎日同じ作業、もう疲れた」',
      description: 'コピペ、転記、集計…繰り返しの作業を自動化したいけど、プログラミングなんてできない。',
      solution: 'InsightBotなら、AIに話すだけ。あなたが一番業務を知っているから、あなたが一番いいツールを作れます。',
    },
    {
      title: '経営者・マネージャー',
      problem: '「IT人材が採用できない」',
      description: 'DXしたいけど、エンジニアがいない。外注は高いし、時間もかかる。',
      solution: 'InsightBotなら、今いるメンバーで自動化を内製できます。必要なのは、業務知識とAIへの質問力だけ。',
    },
    {
      title: 'コンサルタント',
      problem: '「提案だけで終わらせたくない」',
      description: '業務改善を提案しても、実装はクライアント任せ…',
      solution: 'InsightBotがあれば、ヒアリングしながらその場でプロトタイプを作成。「できます」ではなく「これです」と見せられます。',
    },
  ];

  const features = [
    {
      title: 'ビジュアルワークフロー',
      description: 'ブロックをつないで処理の流れを設計。プログラムの中身を見なくても、何が起きるか一目でわかります。',
    },
    {
      title: 'スマート入力',
      description: '必要な入力は自動で判定。ファイル選択ダイアログも自動表示。迷わず使えます。',
    },
    {
      title: 'AIブロック生成',
      description: '内蔵のプロンプト集をAIにコピペするだけ。メール送信、Excel処理、API連携…どんな処理も日本語で依頼できます。',
    },
    {
      title: 'テンプレート付き',
      description: 'サンプルファイルをワンクリックで確認。「このブロックはどう使うの？」がすぐわかります。',
    },
  ];

  const faqs = [
    {
      question: '本当にプログラミング不要ですか？',
      answer: 'はい。AIに日本語で説明するだけです。InsightBotはAIが生成したプログラムを実行しますが、あなたがコードを見る必要は一切ありません。',
    },
    {
      question: 'どんな自動化ができますか？',
      answer: 'Pythonで実現できることは、すべて可能です。Excel/CSV処理、メール送信、Web操作、API連携、データベース、AI/機械学習まで。「こんなことできる？」と思ったら、まずAIに聞いてみてください。',
    },
    {
      question: 'セキュリティは大丈夫？',
      answer: 'InsightBotはローカルで動作します。データがクラウドに送信されることはありません。AIへの質問も、あなた自身が行うため、機密情報の扱いをコントロールできます。',
    },
    {
      question: '他のRPAツールとの違いは？',
      answer: '従来のRPAは「用意されたブロック」の組み合わせ。InsightBotは「AIがブロックを作る」。この違いが、無限の可能性を生みます。',
    },
  ];

  const comparison = [
    { traditional: '用意されたブロックしか使えない', insightbot: 'AIに頼めば何でも作れる' },
    { traditional: '複雑な処理は結局コードが必要', insightbot: '複雑でもAIが書いてくれる' },
    { traditional: 'ベンダーの更新を待つ必要がある', insightbot: '欲しい機能をその場で作れる' },
    { traditional: '汎用的で業務に合わない', insightbot: '自社業務に特化したブロックを作成' },
    { traditional: 'IT部門に依存', insightbot: '業務担当者が自分で作れる' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pt-40 lg:px-8 lg:pt-44">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-4">
              AI-Powered Automation Platform
            </p>
            <h1 className="text-4xl font-light text-slate-900 dark:text-white sm:text-5xl mb-6 tracking-tight leading-tight">
              あなたの言葉が、
              <br />
              <span className="text-violet-500">自動化になる。</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              AIに「やりたいこと」を伝えるだけ。
              <br />
              プログラミング不要で、本格的な業務自動化を実現。
            </p>
          </div>

          {/* Main Screenshot */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 overflow-hidden shadow-2xl">
              <img
                src="/images/rpa/main.png"
                alt="InsightBot RPA Studio - メイン画面"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-violet-500 text-xs font-medium tracking-widest uppercase mb-4">Concept</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              「AIが書く、人は指示するだけ」
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              従来のRPAは「プログラミングを簡単にしたもの」でした。
              <br />
              InsightBot RPAは違います。
              <br />
              <span className="text-slate-900 dark:text-white">「プログラミングをAIに任せる」</span>プラットフォームです。
            </p>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              How it works
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              3ステップで、あなた専用の自動化ツールが完成。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-slate-200 dark:bg-slate-700" />
                )}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 h-full">
                  <div className="w-12 h-12 rounded-lg bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center mb-6">
                    <span className="text-violet-500 text-lg font-mono">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              従来のRPA・ローコードツールとの決定的な違い
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600 dark:text-slate-400">従来のRPA/ローコード</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-violet-600 dark:text-violet-400">InsightBot RPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {comparison.map((row, index) => (
                  <tr key={index} className="bg-white dark:bg-slate-800/50">
                    <td className="px-6 py-4 text-sm text-slate-500">
                      <span className="text-slate-400 mr-2">×</span>
                      {row.traditional}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-violet-500 mr-2">✓</span>
                      {row.insightbot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Before & After
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              なぜ、今までの自動化は難しかったのか。
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-6">Before - 従来のRPA</p>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border-2 border-violet-500">
              <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-6">After - InsightBot</p>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-violet-50 dark:bg-violet-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-900 dark:text-white">
              違いは「<span className="text-violet-500">誰が作るか</span>」。
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              AIが作るから、あなたは業務に集中できる。
            </p>
          </div>
        </div>
      </section>

      {/* Why Revolutionary */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Why Revolutionary
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              なぜこれが革命的なのか
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-10 h-10 rounded bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mb-6">
                <span className="text-violet-500 font-mono text-sm">01</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">制限がない</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                従来のRPAは「用意されたブロックの組み合わせ」という制限がありました。InsightBotはPythonで書けることは何でもできます。
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>・Web API連携</li>
                <li>・データベース操作</li>
                <li>・AI/機械学習</li>
                <li>・画像処理</li>
                <li>・何でも。</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-10 h-10 rounded bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mb-6">
                <span className="text-violet-500 font-mono text-sm">02</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">カスタマイズが無限</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                「自社の基幹システムに接続したい」「独自フォーマットのファイルを処理したい」「社内ルールに沿った処理がしたい」
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                AIに説明すれば、その場で専用ブロックが作れます。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-10 h-10 rounded bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mb-6">
                <span className="text-violet-500 font-mono text-sm">03</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">業務を知る人が作れる</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                プログラマーは業務を知りません。業務担当者はプログラミングができません。
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                InsightBotは、業務を知る人がAIと対話することで、業務に最適なツールを自分で作れます。
              </p>
            </div>
          </div>

          <div className="text-center mt-12 bg-white dark:bg-slate-800 rounded-xl p-6 border border-violet-200 dark:border-violet-500/20 max-w-2xl mx-auto">
            <p className="text-slate-700 dark:text-slate-300">
              これは単なる「効率化」ではなく、
              <br />
              <span className="text-slate-900 dark:text-white font-medium">作る人と使う人が一致する</span>という構造的な変革です。
            </p>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Target Users
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              こんな方に届けたい。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona) => (
              <div key={persona.title} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                  {persona.title}
                </p>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">{persona.problem}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {persona.description}
                </p>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {persona.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2大ユースケース: UiPathマイグレーション + BPO AI化 */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              いま企業が直面している2つの課題
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              InsightBot RPAが解決できる、具体的な業務課題
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* UiPath マイグレーション */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-3 bg-violet-50 dark:bg-violet-500/10 border-b border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-violet-600 dark:text-violet-400 tracking-widest uppercase">Use Case 01</p>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  UiPath / 既存RPAからの移行
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  ライセンスコスト高騰に悩む企業へ
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">1.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">コスト構造の問題</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        UiPath Enterpriseは年間200万円〜。ロボット追加のたびにライセンス費が膨張し、バージョンアップのたびに検証コストが発生。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">2.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">ブロック制約の壁</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        用意されたアクティビティの範囲でしか自動化できない。自社固有の業務に合わせるには結局カスタムコードが必要。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">3.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">InsightBotでの解決アプローチ</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        既存のRPAシナリオを業務単位で分析し、AIが同等の自動化をPythonで再構築。ライセンス費を大幅に削減しながら、カスタマイズの自由度も向上。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">コスト比較（理論値）</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">UiPath Enterprise</span>
                      <span className="text-slate-900 dark:text-white font-medium">年間 200万円〜</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Power Automate Premium</span>
                      <span className="text-slate-900 dark:text-white font-medium">¥2,248/user/月</span>
                    </div>
                    <div className="flex justify-between text-violet-600 dark:text-violet-400">
                      <span>InsightBot RPA</span>
                      <span className="font-medium">無料から開始可能</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">※ 各製品の公開価格に基づく参考情報です</p>
                </div>
              </div>
            </div>

            {/* BPO AI化 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-3 bg-violet-50 dark:bg-violet-500/10 border-b border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-violet-600 dark:text-violet-400 tracking-widest uppercase">Use Case 02</p>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  BPO業務のAI化
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  人手に依存するBPO業務を、AIで構造的に変える
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">1.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">BPO市場の転換点</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        国内BPO市場は5兆円超。しかし「人数 x 単価」モデルの限界が見えている。2026年以降、生成AI実装が加速し、業界構造が変わるとされる。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">2.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">私たちのアプローチ: 業務分析が起点</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        BPOの現場に入り、業務フローを分析。AIで代替できる「判断を伴わない定型処理」と、人が担うべき「判断業務」を切り分ける。AIは判断には使わない — この線引きが重要。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">3.</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">段階的な自動化</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        一気に全自動化するのではなく、効果の高い業務から順に自動化。データ転記→帳票生成→突合チェック→レポート出力の順で、確実に成果を積み上げる。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">対象となる業務例</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {['請求書処理', '入金消込', '月次仕訳', '勤怠集計', 'データ入力', '帳票出力', '在庫突合', 'メール仕分け'].map(task => (
                      <span key={task} className="px-2 py-1 bg-violet-50 dark:bg-violet-500/10 rounded text-xs text-violet-600 dark:text-violet-300">
                        {task}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 italic">※ AIは「判断」には使いません。定型処理の自動化に特化します</p>
                </div>
              </div>
            </div>
          </div>

          {/* アプローチの強み */}
          <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-8 border border-violet-200 dark:border-violet-500/20 text-center">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
              私たちの強み: 業務分析 + AI + プロダクト
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              単にツールを提供するのではなく、28年間の業務改善コンサルティング経験で
              <span className="text-slate-900 dark:text-white font-medium">「どの業務を」「どの順番で」「どこまで」自動化すべきか</span>を一緒に設計します。
              <br />
              AI導入の成否は、技術ではなく<span className="text-slate-900 dark:text-white font-medium">業務理解の深さ</span>で決まります。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Features
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              シンプルだけど、本格派。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-500 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              Implementation
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              導入スピードの違い
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Traditional */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">従来</p>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">業務担当</span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">要件定義</span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">IT部門</span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">開発</span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">テスト</span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-700">導入</span>
              </div>
              <p className="text-slate-500 text-sm mt-4">3ヶ月〜半年</p>
            </div>

            {/* InsightBot */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-violet-500">
              <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-4">InsightBot</p>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="px-3 py-1 rounded bg-violet-50 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30">業務担当</span>
                <span className="text-violet-500">+</span>
                <span className="px-3 py-1 rounded bg-violet-50 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30">AI</span>
                <span className="text-violet-500">→</span>
                <span className="px-4 py-1 rounded bg-violet-500 text-white font-medium">完成</span>
              </div>
              <p className="text-violet-600 dark:text-violet-400 text-sm mt-4 font-medium">即日〜数日</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              気になること、お答えします。
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base font-medium text-slate-900 dark:text-white mb-3 flex items-start gap-3">
                  <span className="text-violet-500 flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-violet-400 dark:text-violet-500 uppercase mb-4">
            Automation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            自動化の未来は、もう始まっている。
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-xl mx-auto mb-8">
            InsightBot RPAで、あなたも「作る側」へ。
          </p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </a>
        </div>
      </section>
    </div>
  );
}
