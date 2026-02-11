import Link from 'next/link';

export const metadata = {
  title: '1on1 教育プラットフォーム | Harmonic Insight',
  description: '動画学習とスキル診断クイズを軸に、個人の学習進捗と能力を一元管理する次世代型教育システム',
};

export default function EducationPage() {
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
              Education Platform
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              1on1
              <br />
              <span className="text-slate-600 dark:text-slate-300">教育プラットフォーム</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
              動画学習とスキル診断クイズを軸に、
              <br className="hidden sm:inline" />
              個人の学習進捗と能力を一元管理する次世代型教育システム
            </p>

            <div className="mt-10 flex items-center justify-center">
              <a
                href="#features"
                className="rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                機能を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Executive Summary
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              3つの柱で構成される次世代型教育システム
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Screenshot - ファイル: /public/images/education/video-learning.png */}
              <div className="border-b border-slate-200 dark:border-slate-700">
                <img
                  src="/images/education/video-learning.png"
                  alt="動画学習のスクリーンショット"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">動画学習</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>テキスト＋動画コンテンツ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>視聴回数・完了数を自動記録</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>いいね機能で人気を可視化</span>
                </li>
              </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Screenshot - ファイル: /public/images/education/skill-quiz.png */}
              <div className="border-b border-slate-200 dark:border-slate-700">
                <img
                  src="/images/education/skill-quiz.png"
                  alt="スキル診断クイズのスクリーンショット"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">スキル診断クイズ</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>5段階レベル×各分野</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>レーダーチャートで可視化</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>AIによるテスト自動生成</span>
                </li>
              </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Screenshot - ファイル: /public/images/education/unified-management.png */}
              <div className="border-b border-slate-200 dark:border-slate-700">
                <img
                  src="/images/education/unified-management.png"
                  alt="一元管理のスクリーンショット"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">一元管理</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>WEB版・スマホ版対応</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>統合データベースで管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">—</span>
                  <span>組織体制・個人特性を把握</span>
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* 期待効果 */}
          <div className="bg-slate-900 dark:bg-white rounded-2xl p-10">
            <h3 className="text-lg font-medium text-white dark:text-slate-900 mb-8 text-center">期待効果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-2">01</p>
                <h4 className="font-medium text-white dark:text-slate-900 mb-2">学習効率の向上</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600">個人に最適化された学習パスで効率的なスキルアップ</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-2">02</p>
                <h4 className="font-medium text-white dark:text-slate-900 mb-2">人材の可視化</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600">レーダーチャートで各人の強み・弱みを瞬時に把握</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-2">03</p>
                <h4 className="font-medium text-white dark:text-slate-900 mb-2">教育ROIの最大化</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600">データドリブンな教育投資判断が可能に</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 市場背景とニーズ */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Market Background
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              市場背景とニーズ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">LMS市場の急成長</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                世界のLMS利用者は7,380万人を超え、市場規模は2023年の約220億ドルから2032年には520億ドルへ拡大見込みです。
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                企業の77%が既にLMSを活用しており、デジタル学習は標準となっています。
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">1on1教育の重要性</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                一人ひとりの学習スタイルやペースに合わせたパーソナライズド学習が求められています。
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                従来の一律研修では効果測定が困難でしたが、本プラットフォームで解決します。
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">現代LMSに求められる機能</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>コンテンツ管理（動画・テキスト・インタラクティブ）</li>
                <li>アセスメント・クイズ機能</li>
                <li>学習進捗のトラッキング・分析</li>
                <li>モバイル対応</li>
                <li>AI活用（コンテンツ生成・レコメンド）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* システム全体構成 */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              System Architecture
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              システム全体構成
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">WEB版</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>動画・テキスト学習</li>
                <li>スキル診断クイズ</li>
                <li>学習履歴確認</li>
                <li>いいね・評価機能</li>
                <li>レーダーチャート表示</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">スマホ版（iOS）</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>すきま時間学習</li>
                <li>プッシュ通知</li>
                <li>オフライン対応</li>
                <li>クイズ受験</li>
                <li>進捗ダッシュボード</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="font-medium text-slate-900 dark:text-white mb-4">管理者画面</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>コンテンツ管理</li>
                <li>ユーザー管理</li>
                <li>組織体制設定</li>
                <li>レポート・分析</li>
                <li>AI テスト生成</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-white rounded-xl p-6 text-center">
            <p className="text-sm text-slate-400 dark:text-slate-600 mb-2">統合データベース（一元管理）</p>
            <p className="text-white dark:text-slate-900 text-sm">
              ユーザー情報 | 学習履歴 | クイズ結果 | コンテンツ評価 | 組織体制 | スキルマップ
            </p>
          </div>
        </div>
      </section>

      {/* 機能一覧 */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Features
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              機能一覧
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              優先度に基づいた段階的な機能実装
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">優先度</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">機能名</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">概要</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">対応</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  { p: 'P1', name: '動画コンテンツ配信', desc: '各分野のテキスト・動画学習コンテンツを配信', platform: 'WEB/iOS' },
                  { p: 'P1', name: '視聴履歴トラッキング', desc: '視聴回数・完了数を自動記録', platform: 'WEB/iOS' },
                  { p: 'P1', name: 'スキル診断クイズ', desc: '5段階レベル×各分野の確認テスト', platform: 'WEB/iOS' },
                  { p: 'P1', name: 'レーダーチャート表示', desc: '個人のスキルを多角形グラフで可視化', platform: 'WEB/iOS' },
                  { p: 'P1', name: 'ユーザー管理', desc: '社員・部署・役職の登録・管理', platform: '管理画面' },
                  { p: 'P1', name: 'コンテンツ管理（CMS）', desc: '動画・テキストのアップロード・編集', platform: '管理画面' },
                  { p: 'P2', name: 'いいね・評価機能', desc: '人気コンテンツを可視化', platform: 'WEB/iOS' },
                  { p: 'P2', name: 'クイズ自動生成（AI）', desc: '収集データをAI分類しテスト自動作成', platform: '管理画面' },
                  { p: 'P2', name: '組織体制管理', desc: '部署・チーム階層の設定・可視化', platform: '管理画面' },
                  { p: 'P2', name: '学習レポート', desc: '個人・組織単位の進捗レポート出力', platform: 'WEB/管理' },
                  { p: 'P3', name: 'プッシュ通知', desc: '学習リマインダー・新コンテンツ通知', platform: 'iOS' },
                  { p: 'P3', name: 'オフライン学習', desc: 'コンテンツDLでオフライン視聴可能', platform: 'iOS' },
                  { p: 'P3', name: 'バッジ・ランキング', desc: 'ゲーミフィケーションでモチベUP', platform: 'WEB/iOS' },
                  { p: 'P3', name: '外部連携API', desc: '既存システムとのデータ連携', platform: '全体' },
                ].map((feature, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${feature.p === 'P1' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : feature.p === 'P2' ? 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                        {feature.p}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-900 dark:text-white">{feature.name}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{feature.desc}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{feature.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center">
            P1: MVP必須 / P2: フェーズ2 / P3: 拡張機能
          </p>
        </div>
      </section>

      {/* スキル可視化 */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Skill Visualization
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              スキル可視化：レーダーチャート
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              各分野のスキルレベルを円形のレーダーチャートで表示。一目で個人の強み・弱みを把握できます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <svg className="w-full max-w-sm mx-auto h-64" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,30 265,95 225,220 75,220 35,95" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                <polygon points="150,55 235,105 205,200 95,200 65,105" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                <polygon points="150,80 205,115 185,180 115,180 95,115" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                <polygon points="150,105 175,125 165,160 135,160 125,125" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="150" y1="130" x2="150" y2="30" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="150" y1="130" x2="265" y2="95" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="150" y1="130" x2="225" y2="220" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="150" y1="130" x2="75" y2="220" stroke="#e2e8f0" strokeWidth="1"/>
                <line x1="150" y1="130" x2="35" y2="95" stroke="#e2e8f0" strokeWidth="1"/>
                <polygon points="150,45 250,100 210,210 85,195 50,100" fill="rgba(15,23,42,0.1)" stroke="#0f172a" strokeWidth="2"/>
                <circle cx="150" cy="45" r="4" fill="#0f172a"/>
                <circle cx="250" cy="100" r="4" fill="#0f172a"/>
                <circle cx="210" cy="210" r="4" fill="#0f172a"/>
                <circle cx="85" cy="195" r="4" fill="#0f172a"/>
                <circle cx="50" cy="100" r="4" fill="#0f172a"/>
                <text x="150" y="15" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-xs">技術スキル</text>
                <text x="285" y="100" textAnchor="start" className="fill-slate-600 dark:fill-slate-400 text-xs">コミュニケーション</text>
                <text x="235" y="245" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-xs">リーダーシップ</text>
                <text x="65" y="245" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-xs">業務知識</text>
                <text x="15" y="100" textAnchor="end" className="fill-slate-600 dark:fill-slate-400 text-xs">問題解決</text>
              </svg>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">01</p>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">初回アセスメント</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">入社時・配属時に全分野のクイズを受験し、現状スキルを可視化</p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">02</p>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">成長トラッキング</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">定期的な再受験で成長を記録。過去との比較も可能</p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">03</p>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">育成計画策定</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">弱点分野の学習コンテンツを優先的にレコメンド</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* クイズシステム詳細 */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Quiz System
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              クイズシステム詳細
            </h2>
          </div>

          <div className="overflow-x-auto mb-16">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">レベル</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">対象</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">習得項目例</th>
                  <th className="px-4 py-4 font-medium text-slate-900 dark:text-white">問題数目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  { level: 'Lv.1 基礎', target: '新人・入門者', items: '基本用語、基礎概念の理解', count: '10-15問' },
                  { level: 'Lv.2 初級', target: '半年〜1年目', items: '基本操作、標準プロセス', count: '15-20問' },
                  { level: 'Lv.3 中級', target: '2〜3年目', items: '応用知識、問題解決手法', count: '20-25問' },
                  { level: 'Lv.4 上級', target: 'リーダー層', items: '高度な知識、指導力', count: '25-30問' },
                  { level: 'Lv.5 エキスパート', target: '専門家・管理職', items: '戦略立案、意思決定', count: '30-40問' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4 text-slate-900 dark:text-white font-medium">{row.level}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.target}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.items}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
            <h3 className="font-medium text-slate-900 dark:text-white mb-8 text-center">AI活用によるテスト自動生成フロー</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: '情報収集', desc: 'ヒアリング・既存資料' },
                { step: '02', title: 'AI分類', desc: '分野・レベル自動分類' },
                { step: '03', title: '問題生成', desc: 'AIが選択肢・正解生成' },
                { step: '04', title: '確認・公開', desc: '担当者レビュー後配信' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                    {item.step}
                  </div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 開発ロードマップ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Roadmap
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              開発ロードマップ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { phase: 'Phase 1', title: 'MVP', period: '1〜3ヶ月目', items: ['動画コンテンツ配信', '視聴履歴トラッキング', 'スキル診断クイズ', 'レーダーチャート', 'ユーザー管理', 'CMS基本機能'] },
              { phase: 'Phase 2', title: '拡張', period: '4〜6ヶ月目', items: ['iOSアプリリリース', 'いいね・評価機能', 'AIテスト生成', '組織体制管理', '学習レポート'] },
              { phase: 'Phase 3', title: '発展', period: '7〜9ヶ月目', items: ['プッシュ通知', 'オフライン学習', 'バッジ・ランキング', '高度なレポート'] },
              { phase: 'Phase 4', title: '最適化', period: '10〜12ヶ月目', items: ['外部連携API', 'パフォーマンス最適化', 'AI精度向上', '運用安定化'] },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{item.phase}</p>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{item.period}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="font-medium text-slate-900 dark:text-white mb-6 text-center">既存ソリューションの活用</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-8">
              これまで構築してきた各種ソリューションを流用・統合することで、開発期間の短縮とコスト削減を実現します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">動画配信システム</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">既存のストリーミング基盤を活用</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">クイズエンジン</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">過去プロジェクトの流用</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI生成モジュール</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">LLM連携コンポーネント活用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Next Steps
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              プロジェクト進行ステップ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { step: 1, action: '要件定義MTG', content: '詳細機能・優先度の確定、分野設定', period: '2週間' },
                { step: 2, action: 'コンテンツ棚卸し', content: '既存動画・テキスト・クイズ素材の整理', period: '2週間' },
                { step: 3, action: 'プロトタイプ作成', content: '主要画面のUI/UXデザイン確認', period: '3週間' },
                { step: 4, action: 'MVP開発', content: 'P1機能の実装・テスト', period: '2ヶ月' },
                { step: 5, action: 'パイロット運用', content: '限定ユーザーでの試験運用・FB収集', period: '1ヶ月' },
                { step: 6, action: '本番リリース', content: '全社展開・運用開始', period: '—' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-medium text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white">{item.action}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.content}</p>
                  </div>
                  <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            一人ひとりの成長が、組織の力になる。
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            本プラットフォームで、教育の未来を共に創りましょう。
          </p>
        </div>
      </section>
    </div>
  );
}
