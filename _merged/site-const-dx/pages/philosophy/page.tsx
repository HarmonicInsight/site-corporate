import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "考え方 | 建設DXの窓口",
  description:
    "DXがうまくいかない本当の理由、管理会計の正しい使い方、月次決算の考え方、ツールの選び方についての私たちの思想をお伝えします。",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest text-[var(--gray-500)] mb-4">PHILOSOPHY</p>
            <h1 className="font-mincho text-3xl md:text-4xl text-[var(--gray-900)] mb-6 tracking-wide">
              考え方
            </h1>
            <p className="text-[var(--gray-600)] leading-relaxed">
              私たちがなぜ「ツールの前に、判断を整える」と言うのか。
              <br />
              建設業の現場で見てきた課題と、解決の糸口をお伝えします。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Articles */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Article 1 */}
            <article id="why-dx-fails" className="scroll-mt-24 pb-16 mb-16 border-b border-[var(--border)]">
              <span className="text-xs tracking-widest text-[var(--gray-400)]">INSIGHT 01</span>
              <h2 className="font-mincho text-2xl text-[var(--gray-900)] mt-4 mb-8 leading-relaxed">
                DXがうまくいかない本当の理由
              </h2>
              <div className="space-y-6 text-[var(--gray-700)] leading-relaxed">
                <p>
                  「DXを推進したい」「デジタル化を進めたい」——
                  多くの建設会社がそう考えています。でも、うまくいかないケースが多いのも事実です。
                </p>
                <p>
                  その原因は、<strong className="text-[var(--gray-900)]">ツールの問題ではありません。</strong>
                </p>
                <p>
                  本当の原因は、「何を決めたいのか」が明確になっていないこと。
                  判断の前提が整理されていないまま、ツールだけを入れても、
                  「データは出るけど、だから何？」という状態になります。
                </p>
                <div className="highlight-box my-8">
                  <p className="text-sm">
                    <span className="text-[var(--accent)] font-medium">ポイント</span>
                    <span className="mx-2">—</span>
                    ツールは「判断を助ける道具」です。何を判断したいのかが決まっていなければ、どんな高機能なツールも使いこなせません。
                  </p>
                </div>
                <p>
                  だから私たちは、「ツールの前に、判断を整える」ことを大切にしています。
                  順番を間違えなければ、DXは必ずうまくいきます。
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article id="management-accounting" className="scroll-mt-24 pb-16 mb-16 border-b border-[var(--border)]">
              <span className="text-xs tracking-widest text-[var(--gray-400)]">INSIGHT 02</span>
              <h2 className="font-mincho text-2xl text-[var(--gray-900)] mt-4 mb-8 leading-relaxed">
                管理会計は"官僚用"ではなく"判断用"
              </h2>
              <div className="space-y-6 text-[var(--gray-700)] leading-relaxed">
                <p>
                  「管理会計を整備したい」というご相談をよく受けます。
                  でも、話を聞いていくと、「整備する」こと自体が目的になっているケースがあります。
                </p>
                <p>
                  管理会計は、<strong className="text-[var(--gray-900)]">経営判断のための道具</strong>です。
                  細かい数字を出すことではなく、「次に何をするか」を決めるためのもの。
                </p>
                <p>
                  だから、すべての数字を正確に出す必要はありません。
                  判断に必要な情報が、必要なタイミングで見られればいい。
                </p>
                <div className="not-now-box my-8">
                  <p className="text-sm">
                    <span className="text-[var(--gray-900)] font-medium">よくある誤解</span>
                    <span className="mx-2">—</span>
                    「管理会計＝精緻な数字」と思っていませんか？
                    精度を追いすぎると、かえって判断が遅れます。
                  </p>
                </div>
                <p>
                  管理会計を「官僚的な報告資料」にしないこと。
                  「経営者が次の一手を打てる情報」にすること。
                  それが、管理会計の正しい使い方です。
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article id="monthly-closing" className="scroll-mt-24 pb-16 mb-16 border-b border-[var(--border)]">
              <span className="text-xs tracking-widest text-[var(--gray-400)]">INSIGHT 03</span>
              <h2 className="font-mincho text-2xl text-[var(--gray-900)] mt-4 mb-8 leading-relaxed">
                月次は正確さより、判断の早さ
              </h2>
              <div className="space-y-6 text-[var(--gray-700)] leading-relaxed">
                <p>
                  月次決算を5営業日で締める。10営業日で締める。
                  建設業では、これが一つのテーマになりがちです。
                </p>
                <p>
                  でも、<strong className="text-[var(--gray-900)]">早く締めても、判断に使えなければ意味がありません。</strong>
                </p>
                <p>
                  月次決算の目的は、「正確な数字を出すこと」ではありません。
                  「来月、何をすべきかを判断すること」です。
                </p>
                <div className="border border-[var(--border)] p-6 my-8">
                  <h4 className="font-medium text-[var(--gray-900)] mb-4 text-sm">月次決算の考え方</h4>
                  <ul className="space-y-3 text-sm text-[var(--gray-600)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--gray-400)]">—</span>
                      100%の精度より、80%の精度で早く出す
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--gray-400)]">—</span>
                      「ブレの幅」を把握しておく
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--gray-400)]">—</span>
                      判断に必要な項目に絞る
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--gray-400)]">—</span>
                      「何を見て、何を決めるか」を決めておく
                    </li>
                  </ul>
                </div>
                <p>
                  正確性を追いすぎて、現場と経理が疲弊していませんか？
                  「判断のための月次」にシフトすることで、楽になることも多いです。
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article id="tools-last" className="scroll-mt-24">
              <span className="text-xs tracking-widest text-[var(--gray-400)]">INSIGHT 04</span>
              <h2 className="font-mincho text-2xl text-[var(--gray-900)] mt-4 mb-8 leading-relaxed">
                ツールは問題が決まってから
              </h2>
              <div className="space-y-6 text-[var(--gray-700)] leading-relaxed">
                <p>
                  「BIツールを入れたい」「Databricksを検討している」「基幹システムを入れ替えたい」——
                  こうしたご相談をいただくことがあります。
                </p>
                <p>
                  私たちの答えは、たいてい同じです。
                  <strong className="text-[var(--gray-900)]">「まだ早いかもしれません」</strong>
                </p>
                <p>
                  ツールは、問題が明確になってから選ぶもの。
                  問題があいまいなままツールを入れても、
                  「機能は使っているけど、判断には活きていない」という状態になりがちです。
                </p>
                <div className="border border-[var(--border)] p-6 my-8">
                  <h4 className="font-medium text-[var(--gray-900)] mb-4 text-sm">フェーズ別ツールマップ</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--gray-400)] w-8">01</span>
                      <span className="text-[var(--gray-700)]"><strong className="text-[var(--gray-900)]">整理・言語化</strong> — ChatGPT / Claude</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--gray-400)] w-8">02</span>
                      <span className="text-[var(--gray-700)]"><strong className="text-[var(--gray-900)]">可視化</strong> — Looker Studio / Power BI（見る指標が決まってから）</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--gray-400)] w-8">03</span>
                      <span className="text-[var(--gray-700)]"><strong className="text-[var(--gray-900)]">データ統合</strong> — BigQuery等（データが散ってから）</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--gray-400)] w-8">04</span>
                      <span className="text-[var(--gray-700)]"><strong className="text-[var(--gray-900)]">高度処理</strong> — Databricks（大量データ＋目的明確の後）</span>
                    </div>
                  </div>
                </div>
                <div className="highlight-box my-8">
                  <p className="text-sm">
                    <span className="text-[var(--accent)] font-medium">Databricksが刺さる条件</span>
                    <span className="mx-2">—</span>
                    データ量が膨大で、かつ「何を分析したいか」が明確になっている場合に有効です。
                    それ以外は、今は不要です。
                  </p>
                </div>
                <p>
                  私たちは、ツールを売りません。
                  判断が整理されてから、一緒にツールを選びます。
                  「今は不要」と言えること。それが「窓口」の価値だと考えています。
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mincho text-xl text-[var(--gray-900)] mb-6">
              共感いただけましたか
            </h2>
            <p className="text-sm text-[var(--gray-600)] mb-10">
              もし「うちも同じような状況かも」と思われたら、
              <br />
              まずは無料診断で、状況を整理してみませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diagnosis" className="btn-primary">
                無料診断を受ける
              </Link>
              <Link href="/contact" className="btn-outline">
                相談してみる
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
