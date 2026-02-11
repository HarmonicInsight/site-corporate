import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InsightOffice | いまのExcelを、シミュレーション・バージョン管理・コラボレーションツールへ。',
  description: 'いまのExcelがそのまま使える。シミュレーション・バージョン管理・コラボレーションをひとつのツールに。共有フォルダ・Box・SharePointで動く。',
};

export default function InsightOfficePage() {
  const products = [
    {
      name: 'InsightOffice Sheet',
      format: 'Excel (.xlsx)',
      description: '経営数値のシミュレーション、バージョン別の試算、セル単位の変更追跡。いまのExcelがそのまま使える。',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M3 6h18M3 18h18" />
        </svg>
      ),
    },
    {
      name: 'InsightOffice Doc',
      format: 'Word (.docx)',
      description: '契約書、仕様書、議事録。Word文書の変更を段落単位で追跡。「誰がいつ何を変えたか」が一目瞭然。',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      name: 'InsightOffice Slide',
      format: 'PowerPoint (.pptx)',
      description: '提案書、報告書、研修資料。スライドの差分を視覚的に比較。プレゼン資料の進化を記録。',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const comparison = [
    { method: '手動ファイルコピー', scenario: '名前で管理', diff: '目視で比較', collab: 'メールで送付', cost: '無料' },
    { method: 'SharePoint / OneDrive', scenario: '復元のみ', diff: 'セル単位は不可', collab: '共同編集', cost: '高い' },
    { method: 'Git + Excel', scenario: 'ブランチ管理', diff: 'バイナリで不可', collab: 'Pull Request', cost: '無料' },
    { method: 'InsightOffice', scenario: 'バージョン保存・切替', diff: 'セル単位で可視化', collab: 'スレッドコメント', cost: '¥5千〜1万/user/月' },
  ];

  const aiFeatures = [
    {
      prompt: '楽観・悲観バージョンの差を要約して',
      result: '売上高で15%、営業利益で22%の乖離があります',
      description: 'バージョン間の差分を自然言語で要約',
    },
    {
      prompt: '前回との変更点を教えて',
      result: 'B列の売上が15%増に修正されました',
      description: '変更の自然言語要約',
    },
    {
      prompt: 'このデータの異常値は？',
      result: 'D12セルの値が平均から3σ以上乖離しています',
      description: 'データ分析・異常検出',
    },
    {
      prompt: '売上が100万以上なら○を入れたい',
      result: '=IF(D1>=1000000,"○","")',
      description: 'Excel関数をAIが即座に生成',
    },
  ];

  const faqs = [
    {
      question: 'Excelがインストールされている必要がありますか？',
      answer: 'いいえ。InsightOfficeは独自にOfficeファイルを読み書きします。ただし「Excelで編集」ボタンを使う場合はExcelが必要です。',
    },
    {
      question: '共有フォルダやBox、SharePointで使えますか？',
      answer: 'はい。Excelファイルとバージョン履歴(.hsheet)は同じフォルダに保存されます。ファイルが共有できればどこでも動きます。サーバーやDBは不要です。',
    },
    {
      question: 'AI機能の利用にはインターネット接続が必要ですか？',
      answer: 'AI機能のみインターネット接続が必要です。バージョン管理・差分比較・スレッドコメントなどのコア機能はオフラインで動作します。',
    },
    {
      question: '大きなExcelファイルでも使えますか？',
      answer: '差分保存方式により、ファイルサイズに関わらず効率的にバージョンを管理します。元のExcelバイナリもそのまま保持するため、書式やグラフが崩れることはありません。',
    },
    {
      question: 'スレッドコメントに認証は必要ですか？',
      answer: 'いいえ。Zoomの参加時のように名前を入力するだけです。認証基盤やアカウント作成は不要です。',
    },
    {
      question: '人数が増えた場合、プラン変更できますか？',
      answer: 'はい。年度途中でも上位プランへ差額でアップグレードできます。全プラン機能制限なしのため、人数だけで選べます。業務改善コンサルティングもオプションでご利用いただけます。',
    },
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
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-4">
              Excel Simulation &amp; Version Management
            </p>
            <h1 className="text-4xl font-light text-slate-900 dark:text-white sm:text-5xl mb-6 tracking-tight">
              いまのExcelを、
              <br />
              <span className="text-blue-500">シミュレーション・バージョン管理・コラボレーションツールへ。</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              いまのExcelがそのまま使える。新しいツールに乗り換える必要はない。
              <br />
              Excelの周りに「試算・記録・共有」のレイヤーを被せる。
            </p>
            <p className="text-sm text-slate-500 mb-8">
              共有フォルダ・Box・SharePoint — ファイルが共有できればどこでも動く。
            </p>

            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
              >
                14日間 無料トライアル
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                料金を見る
              </a>
            </div>
          </div>

          {/* Concept Diagram */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/insight-office/concept-diagram.svg"
                alt="InsightOffice Sheet - Excelを中心に7つの機能が集まるコンセプト図"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Step Workflow */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">Two Steps</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              数字を「作る」と「レビューする」。
              <br />
              この2つに特化したツール。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-500 text-2xl font-mono font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-semibold">構築フェーズ</h3>
                  <p className="text-slate-500 text-sm">個人作業</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                自分で数字を組み立てる
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">📈</span>
                  <span>Excelで数字をシミュレーション — 様々なケースを試算</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">🔀</span>
                  <span>バージョン別に保存・切替・比較 — 楽観/悲観/ベースケース</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⏺</span>
                  <span>セル変更ログで自分の作業を自動追跡</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">🤖</span>
                  <span>AIに分析を聞く — 異常値検出、数式生成</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-500 text-2xl font-mono font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-semibold">レビューフェーズ</h3>
                  <p className="text-slate-500 text-sm">チーム作業</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                数字を全員でレビューする
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">💬</span>
                  <span>スレッドコメント —「この数字の根拠は？」を直接聞ける</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">📜</span>
                  <span>バージョン履歴 —「前回からどこが変わった？」が一目瞭然</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">🔀</span>
                  <span>差分比較 — 変更箇所をセル単位でハイライト表示</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">📤</span>
                  <span>確定した数字を会計・業務システムへエクスポート</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="text-slate-900 dark:text-white font-medium">認証不要。名前を入れるだけ。</span>
              <br />
              Zoomに参加するときのように、名前を入力すればすぐコメントできる。
              <br />
              アカウント作成もサーバーも不要。
            </p>
          </div>
        </div>
      </section>

      {/* Problem: Current Workflow */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">The Problem</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              今のシミュレーション業務、こうなっていませんか？
            </h2>
          </div>

          {/* File name hell */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono text-sm">
              <p className="text-slate-500 mb-4">📁 共有フォルダ / 実行予算 /</p>
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400">├── 実行予算_ベースケース.xlsx</p>
                <p className="text-slate-600 dark:text-slate-400">├── 実行予算_楽観シナリオ.xlsx</p>
                <p className="text-slate-600 dark:text-slate-400">├── 実行予算_悲観シナリオ.xlsx</p>
                <p className="text-slate-600 dark:text-slate-400">├── 実行予算_田中修正.xlsx</p>
                <p className="text-yellow-600 dark:text-yellow-400">├── 実行予算_部長レビュー後.xlsx</p>
                <p className="text-orange-600 dark:text-orange-400">├── 実行予算_最終確定.xlsx</p>
                <p className="text-red-600 dark:text-red-400">└── 実行予算_最終確定_再修正.xlsx</p>
              </div>
              <p className="text-slate-400 mt-6 text-center">↑ どのバージョンが最新？ 誰がどの数字を変えた？</p>
            </div>
          </div>

          {/* Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'バージョンが散乱', description: 'ファイルがバージョン数×修正回数で増殖。どれが最新か分からない。' },
              { title: '変更の根拠が消える', description: '「なぜこの数字？」の理由がメールやチャットに埋もれて追えない。' },
              { title: '比較が地獄', description: 'バージョン間の差分を目視で探す。見落とし・ミスの温床。' },
              { title: 'レビューが非効率', description: 'メールでExcelを送り合い、口頭で確認。議論の記録が残らない。' },
            ].map((pain) => (
              <div key={pain.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-slate-900 dark:text-white font-medium mb-3">{pain.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - UI Mockup */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              The Solution
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              Excelファイルは1つ。バージョンは無限。
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              左にシート。右にバージョン履歴・変更ログ・AIチャット。
            </p>
          </div>

          {/* UI Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900 overflow-hidden shadow-lg">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                  </div>
                  <span className="text-slate-400 text-xs ml-2">InsightOffice Sheet — 実行予算.xlsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs">楽観シナリオ</span>
                </div>
              </div>

              <div className="flex">
                {/* Spreadsheet Area */}
                <div className="flex-1 p-4 border-r border-slate-700">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-slate-500">
                        <th className="px-3 py-2 text-left border-b border-slate-800 w-8"></th>
                        <th className="px-3 py-2 text-left border-b border-slate-800">A</th>
                        <th className="px-3 py-2 text-right border-b border-slate-800">B</th>
                        <th className="px-3 py-2 text-right border-b border-slate-800">C</th>
                        <th className="px-3 py-2 text-right border-b border-slate-800">D</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr>
                        <td className="px-3 py-2 text-slate-600">1</td>
                        <td className="px-3 py-2 font-medium text-white">科目</td>
                        <td className="px-3 py-2 text-right font-medium text-white">ベース</td>
                        <td className="px-3 py-2 text-right font-medium text-white">楽観</td>
                        <td className="px-3 py-2 text-right font-medium text-white">差異</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-slate-600">2</td>
                        <td className="px-3 py-2">売上高</td>
                        <td className="px-3 py-2 text-right">120,000</td>
                        <td className="px-3 py-2 text-right bg-blue-500/10 text-blue-300 rounded">138,000</td>
                        <td className="px-3 py-2 text-right text-blue-400">+15%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-slate-600">3</td>
                        <td className="px-3 py-2">原価率</td>
                        <td className="px-3 py-2 text-right">65%</td>
                        <td className="px-3 py-2 text-right bg-amber-500/10 text-amber-300 rounded">60%</td>
                        <td className="px-3 py-2 text-right text-amber-400">-5pt</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-slate-600">4</td>
                        <td className="px-3 py-2">営業利益</td>
                        <td className="px-3 py-2 text-right">42,000</td>
                        <td className="px-3 py-2 text-right bg-emerald-500/10 text-emerald-300 rounded">55,200</td>
                        <td className="px-3 py-2 text-right text-emerald-400">+31%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-slate-600">5</td>
                        <td className="px-3 py-2">販管費</td>
                        <td className="px-3 py-2 text-right">18,000</td>
                        <td className="px-3 py-2 text-right">18,000</td>
                        <td className="px-3 py-2 text-right text-slate-500">0</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-slate-600 text-xs mt-4 text-center">ハイライト: ベースケースからの変更セル</p>
                </div>

                {/* Scenario Panel */}
                <div className="w-64 p-4 bg-slate-900/50 flex-shrink-0">
                  <h3 className="text-slate-400 text-xs font-medium tracking-widest uppercase mb-4">📜 バージョン</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white text-xs font-medium">楽観シナリオ</span>
                      </div>
                      <p className="text-slate-400 text-xs pl-4">売上+15% / 原価率改善</p>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-700 hover:border-slate-600 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-slate-300 text-xs">ベースケース</span>
                      </div>
                      <p className="text-slate-500 text-xs pl-4">当初計画</p>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-700 hover:border-slate-600 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-slate-300 text-xs">悲観シナリオ</span>
                      </div>
                      <p className="text-slate-500 text-xs pl-4">売上-10% / 原価率悪化</p>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-700 hover:border-slate-600 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-slate-500" />
                        <span className="text-slate-300 text-xs">前期実績</span>
                      </div>
                      <p className="text-slate-500 text-xs pl-4">FY2024 確定値</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-3 py-2 rounded border border-slate-700 text-slate-400 text-xs hover:bg-slate-800 transition-colors">
                    バージョン比較
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              バージョンをクリックすれば即座に切替。比較モードで2つのバージョンを並べて差分をハイライト。
              <br />
              <span className="text-slate-900 dark:text-white font-medium">ファイルを増やさずに、何パターンでもシミュレーションできる。</span>
            </p>
          </div>
        </div>
      </section>

      {/* 7 Features Around Excel */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              Features
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              Excelを中心に、7つの機能が集まる。
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Excelは変えない。その周りに「知恵」のレイヤーを被せる。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: '📈', title: 'シミュレーション', description: '様々なケースを試算。Excelで数字を変えるだけ。特別な操作は不要。', color: 'blue' },
              { emoji: '🔀', title: 'バージョン管理', description: '楽観・悲観・ベースを保存・切替・比較。ファイルを増やさない。', color: 'blue' },
              { emoji: '📜', title: 'バージョン履歴', description: '変更が自動記録。いつでも過去のバージョンに戻せる。', color: 'blue' },
              { emoji: '⏺', title: 'セル変更ログ', description: '全セルの変更を自動追跡。誰が・いつ・何を変えたか一目瞭然。', color: 'emerald' },
              { emoji: '💬', title: 'スレッドコメント', description: '認証不要。名前を入れるだけ。セルに紐づくスレッド形式の議論。', color: 'emerald' },
              { emoji: '🤖', title: 'AI分析', description: 'Claude AI搭載。差分要約・異常検出・数式生成をチャットで。', color: 'purple' },
              { emoji: '📤', title: 'エクスポート', description: '確定した数字を会計・業務システムへ連携。.xlsxのまま出力。', color: 'slate' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl">{feature.emoji}</span>
                <h3 className="text-slate-900 dark:text-white font-medium mt-3 mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Infrastructure note */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 text-center">
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                <span className="font-medium">サーバー不要。インストール不要。</span>
                <br />
                共有フォルダ・Box・SharePoint — ファイルが共有できれば、チーム全員で使える。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              AI Assistant
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              AIが、シミュレーションの相棒になる。
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Claude AI搭載。バージョン比較、数式生成、異常検出をチャットで。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiFeatures.map((item) => (
              <div key={item.prompt} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 text-xs mb-3">{item.description}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Q</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">&quot;{item.prompt}&quot;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-500 text-xs">AI</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-300 text-sm font-mono">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              Product Lineup
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              Excel、Word、PowerPoint。全部対応。
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              .xlsx / .docx / .pptx — 全てZIP + XMLの同じ構造。だから同じ体験を提供できる。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div key={product.name} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-blue-500">
                  {product.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-medium mb-1">{product.name}</h3>
                <p className="text-blue-500 text-xs mb-4">{product.format}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              既存の方法との比較
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-4 text-left text-slate-600 dark:text-slate-400 font-medium">方法</th>
                  <th className="px-4 py-4 text-left text-slate-600 dark:text-slate-400 font-medium">バージョン管理</th>
                  <th className="px-4 py-4 text-left text-slate-600 dark:text-slate-400 font-medium">差分比較</th>
                  <th className="px-4 py-4 text-left text-slate-600 dark:text-slate-400 font-medium">レビュー</th>
                  <th className="px-4 py-4 text-left text-slate-600 dark:text-slate-400 font-medium">コスト</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {comparison.map((row) => (
                  <tr key={row.method} className={row.method === 'InsightOffice' ? 'bg-blue-50 dark:bg-blue-500/5' : ''}>
                    <td className={`px-4 py-4 font-medium ${row.method === 'InsightOffice' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-slate-300'}`}>
                      {row.method}
                    </td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.scenario}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.diff}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.collab}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-6 text-center">
              Why We Built This
            </p>
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white leading-relaxed mb-8">
                「経営数値の管理は、結局
                <span className="text-blue-500">Excelに戻ってくる。</span>」
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                28年間、100社以上の業務改善を支援してきました。
                大規模な会計システム、ERPの導入、DX推進…色々やりました。
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                でも気づいたんです。
                <br />
                <span className="text-slate-900 dark:text-white">みんなシステムに入れる前に、Excelで数字を作っている。</span>
                <br />
                その「数字を作るプロセス」が、まったく管理されていなかった。
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                誰がどの数字を変えたのか。なぜ変えたのか。前はいくつだったのか。
                <br />
                <span className="text-slate-900 dark:text-white">Excelの周りに、その全てを記録するツールを作りました。</span>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              Technology
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              技術構成
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'アプリケーション', items: ['C# / WPF / .NET 8.0', 'デスクトップアプリ（exe）', 'インストール不要・ポータブル'] },
                { label: 'Office処理', items: ['ClosedXML / Syncfusion（Excel）', 'OpenXML SDK（Word/PowerPoint）', 'バイナリ.xlsxもそのまま保持'] },
                { label: 'バージョン管理', items: ['ZIPアーカイブ(.hsheet)', 'JSON差分 + バイナリ保存', '共有フォルダで自動同期'] },
                { label: 'AI', items: ['Claude Sonnet（Anthropic）', 'バージョン比較・データ分析', '自分のAPIキー持ち込み可'] },
              ].map((tech) => (
                <div key={tech.label} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">{tech.label}</h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {tech.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              個人はSTD。チームはPRO。
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
              STD = 個人利用（バージョン管理・差分比較・変更ログ・エクスポート）
              <br />
              PRO = 法人・チーム利用（STDの全機能 + 掲示板・AI・変更者表示）
              <br />
              <span className="text-slate-400">まずは無料トライアルで全機能をお試しください。</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Trial */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-2">Trial</p>
              <p className="text-3xl font-light text-slate-900 dark:text-white mb-1">無料</p>
              <p className="text-slate-500 text-xs mb-1">全機能お試し</p>
              <p className="text-slate-400 text-xs mb-6">ダウンロードしてすぐ開始</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span>PRO全機能が利用可能</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span>インストール不要</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span>いまのExcelがそのまま使える</li>
              </ul>
            </div>

            {/* STD */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-green-300 dark:border-green-500/30 text-center">
              <p className="text-green-600 text-xs font-medium tracking-widest uppercase mb-2">STD（個人）</p>
              <p className="text-3xl font-light text-slate-900 dark:text-white mb-1">¥5,000</p>
              <p className="text-slate-500 text-xs mb-1">/ユーザー/月</p>
              <p className="text-slate-400 text-xs mb-6">年額 ¥60,000/ユーザー</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Excel読み込み・編集</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>バージョン管理・差分比較</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>セル変更ログ・エクスポート</li>
                <li className="flex items-center gap-2"><span className="text-slate-300">—</span><span className="text-slate-400">掲示板・AI・変更者表示</span></li>
              </ul>
              <p className="text-green-600 text-xs font-medium mt-4">1人で数値を算出する方に</p>
            </div>

            {/* PRO */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border-2 border-amber-500 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-white text-xs rounded-full font-medium">
                推奨
              </div>
              <p className="text-amber-600 text-xs font-medium tracking-widest uppercase mb-2">PRO（法人・チーム）</p>
              <p className="text-3xl font-light text-slate-900 dark:text-white mb-1">¥10,000</p>
              <p className="text-slate-500 text-xs mb-1">/ユーザー/月</p>
              <p className="text-slate-400 text-xs mb-6">年額 ¥120,000/ユーザー</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span>STD全機能</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span>変更者の表示（誰が変えたか）</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span>掲示板（スレッドコメント）</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span>AIアシスタント</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span>半日の導入支援コンサル付き</li>
              </ul>
              <p className="text-amber-600 text-xs font-medium mt-4">チームでコラボレーションする方に</p>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-purple-500 text-xs font-medium tracking-widest uppercase mb-2">Enterprise</p>
              <p className="text-3xl font-light text-slate-900 dark:text-white mb-1">要相談</p>
              <p className="text-slate-500 text-xs mb-1">20ユーザー〜</p>
              <p className="text-slate-400 text-xs mb-6">ボリュームディスカウント</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span>PRO全機能</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span>業務相談・導入支援コンサル付き</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span>優先メールサポート</li>
              </ul>
            </div>
          </div>

          {/* Comparison context */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">参考：EPMツール</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">¥30,000〜/user/月</p>
                <p className="text-slate-400 text-xs">Jedox, Anaplan等</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20">
                <p className="text-blue-500 text-xs uppercase tracking-widest mb-1">InsightOffice</p>
                <p className="text-blue-600 dark:text-blue-300 text-sm font-medium">¥5,000〜¥10,000/user/月</p>
                <p className="text-blue-500/70 text-xs">+ 半日コンサル付き</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">参考：コラボツール</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">¥1,500〜3,000/user/月</p>
                <p className="text-slate-400 text-xs">Smartsheet, SharePoint等</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 text-center">
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                <span className="font-medium">追加オプション（別途）</span>
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs text-blue-600/80 dark:text-blue-400/80">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10">カスタマイズ開発 ¥500,000〜</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10">継続コンサルティング</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10">専任サポート・SLA対応</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10">カスタムエクスポート連携</span>
              </div>
              <p className="text-blue-600/60 dark:text-blue-400/60 text-xs mt-3">28年間・100社以上の業務改善実績。お気軽にご相談ください。</p>
            </div>
            <p className="text-slate-500 text-xs text-center">
              ※ 自分のClaude APIキーをお持ちの場合、AI機能は追加費用なしでご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-4">
              よくある質問
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-slate-900 dark:text-white font-medium mb-3">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-4">
              Global
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl mb-6">
              世界共通の悩みを、日本から解決する。
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              「Excelで数字を作って、メールで送って、口頭で確認」は世界共通の業務。
              <br />
              日本語・英語・中国語に対応し、グローバル展開予定。
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <span>insight-office.com</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>BOOTH</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>Microsoft Store</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>Gumroad</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-blue-400 dark:text-blue-500 uppercase mb-4">
            14日間 無料トライアル
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            まずは1ファイルで試してみませんか？
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-xl mx-auto mb-8">
            クレジットカード不要。インストール後すぐに使えます。
            <br />
            いまお使いのExcelファイルをそのまま開くだけ。
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-500 px-8 py-4 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              無料で試す
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-slate-600 px-8 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 dark:text-slate-600 dark:border-slate-300 dark:hover:bg-slate-100 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
