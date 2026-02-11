import Link from "next/link";
import RelatedSites from "@/components/RelatedSites";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-6">
              建設DXコンサルティング
            </p>
            <h1 className="font-mincho text-2xl md:text-4xl font-medium text-[var(--gray-900)] mb-4 leading-tight tracking-wide">
              建設DXは、ツールを入れることではありません。
            </h1>
            <p className="font-mincho text-2xl md:text-4xl font-medium text-[var(--accent)] mb-8 leading-tight tracking-wide">
              業務を"部品"に分け、
              <br />
              組み立てれば誰でも回る形にすることです。
            </p>
            <p className="text-[var(--gray-600)] leading-relaxed mb-10 max-w-xl">
              属人化を仕組みで解消し、時間・手間・間違いをゼロに。
              <br />
              まず「判断できる数字」を整えるところから。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gyomu-dock" className="btn-accent">
                業務ドックを見る
              </Link>
              <Link href="/diagnosis" className="btn-outline">
                無料で診断する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One-line Flow */}
      <section className="py-6 bg-[var(--gray-100)] border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-center text-sm text-[var(--gray-600)] tracking-wide">
            <span className="text-[var(--gray-900)] font-medium">部品化</span>
            <span className="mx-3 text-[var(--gray-400)]">→</span>
            <span className="text-[var(--gray-900)] font-medium">組立（配置）設計</span>
            <span className="mx-3 text-[var(--gray-400)]">→</span>
            <span className="text-[var(--gray-900)] font-medium">実装</span>
            <span className="text-[var(--gray-500)] ml-2">（AI / RPA / BPO / システム）</span>
          </p>
        </div>
      </section>

      {/* Industry Challenges Teaser */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
                業界の課題
              </p>
              <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
                建設業界が直面する
                <br />
                「5重苦」
              </h2>
              <p className="text-[var(--gray-600)] leading-relaxed mb-6">
                人材不足、残業規制、インフラ老朽化、技術の高度化、自然災害の激甚化——
                これらが複雑に絡み合い、「より少人数」で「より多く、高度な仕事」を
                求められる時代になっています。
              </p>
              <Link
                href="/challenges"
                className="text-sm text-[var(--gray-900)] border-b border-[var(--gray-900)] pb-1 hover:text-[var(--gray-600)] hover:border-[var(--gray-600)] transition-colors"
              >
                業界の課題を詳しく見る
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-3xl text-[var(--gray-900)] mb-2">
                  71.3%
                </p>
                <p className="text-xs text-[var(--gray-500)]">
                  正社員の人手不足割合
                </p>
              </div>
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-3xl text-[var(--gray-900)] mb-2">
                  35.9%
                </p>
                <p className="text-xs text-[var(--gray-500)]">
                  55歳以上の労働者比率
                </p>
              </div>
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-3xl text-[var(--gray-900)] mb-2">
                  11.7%
                </p>
                <p className="text-xs text-[var(--gray-500)]">
                  29歳以下の若手比率
                </p>
              </div>
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-3xl text-[var(--gray-900)] mb-2">
                  2035
                </p>
                <p className="text-xs text-[var(--gray-500)]">
                  さらに悪化が予測される年
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-widest text-[var(--gray-400)] mb-6">
              私たちのミッション
            </p>
            <h2 className="font-mincho text-2xl md:text-4xl mb-8 leading-relaxed">
              現場データ → 管理会計 → 判断基準 → アクション
              <br />
              <span className="text-[var(--accent)]">
                が自動でつながる状態をつくる
              </span>
            </h2>
            <p className="text-[var(--gray-300)] leading-relaxed">
              単なるシステム導入ではなく、経営判断の仕組みを設計するパートナーとして。
              「手遅れになる前に気づける」仕組みを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Method: 部品化と組立設計 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            アプローチ
          </p>
          <h2 className="section-title">業務の部品化と組立設計</h2>
          <p className="text-center text-[var(--gray-600)] max-w-xl mx-auto mb-12">
            職人の頑張りで回すのではなく、誰がやっても回る"仕組み"に変える。
            <br />
            そのために、業務を部品として設計します。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                01
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                部品化
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                通知・承認・集計などを、
                <br />
                再利用できる"業務の部品"に分ける
              </p>
            </div>
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                02
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                組立（配置）設計
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                何が入って、何が出るかを先に決める。
                <br />
                中のやり方は後から変えられる
              </p>
            </div>
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                03
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                実装に渡す
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                AI / RPA / BPO / システムに
                <br />
                そのまま渡せる形で出力する
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            提供価値
          </p>
          <h2 className="section-title">私たちが提供する価値</h2>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--border)] mt-12">
            <div className="bg-white p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                01
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                利益の見える化
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                工事別・月次で「儲かっているか」がわかる。財務会計と管理会計を整理し、経営判断用の数字を明確化。
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                02
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                早期警報
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                過去のトラブルパターンから兆候を検知。問題がある時だけアラートし、「順調なら何もしない」を実現。
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                03
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                判断の仕組み化
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                異常時の対応基準を明確化。業務を部品化し、組立（配置）を設計することで、誰が見ても同じ判断ができるようにする。
              </p>
            </div>
            <div className="bg-white p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                04
              </p>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
                変革の投資判断
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                働き方改革の投資対効果、DX投資の優先順位。「やるべきか」を数字で示し、経営判断を支援。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Way of Working */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
                新しい働き方
              </p>
              <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
                現場集中型から、
                <br />
                分散協調型へ
              </h2>
              <p className="text-[var(--gray-600)] leading-relaxed mb-4">
                デジタル技術の進化により、「現場にいなければわからない」時代は終わりました。
                現場とバックオフィスの機能的役割分担、リアルタイムデータ連携による遠隔からの状況把握、
                時間と場所に縛られない柔軟な働き方——これが新しい建設業の姿です。
              </p>
              <p className="text-[var(--gray-900)] font-medium text-sm">
                分散協調を実現するには、業務の"部品化"が前提になる。
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[var(--gray-100)] border border-[var(--border)] p-6">
                <p className="text-sm text-[var(--gray-500)] mb-2">従来</p>
                <p className="text-[var(--gray-700)]">
                  全ての意思決定と管理業務が現場に集中。書類作成・確認作業による非効率な時間配分。
                </p>
              </div>
              <div className="bg-white border-2 border-[var(--accent)] p-6">
                <p className="text-sm text-[var(--accent)] mb-2">これから</p>
                <p className="text-[var(--gray-900)]">
                  現場とバックオフィスの機能的役割分担。専門性に基づいた最適人材の配置と柔軟な働き方の実現。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            私たちのゴール
          </p>
          <h2 className="section-title">業務改善のゴールは、2つだけです</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white border border-[var(--border)] p-8 text-center">
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                ムリ・ムダ・ムラの排除
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                標準化・例外整理・責務分離で
                <br />
                "回る形"をつくる
              </p>
            </div>
            <div className="bg-white border-2 border-[var(--accent)] p-8 text-center">
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                3ゼロの実現
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                <span className="text-[var(--accent)] font-medium">時間ゼロ</span> /
                <span className="text-[var(--accent)] font-medium"> 手間ゼロ</span> /
                <span className="text-[var(--accent)] font-medium"> 間違いゼロ</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Development Teaser */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    自己完結力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    上司に頼らず現場を回せる
                  </p>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    採算管理力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    赤字を出さず利益を確保
                  </p>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    工程管理力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    工期内に確実に完工
                  </p>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    品質確保力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    手戻りなく品質基準達成
                  </p>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    安全管理力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    無事故・無災害で完工
                  </p>
                </div>
                <div className="border-l-2 border-[var(--accent)] pl-4 py-2">
                  <p className="font-medium text-[var(--gray-900)]">
                    対外折衝力
                  </p>
                  <p className="text-xs text-[var(--gray-500)]">
                    発注者・近隣と良好な関係
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
                人材育成
              </p>
              <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
                「1人所長」を育てる
                <br />
                体系的フレームワーク
              </h2>
              <p className="text-[var(--gray-600)] leading-relaxed mb-6">
                「スーパー社員」を待つのではなく、「仕組み」で育てる。
                1人所長に必要な8つの能力を体系化し、計画的に経験を積ませ、
                定期的に評価・フィードバックする育成体系を構築します。
              </p>
              <Link
                href="/training"
                className="text-sm text-[var(--gray-900)] border-b border-[var(--gray-900)] pb-1 hover:text-[var(--gray-600)] hover:border-[var(--gray-600)] transition-colors"
              >
                人材育成フレームワークを詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Diagnosis CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest text-[var(--gray-500)] mb-4">
              無料診断
            </p>
            <h2 className="section-title mb-6">まずは3分で、タイプ診断</h2>
            <p className="text-[var(--gray-600)] mb-10">
              簡単な質問に答えるだけで、あなたの会社が
              「今どこで詰まっているか」のタイプがわかります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="border border-[var(--border)] bg-white p-4">
                <div className="font-mincho text-2xl text-[var(--gray-900)]">
                  A
                </div>
                <div className="text-xs text-[var(--gray-500)] mt-1">
                  キャッシュ最優先型
                </div>
              </div>
              <div className="border border-[var(--border)] bg-white p-4">
                <div className="font-mincho text-2xl text-[var(--gray-900)]">
                  B
                </div>
                <div className="text-xs text-[var(--gray-500)] mt-1">
                  月次ブレ沼型
                </div>
              </div>
              <div className="border border-[var(--border)] bg-white p-4">
                <div className="font-mincho text-2xl text-[var(--gray-900)]">
                  C
                </div>
                <div className="text-xs text-[var(--gray-500)] mt-1">
                  案件別判断未整備型
                </div>
              </div>
              <div className="border border-[var(--border)] bg-white p-4">
                <div className="font-mincho text-2xl text-[var(--gray-900)]">
                  D
                </div>
                <div className="text-xs text-[var(--gray-500)] mt-1">
                  データはあるのに使えない型
                </div>
              </div>
            </div>
            <Link href="/diagnosis" className="btn-primary">
              無料で診断する
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-xs tracking-widest text-[var(--gray-500)] text-center mb-4">
            サービス
          </p>
          <h2 className="section-title">6つのサービス</h2>
          <p className="section-subtitle">
            無料診断から業務コンサル、AI活用、グローバル展開まで
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Link
              href="/gyomu-dock"
              className="border-2 border-[var(--accent)] bg-[#fffbf0] p-6 hover:bg-[var(--accent)] transition-colors group md:col-span-2 lg:col-span-1"
            >
              <span className="text-xs text-[var(--accent)] group-hover:text-white">おすすめ</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-white transition-colors">
                業務ドック
              </h3>
              <p className="text-sm text-[var(--gray-600)] group-hover:text-white/80">
                業務の「今の状態」を人間ドックのように診断
              </p>
            </Link>
            <Link
              href="/services#service-01"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--accent)]">無料</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                DX診断
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                「保険の窓口」モデルを建設業DXに応用
              </p>
            </Link>
            <Link
              href="/services#service-02"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--gray-500)]">収益の中核</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                業務コンサルティング
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                業務評価・DX評価・事業基盤構築・原価管理
              </p>
            </Link>
            <Link
              href="/services#service-03"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--gray-500)]">チャレンジ</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                AI-BPO
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                業務診断からAI適正箇所の見極め
              </p>
            </Link>
            <Link
              href="/services#service-04"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--gray-500)]">グローバル</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                グローバルボーダー案件
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                ASEAN現地の日系・ローカル展開
              </p>
            </Link>
            <Link
              href="/services#service-05"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--gray-500)]">M&A対応</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                PMI/組織改編後の運用診断
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                M&A後・組織再編後の業務最適化
              </p>
            </Link>
            <Link
              href="/services#service-06"
              className="border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-xs text-[var(--gray-500)]">実行支援</span>
              <h3 className="font-mincho text-lg text-[var(--gray-900)] mt-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
                PM・PMO展開
              </h3>
              <p className="text-sm text-[var(--gray-500)]">
                プロジェクトマネジメント支援
              </p>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              サービス一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-xs tracking-widest text-[var(--gray-500)] text-center mb-4">
            私たちの強み
          </p>
          <h2 className="section-title">4つの強み</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                建設業・会計
                <br />
                わかる
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                建設業務知識・経験、建設業会計含めた業界特有の商習慣理解
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                IT・AI
                <br />
                作れる
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                要件定義から設計・開発・保守まで一気通貫の実装経験
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                グローバル
                <br />
                届けられる
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                ASEAN中心の現地展開、日本と現地間のロールアウト
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-6">
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                コンサル
                <br />
                まとめられる
              </h3>
              <p className="text-sm text-[var(--gray-600)]">
                経営・管理・現場の橋渡し、意思決定者との折衝
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sites */}
      <RelatedSites />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mincho text-2xl md:text-3xl text-white mb-6 tracking-wide">
              まずは、現状を整理しませんか
            </h2>
            <p className="text-[var(--gray-400)] mb-10">
              「忙しいのに成果が出ない」——それは業務の不調かもしれません。
              <br />
              業務ドックで「今の状態」を見える化しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gyomu-dock"
                className="bg-[var(--accent)] text-white px-8 py-4 text-sm tracking-wider hover:bg-[var(--accent-light)] transition-colors"
              >
                業務ドックを見る
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-[var(--gray-900)] transition-colors"
              >
                初回相談（30分・無料）
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
