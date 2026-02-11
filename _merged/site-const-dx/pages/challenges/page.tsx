import Link from "next/link";

export default function ChallengesPage() {
  const challenges = [
    {
      number: "01",
      title: "深刻な人材不足",
      subtitle: "労働力の高齢化と若手離れ",
      description:
        "建設業の従事者数は減少傾向にあり、55歳以上の労働者比率は35.9%に達する一方、29歳以下の若手比率はわずか11.7%。業界全体の持続可能性が問われています。",
      stats: [
        { value: "71.3%", label: "正社員の人手不足割合（2024年12月）" },
        { value: "35.9%", label: "55歳以上の労働者比率" },
        { value: "11.7%", label: "29歳以下の若手比率" },
      ],
    },
    {
      number: "02",
      title: "働き方改革への対応",
      subtitle: "残業上限規制と生産性の両立",
      description:
        "2024年4月から建設業にも時間外労働の上限規制が適用。従来の長時間労働に依存した働き方からの脱却が急務となっています。",
      stats: [
        { value: "2024年", label: "残業上限規制の適用開始" },
        { value: "月45時間", label: "原則の残業上限" },
        { value: "年720時間", label: "特別条項での上限" },
      ],
    },
    {
      number: "03",
      title: "インフラの老朽化",
      subtitle: "高度成長期の構造物が耐用年数超過",
      description:
        "道路橋、トンネル、河川管理施設、水道管路、下水道管、港湾施設など、高度成長期に建設されたインフラが次々と耐用年数を超過。維持・更新需要が急増しています。",
      stats: [
        { value: "50年超", label: "建設後の劣化設備が急増" },
        { value: "73万橋", label: "国内の道路橋総数" },
        { value: "43%", label: "10年後に50年超となる橋梁" },
      ],
    },
    {
      number: "04",
      title: "技術の高度化",
      subtitle: "新工法・SDGs・IT/DX/AIへの対応",
      description:
        "新たな工法・素材の登場、環境配慮・SDGsへの対応、そしてIT/DX/AI技術の急速な進化。常に新しい知識とスキルの習得が求められる時代になっています。",
      stats: [
        { value: "BIM/CIM", label: "国土交通省が原則適用" },
        { value: "i-Construction", label: "ICT活用の推進" },
        { value: "カーボンニュートラル", label: "2050年目標への対応" },
      ],
    },
    {
      number: "05",
      title: "自然災害の激甚化",
      subtitle: "インフラ復旧需要の増大",
      description:
        "気候変動による自然災害の頻発化・激甚化。インフラの破壊と復旧需要が増大する中、限られた人材でいかに対応するかが課題となっています。",
      stats: [
        { value: "年々増加", label: "激甚災害の指定件数" },
        { value: "兆円規模", label: "災害復旧の予算規模" },
        { value: "即応体制", label: "求められる対応力" },
      ],
    },
  ];

  const relatedChallenges = [
    {
      href: "/accounting-challenges",
      title: "建設業会計の課題",
      description: "原価が先、売上が後。完成まで粗利が確定しない。建設業特有の会計構造を解説。",
    },
    {
      href: "/management-dx",
      title: "DXの課題",
      description: "原価管理システムを入れたのに使われない。その本当の理由と解決策。",
    },
    {
      href: "/training",
      title: "人材育成の課題",
      description: "「1人所長」を育てる。属人的な育成から、仕組みによる育成へ。",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            業界の課題
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            建設業界が直面する
            <br />
            「5重苦」の現実
          </h1>
          <p className="text-[var(--gray-600)] max-w-2xl leading-relaxed">
            日本の建設業界は「現場人材の不足」「低い労働生産性」などの課題に直面しています。
            これらの課題は単独ではなく、複雑に絡み合いながら業界全体を圧迫しています。
          </p>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 md:py-20 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mincho text-xl md:text-2xl text-[var(--gray-800)] leading-relaxed">
              「より少人数」で「より多く、高度な仕事を対応する」
              <br />
              <span className="text-[var(--gray-600)] text-lg">
                ——これが今、建設業界に求められていることです。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Detail */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-start"
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mincho text-5xl md:text-6xl text-[var(--gray-200)]">
                      {challenge.number}
                    </span>
                    <div>
                      <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)]">
                        {challenge.title}
                      </h2>
                      <p className="text-sm text-[var(--gray-500)] mt-1">
                        {challenge.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--gray-600)] leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {challenge.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="border-l-2 border-[var(--gray-300)] pl-6 py-2"
                    >
                      <p className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[var(--gray-500)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Challenges */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            関連する課題
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl mb-12">
            さらに深掘りする
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedChallenges.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="border border-[var(--gray-700)] p-8 hover:border-[var(--accent)] transition-colors group"
              >
                <h3 className="font-mincho text-xl text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--gray-400)] leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="text-sm text-[var(--accent)]">詳しく見る →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              10年後の未来
            </p>
            <h2 className="font-mincho text-2xl md:text-4xl text-[var(--gray-900)] mb-8 leading-tight">
              2035年、人手不足は
              <br />
              さらに悪化する
            </h2>
            <p className="text-[var(--gray-600)] leading-relaxed mb-8">
              シニア層、女性層、外国人等、現在の人手不足を補完する新たな就業者が増えることが期待されていますが、
              労働力不足を解決するには至りません。10年後の2035年、建設業界の人手不足はさらに深刻化すると推測されています。
            </p>
            <p className="text-[var(--gray-600)] leading-relaxed">
              だからこそ今、「人」に頼り切らない仕組みづくりが必要です。
              DXによる業務効率化、体系的な人材育成、そして経営判断の仕組み化——
              これらを同時に進めることで、持続可能な建設業の未来を築くことができます。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Teaser */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              私たちのアプローチ
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)]">
              私たちの解決アプローチ
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                APPROACH 01
              </p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                経営判断の仕組み化
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                勘と経験に頼った経営から、仕組みと数字による経営へ。
                現場データから経営判断までが自動でつながる状態を構築します。
              </p>
            </div>
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                APPROACH 02
              </p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                分散協調型の働き方
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                現場集中型から分散協調型へ。デジタル技術を活用し、
                時間と場所に縛られない柔軟な働き方を実現します。
              </p>
            </div>
            <div className="border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-4">
                APPROACH 03
              </p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                体系的な人材育成
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                「1人所長」を育てる体系的なフレームワーク。
                属人的な育成から、仕組みによる育成へ転換します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            まずは現状を診断してみませんか
          </h2>
          <p className="text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
            無料のDX診断で、御社の現状と課題を明確にします。
            7つの質問に答えるだけで、最適な打ち手が見えてきます。
          </p>
          <Link href="/diagnosis" className="btn-primary inline-block">
            無料診断を受ける
          </Link>
        </div>
      </section>
    </main>
  );
}
